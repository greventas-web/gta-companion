/**
 * Launch-day sources for content batch 1 (weapons, cheats, money, vehicles).
 * Every claim on those pages traces back to one of these.
 * Fact check: /workspace/launch-prep/content-batch-1-factcheck.md
 */
export type Batch1Source = { label: string; href: string };

export const batch1Sources = {
  dayOneWeapons: {
    label: "DayOne, all weapons in GTA 6 (stat cards)",
    href: "https://playday.one/2026/11/18/all-weapons-in-gta-6/",
  },
  powerpyxSniper: {
    label: "PowerPyx, how to get a sniper rifle",
    href: "https://www.powerpyx.com/gta-6-how-to-get-sniper-rifle/",
  },
  powerpyxLaunchers: {
    label: "PowerPyx, grenade and rocket launchers",
    href: "https://www.powerpyx.com/gta-6-how-to-get-grenade-launcher-rocket-launcher/",
  },
  powerpyxAmmuNation: {
    label: "PowerPyx, Ammu-Nation locations",
    href: "https://www.powerpyx.com/gta-6-all-ammu-nation-gun-stores-locations/",
  },
  powerpyxGearUp: {
    label: "PowerPyx, Gear Up walkthrough",
    href: "https://www.powerpyx.com/gta-6-gear-up-pick-up-another-gun-walkthrough/",
  },
  beebomGearUp: {
    label: "Beebom, Gear Up mission guide",
    href: "https://beebom.com/gta-6-gear-up-mission/",
  },
  insiderWeapons: {
    label: "Insider Gaming, how weapons work",
    href: "https://insider-gaming.com/gta-6-full-weapons-guide-types-and-how-to-buy/",
  },
  powerpyxParachute: {
    label: "PowerPyx, how to get a parachute",
    href: "https://www.powerpyx.com/gta-6-how-to-get-parachute/",
  },
  powerpyxRanges: {
    label: "PowerPyx, shooting range challenges",
    href: "https://www.powerpyx.com/gta-6-all-shooting-range-gold-medal-challenges/",
  },
  powerpyxProgress: {
    label: "PowerPyx, Progress Database",
    href: "https://www.powerpyx.com/gta-6-collectible-guide-progress-database/",
  },
  powerpyxCheats: {
    label: "PowerPyx, all cheats",
    href: "https://www.powerpyx.com/gta-6-all-cheats/",
  },
  gamesradarCheats: {
    label: "GamesRadar+, all GTA 6 cheats",
    href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-cheats/",
  },
  gamespotCheats: {
    label: "GameSpot, all GTA 6 cheats",
    href: "https://www.gamespot.com/articles/all-gta-6-cheats-and-how-to-unlock-them/",
  },
  insiderCheats: {
    label: "Insider Gaming, all GTA 6 cheats",
    href: "https://insider-gaming.com/all-gta-6-cheats-best-grand-theft-auto-6-cheat-codes/",
  },
  powerpyxMoney: {
    label: "PowerPyx, money guide",
    href: "https://www.powerpyx.com/gta-6-money-guide-how-to-get-money-fast/",
  },
  gamespotMoney: {
    label: "GameSpot, best ways to make money",
    href: "https://www.gamespot.com/articles/best-ways-to-make-money-fast-in-gta-6/",
  },
  powerpyxPersonalCar: {
    label: "PowerPyx, how to get a new personal car",
    href: "https://www.powerpyx.com/gta-6-how-to-get-new-personal-car/",
  },
  proGameGuidesFastest: {
    label: "Pro Game Guides, fastest cars (speeds not tested yet)",
    href: "https://progameguides.com/gta/fastest-cars-in-gta-6-vehicle-top-speed/",
  },
} as const satisfies Record<string, Batch1Source>;

export const cheatSources: Batch1Source[] = [
  batch1Sources.powerpyxCheats,
  batch1Sources.gamesradarCheats,
  batch1Sources.gamespotCheats,
  batch1Sources.insiderCheats,
];
