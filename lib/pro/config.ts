/**
 * GTA Companion Pro: shared settings (safe for the browser).
 *
 * Every guide, pin and checklist stays readable for everyone. Pro only adds
 * our own tools: cloud sync, progress %, the "what's left near me" map
 * filter, unlimited marks and no ads.
 */
export const PRO_NAME = "GTA Companion Pro";

/**
 * Fixed, rounded one-time prices. EUR is the default when a locale has no
 * region we recognise. Checkout charges the amount for the currency the
 * buyer picks; these figures are not a live exchange rate.
 */
export const PRO_PRICES = {
  eur: { code: "eur", name: "EUR", cents: 499, label: "€4.99" },
  usd: { code: "usd", name: "USD", cents: 499, label: "$4.99" },
  gbp: { code: "gbp", name: "GBP", cents: 449, label: "£4.49" },
} as const;

export type ProCurrency = keyof typeof PRO_PRICES;

export const PRO_CURRENCY_CODES = ["eur", "usd", "gbp"] as const satisfies readonly ProCurrency[];

/** EUR amount in cents. USD and GBP amounts live on PRO_PRICES. */
export const PRO_PRICE_CENTS = PRO_PRICES.eur.cents;
export const PRO_CURRENCY: ProCurrency = "eur";
export const PRO_PRICE_LABEL = PRO_PRICES.eur.label;

/** Last currency the buyer picked on this device. */
export const PRO_CURRENCY_STORAGE_KEY = "gta-companion-pro-currency";

/**
 * Seller of GTA Companion Pro: MB "GL Transportation" (GL Transportation, MB).
 * VAT-registered in Lithuania. No phone number is published.
 */
export const PRO_SELLER = {
  name: "GL Transportation, MB",
  quotedName: 'MB "GL Transportation"',
  country: "Lithuania",
  companyCode: "307588769",
  vatCode: "LT100021034618",
  address: "V. Nagevičiaus g. 3, LT-08237 Vilnius, Lithuania",
  director: "Gabrielius Reventas",
  ordersEmail: "contact@gta-companion.com",
} as const;

const USD_REGIONS = new Set(["US", "PR", "GU", "AS", "VI", "MP"]);
const GBP_REGIONS = new Set(["GB", "GG", "IM", "JE"]);
const EUR_REGIONS = new Set([
  "AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT",
  "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK", "AD", "MC", "SM", "VA", "ME", "XK",
]);

export function isProCurrency(value: unknown): value is ProCurrency {
  return value === "eur" || value === "usd" || value === "gbp";
}

function regionOf(locale: string): string | null {
  const tag = locale.split(",")[0]?.split(";")[0]?.trim().replace(/_/g, "-");
  if (!tag) return null;
  try {
    return new Intl.Locale(tag).region?.toUpperCase() ?? null;
  } catch {
    const match = /-([A-Za-z]{2})$/.exec(tag);
    return match ? match[1].toUpperCase() : null;
  }
}

function currencyForRegion(region: string): ProCurrency | null {
  if (USD_REGIONS.has(region)) return "usd";
  if (GBP_REGIONS.has(region)) return "gbp";
  if (EUR_REGIONS.has(region)) return "eur";
  return null;
}

/** EUR unless the locale's region maps to USD, GBP, or a eurozone country. */
export function currencyFromLocale(locale: string | null | undefined): ProCurrency {
  if (!locale) return PRO_CURRENCY;
  for (const part of locale.split(",")) {
    const region = regionOf(part);
    if (!region) continue;
    const match = currencyForRegion(region);
    if (match) return match;
  }
  return PRO_CURRENCY;
}

/** First recognised region in the browser's language list, otherwise EUR. */
export function currencyFromLocales(locales: readonly string[]): ProCurrency {
  for (const locale of locales) {
    const region = regionOf(locale);
    if (!region) continue;
    const match = currencyForRegion(region);
    if (match) return match;
  }
  return PRO_CURRENCY;
}

/** Marks one device can hold without Pro. Existing marks above it are kept. */
export const BASIC_MARK_LIMIT = 50;

/** Radius of the "what's left near me" filter, in GTA meters. */
export const NEAR_ME_RADIUS_M = 1500;

/** Device hint so ads can hide before the status call returns. */
export const PRO_HINT_KEY = "gta-companion-pro";
export const PRO_CHANGE_EVENT = "gta-companion-pro-change";

/** Last successful cloud sync on this device. */
export const LAST_SYNC_KEY = "gta-companion-last-sync";
export const SYNC_EVENT = "gta-companion-sync";

export type ProgressSection = {
  id: "missions" | "collectibles" | "trophies" | "ranges";
  label: string;
  href: string;
};

export const PROGRESS_SECTIONS: ProgressSection[] = [
  { id: "missions", label: "Missions", href: "/missions" },
  { id: "collectibles", label: "Collectibles", href: "/collectibles" },
  { id: "trophies", label: "Trophies", href: "/trophies" },
  { id: "ranges", label: "Shooting ranges", href: "/shooting-ranges" },
];

/** Section a tracked id belongs to (ids come from the existing tap-to-track buttons). */
export function sectionForTrackId(id: string): ProgressSection["id"] | null {
  if (id.startsWith("mission:")) return "missions";
  if (id.startsWith("trophy:")) return "trophies";
  if (id.startsWith("range:")) return "ranges";
  if (id.startsWith("pin:")) return null;
  return id.includes(":") ? "collectibles" : null;
}
