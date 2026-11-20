import {
  ingameSourceHref,
  ingameWeapons,
  INGAME_SOURCE_LABEL,
  type IngameEntry,
} from "@/lib/ingame";
import { Weapon } from "@/types/weapon";
import { batch1Sources as src } from "@/src/data/launch/batch1-sources";
import { batch2Sources as src2 } from "@/src/data/launch/batch2-sources";
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
      "A matching pair of engraved revolvers that comes with the Ultimate Edition.",
    firstAppearance: "Ultimate Edition",
    ammunition: "",
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
      "Jason's pistol. The Ultimate Edition gives him an engraved version.",
    firstAppearance: "Ultimate Edition",
    ammunition: "",
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
      "Lucia's pistol. The Ultimate Edition gives her an engraved version.",
    firstAppearance: "Ultimate Edition",
    ammunition: "",
    status: "Confirmed",
    gallery: [],
    source: rockstar,
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
        text: `Sold at Ammu-Nation. In the Chapter 1 mission Gear Up, Jason can pick it as his first longarm at Chuck's Tackle & Shot in Key Lento for ${weapon.price}.`,
        links: [GUN_STORES],
        sources: [src.beebomGearUp, src.powerpyxGearUp],
      };
    case "expanded":
      return {
        text: "Only at the six Expanded Ammu-Nations.",
        links: [GUN_STORES, EXPANDED_PIN],
        sources: [
          weapon.category === "Sniper Rifle" ? src.powerpyxSniper : weapon.category === "Launcher" ? src.powerpyxLaunchers : src.powerpyxAmmuNation,
          src.powerpyxAmmuNation,
        ],
      };
    case "expanded+cheat":
      return {
        text: "Buy it at any of the six Expanded Ammu-Nations. After the story, blow up 100 vehicles to unlock a cheat that gives you one.",
        links: [GUN_STORES, EXPANDED_PIN, CHEATS],
        sources: [src.powerpyxLaunchers, src.powerpyxCheats, src.gamesradarCheats],
      };
    case "cheat-shotgun":
      return {
        text: "Comes from the Explosive Shotgun cheat, which fires explosive shells. Hit 100 enemies with explosive damage to unlock it. Cheats only work after the story.",
        links: [CHEATS, GUN_STORES],
        sources: [src.powerpyxCheats, src.gamesradarCheats],
      };
    case "bret":
      return {
        text: "Unlocks at Expanded Ammu-Nations after Bret Vogel's 9th hunting quest. His quests start in Chapter 2 with the side mission Veteran Hunted.",
        links: [GUN_STORES, EXPANDED_PIN],
        sources: [src.powerpyxSniper],
      };
    case "ue":
      return {
        text: "Comes with the Ultimate Edition, as a matching pair for Jason and Lucia.",
        links: [{ href: "/where-to-find/gun-stores", label: "Gun stores" }],
        sources: [{ label: "Rockstar Games, editions", href: "https://www.rockstargames.com/VI/editions" }, src.dayOneWeapons],
      };
    case "ammu-explosive": {
      const isMolotov = weapon.slug === "molotov";
      const cheat = isMolotov
        ? "After the story, throwing 100 molotovs unlocks the Exploding Bottles cheat."
        : "After the story, throwing 100 grenades unlocks the All Explosive Weapons cheat.";
      return {
        text: `Buy it at Ammu-Nation or grab one when an enemy drops it. ${cheat}`,
        links: [GUN_STORES, CHEATS, { href: "/where-to-find/melee-and-explosives", label: "Melee and explosives" }],
        sources: [src2.powerpyxHundred, src.powerpyxAmmuNation, src.insiderWeapons, src.powerpyxCheats, src.gamesradarCheats],
      };
    }
    case "jason":
    case "lucia":
      return {
        text: `${weapon.how === "jason" ? "Jason" : "Lucia"}'s pistol. The Ultimate Edition adds an engraved version, and Ammu-Nation sells personal decals for it once the mission Coffee Break starts.`,
        links: [GUN_STORES],
        sources: [
          { label: "Rockstar Games, editions", href: "https://www.rockstargames.com/VI/editions" },
          { label: "GameSpot, Ultimate Edition bonuses", href: "https://www.gamespot.com/articles/how-to-get-all-gta-6-ultimate-edition-bonuses/" },
          src.dayOneWeapons,
        ],
      };
    default:
      return {
        text: "Sold at Ammu-Nation gun stores. Bigger stores carry more guns.",
        links: [GUN_STORES],
        sources: [src.powerpyxAmmuNation],
      };
  }
}

function describe(weapon: LaunchWeapon) {
  if (weapon.category === "Explosives" || weapon.category === "Melee") {
    const kind = (weapon.type ?? weapon.category).toLowerCase();
    return `A ${kind} you can buy at Ammu-Nation or take from enemies.`;
  }
  const kind = (weapon.type ?? weapon.category).toLowerCase();
  const fire = weapon.fireMode ? `${weapon.fireMode.toLowerCase()} ` : "";
  const cal = weapon.caliber ? `${weapon.caliber} ` : "";
  const lead = `${article(fire || cal || kind) === "an" ? "An" : "A"} ${fire}${cal}${kind} made by ${weapon.manufacturer}.`;
  const mag = weapon.magazine ? ` Holds ${weapon.magazine} round${weapon.magazine === 1 ? "" : "s"}.` : "";
  const stats = "";
  const price = weapon.price ? ` Costs ${weapon.price} at Ammu-Nation.` : "";
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
    image: weapon.image ?? base?.image ?? "",
    imageAlt: weapon.image ? weapon.imageAlt : base?.imageAlt,
    imageRepresentative: base?.imageRepresentative,
    description: describe(weapon),
    firstAppearance: base?.firstAppearance ?? "Grand Theft Auto VI",
    ammunition: weapon.caliber ?? "",
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
          manufacturer: entry.manufacturer ?? "",
          category: entry.category ?? "Other",
          image: "",
          description: "",
          firstAppearance: "Grand Theft Auto VI gameplay",
          ammunition: "",
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

/** One short line for weapon cards. */
export function weaponLine(weapon: Weapon): string {
  const kind = weapon.type ?? weapon.category;
  const bits = [weapon.caliber ? `${weapon.caliber} ${kind.toLowerCase()}` : kind];
  if (weapon.magazine) bits.push(`${weapon.magazine}-round mag`);
  if (weapon.fireMode) bits.push(weapon.fireMode.toLowerCase());
  return bits.join(" · ");
}
