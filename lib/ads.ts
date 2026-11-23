/**
 * AdSense manual ad units.
 *
 * Env vars:
 *   NEXT_PUBLIC_ADSENSE_CLIENT — publisher ID (ca-pub-…). When unset, this
 *     defaults to ca-pub-1639723880207640 so the live tag stays on.
 *   NEXT_PUBLIC_ADSENSE_SLOT_DETAIL — detail pages, below the facts.
 *   NEXT_PUBLIC_ADSENSE_SLOT_LIST — list pages, between card groups.
 *   NEXT_PUBLIC_ADSENSE_SLOT_GUIDE — quick guides, between the facts and Related.
 *
 * Every slot stays off until its ad unit ID is set in Vercel. To turn a slot on:
 *   1. AdSense -> Ads -> By ad unit -> Display ads -> "Responsive".
 *   2. Copy the data-ad-slot number.
 *   3. Set the matching NEXT_PUBLIC_ADSENSE_SLOT_* variable in Vercel and redeploy.
 * Consent is handled by Consent Mode v2 (lib/consent.ts): in the EEA/UK/CH
 * ads stay non-personalized/limited until the visitor accepts.
 */
const DEFAULT_ADSENSE_CLIENT = "ca-pub-1639723880207640";

const rawClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || DEFAULT_ADSENSE_CLIENT;

/** Publisher ID. Always a real ca-pub- value so a missing env var cannot turn ads off. */
export const ADSENSE_CLIENT = /^ca-pub-\d{16}$/.test(rawClient)
  ? rawClient
  : DEFAULT_ADSENSE_CLIENT;

export const ADS_ENABLED = ADSENSE_CLIENT !== "";

export const AD_SLOTS = {
  /** Detail pages (weapons, vehicles, missions, money methods, ...), below the facts. */
  detail: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DETAIL?.trim() || "",
  /** List pages (where-to-find topics, ...), between card groups. */
  list: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LIST?.trim() || "",
  /** Quick guides (/guides/[slug]), between the facts and the Related cards. */
  guide: process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE?.trim() || "",
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;
