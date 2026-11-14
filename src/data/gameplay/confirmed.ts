export type CitedSource = {
  label: string;
  href: string;
};

export const characterSwitching =
  "You can switch between Jason and Lucia. Outside missions you can switch freely, and whoever you aren't controlling follows their own routine. In some missions you can switch as much as you want; in others the story locks you to one character or switches for you (e.g. the bank-robbery getaway switches you from Jason shooting to Lucia driving). You can also call your partner to join you, or play solo.";

export const relationshipSystem =
  "You can play as a couple or just as partners. The relationship can weaken and be restored. It affects actions like holding hands and kissing, and the status is viewable in-game. Romance is optional.";

export const famitsuSources = [
  {
    label: "Famitsu",
    href: "https://www.famitsu.com/article/202608/85753",
  },
  {
    label: "GTAVice",
    href: "https://www.gtavice.net/news/gta-6-famitsus-full-rob-nelson-interview-translated-into-english",
  },
] as const satisfies readonly CitedSource[];

export const switchingSources = [
  ...famitsuSources,
  {
    label: "Dazed",
    href: "https://www.dazeddigital.com/life-culture/article/70859/1/gta-6-grand-theft-auto-vi-rockstar-exclusive-deep-dive-game-unparalleled-world",
  },
  {
    label: "PC Gamer",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6s-story-is-too-important-for-rockstar-to-let-you-swap-between-lucia-and-jason-whenever-you-want/",
  },
] as const satisfies readonly CitedSource[];

export const ignBigInterview = {
  label: "IGN",
  href: "https://sea.ign.com/grand-theft-auto-vi-rumored-title/249916/gta-6-the-big-interview",
} as const satisfies CitedSource;

export const ignStepForward = {
  label: "IGN (Step Forward)",
  href: "https://in.ign.com/grand-theft-auto-vi/270365/its-a-step-forward-in-all-respects-exclusive-gta-6-interview",
} as const satisfies CitedSource;

export const edgeViaVice = {
  label: "Vice",
  href: "https://www.vice.com/en/article/gta-6-edge-magazine-new-screenshots-features/",
} as const satisfies CitedSource;

export const gameInformerAnimals = {
  label: "Game Informer",
  href: "https://gameinformer.com/exclusive/2026/09/29/exclusive-grand-theft-auto-vi-includes-over-170-animal-species",
} as const satisfies CitedSource;

export const gamespotTgg = {
  label: "GameSpot",
  href: "https://www.gamespot.com/articles/gta-6-fishing-and-hunting-doesnt-work-like-you-think-it-does/",
} as const satisfies CitedSource;

export const extendedLook = {
  label: "Extended Look",
  href: "https://www.youtube.com/watch?v=tJbzMqJGH4k",
} as const satisfies CitedSource;

export const maccaSource = {
  label: "Gematsu",
  href: "https://www.gematsu.com/2026/11/grand-theft-auto-vi-in-game-animated-series-macca-friends-teaser-trailer",
} as const satisfies CitedSource;

export const gameplaySources = [
  ...famitsuSources,
  ignBigInterview,
  ignStepForward,
  edgeViaVice,
] as const satisfies readonly CitedSource[];

export const gameplaySystems = [
  "Criminal Profile: professional versus violent.",
  "A witness-based wanted system, up to six stars.",
  "Heat and Heat Area: change clothes, ditch a weapon, or leave the area.",
  "A bank account. You lose carried cash when Wasted or Busted.",
  "Tiered car theft: lock-pick, key cloner, trackers and alarms, and fences.",
  "A vehicle scanner, plus Pay 'n' Spray value and registration.",
  "Long guns cannot be concealed. Ammu-Nation lockers and trunk storage are how Rockstar described keeping them.",
  "Suppressive fire.",
  "An in-world phone with apps: Snapmatic (follow and browse others' posts; Jason and Lucia can't post because they're on the run), Ryde Me (ride-share you can use for fast travel, riding along and chatting on the way), WAINK (scan a car for locks, alarm, tracker, value, registration cost, and the tool you need; it also lists cars fences want), Scooter Bros (your personal vehicle delivered, weapons in the trunk), plus a video app, a fitness app, and a banking app.",
  "Unexplored map areas stay hidden until visited.",
  "Gyms: 3 exercises, and 3 days in a row levels up health and strength.",
  "Food buffs.",
] as const;

export const esrbRating =
  "The ESRB rated Grand Theft Auto VI M (Mature 17+). The descriptors are Blood and Gore, Intense Violence, Mature Humor, Nudity, Strong Language, Strong Sexual Content, Use of Drugs and Alcohol, and In-Game Purchases.";

export const esrbSources = [
  {
    label: "ESRB",
    href: "https://www.esrb.org/ratings/41627/grand-theft-auto-vi/",
  },
  {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
] as const satisfies readonly CitedSource[];

export const rockstarVi = {
  label: "Rockstar Games",
  href: "https://www.rockstargames.com/VI",
} as const satisfies CitedSource;

export const rockstarViPage = {
  label: "Rockstar Games (GTA VI page)",
  href: "https://www.rockstargames.com/VI",
} as const satisfies CitedSource;

export const rockstarSupportEditions = {
  label: "Rockstar Support",
  href: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
} as const satisfies CitedSource;

export const playstationStandard = {
  label: "PlayStation Store",
  href: "https://store.playstation.com/en-us/product/EP1004-PPSA01547_00-GTAVISTANDARD001",
} as const satisfies CitedSource;

export const playstationUltimate = {
  label: "PlayStation Store",
  href: "https://store.playstation.com/en-us/product/EP1004-PPSA01547_00-GTAVIULTIMATE001",
} as const satisfies CitedSource;

export const xboxStandard = {
  label: "Xbox Store",
  href: "https://www.xbox.com/en-US/games/store/grand-theft-auto-vi/9NL3WWNZLZZN",
} as const satisfies CitedSource;

export const xboxUltimate = {
  label: "Xbox Store",
  href: "https://www.xbox.com/en-US/games/store/grand-theft-auto-vi-ultimate-edition/9nnzsnhlr63l",
} as const satisfies CitedSource;

export const xboxUpgrade = {
  label: "Xbox Store",
  href: "https://www.xbox.com/en-US/games/store/grand-theft-auto-vi-ultimate-edition-upgrade/9pn4llbr8rch",
} as const satisfies CitedSource;
