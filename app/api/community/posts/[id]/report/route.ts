import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/community/auth";
import { isPostId } from "@/lib/community/shared";
import { addReport, CommunityStorageUnavailable } from "@/lib/community/store";
import { parseReportReason } from "@/lib/community/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const user = await userFromRequest(request);
  if (!user) return NextResponse.json({ error: "Sign in to report a post." }, { status: 401 });

  const { id } = await context.params;
  if (!isPostId(id)) return NextResponse.json({ error: "Post not found." }, { status: 404 });

  let reason: unknown = "";
  try {
    const body = (await request.json()) as { reason?: unknown };
    reason = body.reason;
  } catch {
    reason = "";
  }
  const parsed = parseReportReason(reason);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });

  try {
    const result = await addReport(id, user.uid, parsed.reason);
    if (result === "missing" || result === "not-public") {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    if (result === "own") {
      return NextResponse.json({ error: "You cannot report your own post." }, { status: 400 });
    }
    if (result === "duplicate") {
      return NextResponse.json({ error: "You already reported this post." }, { status: 409 });
    }
    if (result === "limited") {
      return NextResponse.json(
        { error: "You have sent several reports this hour. Try again later." },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }
  } catch (error) {
    if (error instanceof CommunityStorageUnavailable) {
      return NextResponse.json({ error: "Reports are offline right now." }, { status: 503 });
    }
    console.error("community report failed");
    return NextResponse.json({ error: "Could not save that report." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
