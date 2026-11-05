import { vehicles } from "@/data/vehicles";
import { news } from "@/data/news";

export type SearchItem = {
  id: string;
  title: string;
  description?: string;
  category: string;
  href: string;
};

export const searchIndex: SearchItem[] = [
  ...vehicles.map((vehicle) => ({
    id: `vehicle-${vehicle.id}`,
    title: vehicle.name,
    description: vehicle.manufacturer,
    category: "Vehicles",
    href: `/vehicles/${vehicle.slug}`,
  })),

  ...news.map((article) => ({
    id: `news-${article.id}`,
    title: article.title,
    description: article.summary,
    category: "News",
    href: `/news/${article.slug}`,
  })),
];