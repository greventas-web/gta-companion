import { createHmac, timingSafeEqual } from "node:crypto";
import { PRO_NAME, PRO_PRICES, type ProCurrency } from "@/lib/pro/config";

/**
 * Stripe Checkout over Stripe's REST API (no SDK dependency).
 *
 * Env vars (set in Vercel, never commit them):
 *   STRIPE_SECRET_KEY         sk_test_... (test mode). Live keys are refused
 *                             unless PRO_ALLOW_LIVE_PAYMENTS=1.
 *   STRIPE_WEBHOOK_SECRET     whsec_... for /api/pro/webhook.
 *   STRIPE_PRO_PRICE_ID_EUR   optional price_... for €4.99. STRIPE_PRO_PRICE_ID
 *                             is still accepted as the EUR price.
 *   STRIPE_PRO_PRICE_ID_USD   optional price_... for $4.99.
 *   STRIPE_PRO_PRICE_ID_GBP   optional price_... for £4.49.
 *   STRIPE_AUTOMATIC_TAX      optional "1" to turn on Stripe Tax (needs Stripe Tax set up).
 *
 * With no price id for the chosen currency, Checkout gets price_data in that
 * currency at the fixed amount in PRO_PRICES. A price id must itself be in
 * that currency.
 */

function priceIdFor(currency: ProCurrency): string | null {
  const fromEnv =
    currency === "eur"
      ? process.env.STRIPE_PRO_PRICE_ID_EUR || process.env.STRIPE_PRO_PRICE_ID
      : currency === "usd"
        ? process.env.STRIPE_PRO_PRICE_ID_USD
        : process.env.STRIPE_PRO_PRICE_ID_GBP;
  const value = fromEnv?.trim();
  return value || null;
}

const API = "https://api.stripe.com/v1";
export const PRO_PRODUCT_TAG = "gta6-pro";

export function stripeSecretKey(): string | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return null;
  const live = key.startsWith("sk_live_") || key.startsWith("rk_live_");
  if (live && process.env.PRO_ALLOW_LIVE_PAYMENTS !== "1") return null;
  return key;
}

export function paymentsConfigured(): boolean {
  return stripeSecretKey() !== null;
}

async function stripe<T>(method: "GET" | "POST", pathName: string, params?: URLSearchParams): Promise<T> {
  const key = stripeSecretKey();
  if (!key) throw new Error("Stripe is not configured.");
  const response = await fetch(`${API}${pathName}`, {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "Stripe-Version": "2024-06-20",
    },
    body: method === "POST" ? params?.toString() : undefined,
    cache: "no-store",
  });
  const body = (await response.json().catch(() => null)) as (T & { error?: { message?: string } }) | null;
  if (!response.ok || !body) {
    throw new Error(body?.error?.message || `Stripe request failed (${response.status}).`);
  }
  return body;
}

export type CheckoutSession = {
  id: string;
  url: string | null;
  status: string | null;
  payment_status: "paid" | "unpaid" | "no_payment_required";
  client_reference_id: string | null;
  customer_details?: { email?: string | null } | null;
  customer_email?: string | null;
  payment_intent: string | null;
  amount_total: number | null;
  currency: string | null;
  livemode: boolean;
  metadata?: Record<string, string> | null;
};

export async function createCheckoutSession(input: {
  uid: string;
  email: string | null;
  origin: string;
  currency: ProCurrency;
  /** Buyer asked for immediate delivery and accepted the withdrawal waiver. */
  withdrawalWaiver: boolean;
}): Promise<CheckoutSession> {
  if (!input.withdrawalWaiver) {
    throw new Error("Immediate-delivery consent is required.");
  }
  const price = PRO_PRICES[input.currency];
  const params = new URLSearchParams();
  params.set("mode", "payment");
  const priceId = priceIdFor(input.currency);
  if (priceId) {
    params.set("line_items[0][price]", priceId);
  } else {
    params.set("line_items[0][price_data][currency]", price.code);
    params.set("line_items[0][price_data][unit_amount]", String(price.cents));
    params.set("line_items[0][price_data][product_data][name]", `${PRO_NAME} (unofficial fan tool)`);
    params.set(
      "line_items[0][price_data][product_data][description]",
      "No ads, cloud sync, progress %, near-me map filter, unlimited marks. One-time."
    );
  }
  params.set("line_items[0][quantity]", "1");
  params.set("client_reference_id", input.uid);
  params.set("metadata[uid]", input.uid);
  params.set("metadata[product]", PRO_PRODUCT_TAG);
  params.set("metadata[currency]", price.code);
  params.set("metadata[withdrawal_waiver]", "immediate-digital-delivery");
  params.set("payment_intent_data[metadata][uid]", input.uid);
  params.set("payment_intent_data[metadata][product]", PRO_PRODUCT_TAG);
  params.set("payment_intent_data[metadata][currency]", price.code);
  params.set("payment_intent_data[metadata][withdrawal_waiver]", "immediate-digital-delivery");
  if (input.email) {
    params.set("customer_email", input.email);
    params.set("payment_intent_data[receipt_email]", input.email);
  }
  params.set("success_url", `${input.origin}/pro?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${input.origin}/pro?checkout=cancel`);
  if (process.env.STRIPE_AUTOMATIC_TAX === "1") {
    params.set("automatic_tax[enabled]", "true");
    params.set("billing_address_collection", "required");
  }
  return stripe<CheckoutSession>("POST", "/checkout/sessions", params);
}

export async function retrieveCheckoutSession(id: string): Promise<CheckoutSession> {
  if (!/^cs_[A-Za-z0-9_]+$/.test(id)) throw new Error("Bad session id.");
  return stripe<CheckoutSession>("GET", `/checkout/sessions/${id}`);
}

export async function retrievePaymentIntentUid(id: string): Promise<string | null> {
  if (!/^pi_[A-Za-z0-9_]+$/.test(id)) return null;
  const intent = await stripe<{ metadata?: Record<string, string> }>("GET", `/payment_intents/${id}`);
  return intent.metadata?.product === PRO_PRODUCT_TAG ? intent.metadata.uid ?? null : null;
}

/** True when this paid session is for Pro and belongs to uid. */
export function sessionGrantsPro(session: CheckoutSession, uid?: string): boolean {
  if (session.payment_status !== "paid") return false;
  if (session.metadata?.product !== PRO_PRODUCT_TAG) return false;
  const owner = session.client_reference_id || session.metadata?.uid;
  if (!owner) return false;
  return uid ? owner === uid : true;
}

/** Verifies the Stripe-Signature header (v1, HMAC-SHA256, 5 minute tolerance). */
export function verifyStripeSignature(payload: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  let timestamp = "";
  const signatures: string[] = [];
  for (const part of header.split(",")) {
    const [key, value] = part.split("=", 2);
    if (key === "t") timestamp = value ?? "";
    if (key === "v1" && value) signatures.push(value);
  }
  const seconds = Number(timestamp);
  if (!timestamp || !Number.isFinite(seconds) || signatures.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - seconds) > 300) return false;
  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`, "utf8").digest();
  return signatures.some((signature) => {
    const given = Buffer.from(signature, "hex");
    return given.length === expected.length && timingSafeEqual(given, expected);
  });
}
