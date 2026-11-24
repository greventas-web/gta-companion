import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { loadThread } from "@/lib/community/present";
import { json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  deleteOwnPost,
  editPost,
  isRecordId,
} from "@/lib/community/store";
import { parsePostDraft, publicName } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Post not found." }, 404);
  const user = await userFromRequest(request);
  try {
    const thread = await loadThread(id, user?.uid ?? null);
    if (!thread) return json({ error: "Post not found." }, 404);
    return json(thread);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community thread failed");
    return json({ error: "Could not load that post." }, 500);
  }
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to edit." }, 401);
  let body: { title?: unknown; body?: unknown; flair?: unknown; linkUrl?: unknown; kind?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ error: "Missing edit." }, 400);
  }
  const draft = parsePostDraft({
    kind: body.kind,
    flair: body.flair,
    title: body.title,
    body: body.body,
    linkUrl: body.linkUrl,
    hasImage: true,
  });
  if (!draft.ok) return json({ error: draft.error }, 400);
  try {
    const result = await editPost(id, user.uid, {
      title: draft.value.title,
      body: draft.value.body,
      flair: draft.value.flair,
      linkUrl: draft.value.linkUrl,
    });
    if (result === "missing") return json({ error: "Post not found." }, 404);
    if (result === "forbidden") return json({ error: "You can edit your own posts." }, 403);
    if (result === "banned") return json({ error: "This account can't post right now." }, 403);
    return json({ ok: true, authorName: publicName(user.displayName) });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community edit failed");
    return json({ error: "Could not save that edit." }, 500);
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to delete." }, 401);
  try {
    const result = await deleteOwnPost(id, user.uid);
    if (result === "missing") return json({ error: "Post not found." }, 404);
    if (result === "forbidden") return json({ error: "You can delete your own posts." }, 403);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community delete failed");
    return json({ error: "Could not delete that post." }, 500);
  }
}
