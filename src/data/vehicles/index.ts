export interface Vehicle {
  id: number;
  slug: string;
 name: string;
  manufacturer: string;
  category: string;
  image: string;
  description: string;
  firstAppearance: string;
  status: string;
  gallery: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: "95-grotti-cheetah",
    name: "’95 Grotti Cheetah",
    manufacturer: "Grotti",
    category: "Sports",
    image: "/images/vehicles/sports/95-grotti-cheetah.jpg",
    description:
      "Classic Grotti sports car officially revealed by Rockstar Games as part of the GTA VI Ultimate Edition content.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    gallery: [],
  },

  {
    id: 2,
    slug: "67-vapid-dominator-buggy",
    name: "’67 Vapid Dominator Buggy",
    manufacturer: "Vapid",
    category: "Off-Road",
    image: "/images/vehicles/off-road/67-vapid-dominator-buggy.jpg",
    description:
      "Vintage off-road buggy officially confirmed by Rockstar Games.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    gallery: [],
  },

  {
    id: 3,
    slug: "55-vapid-stanier",
    name: "’55 Vapid Stanier",
    manufacturer: "Vapid",
    category: "Sedan",
    image: "/images/vehicles/sedan/55-vapid-stanier.jpg",
    description:
      "Classic Vapid sedan included in Rockstar's Vintage Vice City Pack.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    gallery: [],
  },

  {
    id: 4,
    slug: "shitzu-squalo",
    name: "Shitzu Squalo",
    manufacturer: "Shitzu",
    category: "Boat",
    image: "/images/vehicles/boat/shitzu-squalo.jpg",
    description:
      "Performance speedboat officially revealed by Rockstar Games.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    gallery: [],
  },
];