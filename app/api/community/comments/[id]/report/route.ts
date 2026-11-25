import type { NextRequest } from "next/server";
import { clientIp, contentLength, json } from "@/lib/community/http";
import { CommunityStorageUnavailable, communityRateKey, isRecordId, reportComment } from "@/lib/community/store";
import { parseReportReason } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (contentLength(request) > 8_000) return json({ error: "That report is too long." }, 413);
  const { id } = await context.params;
  if (!isRecordId(id)) return json({ error: "Comment not found." }, 404);
  let reason: string | null = null;
  try {
    reason = parseReportReason(((await request.json()) as { reason?: unknown }).reason);
  } catch {
    reason = null;
  }
  if (!reason) return json({ error: "Add a short reason for the report." }, 400);
  const key = communityRateKey("report", clientIp(request));
  try {
    const result = await reportComment(
      id,
      { id: crypto.randomUUID(), reason, createdAt: new Date().toISOString(), reporterKey: key },
      [{ key, max: 8 }]
    );
    if (result === "missing") return json({ error: "Comment not found." }, 404);
    if (result === "duplicate") return json({ error: "You already reported this." }, 409);
    if (result === "limited") return json({ error: "Too many reports from this network." }, 429);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) return json({ error: "Reports are offline." }, 503);
    console.error("community comment report failed");
    return json({ error: "Could not save that report." }, 500);
  }
}
