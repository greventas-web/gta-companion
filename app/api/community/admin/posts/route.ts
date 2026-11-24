import { NextResponse, type NextRequest } from "next/server";
import { listAdminPosts } from "@/lib/community/present";
import { isPostId } from "@/lib/community/shared";
import {
  CommunityStorageUnavailable,
  deletePost,
  setPostStatus,
} from "@/lib/community/store";
import { isAdminRequest } from "@/lib/map/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function denied() {
  return NextResponse.json({ error: "Sign in required." }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return denied();
  try {
    const posts = await listAdminPosts();
    return NextResponse.json({ posts }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ error: "Posting storage is not configured." }, { status: 503 });
    }
    console.error("community admin list failed");
    return NextResponse.json({ error: "Could not load the queue." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return denied();

  let body: { id?: unknown; action?: unknown };
  try {
    body = (await request.json()) as { id?: unknown; action?: unknown };
  } catch {
    return NextResponse.json({ error: "Missing review." }, { status: 400 });
  }

  if (typeof body.id !== "string" || !isPostId(body.id)) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  if (body.action !== "approve" && body.action !== "reject" && body.action !== "delete") {
    return NextResponse.json({ error: "Choose approve, reject, or delete." }, { status: 400 });
  }

  try {
    if (body.action === "delete") {
      const removed = await deletePost(body.id);
      if (!removed) return NextResponse.json({ error: "Post not found." }, { status: 404 });
      return NextResponse.json({ ok: true });
    }
    const updated = await setPostStatus(body.id, body.action === "approve" ? "approved" : "rejected");
    if (!updated) return NextResponse.json({ error: "Post not found." }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ error: "Posting storage is not configured." }, { status: 503 });
    }
    console.error("community moderation failed");
    return NextResponse.json({ error: "Could not update that post." }, { status: 500 });
  }
}
