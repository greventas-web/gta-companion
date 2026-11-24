import { proFlags } from "@/lib/community/is-pro";
import {
  isCategory,
  type AdminPost,
  type CommunityCategory,
  type OwnPost,
  type PublicPost,
} from "@/lib/community/shared";
import { communityStorageConfigured, listPosts, type CommunityPost } from "@/lib/community/store";

function imageUrl(post: CommunityPost): string | null {
  return post.imageContentType ? `/api/community/images/${post.id}` : null;
}

function toPublic(post: CommunityPost, pro: boolean): PublicPost {
  return {
    id: post.id,
    category: post.category,
    title: post.title,
    body: post.body,
    authorName: post.authorName,
    pro,
    createdAt: post.createdAt,
    imageUrl: imageUrl(post),
  };
}

export async function listPublicPosts(category?: CommunityCategory): Promise<PublicPost[]> {
  if (!communityStorageConfigured()) return [];
  const posts = (await listPosts())
    .filter((post) => post.status === "approved")
    .filter((post) => (category ? post.category === category : true))
    .slice(0, 80);
  const flags = await proFlags(posts.map((post) => post.authorUid));
  return posts.map((post) => toPublic(post, flags.get(post.authorUid) ?? false));
}

export async function listOwnPosts(uid: string): Promise<OwnPost[]> {
  const posts = (await listPosts()).filter((post) => post.authorUid === uid).slice(0, 40);
  const flags = await proFlags([uid]);
  const pro = flags.get(uid) ?? false;
  return posts.map((post) => ({ ...toPublic(post, pro), status: post.status }));
}

export async function listAdminPosts(): Promise<AdminPost[]> {
  const posts = (await listPosts()).slice(0, 200);
  const flags = await proFlags(posts.map((post) => post.authorUid));
  return posts.map((post) => ({
    ...toPublic(post, flags.get(post.authorUid) ?? false),
    status: post.status,
    authorUid: post.authorUid,
    reportCount: post.reports.length,
    reports: post.reports.slice(-12).map((report) => ({
      at: report.at,
      reason: report.reason,
    })),
  }));
}

export function categoryFromQuery(value: string | null): CommunityCategory | undefined {
  return isCategory(value) ? value : undefined;
}
