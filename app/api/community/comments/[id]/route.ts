import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { json } from "@/lib/community/http";
import { CommunityStorageUnavailable, deleteOwnComment, editComment, isRecordId } from "@/lib/community/store";
import { parseCommentBody } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Comment not found." }, 404);
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to edit." }, 401);
  let raw: unknown = "";
  try {
    raw = ((await request.json()) as { body?: unknown }).body;
  } catch {
    return json({ error: "Write a comment." }, 400);
  }
  const parsed = parseCommentBody(raw);
  if (!parsed.ok) return json({ error: parsed.error }, 400);
  try {
    const result = await editComment(id, user.uid, parsed.text);
    if (result === "missing") return json({ error: "Comment not found." }, 404);
    if (result === "forbidden") return json({ error: "You can edit your own comments." }, 403);
    if (result === "banned") return json({ error: "This account can't comment right now." }, 403);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community comment edit failed");
    return json({ error: "Could not save that edit." }, 500);
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Comment not found." }, 404);
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to delete." }, 401);
  try {
    const result = await deleteOwnComment(id, user.uid);
    if (result === "missing") return json({ error: "Comment not found." }, 404);
    if (result === "forbidden") return json({ error: "You can delete your own comments." }, 403);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community comment delete failed");
    return json({ error: "Could not delete that comment." }, 500);
  }
}
