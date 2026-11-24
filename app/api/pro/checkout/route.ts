import { NextResponse, type NextRequest } from "next/server";
import { isProCurrency, PRO_CURRENCY, type ProCurrency } from "@/lib/pro/config";
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
  const payload = (await request.json().catch(() => null)) as { currency?: unknown; withdrawalWaiver?: unknown } | null;
  if (payload?.currency !== undefined && !isProCurrency(payload.currency)) {
    return NextResponse.json({ error: "Choose EUR, USD, or GBP." }, { status: 400, headers: NO_STORE });
  }
  if (payload?.withdrawalWaiver !== true) {
    return NextResponse.json(
      { error: "Confirm immediate delivery to continue." },
      { status: 400, headers: NO_STORE }
    );
  }
  const currency: ProCurrency = isProCurrency(payload.currency) ? payload.currency : PRO_CURRENCY;
  try {
    if (await isPro(user.uid)) {
      return NextResponse.json({ pro: true }, { headers: NO_STORE });
    }
    const session = await createCheckoutSession({
      uid: user.uid,
      email: user.email,
      origin: siteOrigin(request),
      currency,
      withdrawalWaiver: true,
    });
    if (!session.url) throw new Error("No checkout URL.");
    return NextResponse.json({ url: session.url }, { headers: NO_STORE });
  } catch {
    return NextResponse.json({ error: "Could not start checkout." }, { status: 502, headers: NO_STORE });
  }
}
