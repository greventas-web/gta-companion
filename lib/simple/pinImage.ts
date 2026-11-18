import { activities } from "@/data/activities";
import { businesses } from "@/data/businesses";
import { locations } from "@/data/locations";
import { properties } from "@/data/properties";
import { stores } from "@/data/stores";
import { isPlaceholderSrc } from "@/lib/media/catalog";
import pinData from "@/src/data/map/locations.json";

type PinRow = { id: string; name?: string; linked_site_entity_slug?: string | null };

const tables: Record<string, readonly { slug: string; name?: string; image?: string; imageAlt?: string }[]> = {
  activities,
  businesses,
  locations,
  properties: properties as unknown as { slug: string; name?: string; image?: string; imageAlt?: string }[],
  stores,
};

const norm = (value = "") => value.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();

/**
 * Photo of the exact place a map pin points at. Only when the pin is that same
 * item (same name), never the photo of the area it sits in.
 */
export function imageForPin(pinId?: string): { src?: string; alt?: string } {
  if (!pinId) return {};
  const id = pinId.replace(/^confirmed:/, "");
  const row = (pinData as PinRow[]).find((item) => item.id === id);
  const linked = row?.linked_site_entity_slug;
  if (!linked) return {};
  const [table, slug] = linked.split("/");
  const entry = tables[table]?.find((item) => item.slug === slug);
  if (!entry?.image || isPlaceholderSrc(entry.image)) return {};
  const pinName = norm(row?.name);
  const entryName = norm(entry.name);
  if (!pinName || !entryName || !(pinName.startsWith(entryName) || entryName.startsWith(pinName))) return {};
  return { src: entry.image, alt: entry.imageAlt };
}
