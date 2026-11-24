import { NextResponse, type NextRequest } from "next/server";
import { imageDisposition } from "@/lib/community/images";
import { readBoard, readImageBytes, isRecordId } from "@/lib/community/store";
import type { StoredImageType } from "@/lib/community/types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function storedType(value: string | undefined): StoredImageType | null {
  if (value === "image/jpeg" || value === "image/webp") return value;
  return null;
}

export async function GET(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const missing = () =>
    new NextResponse(null, { status: 404, headers: { "Cache-Control": "private, no-store" } });
  if (!isRecordId(id)) return missing();

  const board = await readBoard().catch(() => null);
  if (!board) return missing();
  const post = board.posts.find((item) => item.image?.id === id && !item.removed);
  const type = storedType(post?.image?.contentType);
  if (!post || !type || board.bans.some((ban) => ban.uid === post.authorUid)) return missing();

  const bytes = await readImageBytes(id);
  if (!bytes) return missing();

  return new NextResponse(new Uint8Array(bytes), {
    headers: {
      "Content-Type": type,
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": imageDisposition(type),
      "Cache-Control": "public, max-age=300",
    },
  });
}
