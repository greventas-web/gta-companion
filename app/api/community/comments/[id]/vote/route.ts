import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { json } from "@/lib/community/http";
import { CommunityStorageUnavailable, isRecordId, voteOnComment } from "@/lib/community/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Comment not found." }, 404);
  const user = await userFromRequest(request);
  if (!user) return json({ error: "Sign in to vote." }, 401);
  let value: -1 | 0 | 1 = 0;
  try {
    const body = (await request.json()) as { value?: unknown };
    if (body.value === 1 || body.value === -1 || body.value === 0) value = body.value;
    else return json({ error: "Choose up, down, or clear." }, 400);
  } catch {
    return json({ error: "Choose up, down, or clear." }, 400);
  }
  try {
    const result = await voteOnComment(id, user.uid, value);
    if (result === "missing") return json({ error: "Comment not found." }, 404);
    if (result === "banned") return json({ error: "This account can't vote right now." }, 403);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community comment vote failed");
    return json({ error: "Could not save that vote." }, 500);
  }
}
