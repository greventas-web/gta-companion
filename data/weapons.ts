import { Weapon } from "@/types/weapon";

export const weapons: Weapon[] = [
  {
    id: 1,
    slug: "glock-style-pistol",
    name: "Standard Pistol",
    category: "Handgun",
    image: "/images/weapons/standard-pistol.webp",
    description:
      "A modern semi-automatic handgun seen in official Grand Theft Auto VI trailers and promotional screenshots.",
    firstAppearance: "Trailer 1",
    ammunition: "9×19mm",
    gallery: [],
  },
  {
    id: 2,
    slug: "compact-pistol",
    name: "Compact Pistol",
    category: "Handgun",
    image: "/images/weapons/compact-pistol.webp",
    description:
      "A concealable handgun carried by several characters in official GTA VI media.",
    firstAppearance: "Rockstar Screenshots",
    ammunition: "9×19mm",
    gallery: [],
  },
  {
    id: 3,
    slug: "assault-rifle",
    name: "Assault Rifle",
    category: "Assault Rifle",
    image: "/images/weapons/assault-rifle.webp",
    description:
      "A military-style rifle visible during multiple action sequences in official GTA VI material.",
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
      "A pump-action shotgun featured during close-quarters combat scenes.",
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
      "A long-range precision rifle observed in official Rockstar promotional media.",
    firstAppearance: "Rockstar Screenshots",
    ammunition: "7.62mm",
    gallery: [],
  },
  {
    id: 6,
    slug: "rocket-launcher",
    name: "Rocket Launcher",
    category: "Heavy Weapon",
    image: "/images/weapons/rocket-launcher.webp",
    description:
      "A heavy explosive launcher briefly visible in official GTA VI promotional material.",
    firstAppearance: "Trailer 2",
    ammunition: "Rocket",
    gallery: [],
  },
];