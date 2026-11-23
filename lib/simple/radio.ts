import { radioStations } from "@/data/radio";

/**
 * Native size of each trimmed station badge. The black padding is gone, so
 * these are the square marks themselves. Do not render them larger.
 */
export const RADIO_LOGO_SIZES: Record<string, { width: number; height: number }> = {
  "afrobank-fm": { width: 120, height: 120 },
  "back-country-radio": { width: 120, height: 120 },
  "circoloco-records-radio": { width: 120, height: 120 },
  "cocoteo-fm": { width: 120, height: 119 },
  "dirty-south-classics": { width: 120, height: 120 },
  "emotion-98-3": { width: 120, height: 120 },
  "flash-fm": { width: 120, height: 119 },
  "gloriana-blues-radio": { width: 120, height: 119 },
  "honey-fm": { width: 120, height: 119 },
  "kaleidoscope-fm": { width: 120, height: 120 },
  "leonida-jazz-radio": { width: 120, height: 120 },
  "radio-la-ola": { width: 120, height: 119 },
  "radio-on-u": { width: 120, height: 120 },
  "stockyard-fm": { width: 120, height: 120 },
  "symphony-fm": { width: 120, height: 120 },
  "the-chamber-106-6": { width: 120, height: 120 },
  "the-wipe": { width: 120, height: 120 },
  "v-rock": { width: 120, height: 120 },
  "vice-city-fm": { width: 120, height: 120 },
  "vice-city-rap-radio": { width: 120, height: 120 },
  wktt: { width: 120, height: 120 },
  "worldwide-fm": { width: 120, height: 119 },
};

export function radioLogoSize(src: string) {
  const slug = src.split("?")[0].split("/").pop()?.replace(/\.webp$/, "") ?? "";
  return RADIO_LOGO_SIZES[slug] ?? { width: 120, height: 120 };
}

const RADIO_LOGO_DIR = "/images/footage/radio/";

export const radioSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function radioLogoSrc(slug: string) {
  return `${RADIO_LOGO_DIR}${slug}.webp`;
}

/** True for a trimmed station badge. Those must stay at native size, object-contain. */
export function isRadioLogoSrc(src?: string) {
  if (!src) return false;
  const path = src.split("?")[0];
  return path.startsWith(RADIO_LOGO_DIR) && path.endsWith(".webp");
}

export const stationPages = radioStations.map((station) => {
  const slug = radioSlug(station.name);
  return { ...station, slug, image: radioLogoSrc(slug) };
});

export function findStation(slug: string) {
  return stationPages.find((station) => station.slug === slug);
}
