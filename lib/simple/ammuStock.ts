import { weapons } from "@/data/weapons";
import type { AmmuStoreCard } from "@/lib/simple/ammu";
import { launchWeapons, type LaunchWeaponHow } from "@/src/data/weapons/launch-weapons";

const EXPANDED: ReadonlySet<LaunchWeaponHow> = new Set(["expanded", "expanded+cheat", "bret"]);
const SHELF: ReadonlySet<LaunchWeaponHow> = new Set([
  "ammu",
  "ammu-melee",
  "ammu-sticky",
  "ammu-explosive",
  "ammu-cheat-shotgun",
  "gearup",
]);

const CATEGORY_ORDER = [
  "Handgun",
  "SMG",
  "Shotgun",
  "Assault Rifle",
  "Tactical Rifle",
  "Sniper Rifle",
  "LMG",
  "Launcher",
  "Explosives",
  "Melee",
];

export type StockRow = {
  slug: string;
  name: string;
  category: string;
  price: string;
  unlock: string;
};

const howBySlug = new Map(launchWeapons.map((weapon) => [weapon.slug, weapon.how]));

function rowsFor(allowed: ReadonlySet<LaunchWeaponHow>): StockRow[] {
  return weapons
    .flatMap((weapon) => {
      const how = howBySlug.get(weapon.slug);
      if (!how || !allowed.has(how) || !weapon.howToGet) return [];
      return [
        {
          slug: weapon.slug,
          name: weapon.name,
          category: weapon.category,
          price: weapon.price ?? "",
          unlock: weapon.howToGet,
        },
      ];
    })
    .sort((a, b) => {
      const category = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
      return category || a.name.localeCompare(b.name);
    });
}

export const shelfStock = rowsFor(SHELF);
export const expandedStock = rowsFor(EXPANDED);

const EXPANDED_NAMES =
  "Big Shots in Hamlet, Woodhatch in Capri, Phil's Ammu-Nation, Iron & Oak and Prestige Firearms in Vice City, and Black Eagle in north-west Vice City";

/** Store-specific lines we already publish. No guessed shelf. */
function knownStock(store: AmmuStoreCard): string[] {
  switch (store.name) {
    case "Chuck’s Tackle & Shot":
      return [
        "This is the first gun store you can reach, in Key Lento, right after the tutorial. The tier on the icon is Limited.",
        "In the Chapter 1 mission Gear Up, Jason picks his first longarm here: the Fortune & Son Moreland 850 for $700 or the Hawk & Little Mediator for $900.",
        "Vests are on the right wall, and the clerk also sells body armor under Equipment. A parachute is on the rack, often near the armor. The store sells gaiters that work as a mask.",
        "Of the nine melee weapons, Chuck's sells the Hunting Knife ($125), the Bushcraft Knife ($230) and the Diving Knife ($300). Big Shots in Hamlet is the branch that stocks all nine.",
      ];
    case "Big Shots":
      return [
        "Big Shots in Hamlet is one of the six Expanded branches, and it stocks all nine standard melee weapons: Brass Knuckles $95, Hunting Knife $125, Baton $160, Bushcraft Knife $230, EDC Knife $275, Combat Knife $285, Switchblade $290, Diving Knife $300 and Survival Knife $315.",
      ];
    case "Iron & Oak":
      return [
        "Iron & Oak is the Expanded store in Stockyard, Vice City. Our shop footage is from this branch. It lists all nine standard melee weapons, the Sticky Bomb at $185 under Ammo & Equipment, Explosives, and the Mason & Keen Shortstraw at $1,625.",
      ];
    case "Black Eagle":
      return [
        "Black Eagle is the Expanded gun store in north-west Vice City. The Black Eagle warehouse next to it is a separate building: office door 789987 and safe 031462 hold the unique Black Eagle Import Kalinga, which is not a gun on the store shelf.",
      ];
    case "Phil’s Ammu-Nation":
      return ["Phil's Ammu-Nation is the Expanded branch in South Vice City, and it is pinned on our map."];
    case "Woodhatch":
      return ["Woodhatch is the Expanded branch in Capri. It is one of the six stores that sell sniper rifles, LMGs and launchers."];
    case "Prestige Firearms":
      return ["Prestige Firearms is the Expanded branch in Ocean Beach, Vice City."];
    case "Pawn & Gun – Port Gellhorn":
      return ["Pawn & Gun in Port Gellhorn is a Standard store, and the shop itself is pinned on our map. It is a different building from Gellhorn Outfitters, the other Standard gun store in town."];
    default:
      return [];
  }
}

export function storeParagraphs(store: AmmuStoreCard): string[] {
  const pinLine = store.exactPin
    ? "The shop itself is pinned on our map."
    : store.pin
      ? "The map link opens the area this branch sits in."
      : "This branch does not have its own map pin yet.";

  const tierLine =
    store.inventory === "Expanded"
      ? `Expanded is the widest tier. Only six branches sell sniper rifles, LMGs, grenade launchers and the rocket launcher: ${EXPANDED_NAMES}. Hover the gun-store icon to confirm the tier.`
      : store.inventory === "Limited"
        ? "Limited is the smallest tier. Sniper rifles, LMGs, grenade launchers and the rocket launcher are Expanded only, so they are not on this shelf. Hover the icon and the tier reads Limited."
        : store.inventory === "Hunting"
          ? "Hunting is its own tier on the map icon. We do not have a separate hunting-only price sheet for this branch. Sniper rifles, LMGs, grenade launchers and the rocket launcher stay at the six Expanded stores."
          : "Standard sits between Limited and Expanded. Sniper rifles, LMGs, grenade launchers and the rocket launcher are Expanded only. Hover the icon and the tier reads Standard.";

  return [
    `${store.name} is a ${store.inventory} Ammu-Nation in ${store.area}, ${store.county}. ${pinLine}`,
    "Each branch shows its stock tier when you hover the map icon: Limited, Standard, Hunting or Expanded. Many branches also sell clothing and have a weapon locker, and some sell fishing gear. Each store sells its own unique weapon variant, so two branches with the same tier are not the same shelf.",
    tierLine,
    "Body armor is sold at Ammu-Nation, and a parachute is on the rack, often near the armor. Suppressors fit most weapons. The weapon locker at any branch holds guns you already own, including Jason's Girardi ES9 from Chapter 1 and, from Chapter 2, Lucia's Klose K17 and the Ultimate Edition Hawk & Little Morgan revolvers. Personal decals for those pistols go on sale once Coffee Break starts.",
    "The prices below are the ones already on the weapons pages. Where a gun is Expanded-only, it is listed only on Expanded branches. A price with no per-store shelf note means it is an Ammu-Nation price, not a claim that this exact counter stocks every row.",
    ...knownStock(store),
  ];
}
