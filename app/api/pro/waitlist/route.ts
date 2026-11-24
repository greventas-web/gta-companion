import { NextResponse, type NextRequest } from "next/server";
import { addWaitlistSignup, ProStorageUnavailable } from "@/lib/pro/server/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "private, no-store" };
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) return null;
  return email;
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (forwarded || request.headers.get("x-real-ip") || "local").slice(0, 80);
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  if (hits.size > 5000) {
    for (const [key, stamps] of hits) {
      if (stamps.every((stamp) => now - stamp >= WINDOW_MS)) hits.delete(key);
    }
  }
  hits.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429, headers: NO_STORE });
  }

  const payload = (await request.json().catch(() => null)) as { email?: unknown; company?: unknown } | null;
  if (typeof payload?.company === "string" && payload.company.trim()) {
    return NextResponse.json({ ok: true }, { headers: NO_STORE });
  }

  const email = normalizeEmail(payload?.email);
  if (!email) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400, headers: NO_STORE });
  }

  try {
    await addWaitlistSignup(email);
    return NextResponse.json({ ok: true }, { headers: NO_STORE });
  } catch (error) {
    if (error instanceof ProStorageUnavailable) {
      return NextResponse.json({ error: "Signups are not available yet." }, { status: 503, headers: NO_STORE });
    }
    return NextResponse.json({ error: "Could not save that email. Try again." }, { status: 500, headers: NO_STORE });
  }
}
