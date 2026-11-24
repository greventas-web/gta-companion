import type { NextRequest } from "next/server";
import { clientIp, contentLength, json } from "@/lib/community/http";
import {
  CommunityStorageUnavailable,
  addReport,
  communityRateKey,
  isRecordId,
} from "@/lib/community/store";
import { parseReportReason } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (contentLength(request) > 8_000) {
    return json({ error: "That report is too long." }, 413);
  }

  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Post not found." }, 404);

  let reason: string | null = null;
  try {
    const body = (await request.json()) as { reason?: unknown };
    reason = parseReportReason(body.reason);
  } catch {
    reason = null;
  }
  if (!reason) return json({ error: "Add a short reason for the report." }, 400);

  try {
    const result = await addReport(
      id,
      {
        id: crypto.randomUUID(),
        reason,
        createdAt: new Date().toISOString(),
        reporterKey: communityRateKey("report", clientIp(request)),
      },
      communityRateKey("report", clientIp(request))
    );
    if (result === "missing") return json({ error: "Post not found." }, 404);
    if (result === "duplicate") return json({ error: "You already reported this post." }, 409);
    if (result === "limited") {
      return json({ error: "Too many reports from this network. Try again later." }, 429);
    }
    if (result === "closed") return json({ error: "That post already has enough reports." }, 409);
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return json({ error: "Reports are offline until storage is configured." }, 503);
    }
    console.error("community report failed");
    return json({ error: "Could not save that report." }, 500);
  }

  return json({ ok: true });
}
