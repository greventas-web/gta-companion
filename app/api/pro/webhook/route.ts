import { NextResponse, type NextRequest } from "next/server";
import { grantPro, revokePro } from "@/lib/pro/server/store";
import {
  retrievePaymentIntentUid,
  sessionGrantsPro,
  verifyStripeSignature,
  type CheckoutSession,
} from "@/lib/pro/server/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Stripe webhook. In the Stripe dashboard (test mode) add an endpoint for
 * https://<site>/api/pro/webhook with these events:
 *   checkout.session.completed
 *   checkout.session.async_payment_succeeded
 *   charge.refunded
 * and put its signing secret in STRIPE_WEBHOOK_SECRET.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret) return NextResponse.json({ error: "Webhook not configured." }, { status: 503 });

  const payload = await request.text();
  if (!verifyStripeSignature(payload, request.headers.get("stripe-signature"), secret)) {
    return NextResponse.json({ error: "Bad signature." }, { status: 400 });
  }

  let event: { type?: string; data?: { object?: unknown } };
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "Bad payload." }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": {
        const session = event.data?.object as CheckoutSession;
        if (session && sessionGrantsPro(session)) {
          await grantPro({
            uid: (session.client_reference_id || session.metadata?.uid)!,
            email: session.customer_details?.email ?? session.customer_email ?? null,
            source: "stripe",
            sessionId: session.id,
            paymentIntent: session.payment_intent ?? undefined,
            amountTotal: session.amount_total ?? undefined,
            currency: session.currency ?? undefined,
            livemode: session.livemode,
            termsOfService: "accepted",
          });
        }
        break;
      }
      case "charge.refunded": {
        const charge = event.data?.object as { refunded?: boolean; payment_intent?: string | null };
        if (charge?.refunded && charge.payment_intent) {
          const uid = await retrievePaymentIntentUid(charge.payment_intent);
          if (uid) await revokePro(uid, charge.payment_intent);
        }
        break;
      }
      default:
        break;
    }
  } catch {
    // Let Stripe retry.
    return NextResponse.json({ error: "Could not record the event." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
