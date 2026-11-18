import { cheatList, type CheatCategory } from "./cheat-list";
import type { LaunchEntry } from "./types";

export type CheatGroup = {
  slug: string;
  category: CheatCategory;
  title: string;
  /** Short label for headings, e.g. "Player cheats". */
  label: string;
  intro: string;
};

export const cheatGroups: CheatGroup[] = [
  {
    slug: "player-cheats",
    category: "player",
    title: "GTA 6 Player Cheats: Money, Armor, Focus, and Wanted Level",
    label: "Player cheats",
    intro:
      "Ten player cheats, including the only money cheat ($250,000), body armor, unlimited Focus, and cheats that raise your Heat or wanted level.",
  },
  {
    slug: "combat-cheats",
    category: "combat",
    title: "GTA 6 Weapon Cheats: Infinite Ammo, Explosives, and More",
    label: "Combat cheats",
    intro:
      "Eleven combat cheats: max ammo, infinite ammo, no reload, explosive weapons, incendiary ammo, the Explosive Shotgun, and the Hauners H-AT rocket launcher.",
  },
  {
    slug: "vehicle-cheats",
    category: "vehicle",
    title: "GTA 6 Vehicle Spawn Cheats: All 21 Cars, Planes, and Boats",
    label: "Vehicle spawn cheats",
    intro:
      "Twenty-one cheats that spawn a vehicle, from the Progen Emerus and Truffade Thrax supercars to the Hauners Rhino Tank and P-996 Lazer jet.",
  },
  {
    slug: "environment-cheats",
    category: "environment",
    title: "GTA 6 Weather and Time Cheats",
    label: "Environment cheats",
    intro: "Three environment cheats that move time forward, pause the clock, or change the weather.",
  },
  {
    slug: "screen-filter-cheats",
    category: "filter",
    title: "GTA 6 Screen Filter Cheats",
    label: "Screen filter cheats",
    intro: "Sixteen screen filter cheats, such as Golden Hour, Dollhouse, Fisheye, and Hellscape.",
  },
];

export function cheatsIn(category: CheatCategory) {
  return cheatList.filter((cheat) => cheat.category === category);
}

/** Category pages, used by /cheats/[slug] and the sitemap. */
export const cheats: LaunchEntry[] = cheatGroups.map((group) => {
  const list = cheatsIn(group.category);
  return {
    slug: group.slug,
    title: group.title,
    summary: group.intro,
    details: [
      { label: "Cheats", value: `${list.length}` },
      { label: "Codes published", value: `${list.filter((cheat) => cheat.code).length}` },
    ],
  };
});

export function cheatSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/^\$/, "money-")
    .replace(/[’',]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function groupForCheat(category: CheatCategory) {
  return cheatGroups.find((group) => group.category === category)!;
}

/** Every single cheat with its own page: /cheats/<group>/<cheat>. */
export function cheatPages() {
  return cheatList.map((cheat) => ({ group: groupForCheat(cheat.category), cheat, slug: cheatSlug(cheat.name) }));
}

export function findCheat(groupSlug: string, slug: string) {
  return cheatPages().find((entry) => entry.group.slug === groupSlug && entry.slug === slug);
}

const ARROWS: Record<string, string> = { Up: "↑", Down: "↓", Left: "←", Right: "→" };

/** "↑ → ↓ ←" for a D-pad code. */
export function arrowCode(code?: string[]) {
  return code ? code.map((step) => ARROWS[step] ?? step).join(" ") : "";
}
