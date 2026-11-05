import { NewsArticle } from "@/types/news";

export const news: NewsArticle[] = [
  {
    id: 6,
    slug: "gta-vi-launch-date",
    title: "GTA VI Launches November 19, 2026",
    image: "/images/news/website.webp",
    summary:
      "Rockstar Games has set Grand Theft Auto VI for November 19, 2026 on PlayStation 5 and Xbox Series X|S. The launch trailer also confirms pre-orders are open.",
    date: "2026-10-15",
    category: "Official News",
  },
  {
    id: 5,
    slug: "gta-vi-launch-trailer",
    title: "Rockstar Releases the GTA VI Launch Trailer",
    image: "/images/news/trailer2.webp",
    summary:
      "The official launch trailer debuts Flower in a Hurricane, from score composers Justice with Tame Impala, SZA, and King Gizzard & The Lizard Wizard.",
    date: "2026-10-15",
    category: "Official News",
  },
  {
    id: 4,
    slug: "gta-vi-extended-look",
    title: "Rockstar Releases an Extended Look at GTA VI",
    image: "/images/news/screenshots.webp",
    summary:
      "A 26-minute extended look, captured on PlayStation 5, shows more of Jason, Lucia, Vice City, and Leonida.",
    date: "2026-08-27",
    category: "Official News",
  },
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
      "Rockstar Games published a large collection of official GTA VI screenshots showcasing characters, vehicles, locations and life across Leonida.",
    date: "2025-05-06",
    category: "Screenshots",
  },
  {
    id: 3,
    slug: "rockstar-website-update",
    title: "Rockstar Updates GTA VI Website",
    image: "/images/news/website.webp",
    summary:
      "The official GTA VI website has been expanded with dedicated pages covering characters, locations, businesses and additional official information.",
    date: "2025-05-06",
    category: "Official Website",
  },
].sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);