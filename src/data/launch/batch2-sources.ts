/**
 * Launch-day sources for content batch 2 (melee/explosives, collectibles, shooting ranges).
 * Fact check: /workspace/launch-prep/content-batch-2-factcheck.md
 */
import { batch1Sources } from "./batch1-sources";

export type Batch2Source = { label: string; href: string };

export const batch2Sources = {
  powerpyxProgress: batch1Sources.powerpyxProgress,
  powerpyxCheats: batch1Sources.powerpyxCheats,
  gamesradarCheats: batch1Sources.gamesradarCheats,
  powerpyxAmmuNation: batch1Sources.powerpyxAmmuNation,
  insiderWeapons: batch1Sources.insiderWeapons,
  powerpyxHundred: {
    label: "PowerPyx, 100% completion checklist",
    href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/",
  },
  powerpyxCards: {
    label: "PowerPyx, collectible card sets",
    href: "https://www.powerpyx.com/gta-6-all-collectible-card-sets-locations/",
  },
  powerpyxFlamingos: {
    label: "PowerPyx, cocaine flamingo locations",
    href: "https://www.powerpyx.com/gta-6-all-cocaine-flamingo-locations/",
  },
  powerpyxStunts: {
    label: "PowerPyx, stunt jump locations",
    href: "https://www.powerpyx.com/gta-6-all-stunt-jump-locations/",
  },
  powerpyxRange: {
    label: "PowerPyx, shooting range challenges",
    href: "https://www.powerpyx.com/gta-6-all-shooting-range-gold-medal-challenges/",
  },
  dayOneLeisure: {
    label: "DayOne, leisure activities",
    href: "https://playday.one/2026/11/18/all-leisure-activities-in-gta-6/",
  },
  gtaCulture: {
    label: "GTA Culture, collectibles guide",
    href: "https://gtaculture.com/guides/gta-6-collectibles",
  },
  bigLead: {
    label: "The Big Lead, collectibles guide",
    href: "https://www.thebiglead.com/gta-6-collectibles-guide-cards-styles-meteorite-chunks-landmark-scans/",
  },
  cultrTrophies: {
    label: "CULTR trophy list",
    href: "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/",
  },
  gamespewTrophies: {
    label: "GameSpew trophy list",
    href: "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/",
  },
} as const satisfies Record<string, Batch2Source>;

export const cardSetSources: Batch2Source[] = [
  batch2Sources.powerpyxProgress,
  batch2Sources.powerpyxCards,
  batch2Sources.powerpyxHundred,
  batch2Sources.bigLead,
  batch2Sources.cultrTrophies,
  batch2Sources.gamespewTrophies,
];

export const flamingoSources: Batch2Source[] = [
  batch2Sources.powerpyxProgress,
  batch2Sources.powerpyxFlamingos,
  batch2Sources.powerpyxHundred,
  batch2Sources.bigLead,
  batch2Sources.powerpyxCheats,
  batch2Sources.gamesradarCheats,
];

export const stuntSources: Batch2Source[] = [
  batch2Sources.powerpyxProgress,
  batch2Sources.powerpyxStunts,
  batch2Sources.powerpyxHundred,
  batch2Sources.dayOneLeisure,
  batch2Sources.cultrTrophies,
  batch2Sources.gamespewTrophies,
];

export const rangeSources: Batch2Source[] = [
  batch2Sources.powerpyxRange,
  batch2Sources.powerpyxHundred,
  batch2Sources.dayOneLeisure,
  batch2Sources.cultrTrophies,
  batch2Sources.gamespewTrophies,
];

export const meleeExplosiveSources: Batch2Source[] = [
  batch2Sources.powerpyxProgress,
  batch2Sources.powerpyxHundred,
  batch2Sources.powerpyxAmmuNation,
  batch2Sources.insiderWeapons,
  batch2Sources.powerpyxCheats,
  batch2Sources.gamesradarCheats,
];
