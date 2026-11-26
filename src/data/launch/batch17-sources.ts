/**
 * Sources for content batch 17 (the Key Lento party house garage and
 * Invetero Spiderweb Coquette, the Red Apple Orchard magazine clue and
 * Applesauce Bobcat, Discovered Styles from WAiNK magazine scans, and how
 * to unlock the Top Fun drone).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/pr-guides-kes19/factcheck.md
 */
export type Batch17Source = { label: string; href: string };

export const batch17Sources = {
  gameRantCodes: {
    label: "Game Rant",
    href: "https://gamerant.com/gta-6-safe-codes-keypad-combinations-door-passwords-list/",
  },
  bigLeadCollectibles: {
    label: "The Big Lead",
    href: "https://www.thebiglead.com/gta-6-collectibles-guide-cards-styles-meteorite-chunks-landmark-scans/",
  },
  outputLagCodes: {
    label: "Output Lag",
    href: "https://outputlag.com/guides/gta-6-safe-garage-codes/",
  },
  theClickOrchard: {
    label: "The Click",
    href: "https://www.theclick.gg/gta-6-apple-orchard-secret-garage/",
  },
  ignStyles: {
    label: "IGN",
    href: "https://sea.ign.com/grand-theft-auto-vi-rumored-title/252361/gta-6s-waink-app-can-unlock-new-hairstyles-and-makeup",
  },
  powerPyxHundred: {
    label: "PowerPyx",
    href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/",
  },
  gamesWikiStyles: {
    label: "The Games Wiki",
    href: "https://thegameswiki.com/gta6/wiki/style-collectibles",
  },
  sportskeedaDrone: {
    label: "Sportskeeda",
    href: "https://www.sportskeeda.com/esports/how-get-drone-gta-6",
  },
  gamerHourDrone: {
    label: "GamerHour",
    href: "https://gamerhour.net/guides/gta-6-how-to-unlock-a-drone/",
  },
  powerPyxDrones: {
    label: "PowerPyx",
    href: "https://www.powerpyx.com/gta-6-all-top-fun-drone-race-time-trial-locations/",
  },
  viceCityHustleCodes: {
    label: "Vice City Hustle",
    href: "https://www.vicecityhustle.com/guides/gta-6-safe-codes",
  },
} as const satisfies Record<string, Batch17Source>;

const s = batch17Sources;

export const partyHouseSources = [s.gameRantCodes, s.bigLeadCollectibles];
export const redAppleOrchardSources = [s.gameRantCodes, s.outputLagCodes, s.theClickOrchard];
export const discoveredStylesSources = [s.ignStyles, s.powerPyxHundred, s.gamesWikiStyles, s.bigLeadCollectibles];
export const droneSources = [s.sportskeedaDrone, s.gamerHourDrone, s.powerPyxDrones, s.powerPyxHundred];
export const safeCodesExtraSources = [s.gameRantCodes, s.outputLagCodes, s.viceCityHustleCodes];
