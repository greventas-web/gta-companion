import unconfirmed from "@/src/data/map/unconfirmed.json";
import {
  entityTypeForCategory,
  type MapCategoryId,
  type MapEntityType,
} from "@/lib/map/model";

type SeedPosition = { x?: number; y?: number };

type UnconfirmedPlace = {
  id: string;
  name: string;
  category: string;
  position: SeedPosition | null;
  linked_site_entity_slug: string | null;
  reason?: string;
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
  stores: "store",
  activities: "activity",
  vehicles: "vehicle",
  weapons: "weapon",
  characters: "character",
  animals: "animal",
  properties: "property",
};

export type PendingSeed = {
  id: string;
  status: "pending";
  category: MapCategoryId;
  entityType: MapEntityType;
  entitySlug?: string;
  title: string;
  description: string;
  sourceUrl?: string;
  x: number;
  y: number;
  createdAt: string;
};

/**
 * Unconfirmed places are a review queue, not public pins. Rows without
 * coordinates are omitted because they cannot be drawn.
 */
export function unconfirmedPending(): PendingSeed[] {
  return (unconfirmed as UnconfirmedPlace[]).flatMap((place) => {
    const x = place.position?.x;
    const y = place.position?.y;
    if (typeof x !== "number" || typeof y !== "number") return [];
    const category = CATEGORY[place.category] ?? "locations";
    const link = parseLink(place.linked_site_entity_slug);
    const entityType = link?.entityType ?? entityTypeForCategory(category);
    const note = place.notes?.split(/(?<=\.)\s/)[0]?.trim() ?? "";
    const safe = /\bfree\b/i.test(note) ? "" : note;
    return [
      {
        id: `unconfirmed:${place.id}`,
        status: "pending" as const,
        category,
        entityType,
        entitySlug: link?.entitySlug,
        title: place.name,
        description: [
          "Unverified. Not shown on the public map until approved.",
          safe,
        ]
          .filter(Boolean)
          .join(" ")
          .slice(0, 500),
        sourceUrl: "https://gtadb.org",
        x,
        y,
        createdAt: "2026-11-17T06:00:00.000Z",
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
