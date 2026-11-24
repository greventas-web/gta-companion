import { createHash } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { del, get, put } from "@vercel/blob";
import { MAX_IMAGE_BYTES, type ImageContentType, type PostStatus, type PostType } from "@/lib/community/types";

/**
 * Community posts and their images.
 *
 * Pending posts are private. Production reuses the map's private Blob store
 * (MAP_READ_WRITE_TOKEN) under community/. Do not use BLOB_READ_WRITE_TOKEN
 * or BLOB_STORE_ID; those belong to a different, public store. Pass the map
 * token on every Blob call.
 *
 * Local dev without that token writes to .data/community/. On Vercel, writes
 * fail closed until MAP_READ_WRITE_TOKEN is set. Never log the token.
 */

const BLOB_POSTS = "community/posts.json";
const BLOB_IMAGE_PREFIX = "community/images/";
const DEFAULT_LOCAL_DIR = path.join(process.cwd(), ".data", "community");

const WINDOW_MS = 60 * 60 * 1000;
export const POSTS_PER_HOUR = 5;
export const REPORTS_PER_HOUR = 8;
const MAX_PENDING = 400;
const MAX_POSTS = 3000;
const MAX_REPORTS = 20;

const ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type StoredImage = {
  id: string;
  contentType: ImageContentType;
  bytes: number;
};

export type StoredReport = {
  id: string;
  reason: string;
  createdAt: string;
  reporterKey: string;
};

export type CommunityPost = {
  id: string;
  type: PostType;
  status: PostStatus;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  image: StoredImage | null;
  reports: StoredReport[];
  createdAt: string;
  reviewedAt?: string;
};

type StoreShape = {
  posts: CommunityPost[];
  hits: Record<string, number[]>;
};

export class CommunityStorageUnavailable extends Error {
  constructor() {
    super("Community storage is not configured.");
    this.name = "CommunityStorageUnavailable";
  }
}

function localDir(): string {
  const override = process.env.COMMUNITY_LOCAL_DIR?.trim();
  if (override && process.env.NODE_ENV !== "production") return override;
  return DEFAULT_LOCAL_DIR;
}

function blobToken(): string | null {
  const token = process.env.MAP_READ_WRITE_TOKEN?.trim();
  return token ? token : null;
}

export function communityStorageConfigured(): boolean {
  return backend() !== "none";
}

function backend(): "blob" | "file" | "none" {
  if (blobToken()) return "blob";
  if (process.env.VERCEL) return "none";
  return "file";
}

function emptyStore(): StoreShape {
  return { posts: [], hits: {} };
}

export function isRecordId(value: string): boolean {
  return ID_RE.test(value);
}

function parseStore(text: string): StoreShape {
  try {
    const parsed = JSON.parse(text) as Partial<StoreShape>;
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts.filter(isPost) : [],
      hits: parsed.hits && typeof parsed.hits === "object" ? parsed.hits : {},
    };
  } catch {
    return emptyStore();
  }
}

function isPost(value: unknown): value is CommunityPost {
  if (!value || typeof value !== "object") return false;
  const post = value as Partial<CommunityPost>;
  return typeof post.id === "string" && typeof post.status === "string" && typeof post.title === "string";
}

async function readStore(): Promise<StoreShape> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  if (kind === "file") {
    try {
      return parseStore(await readFile(path.join(localDir(), "posts.json"), "utf8"));
    } catch {
      return emptyStore();
    }
  }
  const token = blobToken();
  if (!token) throw new CommunityStorageUnavailable();
  const result = await get(BLOB_POSTS, { access: "private", useCache: false, token });
  if (!result || result.statusCode !== 200 || !result.stream) return emptyStore();
  return parseStore(await new Response(result.stream).text());
}

async function writeStore(store: StoreShape): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  const body = JSON.stringify(store);
  if (kind === "file") {
    const dir = localDir();
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "posts.json");
    const temp = `${file}.${process.pid}.tmp`;
    await writeFile(temp, body, "utf8");
    await rename(temp, file);
    return;
  }
  const token = blobToken();
  if (!token) throw new CommunityStorageUnavailable();
  await put(BLOB_POSTS, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    token,
  });
}

function imagePath(id: string): string {
  if (!isRecordId(id)) throw new Error("Bad image id.");
  return `${BLOB_IMAGE_PREFIX}${id}`;
}

async function saveImage(id: string, bytes: Buffer): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  if (kind === "file") {
    const dir = path.join(localDir(), "images");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, id);
    const temp = `${file}.${process.pid}.tmp`;
    await writeFile(temp, bytes);
    await rename(temp, file);
    return;
  }
  const token = blobToken();
  if (!token) throw new CommunityStorageUnavailable();
  await put(imagePath(id), bytes, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/octet-stream",
    cacheControlMaxAge: 60,
    token,
  });
}

export async function readImageBytes(id: string): Promise<Buffer | null> {
  if (!isRecordId(id)) return null;
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  if (kind === "file") {
    try {
      return await readFile(path.join(localDir(), "images", id));
    } catch {
      return null;
    }
  }
  const token = blobToken();
  if (!token) throw new CommunityStorageUnavailable();
  const result = await get(imagePath(id), { access: "private", useCache: false, token });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  return Buffer.from(await new Response(result.stream).arrayBuffer());
}

async function removeImage(id: string): Promise<void> {
  if (!isRecordId(id)) return;
  const kind = backend();
  if (kind === "file") {
    await unlink(path.join(localDir(), "images", id)).catch(() => undefined);
    return;
  }
  if (kind === "none") return;
  const token = blobToken();
  if (!token) return;
  await del(imagePath(id), { token }).catch(() => undefined);
}

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

function pruneHits(store: StoreShape, now: number) {
  for (const key of Object.keys(store.hits)) {
    store.hits[key] = (store.hits[key] ?? []).filter((time) => now - time < WINDOW_MS);
    if (store.hits[key].length === 0) delete store.hits[key];
  }
}

function trimStore(store: StoreShape) {
  if (store.posts.length <= MAX_POSTS) return;
  const kept = store.posts.filter((post) => post.status !== "rejected");
  const rejected = store.posts.filter((post) => post.status === "rejected");
  const room = Math.max(0, MAX_POSTS - kept.length);
  const dropped = rejected.slice(0, Math.max(0, rejected.length - room));
  store.posts = [...kept, ...rejected.slice(-room)];
  return dropped;
}

export function communityRateKey(kind: "post" | "report", value: string): string {
  return createHash("sha256").update(`community|${kind}|${value}`).digest("hex").slice(0, 24);
}

export async function addPost(
  post: CommunityPost,
  rateKey: string,
  image: Buffer | null
): Promise<"ok" | "limited" | "full"> {
  if (post.status !== "pending" || !isRecordId(post.id)) throw new Error("Bad post.");
  if (post.image && (!image || !isRecordId(post.image.id) || image.length !== post.image.bytes)) {
    throw new Error("Bad image.");
  }
  if (image && image.length > MAX_IMAGE_BYTES) throw new Error("Bad image.");

  let result: "ok" | "limited" | "full" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    const recent = (store.hits[rateKey] ?? []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= POSTS_PER_HOUR) {
      result = "limited";
      return;
    }
    const pending = store.posts.filter((item) => item.status === "pending").length;
    if (pending >= MAX_PENDING || store.posts.length >= MAX_POSTS) {
      result = "full";
      return;
    }
    if (image && post.image) await saveImage(post.image.id, image);
    try {
      store.hits[rateKey] = [...recent, now];
      pruneHits(store, now);
      store.posts.push(post);
      const dropped = trimStore(store) ?? [];
      await writeStore(store);
      await Promise.all(dropped.map((item) => (item.image ? removeImage(item.image.id) : Promise.resolve())));
    } catch (error) {
      if (post.image) await removeImage(post.image.id);
      throw error;
    }
  });
  return result;
}

export async function listPosts(): Promise<CommunityPost[]> {
  const store = await readStore();
  return store.posts.map((post) => ({
    ...post,
    image: post.image ? { ...post.image } : null,
    reports: Array.isArray(post.reports) ? post.reports.map((report) => ({ ...report })) : [],
  }));
}

export async function setPostStatus(
  id: string,
  status: "approved" | "rejected"
): Promise<CommunityPost | null> {
  if (!isRecordId(id)) return null;
  let updated: CommunityPost | null = null;
  await enqueue(async () => {
    const store = await readStore();
    const post = store.posts.find((item) => item.id === id);
    if (!post) return;
    post.status = status;
    post.reviewedAt = new Date().toISOString();
    await writeStore(store);
    updated = {
      ...post,
      image: post.image ? { ...post.image } : null,
      reports: (post.reports ?? []).map((report) => ({ ...report })),
    };
  });
  return updated;
}

export async function deletePost(id: string): Promise<boolean> {
  if (!isRecordId(id)) return false;
  let removed = false;
  await enqueue(async () => {
    const store = await readStore();
    const post = store.posts.find((item) => item.id === id);
    if (!post) return;
    store.posts = store.posts.filter((item) => item.id !== id);
    await writeStore(store);
    if (post.image) await removeImage(post.image.id);
    removed = true;
  });
  return removed;
}

export async function addReport(
  postId: string,
  report: StoredReport,
  rateKey: string
): Promise<"ok" | "missing" | "duplicate" | "limited" | "closed"> {
  if (!isRecordId(postId) || !isRecordId(report.id)) return "missing";
  let result: "ok" | "missing" | "duplicate" | "limited" | "closed" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    const recent = (store.hits[rateKey] ?? []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= REPORTS_PER_HOUR) {
      result = "limited";
      return;
    }
    const post = store.posts.find((item) => item.id === postId);
    if (!post || post.status !== "approved") {
      result = "missing";
      return;
    }
    post.reports = Array.isArray(post.reports) ? post.reports : [];
    if (post.reports.some((item) => item.reporterKey === report.reporterKey)) {
      result = "duplicate";
      return;
    }
    if (post.reports.length >= MAX_REPORTS) {
      result = "closed";
      return;
    }
    post.reports.push(report);
    store.hits[rateKey] = [...recent, now];
    pruneHits(store, now);
    await writeStore(store);
  });
  return result;
}
