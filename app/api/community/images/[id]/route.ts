import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/community/auth";
import { isPostId } from "@/lib/community/shared";
import { readImage } from "@/lib/community/store";
import { isAdminRequest } from "@/lib/map/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!isPostId(id)) return new NextResponse(null, { status: 404 });

  const image = await readImage(id);
  if (!image) return new NextResponse(null, { status: 404 });

  let allowed = image.post.status === "approved" || isAdminRequest(request);
  if (!allowed) {
    const user = await userFromRequest(request);
    allowed = user?.uid === image.post.authorUid;
  }
  if (!allowed) return new NextResponse(null, { status: 404 });

  const headers = new Headers({
    "Content-Type": image.contentType,
    "X-Content-Type-Options": "nosniff",
    "Content-Disposition": "inline",
    "Cache-Control":
      image.post.status === "approved" ? "public, max-age=86400" : "private, no-store",
  });

  return new NextResponse(new Uint8Array(image.bytes), { status: 200, headers });
}
