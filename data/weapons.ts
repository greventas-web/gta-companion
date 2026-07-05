import { Weapon } from "@/types/weapon";

export const weapons: Weapon[] = [
  {
    id: 1,
    slug: "pistol",
    name: "Pistol",
    category: "Handgun",
    image: "/images/weapons/pistol.webp",
    description:
      "A standard semi-automatic handgun featured in official Grand Theft Auto VI promotional material.",
    firstAppearance: "Trailer 1",
    ammunition: "9mm",
    gallery: [],
  },
  {
    id: 2,
    slug: "combat-pistol",
    name: "Combat Pistol",
    category: "Handgun",
    image: "/images/weapons/combat-pistol.webp",
    description:
      "Compact service pistol observed in official Rockstar screenshots.",
    firstAppearance: "Screenshots",
    ammunition: "9mm",
    gallery: [],
  },
  {
    id: 3,
    slug: "assault-rifle",
    name: "Assault Rifle",
    category: "Assault Rifle",
    image: "/images/weapons/assault-rifle.webp",
    description:
      "Automatic rifle shown in official GTA VI promotional media.",
    firstAppearance: "Trailer 2",
    ammunition: "5.56×45mm",
    gallery: [],
  },
  {
    id: 4,
    slug: "pump-shotgun",
    name: "Pump Shotgun",
    category: "Shotgun",
    image: "/images/weapons/pump-shotgun.webp",
    description:
      "Pump-action shotgun featured in official GTA VI footage.",
    firstAppearance: "Trailer 2",
    ammunition: "12 Gauge",
    gallery: [],
  },
  {
    id: 5,
    slug: "sniper-rifle",
    name: "Sniper Rifle",
    category: "Sniper Rifle",
    image: "/images/weapons/sniper-rifle.webp",
    description:
      "Long-range precision rifle appearing in official Rockstar promotional material.",
    firstAppearance: "Screenshots",
    ammunition: "7.62mm",
    gallery: [],
  },
];