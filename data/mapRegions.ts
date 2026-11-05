import { MapRegion } from "@/types/map";

export const mapRegions: MapRegion[] = [
  {
    id: 1,
    slug: "vice-city",
    name: "Vice City",
    subtitle: "The Heart of Leonida",
    description:
      "The vibrant coastal metropolis of Leonida, famous for its beaches, nightlife, skyscrapers and criminal underworld.",
    image: "/images/map/vice-city.webp",
    x: 56,
    y: 58,
    color: "#ec4899",
    businesses: 5,
    characters: 6,
    vehicles: 18,
    locations: 22,
  },

  {
    id: 2,
    slug: "leonida-keys",
    name: "Leonida Keys",
    subtitle: "Island Paradise",
    description:
      "A chain of tropical islands featuring marinas, beaches, fishing communities and luxury waterfront living.",
    image: "/images/map/leonida-keys.webp",
    x: 49,
    y: 90,
    color: "#38bdf8",
    businesses: 2,
    characters: 1,
    vehicles: 4,
    locations: 6,
  },

  {
    id: 3,
    slug: "port-gellhorn",
    name: "Port Gellhorn",
    subtitle: "Forgotten Coast",
    description:
      "A declining coastal town filled with abandoned motels, industrial docks and forgotten neighborhoods.",
    image: "/images/map/port-gellhorn.webp",
    x: 67,
    y: 63,
    color: "#f97316",
    businesses: 1,
    characters: 2,
    vehicles: 5,
    locations: 7,
  },

  {
    id: 4,
    slug: "ambrosia",
    name: "Ambrosia",
    subtitle: "Industrial Heartland",
    description:
      "A hardworking industrial town surrounded by factories, farms and heavy industry.",
    image: "/images/map/ambrosia.webp",
    x: 73,
    y: 42,
    color: "#22c55e",
    businesses: 2,
    characters: 1,
    vehicles: 3,
    locations: 5,
  },

  {
    id: 5,
    slug: "grassrivers",
    name: "Grassrivers",
    subtitle: "Wetlands",
    description:
      "A dangerous swamp region filled with wildlife, rivers and hidden paths through the marshes.",
    image: "/images/map/grassrivers.webp",
    x: 58,
    y: 38,
    color: "#84cc16",
    businesses: 0,
    characters: 1,
    vehicles: 2,
    locations: 8,
  },

  {
    id: 6,
    slug: "mount-kalaga",
    name: "Mount Kalaga",
    subtitle: "Northern Wilderness",
    description:
      "Leonida's mountainous northern region featuring forests, hiking trails and remote wilderness.",
    image: "/images/map/mount-kalaga.webp",
    x: 40,
    y: 18,
    color: "#8b5cf6",
    businesses: 0,
    characters: 0,
    vehicles: 1,
    locations: 6,
  },
];