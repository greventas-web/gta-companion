import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { ImageRejected, prepareCommunityImage } from "@/lib/community/images";
import { loadFeed } from "@/lib/community/present";
import { clientIp, contentLength, json } from "@/lib/community/http";
import { parseRange, parseSort } from "@/lib/community/rank";
import {
  CommunityStorageUnavailable,
  accountIsNew,
  communityRateKey,
  communityStorageConfigured,
  createPost,
  type CommunityPost,
} from "@/lib/community/store";
import { MAX_IMAGE_BYTES, isFlair, type StoredImageType } from "@/lib/community/types";
import { parsePostDraft, publicName, tooManyLinks } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const IMAGE_ERROR = "That image must be a JPG, PNG, or WebP, up to 4 MB.";
const POST_LIMIT = 8;
const NEW_POST_LIMIT = 2;
const IP_POST_LIMIT = 12;

export async function GET(request: NextRequest) {
  const user = await userFromRequest(request);
  const sort = parseSort(request.nextUrl.searchParams.get("sort"));
  const range = parseRange(request.nextUrl.searchParams.get("range"));
  const flairParam = request.nextUrl.searchParams.get("flair") ?? "";
  const flair = isFlair(flairParam) ? flairParam : null;
  try {
    const posts = await loadFeed({ sort, range, flair, uid: user?.uid ?? null });
    return json({ posts, storageReady: communityStorageConfigured() });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ posts: [], storageReady: false });
    }
    console.error("community feed failed");
    return json({ error: "Could not load the board." }, 500);
  }
}

export async function POST(request: NextRequest) {
  if (contentLength(request) > MAX_IMAGE_BYTES + 100_000) {
    return json({ error: IMAGE_ERROR }, 413);
  }
  const user = await userFromRequest(request);
  if (!user || !/^[A-Za-z0-9_-]{1,128}$/.test(user.uid)) {
    return json({ error: "Sign in to post." }, 401);
  }
  if (!communityStorageConfigured()) {
    return json({ error: "The board is offline until storage is configured." }, 503);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Send the post as a form." }, 400);
  }

  const uploaded = await readUpload(form.get("image"));
  if (!uploaded.ok) return json({ error: uploaded.error }, uploaded.status);

  const draft = parsePostDraft({
    kind: form.get("kind"),
    flair: form.get("flair"),
    title: form.get("title"),
    body: form.get("body"),
    linkUrl: form.get("linkUrl"),
    hasImage: Boolean(uploaded.image),
  });
  if (!draft.ok) return json({ error: draft.error }, 400);

  let isNew = true;
  try {
    isNew = await accountIsNew(user.uid);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "The board is offline until storage is configured." }, 503);
    }
    throw error;
  }
  if (tooManyLinks(draft.value.body, draft.value.linkUrl, isNew)) {
    return json({ error: "New accounts can share one link at a time." }, 400);
  }

  const imageId = crypto.randomUUID();
  const post: CommunityPost = {
    id: crypto.randomUUID(),
    kind: draft.value.kind,
    flair: draft.value.flair,
    title: draft.value.title,
    body: draft.value.body,
    linkUrl: draft.value.linkUrl,
    authorUid: user.uid,
    authorName: publicName(user.displayName),
    createdAt: new Date().toISOString(),
    score: 0,
    votes: {},
    image: uploaded.image
      ? { id: imageId, contentType: uploaded.image.contentType, bytes: uploaded.image.data.length }
      : null,
    reports: [],
  };

  try {
    const result = await createPost(
      post,
      [
        { key: communityRateKey("post-user", user.uid), max: isNew ? NEW_POST_LIMIT : POST_LIMIT },
        { key: communityRateKey("post-ip", clientIp(request)), max: IP_POST_LIMIT },
      ],
      uploaded.image?.data ?? null
    );
    if (result === "limited") return json({ error: "Too many posts. Try again in a little while." }, 429);
    if (result === "full") return json({ error: "The board is full right now." }, 503);
    if (result === "banned") return json({ error: "This account can't post right now." }, 403);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "The board is offline until storage is configured." }, 503);
    }
    console.error("community post failed");
    return json({ error: "Could not save that post." }, 500);
  }

  return json({ ok: true, id: post.id });
}

async function readUpload(entry: FormDataEntryValue | null): Promise<
  | { ok: true; image: null }
  | { ok: true; image: { data: Buffer; contentType: StoredImageType } }
  | { ok: false; error: string; status: number }
> {
  if (entry == null || entry === "") return { ok: true, image: null };
  if (typeof entry === "string") return { ok: false, error: IMAGE_ERROR, status: 400 };
  if (entry.size === 0) return { ok: true, image: null };
  if (entry.size > MAX_IMAGE_BYTES) return { ok: false, error: IMAGE_ERROR, status: 413 };
  const data = Buffer.from(await entry.arrayBuffer());
  if (data.length > MAX_IMAGE_BYTES) return { ok: false, error: IMAGE_ERROR, status: 413 };
  try {
    const prepared = await prepareCommunityImage(data);
    return { ok: true, image: prepared };
  } catch (error) {
    if (error instanceof ImageRejected) return { ok: false, error: IMAGE_ERROR, status: 400 };
    return { ok: false, error: IMAGE_ERROR, status: 400 };
  }
}
