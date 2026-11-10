import { Manufacturer } from "@/types/manufacturer";
import { Vehicle } from "@/types/vehicle";

/**
 * Manufacturer webps that are studio photographs.
 * The other files in /images/manufacturers are name-card placeholders.
 */
const photographicManufacturerSlugs = new Set([
  "albany",
  "annis",
  "bravado",
  "canis",
  "declasse",
  "dinka",
  "gallivanter",
  "pegassi",
  "pfister",
  "vapid",
]);

export function isManufacturerNameCard(slug: string, src: string) {
  return (
    !photographicManufacturerSlugs.has(slug) &&
    src === `/images/manufacturers/${slug}.webp`
  );
}

/** Official product art only. Studio photos of real cars are not shown. */
export function manufacturerPortrait(
  manufacturer: Pick<Manufacturer, "slug" | "logo">
) {
  const src = manufacturer.logo;

  if (src.startsWith("/images/official/")) {
    return src;
  }

  if (
    photographicManufacturerSlugs.has(manufacturer.slug) ||
    src.startsWith("/images/original/") ||
    src.startsWith("/images/manufacturers/") ||
    isManufacturerNameCard(manufacturer.slug, src)
  ) {
    return "";
  }

  return src;
}

/** Real vehicle illustrations, never the site placeholder card. */
export function vehicleImages(
  vehicle: Pick<Vehicle, "image" | "gallery">
) {
  const images = [vehicle.image, ...vehicle.gallery].filter(
    (src) => src && !src.includes("placeholder")
  );

  return [...new Set(images)];
}
