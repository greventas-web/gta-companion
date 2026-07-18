import { SearchItem } from "./types";

import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { brands } from "@/data/brands";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { guides } from "@/data/guides";
import { locations } from "@/data/locations";
import { news } from "@/data/news";
import { vehicles } from "@/data/vehicles";
import { weapons } from "@/data/weapons";

export const searchIndex: SearchItem[] = [
  ...vehicles.map((vehicle) => ({
    id: vehicle.id,
    title: vehicle.name,
    href: `/vehicles/${vehicle.slug}`,
    category: "Vehicle" as const,
    image: vehicle.image,
    description: vehicle.description,
  })),

  ...characters.map((character) => ({
    id: character.id,
    title: character.name,
    href: `/characters/${character.slug}`,
    category: "Character" as const,
    image: character.image,
    description: character.description,
  })),

  ...locations.map((location) => ({
    id: location.id,
    title: location.name,
    href: `/locations/${location.slug}`,
    category: "Location" as const,
    image: location.image,
    description: location.description,
  })),

  ...businesses.map((business) => ({
    id: business.id,
    title: business.name,
    href: `/businesses/${business.slug}`,
    category: "Business" as const,
    image: business.image,
    description: business.description,
  })),

  ...brands.map((brand) => ({
    id: brand.id,
    title: brand.name,
    href: `/brands/${brand.slug}`,
    category: "Brand" as const,
    image: brand.image,
    description: brand.description,
  })),

  ...weapons.map((weapon) => ({
    id: weapon.id,
    title: weapon.name,
    href: `/weapons/${weapon.slug}`,
    category: "Weapon" as const,
    image: weapon.image,
    description: weapon.description,
  })),

  ...animals.map((animal) => ({
    id: animal.id,
    title: animal.name,
    href: `/animals/${animal.slug}`,
    category: "Animal" as const,
    image: animal.image,
    description: animal.description,
  })),

  ...activities.map((activity) => ({
    id: activity.id,
    title: activity.name,
    href: `/activities/${activity.slug}`,
    category: "Activity" as const,
    image: activity.image,
    description: activity.description,
  })),

  ...guides.map((guide) => ({
    id: guide.id,
    title: guide.title,
    href: `/guides/${guide.slug}`,
    category: "Guide" as const,
    image: guide.image,
    description: guide.description,
  })),

  ...news.map((article) => ({
    id: article.id,
    title: article.title,
    href: `/news/${article.slug}`,
    category: "News" as const,
    image: article.image,
    description: article.summary,
  })),
].sort((a, b) => a.title.localeCompare(b.title));