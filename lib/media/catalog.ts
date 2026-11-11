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

/** Wordmark only. Vehicle photos stay on the vehicle cards so a page does not repeat one picture. */
export function manufacturerPortrait(
  _manufacturer: Pick<Manufacturer, "slug" | "logo">
) {
  return "";
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
