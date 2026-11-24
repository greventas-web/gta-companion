import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, adminSecret, adminToken, isAdminRequest, secretsMatch } from "@/lib/map/admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const cookie = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 14,
};

export async function GET(request: NextRequest) {
  if (!adminSecret()) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }
  if (!isAdminRequest(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}

export async function POST(request: NextRequest) {
  const secret = adminSecret();
  if (!secret) {
    return NextResponse.json({ error: "Moderation is not configured." }, { status: 503 });
  }

  let presented = "";
  try {
    const body = (await request.json()) as { secret?: unknown };
    if (typeof body.secret === "string") presented = body.secret;
  } catch {
    presented = "";
  }

  if (!presented || !secretsMatch(presented, secret)) {
    return NextResponse.json({ error: "That secret does not match." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, adminToken(secret), cookie);
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", { ...cookie, maxAge: 0 });
  return response;
}
