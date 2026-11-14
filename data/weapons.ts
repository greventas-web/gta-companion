import { weaponStandIns } from "@/data/standIns";
import { Weapon } from "@/types/weapon";

const rockstar =
  "https://www.rockstargames.com/VI";

export const weapons: Weapon[] = [
  {
    id: 1,
    slug: "hawk-little-morgan",
    name: "Hawk & Little Morgan Revolvers",
    manufacturer: "Hawk & Little",
    category: "Handgun",
    image: "/images/official/weapons/hawk-little-morgan.webp",
    description:
      "Rockstar includes a matching pair of Hawk & Little Morgan Revolvers with the Ultimate Edition. The published images show engraved metal. Rockstar has not published a caliber.",
    firstAppearance: "Ultimate Edition",
    ammunition: "Not published",
    status: "Confirmed",
    gallery: [],
    source: rockstar,
  },
  {
    id: 2,
    slug: "girardi-es9",
    name: "Girardi ES9",
    manufacturer: "Girardi",
    category: "Handgun",
    image: "/images/official/weapons/girardi-es9.webp",
    description:
      "Rockstar names the Girardi ES9 as Jason's engraved pistol in the Ultimate Edition. A caliber has not been published.",
    firstAppearance: "Ultimate Edition",
    ammunition: "Not published",
    status: "Confirmed",
    gallery: [],
    source: rockstar,
  },
  {
    id: 3,
    slug: "klose-k17",
    name: "Klose K17",
    manufacturer: "Klose",
    category: "Handgun",
    image: "/images/official/weapons/klose-k17.webp",
    description:
      "Rockstar names the Klose K17 as Lucia's engraved pistol in the Ultimate Edition. A caliber has not been published.",
    firstAppearance: "Ultimate Edition",
    ammunition: "Not published",
    status: "Confirmed",
    gallery: [],
    source: rockstar,
  },
  {
    id: 4,
    slug: "standard-pistol",
    name: "Standard Pistol",
    manufacturer: "Not named",
    category: "Handgun",
    image: weaponStandIns["standard-pistol"].src,
    imageAlt: weaponStandIns["standard-pistol"].alt,
    imageRepresentative: true,
    description:
      "Handguns appear in official trailers. Rockstar has not published this name or a caliber.",
    firstAppearance: "Trailer footage",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
  {
    id: 5,
    slug: "compact-pistol",
    name: "Compact Pistol",
    manufacturer: "Not named",
    category: "Handgun",
    image: weaponStandIns["compact-pistol"].src,
    imageAlt: weaponStandIns["compact-pistol"].alt,
    imageRepresentative: true,
    description:
      "A smaller handgun shape appears in official footage. Rockstar has not published this name or a caliber.",
    firstAppearance: "Trailer footage",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
  {
    id: 6,
    slug: "assault-rifle",
    name: "Assault Rifle",
    manufacturer: "Not named",
    category: "Rifle",
    image: weaponStandIns["assault-rifle"].src,
    imageAlt: weaponStandIns["assault-rifle"].alt,
    imageRepresentative: true,
    description:
      "Rifles appear in official screenshots. Rockstar has not published this name or a caliber.",
    firstAppearance: "Official screenshots",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
  {
    id: 7,
    slug: "pump-shotgun",
    name: "Pump Shotgun",
    manufacturer: "Not named",
    category: "Shotgun",
    image: weaponStandIns["pump-shotgun"].src,
    imageAlt: weaponStandIns["pump-shotgun"].alt,
    imageRepresentative: true,
    description:
      "Rockstar has not published this shotgun name or a gauge.",
    firstAppearance: "Not published",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
  {
    id: 8,
    slug: "sniper-rifle",
    name: "Sniper Rifle",
    manufacturer: "Not named",
    category: "Rifle",
    image: weaponStandIns["sniper-rifle"].src,
    imageAlt: weaponStandIns["sniper-rifle"].alt,
    imageRepresentative: true,
    description:
      "Rockstar has not published this rifle name or a caliber.",
    firstAppearance: "Not published",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
  {
    id: 9,
    slug: "rocket-launcher",
    name: "Rocket Launcher",
    manufacturer: "Not named",
    category: "Heavy",
    image: weaponStandIns["rocket-launcher"].src,
    imageAlt: weaponStandIns["rocket-launcher"].alt,
    imageRepresentative: true,
    description:
      "Rockstar has not published this weapon name.",
    firstAppearance: "Not published",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
];

export const confirmedWeapons = weapons.filter(
  (weapon) => weapon.status === "Confirmed"
);

export const unconfirmedWeapons = weapons.filter(
  (weapon) => weapon.status !== "Confirmed"
);
