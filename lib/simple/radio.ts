import { radioStations } from "@/data/radio";

/** Native plate size of the in-game radio logos. Do not render them larger. */
export const RADIO_LOGO_WIDTH = 256;
export const RADIO_LOGO_HEIGHT = 160;

const RADIO_LOGO_DIR = "/images/footage/radio/";

export const radioSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function radioLogoSrc(slug: string) {
  return `${RADIO_LOGO_DIR}${slug}.webp`;
}

/** True for the native 256×160 station plates. Those must stay object-contain. */
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
