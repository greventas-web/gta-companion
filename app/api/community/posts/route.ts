import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/community/auth";
import { prepareImage } from "@/lib/community/image";
import { categoryFromQuery, listPublicPosts } from "@/lib/community/present";
import { LIMITS } from "@/lib/community/shared";
import { addPost, CommunityStorageUnavailable, type CommunityPost } from "@/lib/community/store";
import { parsePostFields } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PUBLIC_CACHE = "public, s-maxage=30, stale-while-revalidate=120";

export async function GET(request: NextRequest) {
  try {
    const posts = await listPublicPosts(categoryFromQuery(request.nextUrl.searchParams.get("category")));
    return NextResponse.json({ posts }, { headers: { "Cache-Control": PUBLIC_CACHE } });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ posts: [] }, { headers: { "Cache-Control": "no-store" } });
    }
    console.error("community list failed");
    return NextResponse.json({ error: "Could not load posts." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await userFromRequest(request);
  if (!user) return NextResponse.json({ error: "Sign in to post." }, { status: 401 });

  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > LIMITS.imageBytes + 80_000) {
    return NextResponse.json({ error: "Use a JPEG, PNG, or WebP image up to 3 MB." }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Send the post as a form." }, { status: 400 });
  }

  const upload = form.get("image");
  const file = upload && typeof upload !== "string" ? upload : null;
  const hasImage = Boolean(file && file.size > 0);
  if (file && file.size > LIMITS.imageBytes) {
    return NextResponse.json({ error: "Use a JPEG, PNG, or WebP image up to 3 MB." }, { status: 413 });
  }

  const parsed = parsePostFields({
    category: form.get("category"),
    title: form.get("title"),
    body: form.get("body"),
    credit: form.get("credit"),
    hasImage,
  });
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: parsed.status });

  let image: { bytes: Buffer; contentType: "image/webp" } | undefined;
  if (hasImage && file) {
    const prepared = await prepareImage(new Uint8Array(await file.arrayBuffer()));
    if (!prepared.ok) return NextResponse.json({ error: prepared.error }, { status: 400 });
    image = { bytes: prepared.bytes, contentType: prepared.contentType };
  }

  const post: CommunityPost = {
    id: crypto.randomUUID(),
    status: "pending",
    category: parsed.value.category,
    title: parsed.value.title,
    body: parsed.value.body,
    authorUid: user.uid,
    authorName: user.name,
    createdAt: new Date().toISOString(),
    imageContentType: image?.contentType,
    imageBytes: image?.bytes.byteLength,
    imageConsent: parsed.value.imageConsent,
    reports: [],
  };

  try {
    const result = await addPost(post, image);
    if (result === "limited") {
      return NextResponse.json(
        { error: "You have shared several posts this hour. Try again in a little while." },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }
    if (result === "too-many-pending") {
      return NextResponse.json(
        { error: "You already have posts waiting for review." },
        { status: 429 }
      );
    }
    if (result === "full") {
      return NextResponse.json(
        { error: "The review queue is full right now. Try again later." },
        { status: 503 }
      );
    }
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ error: "Posting is offline right now." }, { status: 503 });
    }
    console.error("community post failed");
    return NextResponse.json({ error: "Could not save that post." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: post.id, status: "pending" });
}
