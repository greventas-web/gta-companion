import { isPro } from "@/lib/pro/server/store";
import { compareFeed, inTopRange } from "@/lib/community/rank";
import {
  commentCount,
  myVote,
  pointsFor,
  readBoard,
  type CommunityComment,
  type CommunityPost,
} from "@/lib/community/store";
import { flairLabel, type FeedSort, type FlairId, type TopRange } from "@/lib/community/types";

const proCache = new Map<string, { pro: boolean; until: number }>();

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
  proCache.set(uid, { pro, until: Date.now() + 60_000 });
  return pro;
}

async function proMap(uids: string[]): Promise<Map<string, boolean>> {
  const unique = [...new Set(uids.filter(Boolean))];
  const entries = await Promise.all(unique.map(async (uid) => [uid, await authorIsPro(uid)] as const));
  return new Map(entries);
}

export type FeedCard = {
  id: string;
  kind: CommunityPost["kind"];
  flair: FlairId;
  flairLabel: string;
  title: string;
  body: string;
  linkUrl: string | null;
  authorUid: string;
  authorName: string;
  pro: boolean;
  createdAt: string;
  editedAt: string | null;
  score: number;
  commentCount: number;
  myVote: -1 | 0 | 1;
  imageUrl: string | null;
  locked: boolean;
};

export type PublicComment = {
  id: string;
  parentId: string | null;
  authorUid: string;
  authorName: string;
  pro: boolean;
  body: string;
  createdAt: string;
  editedAt: string | null;
  removed: boolean;
  score: number;
  myVote: -1 | 0 | 1;
};

function toCard(post: CommunityPost, comments: CommunityComment[], pro: boolean, uid: string | null): FeedCard {
  return {
    id: post.id,
    kind: post.kind,
    flair: post.flair,
    flairLabel: flairLabel(post.flair),
    title: post.title,
    body: post.body,
    linkUrl: post.linkUrl,
    authorUid: post.authorUid,
    authorName: post.authorName,
    pro,
    createdAt: post.createdAt,
    editedAt: post.editedAt ?? null,
    score: post.score,
    commentCount: commentCount(comments, post.id),
    myVote: myVote(post.votes, uid),
    imageUrl: post.image ? `/api/community/images/${post.image.id}` : null,
    locked: Boolean(post.locked),
  };
}

export async function loadFeed(input: {
  sort: FeedSort;
  range: TopRange;
  flair: FlairId | null;
  uid: string | null;
}): Promise<FeedCard[]> {
  const board = await readBoard();
  const banned = new Set(board.bans.map((ban) => ban.uid));
  const now = Date.now();
  const visible = board.posts.filter((post) => {
    if (post.removed || banned.has(post.authorUid)) return false;
    if (input.flair && post.flair !== input.flair) return false;
    if (input.sort === "top" && !inTopRange(post.createdAt, input.range, now)) return false;
    return true;
  });
  visible.sort((left, right) => compareFeed(input.sort, input.range, left, right, now));
  const slice = visible.slice(0, 80);
  const flags = await proMap(slice.map((post) => post.authorUid));
  return slice.map((post) => toCard(post, board.comments, flags.get(post.authorUid) ?? false, input.uid));
}

export async function loadThread(id: string, uid: string | null): Promise<{ post: FeedCard; comments: PublicComment[] } | null> {
  const board = await readBoard();
  const post = board.posts.find((item) => item.id === id && !item.removed);
  if (!post || board.bans.some((ban) => ban.uid === post.authorUid)) return null;
  const comments = board.comments.filter((comment) => comment.postId === id);
  const flags = await proMap([post.authorUid, ...comments.map((comment) => comment.authorUid)]);
  return {
    post: toCard(post, comments, flags.get(post.authorUid) ?? false, uid),
    comments: comments.map((comment) => ({
      id: comment.id,
      parentId: comment.parentId,
      authorUid: comment.authorUid,
      authorName: comment.authorName,
      pro: flags.get(comment.authorUid) ?? false,
      body: comment.removed ? "" : comment.body,
      createdAt: comment.createdAt,
      editedAt: comment.editedAt ?? null,
      removed: Boolean(comment.removed),
      score: comment.score,
      myVote: myVote(comment.votes, uid),
    })),
  };
}

export async function loadProfile(profileUid: string, viewerUid: string | null) {
  const board = await readBoard();
  const banned = board.bans.some((ban) => ban.uid === profileUid);
  const account = board.accounts[profileUid];
  const posts = board.posts.filter((post) => post.authorUid === profileUid && !post.removed);
  posts.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  const flags = await proMap([profileUid]);
  return {
    uid: profileUid,
    name: account?.name ?? posts[0]?.authorName ?? "Player",
    pro: flags.get(profileUid) ?? false,
    points: pointsFor(profileUid, board.posts, board.comments),
    banned,
    posts: posts.slice(0, 40).map((post) => toCard(post, board.comments, flags.get(profileUid) ?? false, viewerUid)),
  };
}

export type AdminItem = {
  kind: "post" | "comment";
  id: string;
  postId: string;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  locked: boolean;
  reports: { reason: string; createdAt: string }[];
  reportedAt: string;
};

export async function loadAdminQueue() {
  const board = await readBoard();
  const items: AdminItem[] = [];
  for (const post of board.posts) {
    if (post.removed || post.reports.length === 0) continue;
    items.push({
      kind: "post",
      id: post.id,
      postId: post.id,
      title: post.title,
      body: post.body,
      authorUid: post.authorUid,
      authorName: post.authorName,
      locked: Boolean(post.locked),
      reports: post.reports.map((report) => ({ reason: report.reason, createdAt: report.createdAt })),
      reportedAt: post.reports[post.reports.length - 1]?.createdAt ?? post.createdAt,
    });
  }
  for (const comment of board.comments) {
    if (comment.removed || comment.reports.length === 0) continue;
    const post = board.posts.find((item) => item.id === comment.postId);
    items.push({
      kind: "comment",
      id: comment.id,
      postId: comment.postId,
      title: post?.title ?? "Comment",
      body: comment.body,
      authorUid: comment.authorUid,
      authorName: comment.authorName,
      locked: false,
      reports: comment.reports.map((report) => ({ reason: report.reason, createdAt: report.createdAt })),
      reportedAt: comment.reports[comment.reports.length - 1]?.createdAt ?? comment.createdAt,
    });
  }
  items.sort((left, right) => right.reportedAt.localeCompare(left.reportedAt));
  const recent = board.posts
    .filter((post) => !post.removed)
    .slice()
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, 30)
    .map((post) => ({
      id: post.id,
      title: post.title,
      authorUid: post.authorUid,
      authorName: post.authorName,
      locked: Boolean(post.locked),
      score: post.score,
      createdAt: post.createdAt,
    }));
  return {
    reported: items,
    recent,
    bans: board.bans.map((ban) => ({
      uid: ban.uid,
      name: board.accounts[ban.uid]?.name ?? ban.uid,
      createdAt: ban.createdAt,
    })),
  };
}
