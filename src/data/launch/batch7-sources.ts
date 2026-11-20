/**
 * Sources for content batch 7 (military base, tank, fighter jet, rocket and
 * grenade launchers, cafes and takeout).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-7-factcheck.md
 */
export type Batch7Source = { label: string; href: string };

export const batch7Sources = {
  powerpyxTank: { label: "PowerPyx, military tank location", href: "https://www.powerpyx.com/gta-6-military-tank-location/" },
  powerpyxJet: { label: "PowerPyx, military fighter jet location", href: "https://www.powerpyx.com/gta-6-military-fighter-jet-location/" },
  powerpyxLaunchers: {
    label: "PowerPyx, grenade launcher and rocket launcher",
    href: "https://www.powerpyx.com/gta-6-how-to-get-grenade-launcher-rocket-launcher/",
  },
  powerpyxCafes: { label: "PowerPyx, all cafes and takeout", href: "https://www.powerpyx.com/gta-6-all-cafes-takeout-locations/" },
  gamespotTank: { label: "GameSpot, how to get a tank", href: "https://www.gamespot.com/articles/how-to-get-a-tank-in-gta-6/" },
  pcgamerBase: {
    label: "PC Gamer, military base location",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-military-base-location/",
  },
  gamerantJet: { label: "Game Rant, military fighter jet location", href: "https://gamerant.com/gta-6-military-base-jet-location/" },
  dualshockersJet: { label: "DualShockers, where to find a fighter jet", href: "https://www.dualshockers.com/gta-6-where-to-find-a-fighter-jet/" },
  ignRocketLauncher: { label: "IGN, early rocket launcher (video)", href: "https://www.youtube.com/watch?v=J-0ssekfWuc" },
  sportskeedaRocketLauncher: {
    label: "Sportskeeda, rocket launcher early",
    href: "https://www.sportskeeda.com/esports/gta-6-how-get-rocket-launcher-early",
  },
  showgamerCafes: {
    label: "Showgamer, all 87 cafes and takeout (count cross-check)",
    href: "https://showgamer.com/en/guides/7802-vse-kafe-i-zakusochnye-v-gta-6-gde-nayti-87-zavedeniy-na-karte",
  },
} as const satisfies Record<string, Batch7Source>;

const s = batch7Sources;
export const cafeSources = [s.powerpyxCafes, s.showgamerCafes];
export const militaryBaseSources = [s.pcgamerBase, s.gamespotTank, s.powerpyxTank, s.powerpyxJet];
export const tankSources = [s.gamespotTank, s.powerpyxTank, s.pcgamerBase];
export const fighterJetSources = [s.powerpyxJet, s.pcgamerBase, s.gamerantJet, s.dualshockersJet];
export const launcherSources = [s.powerpyxLaunchers, s.ignRocketLauncher, s.sportskeedaRocketLauncher];
