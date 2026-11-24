import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/community/auth";
import { listOwnPosts } from "@/lib/community/present";
import { CommunityStorageUnavailable } from "@/lib/community/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const user = await userFromRequest(request);
  if (!user) return NextResponse.json({ error: "Sign in to see your posts." }, { status: 401 });

  try {
    const posts = await listOwnPosts(user.uid);
    return NextResponse.json({ posts }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ posts: [] }, { headers: { "Cache-Control": "private, no-store" } });
    }
    console.error("community mine failed");
    return NextResponse.json({ error: "Could not load your posts." }, { status: 500 });
  }
}
