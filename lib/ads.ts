/**
 * AdSense manual ad units.
 *
 * Every slot is off until its ad unit ID is set in Vercel, so merging this
 * changes nothing on the live site. To turn a slot on:
 *   1. AdSense -> Ads -> By ad unit -> Display ads -> "Responsive".
 *   2. Copy the data-ad-slot number.
 *   3. Set the matching NEXT_PUBLIC_ADSENSE_SLOT_* variable in Vercel and redeploy.
 * Consent is handled by Consent Mode v2 (lib/consent.ts): in the EEA/UK/CH
 * ads stay non-personalized/limited until the visitor accepts.
 */
export const ADSENSE_CLIENT = "ca-pub-1639723880207640";

export const AD_SLOTS = {
  /** Detail pages (weapons, vehicles, missions, money methods, ...), below the facts. */
  detail: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DETAIL?.trim() || "",
  /** List pages (where-to-find topics, ...), between card groups. */
  list: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LIST?.trim() || "",
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;
