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
    label: "Famitsu — Rob Nelson interview",
    href: "https://www.famitsu.com/article/202608/85753",
  },
  {
    label: "English translation — GTAVice",
    href: "https://www.gtavice.net/news/gta-6-famitsus-full-rob-nelson-interview-translated-into-english",
  },
] as const satisfies readonly CitedSource[];

export const switchingSources = [
  ...famitsuSources,
  {
    label: "Dazed — Rockstar deep dive",
    href: "https://www.dazeddigital.com/life-culture/article/70859/1/gta-6-grand-theft-auto-vi-rockstar-exclusive-deep-dive-game-unparalleled-world",
  },
  {
    label: "PC Gamer — character switching",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6s-story-is-too-important-for-rockstar-to-let-you-swap-between-lucia-and-jason-whenever-you-want/",
  },
] as const satisfies readonly CitedSource[];

export const ignBigInterview = {
  label: "IGN — GTA 6: The Big Interview",
  href: "https://sea.ign.com/grand-theft-auto-vi-rumored-title/249916/gta-6-the-big-interview",
} as const satisfies CitedSource;

export const ignStepForward = {
  label: "IGN — It's a Step Forward in All Respects",
  href: "https://in.ign.com/grand-theft-auto-vi/270365/its-a-step-forward-in-all-respects-exclusive-gta-6-interview",
} as const satisfies CitedSource;

export const edgeViaVice = {
  label: "Vice — Edge #430 preview",
  href: "https://www.vice.com/en/article/gta-6-edge-magazine-new-screenshots-features/",
} as const satisfies CitedSource;

export const gameInformerAnimals = {
  label: "Game Informer — over 170 animal species",
  href: "https://gameinformer.com/exclusive/2026/09/29/exclusive-grand-theft-auto-vi-includes-over-170-animal-species",
} as const satisfies CitedSource;

export const gamespotTgg = {
  label: "GameSpot — fishing and hunting (TGG)",
  href: "https://www.gamespot.com/articles/gta-6-fishing-and-hunting-doesnt-work-like-you-think-it-does/",
} as const satisfies CitedSource;

export const extendedLook = {
  label: "Rockstar Games — An Extended Look",
  href: "https://www.youtube.com/watch?v=tJbzMqJGH4k",
} as const satisfies CitedSource;

export const maccaSource = {
  label: "Gematsu — Macca & Friends teaser",
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
    label: "ESRB — Grand Theft Auto VI",
    href: "https://www.esrb.org/ratings/41627/grand-theft-auto-vi/",
  },
  {
    label: "Rockstar Games — Grand Theft Auto VI",
    href: "https://www.rockstargames.com/VI",
  },
] as const satisfies readonly CitedSource[];

export const rockstarVi = {
  label: "Rockstar Games — Grand Theft Auto VI",
  href: "https://www.rockstargames.com/VI",
} as const satisfies CitedSource;
