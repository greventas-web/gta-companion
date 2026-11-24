import type { NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { loadProfile } from "@/lib/community/present";
import { json } from "@/lib/community/http";
import { CommunityStorageUnavailable, isUid } from "@/lib/community/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest, context: { params: Promise<{ uid: string }> }) {
  const { uid } = await context.params;
  if (!isUid(uid)) return json({ error: "Member not found." }, 404);
  const viewer = await userFromRequest(request);
  try {
    const profile = await loadProfile(uid, viewer?.uid ?? null);
    return json(profile);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "The board is offline." }, 503);
    console.error("community profile failed");
    return json({ error: "Could not load that member." }, 500);
  }
}
