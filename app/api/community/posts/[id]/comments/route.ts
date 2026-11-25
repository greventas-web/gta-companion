import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { clientIp, json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  accountIsNew,
  addComment,
  communityRateKey,
  communityStorageConfigured,
  isRecordId,
  type CommunityComment,
} from "@/lib/community/store";
import { parseCommentBody, publicName } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const COMMENT_LIMIT = 30;
const NEW_COMMENT_LIMIT = 8;
const IP_COMMENT_LIMIT = 40;

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Post not found." }, 404);
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to comment." }, 401);
  if (!communityStorageConfigured()) return json({ error: "The board is offline." }, 503);

  let parentId: string | null = null;
  let rawBody: unknown = "";
  try {
    const body = (await request.json()) as { body?: unknown; parentId?: unknown };
    rawBody = body.body;
    if (typeof body.parentId === "string" && body.parentId) {
      if (!isRecordId(body.parentId)) return json({ error: "Comment not found." }, 404);
      parentId = body.parentId;
    }
  } catch {
    return json({ error: "Write a comment." }, 400);
  }
  const parsed = parseCommentBody(rawBody);
  if (!parsed.ok) return json({ error: parsed.error }, 400);

  let isNew = true;
  try {
    isNew = await accountIsNew(user.uid);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    throw error;
  }

  const comment: CommunityComment = {
    id: crypto.randomUUID(),
    postId: id,
    parentId,
    authorUid: user.uid,
    authorName: publicName(user.displayName),
    body: parsed.text,
    createdAt: new Date().toISOString(),
    score: 0,
    votes: {},
    reports: [],
  };

  try {
    const result = await addComment(comment, [
      { key: communityRateKey("comment-user", user.uid), max: isNew ? NEW_COMMENT_LIMIT : COMMENT_LIMIT },
      { key: communityRateKey("comment-ip", clientIp(request)), max: IP_COMMENT_LIMIT },
    ]);
    if (result === "missing") return json({ error: "Post not found." }, 404);
    if (result === "locked") return json({ error: "This thread is locked." }, 403);
    if (result === "limited") return json({ error: "Too many comments. Try again in a little while." }, 429);
    if (result === "full") return json({ error: "The board is full right now." }, 503);
    if (result === "banned") return json({ error: "This account can't comment right now." }, 403);
    return json({ ok: true, id: comment.id });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community comment failed");
    return json({ error: "Could not save that comment." }, 500);
  }
}
