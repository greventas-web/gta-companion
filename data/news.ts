import { NewsArticle } from "@/types/news";

export const news: NewsArticle[] = [
  {
    id: 1,
    title: "Rockstar Newswire",
    slug: "rockstar-newswire",
    category: "Official",
    image: "/images/news/rockstar-newswire.jpg",
    description:
      "Official announcements, trailers and updates directly from Rockstar Games.",
    publishedAt: "TBD",
    author: "Rockstar Games",
    readingTime: "3 min",
  },
  {
    id: 2,
    title: "Latest GTA VI Updates",
    slug: "latest-gta-vi-updates",
    category: "Updates",
    image: "/images/news/latest-gta-vi-updates.jpg",
    description:
      "A collection of the latest confirmed GTA VI news and announcements.",
    publishedAt: "TBD",
    author: "GTA Companion",
    readingTime: "5 min",
  },
  {
    id: 3,
    title: "Community Discoveries",
    slug: "community-discoveries",
    category: "Community",
    image: "/images/news/community-discoveries.jpg",
    description:
      "Interesting discoveries and discussions from the GTA community.",
    publishedAt: "TBD",
    author: "GTA Companion",
    readingTime: "4 min",
  },
];