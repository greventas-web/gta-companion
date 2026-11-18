import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { locations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { properties } from "@/data/properties";
import { weapons } from "@/data/weapons";
import { missions } from "@/src/data/missions";
import { mapPlacements } from "@/src/data/map/placements";
import {
  hrefForEntity,
  mapFocusHref,
  type CompanionPin,
  type MapEntityType,
  type MapPlacement,
} from "@/lib/map/model";

type Named = { slug: string; name: string };

/**
 * Slug registries for entity types that already have database records.
 * Stores and collectibles have no per-item catalog yet. When one is added,
 * register it here and pins can link to `/that-section/[slug]`.
 * Safehouse and property pins share /properties.
 */
const registries: Record<MapEntityType, Map<string, Named> | null> = {
  location: indexBySlug(locations),
  business: indexBySlug(businesses),
  weapon: indexBySlug(weapons),
  activity: indexBySlug(activities),
  vehicle: indexBySlug(vehicles),
  animal: indexBySlug(animals),
  character: indexBySlug(characters),
  store: null,
  collectible: null,
  mission: indexBySlug(missions),
  safehouse: indexBySlug(properties),
  property: indexBySlug(properties),
};

function indexBySlug(items: Named[]): Map<string, Named> {
  return new Map(items.map((item) => [item.slug, item]));
}

let cached: CompanionPin[] | null = null;

export function getStaticPins(): CompanionPin[] {
  if (cached) return cached;
  cached = mapPlacements.map(resolvePlacement);
  return cached;
}

export function staticMapHref(entityType: string, entitySlug: string): string | null {
  const matches = getStaticPins().filter(
    (pin) => pin.entityType === entityType && pin.entitySlug === entitySlug
  );
  if (matches.length === 0) return null;
  return mapFocusHref(matches[0].entityType, entitySlug);
}

export function staticPinByTitle(title: string): CompanionPin | undefined {
  return getStaticPins().find((pin) => pin.title === title);
}

/** Null when the slug is acceptable. A string is the error to show the visitor. */
export function entitySlugError(entityType: MapEntityType, entitySlug?: string): string | null {
  if (!entitySlug) return null;
  const registry = registries[entityType];
  if (!registry) {
    return "This category has no database pages yet. Leave the slug blank.";
  }
  if (!registry.has(entitySlug)) {
    return "That slug is not in the database.";
  }
  return null;
}

function resolvePlacement(input: MapPlacement): CompanionPin {
  const registry = registries[input.entityType];
  const entry = input.entitySlug ? registry?.get(input.entitySlug) : undefined;
  if (input.entitySlug && registry && !entry) {
    throw new Error(`Map pin ${input.id} points at unknown ${input.entityType} "${input.entitySlug}".`);
  }

  const title = input.title?.trim() || entry?.name;
  if (!title) {
    throw new Error(`Map pin ${input.id} needs a title.`);
  }

  if (!Number.isFinite(input.x) || !Number.isFinite(input.y)) {
    throw new Error(`Map pin ${input.id} needs numeric coordinates.`);
  }

  return {
    id: input.id,
    origin: "curated",
    category: input.category,
    entityType: input.entityType,
    entitySlug: input.entitySlug,
    title,
    description: input.description?.trim() || "",
    role: input.role,
    x: input.x,
    y: input.y,
    href: hrefForEntity(input.entityType, input.entitySlug),
    sourceUrl: input.sourceUrl,
    sourceLabel: input.sourceLabel,
  };
}
