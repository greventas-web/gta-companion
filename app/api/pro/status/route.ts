import { NextResponse, type NextRequest } from "next/server";
import { userFromRequest } from "@/lib/pro/server/auth";
import { getEntitlement, grantPro, proStorageConfigured } from "@/lib/pro/server/store";
import { paymentsConfigured, retrieveCheckoutSession, sessionGrantsPro } from "@/lib/pro/server/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "private, no-store" };

/**
 * Pro status for the signed-in user. After Stripe sends the buyer back with
 * ?session_id=cs_..., the session is checked with Stripe and Pro is granted
 * right away, so the page does not wait on the webhook.
 */
export async function GET(request: NextRequest) {
  const ready = paymentsConfigured() && proStorageConfigured();
  const user = await userFromRequest(request);
  if (!user) {
    return NextResponse.json({ signedIn: false, pro: false, ready }, { headers: NO_STORE });
  }

  try {
    let entitlement = await getEntitlement(user.uid);
    const sessionId = request.nextUrl.searchParams.get("session_id");
    if (!entitlement?.pro && sessionId && paymentsConfigured()) {
      const session = await retrieveCheckoutSession(sessionId);
      if (sessionGrantsPro(session, user.uid)) {
        entitlement = await grantPro({
          uid: user.uid,
          email: session.customer_details?.email ?? user.email,
          source: "stripe",
          sessionId: session.id,
          paymentIntent: session.payment_intent ?? undefined,
          amountTotal: session.amount_total ?? undefined,
          currency: session.currency ?? undefined,
          livemode: session.livemode,
        });
      }
    }
    return NextResponse.json(
      {
        signedIn: true,
        pro: Boolean(entitlement?.pro),
        since: entitlement?.pro ? entitlement.grantedAt : null,
        ready,
      },
      { headers: NO_STORE }
    );
  } catch {
    return NextResponse.json(
      { signedIn: true, pro: false, ready, error: "Could not check Pro right now." },
      { status: 503, headers: NO_STORE }
    );
  }
}
