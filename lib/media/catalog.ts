import { Manufacturer } from "@/types/manufacturer";
import { Vehicle } from "@/types/vehicle";

/**
 * Shared gradient files and the copied "official image not published" jpeg.
 * They are not photographs of the item named in the path.
 */
const sharedPlaceholderPrefixes = [
  "/images/original/",
  "/images/activities/",
  "/images/animals/",
  "/images/guides/",
  "/images/manufacturers/",
  "/images/weapons/",
];

export function isPlaceholderSrc(src?: string) {
  if (!src) return true;
  const path = src.split("?")[0];
  if (path.includes("placeholder")) return true;
  if (sharedPlaceholderPrefixes.some((prefix) => path.startsWith(prefix))) {
    return true;
  }
  return (
    path === "/images/official/categories/brands.webp" ||
    path === "/images/official/categories/manufacturers.webp"
  );
}

export function isManufacturerNameCard(_slug: string, src: string) {
  return isPlaceholderSrc(src);
}

/**
 * Official Rockstar photo of one vehicle from this maker.
 * Used on the manufacturer list only. Detail pages keep a wordmark so the
 * same photo is not repeated on the vehicle card below it.
 */
const officialMakerPhoto: Record<string, { src: string; alt: string }> = {
  vapid: {
    src: "/images/official/vehicles/vapid-ganado.webp",
    alt: "Vapid Ganado",
  },
  grotti: {
    src: "/images/official/vehicles/grotti-cheetah-1995.webp",
    alt: "Grotti Cheetah",
  },
  dinka: {
    src: "/images/official/vehicles/dinka-enduro.webp",
    alt: "Dinka Enduro",
  },
  shitzu: {
    src: "/images/official/vehicles/shitzu-squalo.webp",
    alt: "Shitzu Squalo",
  },
  crest: {
    src: "/images/official/vehicles/crest-kayak.webp",
    alt: "Crest Kayak",
  },
};

export function manufacturerListImage(
  manufacturer: Pick<Manufacturer, "slug">
) {
  return officialMakerPhoto[manufacturer.slug] ?? null;
}

/** Detail pages use a wordmark so a vehicle photo is not shown twice. */
export function manufacturerPortrait(
  manufacturer: Pick<Manufacturer, "slug" | "logo">
) {
  void manufacturer;
  return "";
}

/** Real vehicle photographs, never the shared placeholder card. */
export function vehicleImages(
  vehicle: Pick<Vehicle, "image" | "gallery">
) {
  const images = [vehicle.image, ...(vehicle.gallery ?? [])].filter(
    (src) => src && !isPlaceholderSrc(src)
  );

  return [...new Set(images)];
}
