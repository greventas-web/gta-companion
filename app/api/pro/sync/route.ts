import { NextResponse, type NextRequest } from "next/server";
import { parseMarks } from "@/lib/pro/marks";
import { userFromRequest } from "@/lib/pro/server/auth";
import { isPro, mergeProgress, ProStorageUnavailable, readProgress } from "@/lib/pro/server/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "private, no-store" };
const MAX_BODY = 1_000_000;

async function proUser(request: NextRequest) {
  const user = await userFromRequest(request);
  if (!user) return { error: NextResponse.json({ error: "Sign in first." }, { status: 401, headers: NO_STORE }) };
  if (!(await isPro(user.uid))) {
    return { error: NextResponse.json({ error: "Cloud sync is part of Pro." }, { status: 402, headers: NO_STORE }) };
  }
  return { user };
}

function failure(error: unknown) {
  const status = error instanceof ProStorageUnavailable ? 503 : 500;
  return NextResponse.json({ error: "Sync is not available right now." }, { status, headers: NO_STORE });
}

export async function GET(request: NextRequest) {
  try {
    const result = await proUser(request);
    if (result.error) return result.error;
    return NextResponse.json({ marks: await readProgress(result.user.uid) }, { headers: NO_STORE });
  } catch (error) {
    return failure(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const result = await proUser(request);
    if (result.error) return result.error;
    const text = await request.text();
    if (text.length > MAX_BODY) {
      return NextResponse.json({ error: "Too many marks." }, { status: 413, headers: NO_STORE });
    }
    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "Send marks as JSON." }, { status: 400, headers: NO_STORE });
    }
    const marks = parseMarks((body as { marks?: unknown })?.marks);
    if (!marks) {
      return NextResponse.json({ error: "Send marks as JSON." }, { status: 400, headers: NO_STORE });
    }
    const merged = await mergeProgress(result.user.uid, marks);
    return NextResponse.json({ marks: merged }, { headers: NO_STORE });
  } catch (error) {
    return failure(error);
  }
}
