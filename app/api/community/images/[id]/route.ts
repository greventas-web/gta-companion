import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/map/admin";
import { imageIsPublic } from "@/lib/community/feed";
import { listPosts, readImageBytes, isRecordId } from "@/lib/community/store";
import type { ImageContentType } from "@/lib/community/types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function imageType(value: string | undefined): ImageContentType | null {
  if (value === "image/jpeg" || value === "image/png" || value === "image/webp") return value;
  return null;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const missing = () =>
    new NextResponse(null, { status: 404, headers: { "Cache-Control": "private, no-store" } });

  if (!isRecordId(id)) return missing();

  const posts = await listPosts().catch(() => null);
  if (!posts) return missing();
  const post = posts.find((item) => item.image?.id === id);
  const type = imageType(post?.image?.contentType);
  if (!post || !type) return missing();

  const admin = isAdminRequest(request);
  if (!imageIsPublic(post.status) && !admin) return missing();

  const bytes = await readImageBytes(id);
  if (!bytes) return missing();

  return new NextResponse(new Uint8Array(bytes), {
    headers: {
      "Content-Type": type,
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
      "Cache-Control": "private, no-store",
    },
  });
}
