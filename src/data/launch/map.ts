import type { LaunchSection, LaunchTopic, MapLocationEntry } from "./types";

export const mapSection: LaunchSection = {
  id: "map",
  path: "/map",
  navLabel: "Map",
  title: "Map Locations",
  seoTitle: "GTA 6 Map Locations",
  seoDescription:
    "GTA 6 map locations. An interactive map is coming at launch. Pins are added only when a place is confirmed. Unofficial fan site.",
  heroDescription:
    "An interactive map is coming at launch. Pins will be added when a place is confirmed. This page does not invent neighborhoods.",
};

export const mapTopics: LaunchTopic[] = [
  {
    id: "interactive-map",
    title: "Interactive map",
    status: "coming-at-launch",
    summary:
      "A map you can pan and search will be added for launch day. It is not on the site yet.",
  },
  {
    id: "pins",
    title: "Location pins",
    status: "to-be-confirmed",
    summary:
      "Rockstar has shown Vice City and the state of Leonida. Individual pins stay off this page until each place is confirmed.",
  },
  {
    id: "collectibles",
    title: "Collectible pins",
    status: "to-be-confirmed",
    summary:
      "Collectible maps will be added only after the items and their locations are confirmed.",
  },
];

export const mapLocations: MapLocationEntry[] = [];
