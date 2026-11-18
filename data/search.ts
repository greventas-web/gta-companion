import { news } from "@/data/news";
import { phoneItems } from "@/data/phone";
import { properties } from "@/data/properties";
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

  ...news.map((article) => ({
    id: `news-${article.id}`,
    title: article.title,
    description: article.summary,
    category: "News",
    href: `/news/${article.slug}`,
  })),

  ...phoneItems.map((item) => ({
    id: `phone-${item.slug}`,
    title: item.name,
    description: item.summary,
    category: "Phone",
    href: `/phone/${item.slug}`,
  })),

  ...properties.map((place) => ({
    id: `property-${place.slug}`,
    title: place.name,
    description: place.summary,
    category: "Property",
    href: `/properties/${place.slug}`,
  })),
];