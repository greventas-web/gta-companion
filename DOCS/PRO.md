# GTA Companion Pro (100% completion tracker)

€3.99 one-time. Every guide, pin and checklist stays readable for everyone.
Pro adds our own tools only:

| Feature | Where |
|---|---|
| Cloud sync of tracked marks across devices | `components/pro/ProRuntime.tsx`, `/api/pro/sync` |
| Progress % (per section and overall) | `/pro`, `TrackProgress` badges |
| "What's left near me" map filter | `/map` sidebar (`CommunityMap.tsx`) |
| Unlimited marks (others: 50 per device) | `lib/pro/tracker.ts` (`BASIC_MARK_LIMIT`) |
| No ads | `components/pro/AdsLoader.tsx`, `html[data-pro="1"]` CSS in `app/globals.css` |

## How it works

- Login: existing Firebase Auth. API routes take `Authorization: Bearer <Firebase ID token>`
  and verify it with Firebase's `accounts:lookup` endpoint (public web API key, no service account).
- Entitlements and synced progress: private Vercel Blob, one JSON file per user
  (`pro/entitlements/<uid>.json`, `pro/progress/<uid>.json`). Server-side only; the
  client cannot grant itself Pro. Firestore `users/{uid}` is NOT used for the Pro flag
  because the current rules let users update their own doc.
- Payment: Stripe Checkout (REST, no SDK). `/api/pro/checkout` creates the session;
  `/api/pro/webhook` grants on `checkout.session.completed` /
  `checkout.session.async_payment_succeeded` and revokes on a full `charge.refunded`.
  The success page also confirms the session with Stripe directly, so Pro unlocks
  even if the webhook is late.
- Live keys (`sk_live_`/`rk_live_`) are refused unless `PRO_ALLOW_LIVE_PAYMENTS=1`.

## Env vars (Vercel → Project → Settings → Environment Variables)

| Name | Required | Value |
|---|---|---|
| `STRIPE_SECRET_KEY` | yes | `sk_test_...` from Stripe (test mode) |
| `STRIPE_WEBHOOK_SECRET` | yes | `whsec_...` from the webhook endpoint below |
| `PRO_READ_WRITE_TOKEN` | recommended | token of a **private** Blob store (falls back to `MAP_READ_WRITE_TOKEN`) |
| `STRIPE_PRO_PRICE_ID` | optional | `price_...`; without it €3.99 EUR is sent inline |
| `STRIPE_AUTOMATIC_TAX` | optional | `1` once Stripe Tax / OSS is decided |
| `PRO_SITE_URL` | optional | e.g. `https://www.gta-companion.com` for Checkout return URLs |
| `PRO_GRANT_UIDS` | optional | comma-separated Firebase uids that get Pro without paying (owner, testers, Ko-fi buyers) |
| `PRO_ALLOW_LIVE_PAYMENTS` | later | `1` only when going live |

Until `STRIPE_SECRET_KEY` and storage are set, `/pro` shows "Checkout opens soon"
and nothing can be bought.

## Stripe test setup

1. Stripe Dashboard → toggle **Test mode**.
2. Developers → API keys → copy the secret key into `STRIPE_SECRET_KEY` (Preview env first).
3. Developers → Webhooks → Add endpoint `https://<preview-or-site>/api/pro/webhook`,
   events `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
   `charge.refunded`. Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
4. Optional: Products → add "GTA Companion Pro" at €3.99 one-time and set `STRIPE_PRO_PRICE_ID`.
5. Test card `4242 4242 4242 4242`, any future date, any CVC.

Local webhook test: `stripe listen --forward-to localhost:3000/api/pro/webhook`.
