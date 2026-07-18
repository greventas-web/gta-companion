import { NewsArticle } from "@/types/news";

export const news: NewsArticle[] = [
  {
    id: 1,
    slug: "rockstar-releases-trailer-2",
    title: "Rockstar Releases GTA VI Trailer 2",
    image: "/images/news/trailer2.webp",
    summary:
      "Rockstar Games has officially released the second Grand Theft Auto VI trailer showcasing Leonida, Jason, Lucia and new gameplay.",
    date: "2025-05-06",
    category: "Official News",
  },
  {
    id: 2,
    slug: "official-screenshots",
    title: "New Official Screenshots Released",
    image: "/images/news/screenshots.webp",
    summary:
      "Rockstar published dozens of new GTA VI screenshots highlighting locations, vehicles and characters.",
    date: "2025-05-06",
    category: "Screenshots",
  },
  {
    id: 3,
    slug: "rockstar-website-update",
    title: "Rockstar Updates GTA VI Website",
    image: "/images/news/website.webp",
    summary:
      "The official GTA VI website now includes detailed pages for characters, locations and businesses.",
    date: "2025-05-06",
    category: "Official Website",
  },
];