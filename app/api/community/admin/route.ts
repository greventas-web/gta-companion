import type { NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/map/admin";
import { loadAdminQueue } from "@/lib/community/present";
import { json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  adminRemoveComment,
  adminRemovePost,
  banUser,
  setPostLocked,
  unbanUser,
} from "@/lib/community/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return json({ error: "Sign in required." }, 401);
  try {
    return json(await loadAdminQueue());
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community admin failed");
    return json({ error: "Could not load moderation." }, 500);
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return json({ error: "Sign in required." }, 401);
  let body: { action?: unknown; id?: unknown; uid?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ error: "Missing action." }, 400);
  }
  const action = body.action;
  try {
    if (action === "remove-post" && typeof body.id === "string") {
      const ok = await adminRemovePost(body.id);
      return ok ? json({ ok: true }) : json({ error: "Post not found." }, 404);
    }
    if (action === "remove-comment" && typeof body.id === "string") {
      const ok = await adminRemoveComment(body.id);
      return ok ? json({ ok: true }) : json({ error: "Comment not found." }, 404);
    }
    if ((action === "lock" || action === "unlock") && typeof body.id === "string") {
      const ok = await setPostLocked(body.id, action === "lock");
      return ok ? json({ ok: true }) : json({ error: "Post not found." }, 404);
    }
    if (action === "ban" && typeof body.uid === "string") {
      const ok = await banUser(body.uid);
      return ok ? json({ ok: true }) : json({ error: "Could not ban that account." }, 400);
    }
    if (action === "unban" && typeof body.uid === "string") {
      await unbanUser(body.uid);
      return json({ ok: true });
    }
    return json({ error: "Unknown action." }, 400);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community moderation failed");
    return json({ error: "Could not update that." }, 500);
  }
}
