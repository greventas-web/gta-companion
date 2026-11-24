# GTA Companion Pro (100% completion tracker)

€4.99 one-time in EUR (the default). The Pro page also offers fixed rounded prices in USD ($4.99) and GBP (£4.49). These are not a live exchange rate. Every guide, pin and checklist stays readable for everyone. Pro adds our own tools only:

| Feature | Where |
|---|---|
| No ads | `components/pro/AdsLoader.tsx`, `html[data-pro="1"]` CSS in `app/globals.css` |
| Cloud sync of tracked marks across devices | `components/pro/ProRuntime.tsx`, `/api/pro/sync` |
| Progress % (per section and overall) | `/pro`, `TrackProgress` badges |
| "What's left near me" map filter | `/map` sidebar (`CommunityMap.tsx`) |
| Unlimited marks (others: 50 per device) | `lib/pro/tracker.ts` (`BASIC_MARK_LIMIT`) |

The brand star other surfaces can reuse is `components/pro/ProBadge.tsx` (`proBrandFill` and `proBrandEdge`).

Prices live in `lib/pro/config.ts` (`PRO_PRICE_CENTS` is 499, the EUR amount). The buyer’s choice is sent to `POST /api/pro/checkout` as `currency` (`eur`, `usd`, or `gbp`). The page defaults to EUR, then picks USD or GBP from the browser locale when the region is one we map (United States and US territories → USD, United Kingdom and Crown Dependencies → GBP, eurozone → EUR). A saved choice on that device wins over the locale.

Checkout is not live. With no Stripe secret key, `/pro` shows **Checkout opening soon** and `/api/pro/checkout` returns 503. Do not tell visitors they can pay.

## How it works

- Login: existing Firebase Auth. API routes take `Authorization: Bearer <Firebase ID token>`
  and verify it with Firebase's `accounts:lookup` endpoint (public web API key, no service account).
- Entitlements and synced progress: private Vercel Blob, one JSON file per user
  (`pro/entitlements/<uid>.json`, `pro/progress/<uid>.json`). Server-side only; the
  client cannot grant itself Pro. Firestore `users/{uid}` is NOT used for the Pro flag
  because the current rules let users update their own doc.
- Payment: Stripe Checkout (REST, no SDK). `/api/pro/checkout` creates the session
  in the currency the buyer picked. A per-currency price id is used when set;
  otherwise `price_data` sends the fixed amount for that currency.
  `/api/pro/webhook` grants on `checkout.session.completed` /
  `checkout.session.async_payment_succeeded` and revokes on a full `charge.refunded`.
  The success page also confirms the session with Stripe directly, so Pro unlocks
  even if the webhook is late.
- Immediate delivery: checkout refuses to start unless `withdrawalWaiver` is true.
  That flag is stored on the Checkout Session and PaymentIntent metadata
  (`withdrawal_waiver=immediate-digital-delivery`). The checkbox is the EU 14-day
  withdrawal waiver for digital content. Draft wording is on `/refunds`.
- Live keys (`sk_live_` / `rk_live_`) are refused unless `PRO_ALLOW_LIVE_PAYMENTS=1`.
- Seller on the draft legal pages: **MB GL Transportation** (Lithuania). Company code
  and registered address are still the placeholders `[company code]` and
  `[registered address]` in `PRO_SELLER`.

## Env var names (Vercel → Project → Settings → Environment Variables)

Set the names below. Do not commit the values.

| Name | Required | What to put |
|---|---|---|
| `STRIPE_SECRET_KEY` | yes, to open checkout | Secret key from Stripe. Use a test key on Preview first. |
| `STRIPE_WEBHOOK_SECRET` | yes, to open checkout | Signing secret of the webhook endpoint below. |
| `PRO_READ_WRITE_TOKEN` | recommended | Token of a **private** Blob store (falls back to `MAP_READ_WRITE_TOKEN`) |
| `STRIPE_PRO_PRICE_ID_EUR` | optional | Price id for the €4.99 one-time EUR price. Without it, €4.99 is sent inline. |
| `STRIPE_PRO_PRICE_ID_USD` | optional | Price id for the $4.99 one-time USD price. Without it, $4.99 is sent inline. |
| `STRIPE_PRO_PRICE_ID_GBP` | optional | Price id for the £4.49 one-time GBP price. Without it, £4.49 is sent inline. |
| `STRIPE_PRO_PRICE_ID` | optional | Older EUR-only price id. Used only when `STRIPE_PRO_PRICE_ID_EUR` is unset. |
| `STRIPE_AUTOMATIC_TAX` | at go-live | `1` after Stripe Tax and OSS are enabled. Checkout then collects a billing address. |
| `PRO_SITE_URL` | optional | `https://www.gta-companion.com` for Checkout return URLs |
| `PRO_GRANT_UIDS` | optional | Comma-separated Firebase uids that get Pro without paying (owner, testers) |
| `PRO_ALLOW_LIVE_PAYMENTS` | at go-live | `1` only in Production, and only when a live secret key should be accepted |

Each price id must be a one-time price in that currency. A EUR price id in the USD variable would charge euros.

Until `STRIPE_SECRET_KEY` and storage are set, `/pro` shows "Checkout opening soon" and nothing can be bought.

## Go-live checklist

Do this in order. The Stripe account must be **MB GL Transportation** (Lithuania), not a personal account.

1. Stripe Dashboard → account business details match MB GL Transportation, Lithuania. Add the real company code and registered address there.
2. Replace `[company code]` and `[registered address]` in `lib/pro/config.ts` (`PRO_SELLER`). That updates `/pro`, `/terms`, `/privacy`, and `/refunds`. Read those three legal pages and take them out of draft once a human has checked them.
3. Create one product, "GTA Companion Pro (unofficial fan tool)", with three one-time prices: EUR 4.99, USD 4.99, GBP 4.49. Copy each price id into `STRIPE_PRO_PRICE_ID_EUR`, `STRIPE_PRO_PRICE_ID_USD`, and `STRIPE_PRO_PRICE_ID_GBP`.
4. Enable **Stripe Tax**. Register for EU VAT **OSS** (One-Stop Shop) as a Lithuanian seller of digital services to consumers in other EU countries, and connect that registration in Stripe Tax. Then set `STRIPE_AUTOMATIC_TAX` to `1`.
5. Stripe → Settings → Customer emails: turn on the receipt for a successful payment. Checkout also sets `receipt_email` to the signed-in account email.
6. Still in **test mode**, on the Preview environment:
   - `STRIPE_SECRET_KEY` = the test secret key
   - `STRIPE_WEBHOOK_SECRET` = the test endpoint’s signing secret
   - Webhook URL: `https://<preview-host>/api/pro/webhook`
   - Events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `charge.refunded`
   - Pay with the test card `4242 4242 4242 4242`, any future date, any CVC, once in EUR, once in USD, and once in GBP.
   - Confirm the withdrawal checkbox blocks the button until it is ticked, Pro unlocks, the webhook grants, and a full refund revokes.
   - Leave `PRO_ALLOW_LIVE_PAYMENTS` unset and confirm a live secret key is ignored (checkout stays closed).
7. Production webhook URL (add this in live mode, not only test mode):
   `https://www.gta-companion.com/api/pro/webhook`
   Same three events. Put that endpoint’s signing secret in Production `STRIPE_WEBHOOK_SECRET`.
8. Production env names to set: `STRIPE_SECRET_KEY` (live secret key), `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRO_PRICE_ID_EUR`, `STRIPE_PRO_PRICE_ID_USD`, `STRIPE_PRO_PRICE_ID_GBP`, `STRIPE_AUTOMATIC_TAX`=`1`, `PRO_READ_WRITE_TOKEN`, `PRO_SITE_URL`=`https://www.gta-companion.com`, `PRO_ALLOW_LIVE_PAYMENTS`=`1`.
9. Reload `/pro` signed out. The status pill must change only after both the secret key and Blob storage are present. Until then it must keep saying "Checkout opening soon".
10. Make one live purchase in EUR for a low-value check if Stripe allows it, confirm the receipt email, then refund it and confirm Pro is removed.

Local webhook test: `stripe listen --forward-to localhost:3000/api/pro/webhook`.

## Legal pages

| Page | Role |
|---|---|
| `/pro` | Price, currency, what Pro includes, how payment works, FAQ. Checkout stays closed until the keys above are set. |
| `/terms` | Pro and payments section. Draft until the company code and address are real. |
| `/privacy` | Stripe as the payment processor, and synced marks. Draft on the same placeholders. |
| `/refunds` | EU 14-day withdrawal, and the immediate-delivery waiver the checkout checkbox records. |
