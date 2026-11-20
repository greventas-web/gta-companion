import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { isPro, proStorageConfigured } from "@/lib/pro/server/store";
import { createCheckoutSession, paymentsConfigured } from "@/lib/pro/server/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "private, no-store" };

function siteOrigin(request: NextRequest): string {
  const configured = process.env.PRO_SITE_URL?.trim().replace(/\/$/, "");
  return configured || request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  const user = await userFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in first." }, { status: 401, headers: NO_STORE });
  }
  if (!paymentsConfigured() || !proStorageConfigured()) {
    return NextResponse.json({ error: "Checkout is not open yet." }, { status: 503, headers: NO_STORE });
  }
  try {
    if (await isPro(user.uid)) {
      return NextResponse.json({ pro: true }, { headers: NO_STORE });
    }
    const session = await createCheckoutSession({
      uid: user.uid,
      email: user.email,
      origin: siteOrigin(request),
    });
    if (!session.url) throw new Error("No checkout URL.");
    return NextResponse.json({ url: session.url }, { headers: NO_STORE });
  } catch {
    return NextResponse.json({ error: "Could not start checkout." }, { status: 502, headers: NO_STORE });
  }
}
