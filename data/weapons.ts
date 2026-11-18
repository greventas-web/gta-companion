import { weaponStandIns } from "@/data/standIns";
import {
  ingameSourceHref,
  ingameWeapons,
  INGAME_SOURCE_LABEL,
  type IngameEntry,
} from "@/lib/ingame";
import { Weapon } from "@/types/weapon";
import { batch1Sources as src } from "@/src/data/launch/batch1-sources";
import {
  launchWeapons,
  type LaunchWeapon,
} from "@/src/data/weapons/launch-weapons";

const rockstar =
  "https://www.rockstargames.com/VI";

const baseWeapons: Weapon[] = [
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
    image: "",
    description:
      "Rockstar has not published this weapon name.",
    firstAppearance: "Not published",
    ammunition: "Not published",
    status: "Expected / unconfirmed",
    gallery: [],
  },
];


const GUN_STORES = { href: "/where-to-find/gun-stores", label: "All 24 Ammu-Nation gun stores" };
const EXPANDED_PIN = {
  href: `/map?pin=${encodeURIComponent("confirmed:phils-ammu-nation")}`,
  label: "Phil's Ammu-Nation (Expanded) on the map",
};
const CHEATS = { href: "/cheats/combat-cheats", label: "GTA 6 combat cheats" };

function article(word: string) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function howToGet(weapon: LaunchWeapon): {
  text: string;
  links: { href: string; label: string }[];
  sources: { label: string; href: string }[];
} {
  switch (weapon.how) {
    case "gearup":
      return {
        text: `Sold at Ammu-Nation. In the Chapter 1 mission Gear Up, Jason can buy it for ${weapon.price} at Chuck's Tackle & Shot in Key Lento, his first gun store, as his choice of longarm.`,
        links: [GUN_STORES],
        sources: [src.beebomGearUp, src.powerpyxGearUp],
      };
    case "expanded":
      return {
        text: `Sold only at the six Expanded Ammu-Nations: Big Shots (Hamlet), Woodhatch (Capri), Phil's Ammu-Nation, Black Eagle, Iron & Oak, and Prestige Firearms (Ocean Beach).${weapon.price ? ` Price: ${weapon.price}.` : ""}`,
        links: [GUN_STORES, EXPANDED_PIN],
        sources: [
          weapon.category === "Sniper Rifle" ? src.powerpyxSniper : weapon.category === "Launcher" ? src.powerpyxLaunchers : src.powerpyxAmmuNation,
          src.powerpyxAmmuNation,
        ],
      };
    case "expanded+cheat":
      return {
        text: `Sold for ${weapon.price} at the six Expanded Ammu-Nations. After the story, the Hauners H-AT cheat (unlocked by blowing up 100 vehicles) also adds one to your loadout.`,
        links: [GUN_STORES, EXPANDED_PIN, CHEATS],
        sources: [src.powerpyxLaunchers, src.powerpyxCheats, src.gamesradarCheats],
      };
    case "cheat-shotgun":
      return {
        text: "The Explosive Shotgun cheat adds a Mason & Keen Shortstraw that fires explosive shells. Cheats work only after the story, and this one unlocks after you hit 100 enemies with explosive damage.",
        links: [CHEATS, GUN_STORES],
        sources: [src.powerpyxCheats, src.gamesradarCheats],
      };
    case "bret":
      return {
        text: `Sold for ${weapon.price} at Expanded Ammu-Nations once you finish Bret Vogel's 9th hunting quest. His questline starts in Chapter 2 with the optional mission Veteran Hunted (Meet Bret).`,
        links: [GUN_STORES, EXPANDED_PIN],
        sources: [src.powerpyxSniper],
      };
    case "ue":
      return {
        text: "An Ultimate Edition reward, sold as a matching pair for Jason and Lucia.",
        links: [{ href: "/where-to-find/gun-stores", label: "Gun stores" }],
        sources: [{ label: "Rockstar Games, editions", href: "https://www.rockstargames.com/VI/editions" }, src.dayOneWeapons],
      };
    case "jason":
    case "lucia":
      return {
        text: `${weapon.how === "jason" ? "Jason" : "Lucia"}'s pistol. The Ultimate Edition adds an engraved version; personalized pistol decals become available at an Ammu-Nation after Coffee Break starts.`,
        links: [GUN_STORES],
        sources: [
          { label: "Rockstar Games, editions", href: "https://www.rockstargames.com/VI/editions" },
          { label: "GameSpot, Ultimate Edition bonuses", href: "https://www.gamespot.com/articles/how-to-get-all-gta-6-ultimate-edition-bonuses/" },
          src.dayOneWeapons,
        ],
      };
    default:
      return {
        text: "Ammu-Nation gun stores sell weapons, ammo, body armor, and parachutes, and stock depends on the store tier (Limited, Standard, Hunting, or Expanded). Which branches carry this one has not been published yet.",
        links: [GUN_STORES],
        sources: [src.powerpyxAmmuNation],
      };
  }
}

function describe(weapon: LaunchWeapon) {
  const kind = (weapon.type ?? weapon.category).toLowerCase();
  const fire = weapon.fireMode ? `${weapon.fireMode.toLowerCase()} ` : "";
  const cal = weapon.caliber ? `${weapon.caliber} ` : "";
  const lead = `The ${weapon.name} is ${article(fire || cal || kind)} ${fire}${cal}${kind} made by ${weapon.manufacturer} in Grand Theft Auto VI.`;
  const mag = weapon.magazine ? ` It holds ${weapon.magazine} round${weapon.magazine === 1 ? "" : "s"}.` : "";
  const stats = weapon.stats
    ? ` Its in-game stat card reads damage ${weapon.stats.damage.toFixed(1)}, accuracy ${weapon.stats.accuracy.toFixed(1)}, handling ${weapon.stats.handling.toFixed(1)}, and range ${weapon.stats.range.toFixed(1)} out of 10.`
    : " Its stat card has not been published yet.";
  const price = weapon.price ? ` Ammu-Nation price: ${weapon.price}.` : "";
  return `${lead}${mag}${stats}${price}`;
}

function toWeapon(weapon: LaunchWeapon, id: number, base?: Weapon): Weapon {
  const get = howToGet(weapon);
  const sources = [
    ...(weapon.stats ? [src.dayOneWeapons] : []),
    ...get.sources,
  ].filter((source, index, all) => all.findIndex((item) => item.href === source.href) === index);

  return {
    id,
    slug: weapon.slug,
    name: weapon.name,
    manufacturer: weapon.manufacturer,
    category: weapon.category,
    image: base?.image ?? "",
    imageAlt: base?.imageAlt,
    imageRepresentative: base?.imageRepresentative,
    description: describe(weapon),
    firstAppearance: base?.firstAppearance ?? "Grand Theft Auto VI",
    ammunition: weapon.caliber ?? "Not published",
    status: "Confirmed",
    gallery: base?.gallery ?? [],
    source: sources[0]?.href,
    sourceLabel: sources[0]?.label,
    type: weapon.type,
    caliber: weapon.caliber,
    magazine: weapon.magazine,
    fireMode: weapon.fireMode,
    stats: weapon.stats,
    price: weapon.price,
    howToGet: get.text,
    getLinks: get.links,
    sources,
  };
}

const launchBySlug = new Map(launchWeapons.map((weapon) => [weapon.slug, weapon]));

/** Pre-launch entries, upgraded with launch-day data where the same weapon exists. */
const mergedBase: Weapon[] = baseWeapons.map((weapon) => {
  const launch = launchBySlug.get(weapon.slug);
  return launch ? toWeapon(launch, weapon.id, weapon) : weapon;
});

/** Launch-day weapons that were not in the pre-launch list. */
const launchOnly: Weapon[] = launchWeapons
  .filter((weapon) => !baseWeapons.some((base) => base.slug === weapon.slug))
  .map((weapon, index) => toWeapon(weapon, 100 + index));

const catalogWeapons: Weapon[] = [...mergedBase, ...launchOnly];

const ingameBySlug = new Map(ingameWeapons.map((entry) => [entry.slug, entry]));

function applyIngame(weapon: Weapon, entry: IngameEntry): Weapon {
  return {
    ...weapon,
    ...(entry.fields ?? {}),
    name: entry.name ?? weapon.name,
    manufacturer: entry.manufacturer ?? weapon.manufacturer,
    category: entry.category ?? weapon.category,
    description: entry.description ?? weapon.description,
    image: entry.image ?? weapon.image,
    imageAlt: entry.imageAlt ?? weapon.imageAlt,
    status: "Confirmed",
    source: ingameSourceHref(entry),
    sourceLabel: INGAME_SOURCE_LABEL,
  };
}

/** Pre-launch weapons, updated from our gameplay, plus new in-game finds. */
export const weapons: Weapon[] = [
  ...catalogWeapons.map((weapon) => {
    const entry = ingameBySlug.get(weapon.slug);
    return entry ? applyIngame(weapon, entry) : weapon;
  }),
  ...ingameWeapons
    .filter((entry) => !catalogWeapons.some((weapon) => weapon.slug === entry.slug))
    .map((entry, index) =>
      applyIngame(
        {
          id: 10000 + index,
          slug: entry.slug,
          name: entry.name ?? entry.slug,
          manufacturer: entry.manufacturer ?? "Not shown",
          category: entry.category ?? "Other",
          image: "",
          description: "",
          firstAppearance: "Grand Theft Auto VI gameplay",
          ammunition: "Not shown",
          status: "Confirmed",
          gallery: [],
        },
        entry
      )
    ),
];

export const confirmedWeapons = weapons.filter(
  (weapon) => weapon.status === "Confirmed"
);

export const unconfirmedWeapons = weapons.filter(
  (weapon) => weapon.status !== "Confirmed"
);
