import type { NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/map/admin";
import { loadAdminQueue } from "@/lib/community/feed";
import { json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  deletePost,
  setPostStatus,
} from "@/lib/community/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return json({ error: "Sign in required." }, 401);
  try {
    const posts = await loadAdminQueue();
    return json({ posts });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "Sharing is offline until storage is configured." }, 503);
    }
    console.error("community queue failed");
    return json({ error: "Could not load the queue." }, 500);
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return json({ error: "Sign in required." }, 401);

  let body: { id?: unknown; action?: unknown };
  try {
    body = (await request.json()) as { id?: unknown; action?: unknown };
  } catch {
    return json({ error: "Missing review." }, 400);
  }

  if (typeof body.id !== "string") return json({ error: "Missing review." }, 400);
  if (body.action !== "approve" && body.action !== "reject" && body.action !== "delete") {
    return json({ error: "Choose approve, reject, or delete." }, 400);
  }

  try {
    if (body.action === "delete") {
      const removed = await deletePost(body.id);
      if (!removed) return json({ error: "Post not found." }, 404);
      return json({ ok: true });
    }
    const updated = await setPostStatus(body.id, body.action === "approve" ? "approved" : "rejected");
    if (!updated) return json({ error: "Post not found." }, 404);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "Sharing is offline until storage is configured." }, 503);
    }
    console.error("community moderation failed");
    return json({ error: "Could not update that post." }, 500);
  }
}
