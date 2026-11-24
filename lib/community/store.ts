import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { del, get, put } from "@vercel/blob";
import { isCategory, isPostId, LIMITS, type CommunityCategory } from "@/lib/community/shared";

/**
 * Moderated community posts.
 *
 * Accounts live in Firebase (client SDK only). There is no Admin SDK here, so
 * a pending queue cannot sit in Firestore without exposing it to the browser.
 * Posts and images use a private Vercel Blob store, the same Marketplace
 * storage the map and Pro already use.
 *
 * Token order: COMMUNITY_READ_WRITE_TOKEN, then MAP_READ_WRITE_TOKEN, then
 * PRO_READ_WRITE_TOKEN. Do not use the public BLOB_READ_WRITE_TOKEN store.
 * Local dev without a token writes to .data/community/. On Vercel, writes
 * fail closed until a token is set. Set COMMUNITY_LOCAL_DIR only for local
 * checks; it is ignored on Vercel.
 */

export type PostStatus = "pending" | "approved" | "rejected";

export type CommunityPost = {
  id: string;
  status: PostStatus;
  category: CommunityCategory;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: string;
  imageContentType?: string;
  imageBytes?: number;
  imageConsent?: boolean;
  reports: { uid: string; at: string; reason: string }[];
};

type StoreShape = {
  posts: CommunityPost[];
  postHits: Record<string, number[]>;
  reportHits: Record<string, number[]>;
};

export class CommunityStorageUnavailable extends Error {
  constructor() {
    super("Community storage is not configured.");
    this.name = "CommunityStorageUnavailable";
  }
}

const BLOB_PATH = "community/posts.json";
const WINDOW_MS = 60 * 60 * 1000;

function token(): string | null {
  const value =
    process.env.COMMUNITY_READ_WRITE_TOKEN?.trim() ||
    process.env.MAP_READ_WRITE_TOKEN?.trim() ||
    process.env.PRO_READ_WRITE_TOKEN?.trim();
  return value ? value : null;
}

function backend(): "blob" | "file" | "none" {
  if (process.env.VERCEL) return token() ? "blob" : "none";
  if (process.env.COMMUNITY_LOCAL_DIR?.trim()) return "file";
  if (token()) return "blob";
  return "file";
}

export function communityStorageConfigured(): boolean {
  return backend() !== "none";
}

function localDir(): string {
  const override = process.env.COMMUNITY_LOCAL_DIR?.trim();
  if (override && !process.env.VERCEL) return override;
  return path.join(process.cwd(), ".data", "community");
}

function emptyStore(): StoreShape {
  return { posts: [], postHits: {}, reportHits: {} };
}

function isPost(value: unknown): value is CommunityPost {
  if (!value || typeof value !== "object") return false;
  const post = value as CommunityPost;
  return (
    isPostId(post.id ?? "") &&
    (post.status === "pending" || post.status === "approved" || post.status === "rejected") &&
    isCategory(post.category) &&
    typeof post.title === "string" &&
    typeof post.body === "string" &&
    typeof post.authorUid === "string" &&
    typeof post.authorName === "string" &&
    typeof post.createdAt === "string" &&
    Array.isArray(post.reports)
  );
}

function parseStore(text: string): StoreShape {
  try {
    const parsed = JSON.parse(text) as Partial<StoreShape>;
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts.filter(isPost) : [],
      postHits: parsed.postHits && typeof parsed.postHits === "object" ? parsed.postHits : {},
      reportHits: parsed.reportHits && typeof parsed.reportHits === "object" ? parsed.reportHits : {},
    };
  } catch {
    return emptyStore();
  }
}

async function readStore(): Promise<StoreShape> {
  const kind = backend();
  if (kind === "file") {
    try {
      return parseStore(await readFile(path.join(localDir(), "posts.json"), "utf8"));
    } catch {
      return emptyStore();
    }
  }
  if (kind === "none") return emptyStore();
  const result = await get(BLOB_PATH, { access: "private", useCache: false, token: token()! });
  if (!result || result.statusCode !== 200 || !result.stream) return emptyStore();
  return parseStore(await new Response(result.stream).text());
}

async function writeStore(store: StoreShape): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  const body = JSON.stringify(store);
  if (kind === "file") {
    const file = path.join(localDir(), "posts.json");
    await mkdir(path.dirname(file), { recursive: true });
    const temp = `${file}.${process.pid}.tmp`;
    await writeFile(temp, body, "utf8");
    await rename(temp, file);
    return;
  }
  await put(BLOB_PATH, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    token: token()!,
  });
}

function imagePath(id: string): string {
  return `community/images/${id}`;
}

async function writeImage(id: string, bytes: Buffer, contentType: string): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  if (kind === "file") {
    const file = path.join(localDir(), "images", id);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, bytes);
    return;
  }
  await put(imagePath(id), bytes, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
    cacheControlMaxAge: 60,
    token: token()!,
  });
}

async function deleteImage(id: string): Promise<void> {
  const kind = backend();
  if (kind === "file") {
    await rm(path.join(localDir(), "images", id), { force: true });
    return;
  }
  if (kind === "blob") {
    await del(imagePath(id), { token: token()! }).catch(() => undefined);
  }
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

function pruneHits(hits: Record<string, number[]>, now: number) {
  for (const key of Object.keys(hits)) {
    hits[key] = hits[key].filter((time) => now - time < WINDOW_MS);
    if (hits[key].length === 0) delete hits[key];
  }
}

export type AddResult = "ok" | "limited" | "full" | "too-many-pending";

export async function addPost(
  post: CommunityPost,
  image?: { bytes: Buffer; contentType: string }
): Promise<AddResult> {
  let result: AddResult = "ok";
  await enqueue(async () => {
    if (backend() === "none") throw new CommunityStorageUnavailable();
    const store = await readStore();
    const now = Date.now();
    const recent = (store.postHits[post.authorUid] ?? []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= LIMITS.postsPerHour) {
      result = "limited";
      return;
    }
    const pending = store.posts.filter((item) => item.status === "pending");
    if (pending.length >= LIMITS.maxPending || store.posts.length >= LIMITS.maxPosts) {
      result = "full";
      return;
    }
    if (pending.filter((item) => item.authorUid === post.authorUid).length >= LIMITS.pendingPerUser) {
      result = "too-many-pending";
      return;
    }
    if (image) await writeImage(post.id, image.bytes, image.contentType);
    store.postHits[post.authorUid] = [...recent, now];
    pruneHits(store.postHits, now);
    store.posts.push(post);
    try {
      await writeStore(store);
    } catch (error) {
      if (image) await deleteImage(post.id);
      throw error;
    }
  });
  return result;
}

export async function listPosts(): Promise<CommunityPost[]> {
  const store = await readStore();
  return store.posts.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getPost(id: string): Promise<CommunityPost | null> {
  if (!isPostId(id)) return null;
  const store = await readStore();
  return store.posts.find((item) => item.id === id) ?? null;
}

export type ReportResult = "ok" | "missing" | "own" | "duplicate" | "limited" | "not-public";

export async function addReport(postId: string, uid: string, reason: string): Promise<ReportResult> {
  let result: ReportResult = "missing";
  await enqueue(async () => {
    if (backend() === "none") throw new CommunityStorageUnavailable();
    const store = await readStore();
    const post = store.posts.find((item) => item.id === postId);
    if (!post) {
      result = "missing";
      return;
    }
    if (post.status !== "approved") {
      result = "not-public";
      return;
    }
    if (post.authorUid === uid) {
      result = "own";
      return;
    }
    if (post.reports.some((item) => item.uid === uid)) {
      result = "duplicate";
      return;
    }
    const now = Date.now();
    const recent = (store.reportHits[uid] ?? []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= LIMITS.reportsPerHour) {
      result = "limited";
      return;
    }
    if (post.reports.length < 40) {
      post.reports.push({ uid, at: new Date(now).toISOString(), reason });
    }
    store.reportHits[uid] = [...recent, now];
    pruneHits(store.reportHits, now);
    await writeStore(store);
    result = "ok";
  });
  return result;
}

export async function setPostStatus(
  id: string,
  status: Exclude<PostStatus, "pending">
): Promise<CommunityPost | null> {
  let updated: CommunityPost | null = null;
  await enqueue(async () => {
    if (backend() === "none") throw new CommunityStorageUnavailable();
    const store = await readStore();
    const found = store.posts.find((item) => item.id === id);
    if (!found) return;
    found.status = status;
    updated = found;
    await writeStore(store);
  });
  return updated;
}

export async function deletePost(id: string): Promise<boolean> {
  let removed = false;
  await enqueue(async () => {
    if (backend() === "none") throw new CommunityStorageUnavailable();
    const store = await readStore();
    const found = store.posts.find((item) => item.id === id);
    if (!found) return;
    store.posts = store.posts.filter((item) => item.id !== id);
    await writeStore(store);
    if (found.imageContentType) await deleteImage(id);
    removed = true;
  });
  return removed;
}

export async function readImage(
  id: string
): Promise<{ bytes: Buffer; contentType: string; post: CommunityPost } | null> {
  const post = await getPost(id);
  if (!post?.imageContentType) return null;
  const kind = backend();
  if (kind === "file") {
    try {
      const bytes = await readFile(path.join(localDir(), "images", id));
      return { bytes, contentType: post.imageContentType, post };
    } catch {
      return null;
    }
  }
  if (kind !== "blob") return null;
  const result = await get(imagePath(id), { access: "private", useCache: false, token: token()! });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  const bytes = Buffer.from(await new Response(result.stream).arrayBuffer());
  return { bytes, contentType: post.imageContentType, post };
}
