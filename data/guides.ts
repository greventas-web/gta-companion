import { Guide } from "@/types/guide";

export const guides: Guide[] = [
  {
    id: 1,
    title: "Beginner's Guide",
    slug: "beginners-guide",
    category: "Beginner",
    image: "/images/guides/beginners-guide.jpg",
    description: "Everything you need to know before starting your GTA VI journey.",
    readingTime: "8 min",
    difficulty: "Beginner",
    relatedVehicles: [],
  },
  {
    id: 2,
    title: "Best Ways to Make Money",
    slug: "best-ways-to-make-money",
    category: "Money",
    image: "/images/guides/best-ways-to-make-money.jpg",
    description: "Learn the fastest and most reliable ways to earn money in GTA VI.",
    readingTime: "10 min",
    difficulty: "Intermediate",
    relatedVehicles: [],
  },
  {
    id: 3,
    title: "100% Completion Guide",
    slug: "100-completion-guide",
    category: "Completion",
    image: "/images/guides/100-completion-guide.jpg",
    description: "Track every mission, collectible and activity needed for 100% completion.",
    readingTime: "15 min",
    difficulty: "Advanced",
    relatedVehicles: [],
  },
];