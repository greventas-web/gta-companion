import confirmed from "@/src/data/map/locations.json";
import {
  entityTypeForCategory,
  type MapCategoryId,
  type MapEntityType,
  type MapPlacement,
} from "@/lib/map/model";

type SeedPosition = {
  x?: number;
  y?: number;
  placement?: string;
  gtadb_landmark_id?: string | null;
};

type SeedPlace = {
  id: string;
  name: string;
  category: string;
  position: SeedPosition | null;
  linked_site_entity_slug: string | null;
  notes?: string;
};

const CATEGORY: Record<string, MapCategoryId> = {
  landmark: "locations",
  store: "stores",
  business: "businesses",
  "vehicle-dealer": "vehicles",
  safehouse: "safehouses",
  mission: "missions",
  activity: "activities",
  "weapon-shop": "weapons",
  collectible: "collectibles",
  other: "locations",
};

const SECTION: Record<string, MapEntityType> = {
  locations: "location",
  businesses: "business",
  activities: "activity",
  vehicles: "vehicle",
  weapons: "weapon",
  characters: "character",
  animals: "animal",
  properties: "property",
  missions: "mission",
};

/**
 * Confirmed places from the 17 Nov 2026 seed. Only rows with gtadb meters
 * become pins. Names without coordinates stay in locations.json and are not
 * drawn. Unconfirmed rows are not included here.
 */
export function confirmedPlacements(): MapPlacement[] {
  return (confirmed as SeedPlace[]).flatMap((place) => {
    const x = place.position?.x;
    const y = place.position?.y;
    if (typeof x !== "number" || typeof y !== "number") return [];
    const category = CATEGORY[place.category] ?? "locations";
    const link = parseLink(place.linked_site_entity_slug);
    const entityType = link?.entityType ?? entityTypeForCategory(category);
    return [
      {
        id: `confirmed:${place.id}`,
        category,
        entityType,
        entitySlug: link?.entitySlug,
        title: place.name,
        description: describe(place),
        role: place.position?.placement === "gtadb-region-centroid" ? "area" : undefined,
        x,
        y,
        sourceUrl: "https://gtadb.org",
        sourceLabel: "gtadb.org and all contributors",
      },
    ];
  });
}

function parseLink(path: string | null): { entityType: MapEntityType; entitySlug?: string } | null {
  if (!path) return null;
  const [section, slug] = path.split("/");
  const entityType = SECTION[section];
  if (!entityType) return null;
  if (!slug) return { entityType };
  return { entityType, entitySlug: slug };
}

function describe(place: SeedPlace): string {
  const sentence = place.notes?.split(/(?<=\.)\s/)[0]?.trim() ?? "";
  const safe = /\bfree\b/i.test(sentence) ? "" : sentence;
  const trimmed = safe.length > 240 ? `${safe.slice(0, 237).trim()}…` : safe;
  const kind =
    place.position?.placement === "gtadb-region-centroid"
      ? "Area center from gtadb.org landmarks."
      : "Pin from a gtadb.org landmark.";
  return [trimmed, kind].filter(Boolean).join(" ");
}
