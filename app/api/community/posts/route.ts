import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { loadFeedForUser } from "@/lib/community/feed";
import { contentLength, json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  addPost,
  communityRateKey,
  communityStorageConfigured,
  type CommunityPost,
} from "@/lib/community/store";
import { MAX_IMAGE_BYTES, type ImageContentType } from "@/lib/community/types";
import { detectImageType, parsePostFields, publicName } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const IMAGE_ERROR = "That image must be a JPG, PNG, or WebP, up to 4 MB.";

export async function GET(request: NextRequest) {
  const user = await userFromRequest(request);
  const feed = await loadFeedForUser(user?.uid ?? null);
  const cache = user ? "private, no-store" : "public, s-maxage=30, stale-while-revalidate=60";
  return json(feed, 200, cache);
}

export async function POST(request: NextRequest) {
  if (contentLength(request) > MAX_IMAGE_BYTES + 100_000) {
    return json({ error: IMAGE_ERROR }, 413);
  }

  const user = await userFromRequest(request);
  if (!user || !/^[A-Za-z0-9_-]{1,128}$/.test(user.uid)) {
    return json({ error: "Sign in to share a post." }, 401);
  }
  if (!communityStorageConfigured()) {
    return json({ error: "Sharing is offline until storage is configured." }, 503);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Send the post as a form." }, 400);
  }

  const parsed = parsePostFields({
    type: form.get("type"),
    title: form.get("title"),
    body: form.get("body"),
  });
  if (!parsed.ok) return json({ error: parsed.error }, 400);

  const uploaded = await readUpload(form.get("image"));
  if (!uploaded.ok) return json({ error: uploaded.error }, 400);

  const post: CommunityPost = {
    id: crypto.randomUUID(),
    type: parsed.value.type,
    status: "pending",
    title: parsed.value.title,
    body: parsed.value.body,
    authorUid: user.uid,
    authorName: publicName(user.displayName),
    image: uploaded.image
      ? { id: uploaded.image.id, contentType: uploaded.image.contentType, bytes: uploaded.image.bytes }
      : null,
    reports: [],
    createdAt: new Date().toISOString(),
  };

  try {
    const result = await addPost(post, communityRateKey("post", user.uid), uploaded.image?.data ?? null);
    if (result === "limited") {
      return json({ error: "Too many posts from this account. Try again in a little while." }, 429);
    }
    if (result === "full") {
      return json({ error: "The review queue is full right now. Try again later." }, 503);
    }
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "Sharing is offline until storage is configured." }, 503);
    }
    console.error("community post failed");
    return json({ error: "Could not save that post." }, 500);
  }

  return json({ ok: true, id: post.id });
}

async function readUpload(entry: FormDataEntryValue | null): Promise<
  | { ok: true; image: null }
  | { ok: true; image: { id: string; contentType: ImageContentType; bytes: number; data: Buffer } }
  | { ok: false; error: string }
> {
  if (entry == null || entry === "") return { ok: true, image: null };
  if (typeof entry === "string") return { ok: false, error: IMAGE_ERROR };
  if (entry.size === 0) return { ok: true, image: null };
  if (entry.size > MAX_IMAGE_BYTES) return { ok: false, error: IMAGE_ERROR };
  const data = Buffer.from(await entry.arrayBuffer());
  const contentType = detectImageType(data);
  if (!contentType) return { ok: false, error: IMAGE_ERROR };
  return {
    ok: true,
    image: { id: crypto.randomUUID(), contentType, bytes: data.length, data },
  };
}
