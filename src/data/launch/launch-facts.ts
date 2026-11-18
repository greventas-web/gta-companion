/**
 * Facts confirmed from launch coverage after the rolling launch began on
 * November 18, 2026 (US time). Each entry has at least two independent
 * sources or one reputable outlet. Text only: no streamer footage.
 */
export type LaunchSource = { label: string; href: string };

export const launchSources = {
  powerpyxAmmuNation: {
    label: "PowerPyx, Ammu-Nation locations",
    href: "https://www.powerpyx.com/gta-6-all-ammu-nation-gun-stores-locations/",
  },
  dayOneAmmuNation: {
    label: "DayOne, every Ammu-Nation store",
    href: "https://playday.one/2026/11/18/every-ammu-nation-store-in-gta-6/",
  },
  powerpyxProgress: {
    label: "PowerPyx, Progress Database",
    href: "https://www.powerpyx.com/gta-6-collectible-guide-progress-database/",
  },
  powerpyxHundred: {
    label: "PowerPyx, 100% checklist",
    href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/",
  },
  gtaCulture: {
    label: "GTA Culture, collectibles and counts",
    href: "https://gtaculture.com/guides/gta-6-collectibles",
  },
  cultrTrophies: {
    label: "CULTR, trophy list",
    href: "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/",
  },
  gamespewTrophies: {
    label: "GameSpew, trophy list",
    href: "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/",
  },
  pcGamerTrophies: {
    label: "PC Gamer, achievement list",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/",
  },
  gtabaseMissions: {
    label: "GTABase, missions list",
    href: "https://www.gtabase.com/missions/gta-6/",
  },
  powerpyxWalkthrough: {
    label: "PowerPyx, full walkthrough",
    href: "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/",
  },
  beebomApps: {
    label: "Beebom, phone apps",
    href: "https://beebom.com/all-gta-6-phone-apps/",
  },
} as const satisfies Record<string, LaunchSource>;

export type AmmuNationInventory = "Limited" | "Standard" | "Hunting" | "Expanded";

export type AmmuNationStore = {
  name: string;
  county: "Mariana County" | "Vice-Dale County" | "Kelly County" | "Leonard County" | "Lummox County";
  area: string;
  inventory: AmmuNationInventory;
};

/** All 24 branches. Names and stock tiers agree in PowerPyx and DayOne. Counties follow PowerPyx's in-game map headings (Leonard and Lummox are separate from Kelly). */
export const ammuNationStores: AmmuNationStore[] = [
  { name: "Barrage Gun Supply", county: "Mariana County", area: "Keys, near Mile Zero Air Station", inventory: "Standard" },
  { name: "Chuck’s Tackle & Shot", county: "Mariana County", area: "Key Lento", inventory: "Limited" },
  { name: "Guns Aplenty!", county: "Mariana County", area: "Watson", inventory: "Hunting" },
  { name: "Richardson Hunting Supplies", county: "Mariana County", area: "North Mariana County", inventory: "Standard" },
  { name: "Woodhatch", county: "Mariana County", area: "Capri", inventory: "Expanded" },
  { name: "Big Shots", county: "Vice-Dale County", area: "Hamlet", inventory: "Expanded" },
  { name: "Hamlet Traders", county: "Vice-Dale County", area: "Hamlet", inventory: "Standard" },
  { name: "Phil’s Ammu-Nation", county: "Vice-Dale County", area: "South Vice City", inventory: "Expanded" },
  { name: "Tequesta Guns & Ammo", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Vice City Firearms", county: "Vice-Dale County", area: "South Central Vice City", inventory: "Standard" },
  { name: "Martez Empenos", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Jackson Firearms", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Vice City Gun & Pawn", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Pawn & Gun – Crosstown", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Quickscope", county: "Vice-Dale County", area: "Central Vice City", inventory: "Standard" },
  { name: "Black Eagle", county: "Vice-Dale County", area: "Northwest Vice City", inventory: "Expanded" },
  { name: "Zenon’s Pawn Shop", county: "Vice-Dale County", area: "North Vice City", inventory: "Standard" },
  { name: "Iron & Oak", county: "Vice-Dale County", area: "North Vice City", inventory: "Expanded" },
  { name: "Prestige Firearms", county: "Vice-Dale County", area: "Ocean Beach, Vice City", inventory: "Expanded" },
  { name: "Tactical Outlet Guns", county: "Leonard County", area: "Belville", inventory: "Standard" },
  { name: "Pawn & Gun – Port Gellhorn", county: "Kelly County", area: "Port Gellhorn", inventory: "Standard" },
  { name: "Gellhorn Outfitters", county: "Kelly County", area: "Port Gellhorn", inventory: "Standard" },
  { name: "Biff’s Gun Supply", county: "Kelly County", area: "Ambrosia", inventory: "Standard" },
  { name: "Rusty Willis Jr. Hunting Supplies", county: "Lummox County", area: "Mount Kalaga National Park", inventory: "Hunting" },
];

export const ammuNationSources = [
  launchSources.powerpyxAmmuNation,
  launchSources.dayOneAmmuNation,
];

export const ammuNationNotes = [
  "Each branch shows its stock tier when you hover its map icon: Limited, Standard, Hunting, or Expanded.",
  "Expanded branches carry the widest range, including sniper rifles, grenade launchers, and rocket launchers.",
  "Many branches also sell clothing and have a weapon locker; some sell fishing gear.",
];

/** Totals from the in-game Progress menu (Map > Progress). */
export const vehicleCounts = {
  total: 557,
  baseModels: 277,
  standout: 280,
  neededFor100: 200,
  sources: [
    launchSources.powerpyxProgress,
    launchSources.powerpyxHundred,
    launchSources.gtaCulture,
  ],
} as const;

export const girlypopGroup = {
  name: "Girlypop",
  count: 16,
  unlock: "Finding all 16 unlocks a cheat filter.",
  countsToward100: false,
  sources: vehicleCounts.sources,
} as const;

/** Reviewer counts and play times for the story, from launch-day coverage. */
export const storyLength = {
  pressStartMissions: 93,
  chapters: 5,
  pcGamerMissions: 91,
  pressStartPlaythrough: "under 50 hours",
  powerpyxEstimate: "60 to 80 hours",
  listedChapters: "1 to 3",
  sources: [
    {
      label: "Press Start, story mission count",
      href: "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/",
    },
    {
      label: "PC Gamer, mission list",
      href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/",
    },
    {
      label: "PowerPyx, full walkthrough",
      href: "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/",
    },
  ],
} as const;
