import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { guides } from "@/data/guides";
import { locations } from "@/data/locations";
import { manufacturers } from "@/data/manufacturers";
import { news } from "@/data/news";
import { vehicles } from "@/data/vehicles";
import { weapons } from "@/data/weapons";

export type CatalogEntry = {
  key: string;
  title: string;
  category: string;
  href: string;
};

function entry(
  prefix: string,
  id: number,
  title: string,
  category: string,
  href: string
): CatalogEntry {
  return {
    key: `${prefix}:${id}`,
    title,
    category,
    href,
  };
}

export const catalog: CatalogEntry[] = [
  ...vehicles.map((item) =>
    entry("vehicle", item.id, item.name, "Vehicles", `/vehicles/${item.slug}`)
  ),
  ...weapons.map((item) =>
    entry("weapon", item.id, item.name, "Weapons", `/weapons/${item.slug}`)
  ),
  ...manufacturers.map((item) =>
    entry(
      "manufacturer",
      item.id,
      item.name,
      "Manufacturers",
      `/manufacturers/${item.slug}`
    )
  ),
  ...characters.map((item) =>
    entry(
      "character",
      item.id,
      item.name,
      "Characters",
      `/characters/${item.slug}`
    )
  ),
  ...businesses.map((item) =>
    entry(
      "business",
      item.id,
      item.name,
      "Businesses",
      `/businesses/${item.slug}`
    )
  ),
  ...locations.map((item) =>
    entry(
      "location",
      item.id,
      item.name,
      "Locations",
      `/locations/${item.slug}`
    )
  ),
  ...guides.map((item) =>
    entry("guide", item.id, item.title, "Guides", `/guides/${item.slug}`)
  ),
  ...news.map((item) =>
    entry("news", item.id, item.title, "News", `/news/${item.slug}`)
  ),
];

const catalogByKey = new Map(catalog.map((item) => [item.key, item]));

export function findCatalogEntry(id: string) {
  return catalogByKey.get(id) ?? null;
}
