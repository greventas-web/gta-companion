import { activities } from "@/data/activities";
import { businesses } from "@/data/businesses";
import { locations } from "@/data/locations";
import { properties } from "@/data/properties";
import { stores } from "@/data/stores";
import { isPlaceholderSrc } from "@/lib/media/catalog";
import pinData from "@/src/data/map/locations.json";

type PinRow = { id: string; linked_site_entity_slug?: string | null };

const tables: Record<string, readonly { slug: string; image?: string; imageAlt?: string }[]> = {
  activities,
  businesses,
  locations,
  properties: properties as unknown as { slug: string; image?: string; imageAlt?: string }[],
  stores,
};

/** Photo of the place a map pin points at, when the site has one. */
export function imageForPin(pinId?: string): { src?: string; alt?: string } {
  if (!pinId) return {};
  const id = pinId.replace(/^confirmed:/, "");
  const row = (pinData as PinRow[]).find((item) => item.id === id);
  const linked = row?.linked_site_entity_slug;
  if (!linked) return {};
  const [table, slug] = linked.split("/");
  const entry = tables[table]?.find((item) => item.slug === slug);
  if (!entry?.image || isPlaceholderSrc(entry.image)) return {};
  return { src: entry.image, alt: entry.imageAlt };
}
