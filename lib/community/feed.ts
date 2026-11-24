import { isPro } from "@/lib/pro/server/store";
import {
  isPostType,
  postTypeLabel,
  type AdminPost,
  type MinePost,
  type PostType,
  type PublicPost,
} from "@/lib/community/types";
import {
  CommunityStorageUnavailable,
  communityStorageConfigured,
  listPosts,
  type CommunityPost,
} from "@/lib/community/store";

const proCache = new Map<string, { pro: boolean; until: number }>();
const PRO_CACHE_MS = 60 * 1000;

export async function authorIsPro(uid: string): Promise<boolean> {
  if (!uid) return false;
  const hit = proCache.get(uid);
  if (hit && hit.until > Date.now()) return hit.pro;
  let pro = false;
  try {
    pro = await isPro(uid);
  } catch {
    pro = false;
  }
  if (proCache.size > 500) proCache.clear();
  proCache.set(uid, { pro, until: Date.now() + PRO_CACHE_MS });
  return pro;
}

function byNewest(a: { createdAt: string }, b: { createdAt: string }) {
  return b.createdAt.localeCompare(a.createdAt);
}

/** Approved posts are the only ones a visitor can see, including their images. */
export function imageIsPublic(status: string): boolean {
  return status === "approved";
}

function creditFor(post: CommunityPost): string | null {
  if (post.type !== "screenshot" || post.status !== "approved") return null;
  return `Screenshot by ${post.authorName}`;
}

export function toPublicPost(post: CommunityPost, pro: boolean): PublicPost | null {
  if (post.status !== "approved" || !isPostType(post.type)) return null;
  return {
    id: post.id,
    type: post.type,
    typeLabel: postTypeLabel(post.type),
    title: post.title,
    body: post.body,
    authorName: post.authorName,
    pro,
    createdAt: post.createdAt,
    imageUrl: post.image ? `/api/community/images/${post.image.id}` : null,
    credit: creditFor(post),
  };
}

function toMinePost(post: CommunityPost): MinePost | null {
  if (post.status === "approved") return null;
  return {
    id: post.id,
    type: post.type as PostType,
    typeLabel: postTypeLabel(post.type),
    title: post.title,
    body: post.body,
    status: post.status === "rejected" ? "rejected" : "pending",
    statusLabel: post.status === "rejected" ? "Not approved" : "Waiting for review",
    createdAt: post.createdAt,
    hasImage: Boolean(post.image),
  };
}

export function toAdminPost(post: CommunityPost, pro: boolean): AdminPost {
  return {
    id: post.id,
    type: post.type,
    typeLabel: postTypeLabel(post.type),
    title: post.title,
    body: post.body,
    status: post.status,
    authorName: post.authorName,
    pro,
    createdAt: post.createdAt,
    reviewedAt: post.reviewedAt ?? null,
    imageUrl: post.image ? `/api/community/images/${post.image.id}` : null,
    credit: post.type === "screenshot" ? `Screenshot by ${post.authorName}` : null,
    reports: (post.reports ?? []).map((report) => ({
      id: report.id,
      reason: report.reason,
      createdAt: report.createdAt,
    })),
  };
}

async function proFlags(uids: string[]): Promise<Map<string, boolean>> {
  const unique = [...new Set(uids)];
  const entries = await Promise.all(
    unique.map(async (uid) => [uid, await authorIsPro(uid)] as const)
  );
  return new Map(entries);
}

export async function loadFeedForUser(uid: string | null): Promise<{
  posts: PublicPost[];
  mine: MinePost[];
  storageReady: boolean;
}> {
  if (!communityStorageConfigured()) return { posts: [], mine: [], storageReady: false };
  try {
    const all = await listPosts();
    const approved = all.filter((post) => post.status === "approved").sort(byNewest).slice(0, 200);
    const mine = uid
      ? all
          .filter((post) => post.authorUid === uid && post.status !== "approved")
          .sort(byNewest)
          .slice(0, 20)
          .map(toMinePost)
          .filter((post): post is MinePost => post !== null)
      : [];
    const flags = await proFlags(approved.map((post) => post.authorUid));
    const posts = approved
      .map((post) => toPublicPost(post, flags.get(post.authorUid) ?? false))
      .filter((post): post is PublicPost => post !== null);
    return { posts, mine, storageReady: true };
  } catch (error) {
    if (!(error instanceof CommunityStorageUnavailable)) console.error("community feed failed");
    return { posts: [], mine: [], storageReady: false };
  }
}

export async function loadAdminQueue(): Promise<AdminPost[]> {
  const all = await listPosts();
  const flags = await proFlags(all.map((post) => post.authorUid));
  return all
    .slice()
    .sort(byNewest)
    .map((post) => toAdminPost(post, flags.get(post.authorUid) ?? false));
}
