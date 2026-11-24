import { createHash } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { del, get, put } from "@vercel/blob";
import { MAX_IMAGE_BYTES, type FlairId, type PostKind, type StoredImageType } from "@/lib/community/types";

/**
 * Community board: posts, comments, votes, and images.
 *
 * One private JSON document, same pattern as map suggestions. Production uses
 * MAP_READ_WRITE_TOKEN under community/. Do not use BLOB_READ_WRITE_TOKEN.
 * Images are private blobs and are only served by our own route.
 * Local dev without a token writes to .data/community/. Never log the token.
 */

const BLOB_POSTS = "community/board.json";
const BLOB_IMAGE_PREFIX = "community/images/";
const DEFAULT_LOCAL_DIR = path.join(process.cwd(), ".data", "community");
const WINDOW_MS = 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_POSTS = 2000;
const MAX_COMMENTS = 8000;
const MAX_REPORTS = 20;

const ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type StoredImage = {
  id: string;
  contentType: StoredImageType;
  bytes: number;
};

export type StoredReport = {
  id: string;
  reason: string;
  createdAt: string;
  reporterKey: string;
};

export type VoteMap = Record<string, 1 | -1>;

export type CommunityPost = {
  id: string;
  kind: PostKind;
  flair: FlairId;
  title: string;
  body: string;
  linkUrl: string | null;
  authorUid: string;
  authorName: string;
  createdAt: string;
  editedAt?: string;
  removed?: boolean;
  locked?: boolean;
  score: number;
  votes: VoteMap;
  image: StoredImage | null;
  reports: StoredReport[];
};

export type CommunityComment = {
  id: string;
  postId: string;
  parentId: string | null;
  authorUid: string;
  authorName: string;
  body: string;
  createdAt: string;
  editedAt?: string;
  removed?: boolean;
  score: number;
  votes: VoteMap;
  reports: StoredReport[];
};

export type BoardAccount = { firstSeen: string; name: string };
export type BoardBan = { uid: string; createdAt: string };

type StoreShape = {
  posts: CommunityPost[];
  comments: CommunityComment[];
  accounts: Record<string, BoardAccount>;
  bans: BoardBan[];
  hits: Record<string, number[]>;
};

export type RateLimit = { key: string; max: number };

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
  return { posts: [], comments: [], accounts: {}, bans: [], hits: {} };
}

export function isRecordId(value: string): boolean {
  return ID_RE.test(value);
}

export function isUid(value: string): boolean {
  return /^[A-Za-z0-9_-]{1,128}$/.test(value);
}

export function communityRateKey(kind: string, value: string): string {
  return createHash("sha256").update(`community|${kind}|${value}`).digest("hex").slice(0, 24);
}

function scoreOf(votes: VoteMap | undefined): number {
  if (!votes) return 0;
  return Object.values(votes).reduce((sum, value) => sum + value, 0);
}

function parseStore(text: string): StoreShape {
  try {
    const parsed = JSON.parse(text) as Partial<StoreShape>;
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts.filter(isPost) : [],
      comments: Array.isArray(parsed.comments) ? parsed.comments.filter(isComment) : [],
      accounts: parsed.accounts && typeof parsed.accounts === "object" ? parsed.accounts : {},
      bans: Array.isArray(parsed.bans) ? parsed.bans.filter((ban) => ban && typeof ban.uid === "string") : [],
      hits: parsed.hits && typeof parsed.hits === "object" ? parsed.hits : {},
    };
  } catch {
    return emptyStore();
  }
}

function isPost(value: unknown): value is CommunityPost {
  if (!value || typeof value !== "object") return false;
  const post = value as Partial<CommunityPost>;
  return typeof post.id === "string" && typeof post.title === "string" && typeof post.kind === "string";
}

function isComment(value: unknown): value is CommunityComment {
  if (!value || typeof value !== "object") return false;
  const comment = value as Partial<CommunityComment>;
  return typeof comment.id === "string" && typeof comment.postId === "string" && typeof comment.body === "string";
}

async function readStore(): Promise<StoreShape> {
  const kind = backend();
  if (kind === "none") throw new CommunityStorageUnavailable();
  if (kind === "file") {
    try {
      return parseStore(await readFile(path.join(localDir(), "board.json"), "utf8"));
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
    const file = path.join(dir, "board.json");
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

function limited(store: StoreShape, limits: RateLimit[], now: number): boolean {
  return limits.some((item) => {
    const recent = (store.hits[item.key] ?? []).filter((time) => now - time < WINDOW_MS);
    return recent.length >= item.max;
  });
}

function markHits(store: StoreShape, limits: RateLimit[], now: number) {
  for (const item of limits) {
    const recent = (store.hits[item.key] ?? []).filter((time) => now - time < WINDOW_MS);
    store.hits[item.key] = [...recent, now];
  }
  pruneHits(store, now);
}

function banned(store: StoreShape, uid: string): boolean {
  return store.bans.some((ban) => ban.uid === uid);
}

function clonePost(post: CommunityPost): CommunityPost {
  return {
    ...post,
    votes: { ...post.votes },
    image: post.image ? { ...post.image } : null,
    reports: (post.reports ?? []).map((report) => ({ ...report })),
  };
}

function cloneComment(comment: CommunityComment): CommunityComment {
  return {
    ...comment,
    votes: { ...comment.votes },
    reports: (comment.reports ?? []).map((report) => ({ ...report })),
  };
}

export async function readBoard(): Promise<StoreShape> {
  const store = await readStore();
  return {
    posts: store.posts.map(clonePost),
    comments: store.comments.map(cloneComment),
    accounts: { ...store.accounts },
    bans: store.bans.map((ban) => ({ ...ban })),
    hits: {},
  };
}

export function isNewAccount(store: { accounts: Record<string, BoardAccount> }, uid: string, now = Date.now()): boolean {
  const seen = store.accounts[uid]?.firstSeen;
  if (!seen) return true;
  return now - Date.parse(seen) < DAY_MS;
}

export async function accountIsNew(uid: string): Promise<boolean> {
  const store = await readStore();
  return isNewAccount(store, uid);
}

export async function userIsBanned(uid: string): Promise<boolean> {
  const store = await readStore();
  return banned(store, uid);
}

export async function createPost(
  post: CommunityPost,
  limits: RateLimit[],
  image: Buffer | null
): Promise<"ok" | "limited" | "full" | "banned"> {
  if (!isRecordId(post.id) || !isUid(post.authorUid)) throw new Error("Bad post.");
  if (post.image && (!image || !isRecordId(post.image.id) || image.length !== post.image.bytes)) {
    throw new Error("Bad image.");
  }
  if (image && image.length > MAX_IMAGE_BYTES) throw new Error("Bad image.");

  let result: "ok" | "limited" | "full" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    if (banned(store, post.authorUid)) {
      result = "banned";
      return;
    }
    if (limited(store, limits, now)) {
      result = "limited";
      return;
    }
    if (store.posts.length >= MAX_POSTS) {
      result = "full";
      return;
    }
    if (!store.accounts[post.authorUid]) {
      store.accounts[post.authorUid] = { firstSeen: post.createdAt, name: post.authorName };
    } else {
      store.accounts[post.authorUid].name = post.authorName;
    }
    if (image && post.image) await saveImage(post.image.id, image);
    try {
      markHits(store, limits, now);
      store.posts.push(post);
      await writeStore(store);
    } catch (error) {
      if (post.image) await removeImage(post.image.id);
      throw error;
    }
  });
  return result;
}

export async function editPost(
  id: string,
  uid: string,
  fields: { title: string; body: string; flair: FlairId; linkUrl: string | null }
): Promise<"ok" | "missing" | "forbidden" | "banned"> {
  let result: "ok" | "missing" | "forbidden" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    if (banned(store, uid)) {
      result = "banned";
      return;
    }
    const post = store.posts.find((item) => item.id === id && !item.removed);
    if (!post) {
      result = "missing";
      return;
    }
    if (post.authorUid !== uid) {
      result = "forbidden";
      return;
    }
    post.title = fields.title;
    post.body = fields.body;
    post.flair = fields.flair;
    post.linkUrl = fields.linkUrl;
    post.editedAt = new Date().toISOString();
    await writeStore(store);
  });
  return result;
}

async function dropPost(store: StoreShape, post: CommunityPost) {
  post.removed = true;
  if (post.image) {
    const imageId = post.image.id;
    post.image = null;
    await removeImage(imageId);
  }
}

export async function deleteOwnPost(id: string, uid: string): Promise<"ok" | "missing" | "forbidden"> {
  let result: "ok" | "missing" | "forbidden" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const post = store.posts.find((item) => item.id === id && !item.removed);
    if (!post) {
      result = "missing";
      return;
    }
    if (post.authorUid !== uid) {
      result = "forbidden";
      return;
    }
    await dropPost(store, post);
    await writeStore(store);
  });
  return result;
}

export async function adminRemovePost(id: string): Promise<boolean> {
  let removed = false;
  await enqueue(async () => {
    const store = await readStore();
    const post = store.posts.find((item) => item.id === id && !item.removed);
    if (!post) return;
    await dropPost(store, post);
    await writeStore(store);
    removed = true;
  });
  return removed;
}

export async function setPostLocked(id: string, locked: boolean): Promise<boolean> {
  let updated = false;
  await enqueue(async () => {
    const store = await readStore();
    const post = store.posts.find((item) => item.id === id && !item.removed);
    if (!post) return;
    post.locked = locked;
    await writeStore(store);
    updated = true;
  });
  return updated;
}

export async function banUser(uid: string): Promise<boolean> {
  if (!isUid(uid)) return false;
  let changed = false;
  await enqueue(async () => {
    const store = await readStore();
    if (!banned(store, uid)) store.bans.push({ uid, createdAt: new Date().toISOString() });
    await writeStore(store);
    changed = true;
  });
  return changed;
}

export async function unbanUser(uid: string): Promise<boolean> {
  let changed = false;
  await enqueue(async () => {
    const store = await readStore();
    const before = store.bans.length;
    store.bans = store.bans.filter((ban) => ban.uid !== uid);
    changed = store.bans.length !== before;
    if (changed) await writeStore(store);
  });
  return changed;
}

function applyVote(votes: VoteMap, uid: string, value: -1 | 0 | 1): VoteMap {
  const next = { ...votes };
  if (value === 0) delete next[uid];
  else next[uid] = value;
  return next;
}

export async function voteOnPost(id: string, uid: string, value: -1 | 0 | 1): Promise<"ok" | "missing" | "banned"> {
  let result: "ok" | "missing" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    if (banned(store, uid)) {
      result = "banned";
      return;
    }
    const post = store.posts.find((item) => item.id === id && !item.removed);
    if (!post) {
      result = "missing";
      return;
    }
    post.votes = applyVote(post.votes ?? {}, uid, value);
    post.score = scoreOf(post.votes);
    await writeStore(store);
  });
  return result;
}

export async function addComment(
  comment: CommunityComment,
  limits: RateLimit[]
): Promise<"ok" | "missing" | "locked" | "limited" | "full" | "banned"> {
  if (!isRecordId(comment.id) || !isRecordId(comment.postId)) return "missing";
  let result: "ok" | "missing" | "locked" | "limited" | "full" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    if (banned(store, comment.authorUid)) {
      result = "banned";
      return;
    }
    const post = store.posts.find((item) => item.id === comment.postId && !item.removed);
    if (!post) {
      result = "missing";
      return;
    }
    if (post.locked) {
      result = "locked";
      return;
    }
    if (comment.parentId) {
      const parent = store.comments.find((item) => item.id === comment.parentId && item.postId === comment.postId);
      if (!parent) {
        result = "missing";
        return;
      }
    }
    if (limited(store, limits, now)) {
      result = "limited";
      return;
    }
    if (store.comments.length >= MAX_COMMENTS) {
      result = "full";
      return;
    }
    if (!store.accounts[comment.authorUid]) {
      store.accounts[comment.authorUid] = { firstSeen: comment.createdAt, name: comment.authorName };
    } else {
      store.accounts[comment.authorUid].name = comment.authorName;
    }
    markHits(store, limits, now);
    store.comments.push(comment);
    await writeStore(store);
  });
  return result;
}

export async function editComment(id: string, uid: string, body: string): Promise<"ok" | "missing" | "forbidden" | "banned"> {
  let result: "ok" | "missing" | "forbidden" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    if (banned(store, uid)) {
      result = "banned";
      return;
    }
    const comment = store.comments.find((item) => item.id === id && !item.removed);
    if (!comment) {
      result = "missing";
      return;
    }
    if (comment.authorUid !== uid) {
      result = "forbidden";
      return;
    }
    comment.body = body;
    comment.editedAt = new Date().toISOString();
    await writeStore(store);
  });
  return result;
}

export async function deleteOwnComment(id: string, uid: string): Promise<"ok" | "missing" | "forbidden"> {
  let result: "ok" | "missing" | "forbidden" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const comment = store.comments.find((item) => item.id === id && !item.removed);
    if (!comment) {
      result = "missing";
      return;
    }
    if (comment.authorUid !== uid) {
      result = "forbidden";
      return;
    }
    comment.removed = true;
    comment.body = "";
    await writeStore(store);
  });
  return result;
}

export async function adminRemoveComment(id: string): Promise<boolean> {
  let removed = false;
  await enqueue(async () => {
    const store = await readStore();
    const comment = store.comments.find((item) => item.id === id && !item.removed);
    if (!comment) return;
    comment.removed = true;
    comment.body = "";
    await writeStore(store);
    removed = true;
  });
  return removed;
}

export async function voteOnComment(id: string, uid: string, value: -1 | 0 | 1): Promise<"ok" | "missing" | "banned"> {
  let result: "ok" | "missing" | "banned" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    if (banned(store, uid)) {
      result = "banned";
      return;
    }
    const comment = store.comments.find((item) => item.id === id && !item.removed);
    if (!comment) {
      result = "missing";
      return;
    }
    comment.votes = applyVote(comment.votes ?? {}, uid, value);
    comment.score = scoreOf(comment.votes);
    await writeStore(store);
  });
  return result;
}

export async function reportPost(id: string, report: StoredReport, limits: RateLimit[]): Promise<"ok" | "missing" | "duplicate" | "limited"> {
  return reportTarget("post", id, report, limits);
}

export async function reportComment(id: string, report: StoredReport, limits: RateLimit[]): Promise<"ok" | "missing" | "duplicate" | "limited"> {
  return reportTarget("comment", id, report, limits);
}

async function reportTarget(
  kind: "post" | "comment",
  id: string,
  report: StoredReport,
  limits: RateLimit[]
): Promise<"ok" | "missing" | "duplicate" | "limited"> {
  let result: "ok" | "missing" | "duplicate" | "limited" = "ok";
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    if (limited(store, limits, now)) {
      result = "limited";
      return;
    }
    const target =
      kind === "post"
        ? store.posts.find((item) => item.id === id && !item.removed)
        : store.comments.find((item) => item.id === id && !item.removed);
    if (!target) {
      result = "missing";
      return;
    }
    target.reports = Array.isArray(target.reports) ? target.reports : [];
    if (target.reports.some((item) => item.reporterKey === report.reporterKey)) {
      result = "duplicate";
      return;
    }
    if (target.reports.length >= MAX_REPORTS) {
      result = "duplicate";
      return;
    }
    target.reports.push(report);
    markHits(store, limits, now);
    await writeStore(store);
  });
  return result;
}

export function commentCount(comments: CommunityComment[], postId: string): number {
  return comments.filter((comment) => comment.postId === postId && !comment.removed).length;
}

export function lastActivity(post: CommunityPost, comments: CommunityComment[]): string {
  let latest = post.createdAt;
  for (const comment of comments) {
    if (comment.postId === post.id && comment.createdAt > latest) latest = comment.createdAt;
  }
  return latest;
}

export function pointsFor(uid: string, posts: CommunityPost[], comments: CommunityComment[]): number {
  let total = 0;
  for (const post of posts) if (post.authorUid === uid && !post.removed) total += post.score;
  for (const comment of comments) if (comment.authorUid === uid && !comment.removed) total += comment.score;
  return total;
}

export function myVote(votes: VoteMap | undefined, uid: string | null): -1 | 0 | 1 {
  if (!uid || !votes) return 0;
  return votes[uid] ?? 0;
}
