import { Guide } from "@/types/guide";

export const guides: Guide[] = [
  {
    id: 1,
    title: "Getting Started in GTA VI",
    slug: "getting-started",
    category: "Beginner",
    image: "/images/guides/getting-started.webp",
    description:
      "Everything new players need to know before beginning their adventure in Leonida.",
    readingTime: "8 min",
    difficulty: "Beginner",
    relatedVehicles: [],
  },
  {
    id: 2,
    title: "Best Starter Vehicles",
    slug: "best-starter-vehicles",
    category: "Vehicles",
    image: "/images/guides/best-starter-vehicles.webp",
    description:
      "Learn which vehicles are the best early-game choices based on Rockstar's official information.",
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
      "Discover legitimate ways to build your wealth throughout Leonida.",
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
      "A guide to the major regions, cities and hidden areas revealed by Rockstar Games.",
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
      "Improve your survival with essential combat strategies and weapon tips.",
    readingTime: "9 min",
    difficulty: "Intermediate",
    relatedVehicles: [],
  },
];