import ingame from "@/src/data/gameplay/ingame.json";
import {
  entityTypeForCategory,
  type MapCategoryId,
  type MapEntityType,
  type MapPlacement,
} from "@/lib/map/model";

/**
 * Facts confirmed from our own GTA 6 gameplay after launch.
 * Edit src/data/gameplay/ingame.json with scripts/launch/add-data.mjs.
 */
export const INGAME_SOURCE_LABEL = "Confirmed in-game (GTA Companion gameplay)";

/** Where the source label links when an entry has no clip URL. */
export const INGAME_SOURCE_FALLBACK = "/about";

export type IngameEntry = {
  slug: string;
  name?: string;
  manufacturer?: string;
  category?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  /** Extra detail fields, e.g. topSpeed, price, seats, ammunition. */
  fields?: Record<string, string | number>;
  /** Link to our clip or post that shows it. Optional. */
  clip?: string;
  confirmedAt: string;
};

export type IngamePin = {
  id: string;
  title: string;
  category: MapCategoryId;
  entityType?: MapEntityType;
  entitySlug?: string;
  description?: string;
  role?: string;
  x: number;
  y: number;
  clip?: string;
  confirmedAt: string;
};

type IngameFile = {
  vehicles: IngameEntry[];
  weapons: IngameEntry[];
  pins: IngamePin[];
};

const data = ingame as unknown as IngameFile;

export const ingameVehicles: IngameEntry[] = data.vehicles ?? [];
export const ingameWeapons: IngameEntry[] = data.weapons ?? [];

export function ingameSourceHref(entry: { clip?: string }): string {
  return entry.clip?.trim() || INGAME_SOURCE_FALLBACK;
}

export function ingamePlacements(): MapPlacement[] {
  return (data.pins ?? []).map((pin) => ({
    id: `ingame:${pin.id}`,
    category: pin.category,
    entityType: pin.entityType ?? entityTypeForCategory(pin.category),
    entitySlug: pin.entitySlug,
    title: pin.title,
    description: pin.description ?? "",
    role: pin.role,
    x: pin.x,
    y: pin.y,
    sourceUrl: ingameSourceHref(pin),
    sourceLabel: INGAME_SOURCE_LABEL,
  }));
}
