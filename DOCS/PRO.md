# GTA Companion Pro (100% completion tracker)

€4.99 one-time in EUR (the default). The Pro page also offers fixed rounded prices in USD ($4.99) and GBP (£4.49). These are not a live exchange rate. The prices are **VAT-inclusive**. Every guide, pin and checklist stays readable for everyone. Pro adds our own tools only:

| Feature | Where |
|---|---|
| No ads | AdSense snippet in `app/layout.tsx` (server-rendered in head), `html[data-pro="1"]` CSS in `app/globals.css` hides ad units and auto ads |
| Cloud sync of tracked marks across devices | `components/pro/ProRuntime.tsx`, `/api/pro/sync` |
| Progress % (per section and overall) | `/pro`, `TrackProgress` badges |
| "What's left near me" map filter | `/map` sidebar (`CommunityMap.tsx`) |
| Unlimited marks (others: 50 per device) | `lib/pro/tracker.ts` (`BASIC_MARK_LIMIT`) |

The brand star other surfaces can reuse is `components/pro/ProBadge.tsx` (`proBrandFill` and `proBrandEdge`).

Prices live in `lib/pro/config.ts` (`PRO_PRICE_CENTS` is 499, the EUR amount). The buyer’s choice is sent to `POST /api/pro/checkout` as `currency` (`eur`, `usd`, or `gbp`). The page defaults to EUR, then picks USD or GBP from the browser locale when the region is one we map (United States and US territories → USD, United Kingdom and Crown Dependencies → GBP, eurozone → EUR). A saved choice on that device wins over the locale.

Payments are on hold. `/pro` shows only the supporter waitlist (“Join the supporter list”) for signed-in and signed-out visitors. There is no pay button. `POST /api/pro/waitlist` and `GET /api/pro/waitlist/export` stay in place. Checkout code remains for later: a session, when created, requires Stripe’s terms checkbox and grants Pro only when `consent.terms_of_service` is `accepted`.

Waitlist emails are stored server-side in the same private Blob store as Pro entitlements (`pro/waitlist.json`, local `.data/pro/waitlist.json` without a token). The form dedupes by email, ignores a filled honeypot field named `company`, and rate-limits each IP. Export the list with `GET /api/pro/waitlist/export` and `Authorization: Bearer` set to the `MAP_ADMIN_SECRET` value (the same env var as the map admin). A signed-in map admin cookie is also accepted. Do not commit or paste that value.

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
- Terms consent (inactive while payments are on hold): Checkout sets
  `consent_collection[terms_of_service]=required` and
  `custom_text[terms_of_service_acceptance][message]` to the 14-day wording with a
  link to `/terms`. The webhook and the success-page check grant Pro only when
  `consent.terms_of_service` is `accepted`, and store that on the entitlement.
- Live keys (`sk_live_` / `rk_live_`) are refused unless `PRO_ALLOW_LIVE_PAYMENTS=1`.
- Seller: **GL Transportation, MB** (MB "GL Transportation"), Lithuania.
  Company code `307588769`. VAT (PVM) code `LT100021034618`. Registered office
  V. Nagevičiaus g. 3, LT-08237 Vilnius, Lithuania. Director Gabrielius Reventas.
  Orders and refunds: `contact@gta-companion.com`. Do not publish a phone number.
  Public pages do not show these facts. They say seller details are available
  on request at `contact@gta-companion.com`.

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
| `STRIPE_AUTOMATIC_TAX` | required before go-live | `1` only after Stripe Tax and OSS are enabled. The MB is VAT-registered and the prices are VAT-inclusive. Checkout then collects a billing address. |
| `PRO_SITE_URL` | optional | `https://www.gta-companion.com` for Checkout return URLs |
| `PRO_GRANT_UIDS` | optional | Comma-separated Firebase uids that get Pro without paying (owner, testers) |
| `PRO_ALLOW_LIVE_PAYMENTS` | at go-live | `1` only in Production, and only when a live secret key should be accepted |

Each price id must be a one-time price in that currency. A EUR price id in the USD variable would charge euros.

Until `STRIPE_SECRET_KEY` and storage are set, a checkout request returns 503. `/pro` stays on the supporter waitlist either way.

## VAT before go-live

GL Transportation, MB is VAT-registered (PVM `LT100021034618`). The prices on `/pro` (€4.99, $4.99, and £4.49) are **VAT-inclusive**. **Stripe Tax and EU VAT OSS must be enabled before go-live.** Do not set `PRO_ALLOW_LIVE_PAYMENTS` until `STRIPE_AUTOMATIC_TAX` is `1` and Stripe Tax is using this Lithuanian VAT registration and OSS.

## Go-live checklist

Do this in order. The Stripe account must be **GL Transportation, MB** (MB "GL Transportation"), not a personal account.

1. Stripe Dashboard → business details match GL Transportation, MB: company code `307588769`, VAT (PVM) `LT100021034618`, registered office V. Nagevičiaus g. 3, LT-08237 Vilnius, Lithuania. Do not add a phone number on the site.
2. Public pages do not list the company identity. They point people to `contact@gta-companion.com`.
3. Create one product, "GTA Companion Pro (unofficial fan tool)", with three one-time VAT-inclusive prices: EUR 4.99, USD 4.99, GBP 4.49. Copy each price id into `STRIPE_PRO_PRICE_ID_EUR`, `STRIPE_PRO_PRICE_ID_USD`, and `STRIPE_PRO_PRICE_ID_GBP`.
4. Enable **Stripe Tax** and register EU VAT **OSS** (One-Stop Shop) before any live charge. Connect the Lithuanian VAT registration in Stripe Tax, then set `STRIPE_AUTOMATIC_TAX` to `1`. This step is required because the MB is VAT-registered and the prices already include VAT.
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
9. Reload `/pro`. Signed-in and signed-out visitors see “Join the supporter list”. There is no pay button while payments are on hold.
10. Make one live purchase in EUR for a low-value check if Stripe allows it, confirm the receipt email, then refund it and confirm Pro is removed.

Local webhook test: `stripe listen --forward-to localhost:3000/api/pro/webhook`.

## Legal pages

| Page | Role |
|---|---|
| `/pro` | Price, currency, what Pro includes, how payment works, FAQ. Checkout stays closed until the keys above are set. |
| `/terms` | Pro and payments section, including the seller block. |
| `/privacy` | Stripe as the payment processor, synced marks, and the seller block. |
| `/refunds` | EU 14-day withdrawal, the immediate-delivery waiver, and the seller block. |
