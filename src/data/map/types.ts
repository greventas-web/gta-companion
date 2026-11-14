export const MAP_CATEGORIES = [
  "locations",
  "businesses",
  "garages",
  "activities",
  "shops",
  "collectibles",
  "unconfirmed",
] as const;

export type MapCategory = (typeof MAP_CATEGORIES)[number];

/** Categories the map is allowed to draw. Unconfirmed is never one of them. */
export const VISIBLE_CATEGORIES = [
  "locations",
  "businesses",
  "garages",
  "activities",
  "shops",
  "collectibles",
] as const satisfies readonly Exclude<MapCategory, "unconfirmed">[];

export type VisibleCategory = (typeof VISIBLE_CATEGORIES)[number];

export type MapMarker = {
  id: string;
  title: string;
  category: MapCategory;
  description: string;
  /** Official still. Empty when Rockstar has not published one for this pin. */
  image: string;
  imageAlt: string;
  sourceUrl: string;
  sourceLabel: string;
  /** On-site page for this place. */
  href: string;
  hrefLabel: string;
  confirmed: boolean;
  /** Map space. See src/data/map/config.ts. */
  x: number;
  y: number;
  /** True when the pin is a diagram placement, not a surveyed in-game coordinate. */
  approximate: boolean;
};
