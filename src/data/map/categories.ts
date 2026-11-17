import type { VisibleCategory } from "./types";

export type CategoryMeta = {
  id: VisibleCategory;
  label: string;
  description: string;
  color: string;
};

export const CATEGORY_META: Record<VisibleCategory, CategoryMeta> = {
  locations: {
    id: "locations",
    label: "Locations",
    description: "Regions and named places",
    color: "#c4b5fd",
  },
  businesses: {
    id: "businesses",
    label: "Businesses",
    description: "Named businesses",
    color: "#e879f9",
  },
  garages: {
    id: "garages",
    label: "Garages & safehouses",
    description: "Garages and safehouses",
    color: "#818cf8",
  },
  activities: {
    id: "activities",
    label: "Activities",
    description: "Things to do",
    color: "#67e8f9",
  },
  shops: {
    id: "shops",
    label: "Shops",
    description: "Stores, including edition shops",
    color: "#f0abfc",
  },
  collectibles: {
    id: "collectibles",
    label: "Collectibles",
    description: "Ready for launch-day pins",
    color: "#ddd6fe",
  },
};

export const CATEGORY_ORDER: VisibleCategory[] = [
  "locations",
  "businesses",
  "garages",
  "activities",
  "shops",
  "collectibles",
];
