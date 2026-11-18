import { clothing } from "@/data/clothing";
import { news } from "@/data/news";
import { stores } from "@/data/stores";
import { vehicles } from "@/data/vehicles";

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

  ...stores.map((store) => ({
    id: `store-${store.slug}`,
    title: store.name,
    description: store.summary,
    category: "Stores",
    href: `/stores/${store.slug}`,
  })),

  ...clothing.map((item) => ({
    id: `clothing-${item.slug}`,
    title: item.name,
    description: item.summary,
    category: "Clothing",
    href: `/clothing/${item.slug}`,
  })),

  ...news.map((article) => ({
    id: `news-${article.id}`,
    title: article.title,
    description: article.summary,
    category: "News",
    href: `/news/${article.slug}`,
  })),
];