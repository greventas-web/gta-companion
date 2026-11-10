import { Guide } from "@/types/guide";

export const guides: Guide[] = [
  {
    id: 1,
    title: "Getting Started in GTA VI",
    slug: "getting-started",
    category: "Beginner",
    image: "/images/guides/getting-started.webp",
    description:
      "A beginner guide is coming at launch. This note does not include steps yet.",
    readingTime: "8 min",
    difficulty: "Beginner",
    relatedVehicles: [],
  },
  {
    id: 2,
    title: "Starter Vehicles",
    slug: "best-starter-vehicles",
    category: "Vehicles",
    image: "/images/guides/best-starter-vehicles.webp",
    description:
      "Starter vehicle picks are coming at launch. No early-game ranking is confirmed.",
    readingTime: "6 min",
    difficulty: "Beginner",
    relatedVehicles: ["bravado-banshee"],
  },
  {
    id: 3,
    title: "Making Money",
    slug: "making-money",
    category: "Money",
    image: "/images/guides/making-money.webp",
    description:
      "Money tips will be written after the game launches. Nothing here is a working method yet.",
    listed: false,
    readingTime: "10 min",
    difficulty: "Intermediate",
    relatedVehicles: [],
  },
  {
    id: 4,
    title: "Exploring Leonida",
    slug: "exploring-leonida",
    category: "Exploration",
    image: "/images/guides/exploring-leonida.webp",
    description:
      "Region notes will be expanded after launch. Unconfirmed hidden areas are not listed here.",
    readingTime: "12 min",
    difficulty: "Beginner",
    relatedVehicles: [],
  },
  {
    id: 5,
    title: "Combat Tips",
    slug: "combat-tips",
    category: "Combat",
    image: "/images/guides/combat-tips.webp",
    description:
      "Combat notes will be written after the game launches.",
    listed: false,
    readingTime: "9 min",
    difficulty: "Intermediate",
    relatedVehicles: [],
  },
];