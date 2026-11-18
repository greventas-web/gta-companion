import { radioStations } from "@/data/radio";

export const radioSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const stationPages = radioStations.map((station) => ({ ...station, slug: radioSlug(station.name) }));

export function findStation(slug: string) {
  return stationPages.find((station) => station.slug === slug);
}
