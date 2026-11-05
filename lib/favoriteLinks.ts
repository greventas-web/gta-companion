import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { weapons } from "@/data/weapons";

export type FavoriteLink = {
  id: string;
  title: string;
  href: string;
  category: string;
};

function indexUniqueById<T extends { id: number }>(items: readonly T[]) {
  const index = new Map<number, T | null>();

  for (const item of items) {
    if (index.has(item.id)) {
      index.set(item.id, null);
      continue;
    }

    index.set(item.id, item);
  }

  return index;
}

const vehiclesById = indexUniqueById(vehicles);
const vehiclesBySlug = new Map(vehicles.map((vehicle) => [vehicle.slug, vehicle]));
const weaponsById = indexUniqueById(weapons);
const manufacturersById = indexUniqueById(manufacturers);

function linkFor(
  favoriteId: string,
  title: string,
  href: string,
  category: string
): FavoriteLink {
  return {
    id: favoriteId,
    title,
    href,
    category,
  };
}

export function resolveFavoriteLink(
  favoriteId: string
): FavoriteLink | null {
  const splitAt = favoriteId.indexOf(":");

  if (splitAt <= 0) {
    return null;
  }

  const type = favoriteId.slice(0, splitAt);
  const rawId = favoriteId.slice(splitAt + 1);
  const numericId = /^\d+$/.test(rawId) ? Number(rawId) : null;

  if (type === "vehicle") {
    const vehicle =
      numericId === null
        ? vehiclesBySlug.get(rawId)
        : vehiclesById.get(numericId);

    if (!vehicle) {
      return null;
    }

    return linkFor(
      favoriteId,
      vehicle.name,
      `/vehicles/${vehicle.slug}`,
      "Vehicles"
    );
  }

  if (numericId === null) {
    return null;
  }

  const id = numericId;

  if (type === "weapon") {
    const weapon = weaponsById.get(id);

    if (!weapon) {
      return null;
    }

    return linkFor(
      favoriteId,
      weapon.name,
      `/weapons/${weapon.slug}`,
      "Weapons"
    );
  }

  if (type === "manufacturer") {
    const manufacturer = manufacturersById.get(id);

    if (!manufacturer) {
      return null;
    }

    return linkFor(
      favoriteId,
      manufacturer.name,
      `/manufacturers/${manufacturer.slug}`,
      "Manufacturers"
    );
  }

  return null;
}
