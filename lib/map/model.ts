/**
 * Shared map model.
 *
 * Coordinates are GTA meters in the gtadb.org frame: x grows east, y grows
 * north, and (0, 0) is the center of a 32768 m square. Zoom 0 fits that
 * square in 1024 px. Zoom 5 is 1 px per meter. Leaflet's simple CRS uses
 * lat = y and lng = x.
 *
 * Every database entity type has a category. A pin links to a detail page
 * when entitySlug matches an existing record. Adding a place is a new object
 * in src/data/map/placements.ts, or an approved community submission.
 */

export const MAP_WORLD_HALF = 16384;
export const MAP_TILE_SIZE = 256;

export const MAP_CATEGORIES = [
  {
    id: "locations",
    label: "Locations",
    entityType: "location",
    blurb: "Cities, towns, and regions",
  },
  {
    id: "businesses",
    label: "Businesses",
    entityType: "business",
    blurb: "Named businesses in the database",
  },
  {
    id: "stores",
    label: "Stores",
    entityType: "store",
    blurb: "Shops and services",
  },
  {
    id: "weapons",
    label: "Weapons",
    entityType: "weapon",
    blurb: "Where to buy or find a weapon",
  },
  {
    id: "activities",
    label: "Activities",
    entityType: "activity",
    blurb: "Things to do",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    entityType: "vehicle",
    blurb: "Spawns and dealers",
  },
  {
    id: "collectibles",
    label: "Collectibles",
    entityType: "collectible",
    blurb: "Collectible spots",
  },
  {
    id: "missions",
    label: "Missions",
    entityType: "mission",
    blurb: "Mission starts and objectives",
  },
  {
    id: "safehouses",
    label: "Safehouses",
    entityType: "safehouse",
    blurb: "Hideouts and garages",
  },
  {
    id: "properties",
    label: "Properties",
    entityType: "property",
    blurb: "Ownable places",
  },
  {
    id: "animals",
    label: "Animals",
    entityType: "animal",
    blurb: "Where an animal shows up",
  },
  {
    id: "characters",
    label: "Characters",
    entityType: "character",
    blurb: "Where a character is seen",
  },
] as const;

export type MapCategoryId = (typeof MAP_CATEGORIES)[number]["id"];
export type MapEntityType = (typeof MAP_CATEGORIES)[number]["entityType"];

export const LANDMARK_FILTERS = [
  { id: "hotel", label: "Hotels" },
  { id: "residential", label: "Residential" },
  { id: "retail", label: "Retail" },
  { id: "restaurant", label: "Restaurants" },
  { id: "leisure", label: "Leisure" },
  { id: "transportation", label: "Transport" },
  { id: "industrial", label: "Industrial" },
  { id: "natural", label: "Natural" },
  { id: "government", label: "Government" },
  { id: "landmark", label: "Landmarks" },
  { id: "office", label: "Offices" },
  { id: "utilities", label: "Utilities" },
  { id: "enterable", label: "Enterable" },
] as const;

export type LandmarkFilterId = (typeof LANDMARK_FILTERS)[number]["id"];

export const CATEGORY_COLOR: Record<MapCategoryId, string> = {
  locations: "#c084fc",
  businesses: "#e879f9",
  stores: "#f0abfc",
  weapons: "#fb7185",
  activities: "#22d3ee",
  vehicles: "#fbbf24",
  collectibles: "#a3e635",
  missions: "#fb923c",
  safehouses: "#818cf8",
  properties: "#a78bfa",
  animals: "#34d399",
  characters: "#f472b6",
};

const DETAIL_PATH: Partial<Record<MapEntityType, (slug: string) => string>> = {
  location: (slug) => `/locations/${slug}`,
  business: (slug) => `/businesses/${slug}`,
  weapon: (slug) => `/weapons/${slug}`,
  activity: (slug) => `/activities/${slug}`,
  vehicle: (slug) => `/vehicles/${slug}`,
  animal: (slug) => `/animals/${slug}`,
  character: (slug) => `/characters/${slug}`,
  property: (slug) => `/properties/${slug}`,
  safehouse: (slug) => `/properties/${slug}`,
};

const INDEX_PATH: Partial<Record<MapEntityType, string>> = {
  location: "/locations",
  business: "/businesses",
  weapon: "/weapons",
  activity: "/activities",
  vehicle: "/vehicles",
  animal: "/animals",
  character: "/characters",
  collectible: "/collectibles",
  safehouse: "/properties",
  property: "/properties",
};

export function categoryById(id: string): (typeof MAP_CATEGORIES)[number] | undefined {
  return MAP_CATEGORIES.find((category) => category.id === id);
}

export function entityTypeForCategory(id: MapCategoryId): MapEntityType {
  return MAP_CATEGORIES.find((category) => category.id === id)!.entityType;
}

export function categoryHasDetailPages(id: MapCategoryId): boolean {
  return Boolean(DETAIL_PATH[entityTypeForCategory(id)]);
}

/** Detail page when a slug exists, otherwise the section page, if one exists. */
export function hrefForEntity(entityType: MapEntityType, entitySlug?: string): string | null {
  if (entitySlug) {
    const detail = DETAIL_PATH[entityType];
    if (detail) return detail(entitySlug);
  }
  return INDEX_PATH[entityType] ?? null;
}

export function mapFocusHref(entityType: MapEntityType, entitySlug: string): string {
  const params = new URLSearchParams({ entity: entityType, slug: entitySlug });
  return `/map?${params.toString()}`;
}

export type MapPlacement = {
  id: string;
  category: MapCategoryId;
  entityType: MapEntityType;
  /** Slug from the existing database. Omit when that type has no records yet. */
  entitySlug?: string;
  /** Defaults to the database entry's name. */
  title?: string;
  description?: string;
  role?: string;
  x: number;
  y: number;
  sourceUrl?: string;
  sourceLabel?: string;
};

export type CompanionPin = {
  id: string;
  origin: "curated" | "community";
  category: MapCategoryId;
  entityType: MapEntityType;
  entitySlug?: string;
  title: string;
  description: string;
  role?: string;
  x: number;
  y: number;
  href: string | null;
  sourceUrl?: string;
  sourceLabel?: string;
};

export type LandmarkRecord = {
  id: string;
  name: string;
  x: number;
  y: number;
  tags: string[];
};

export function tileBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_MAP_TILE_BASE?.trim();
  return (configured || "/maps/tiles/6/yanis,17").replace(/\/$/, "");
}

export function tileMaxNativeZoom(): number {
  const parsed = Number(process.env.NEXT_PUBLIC_MAP_TILE_MAX_NATIVE_ZOOM ?? 4);
  if (!Number.isFinite(parsed)) return 4;
  return Math.min(7, Math.max(0, Math.round(parsed)));
}

export function landmarkTitle(name: string): { title: string; area: string } {
  const parts = name
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  const area = parts.length > 0 ? parts[parts.length - 1] : "";
  const head = parts[0];
  const title = head && head !== "?" ? head : parts.length > 1 ? parts[parts.length - 2] : "Landmark";
  return { title, area };
}
