/**
 * Launch-day sources for content batch 3 (challenges, garages, fences,
 * Strangers & Freaks, meditation, drone races, race challenges, golf).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-3-factcheck.md
 */
export type Batch3Source = { label: string; href: string };

export const batch3Sources = {
  powerpyxChallenges: {
    label: "PowerPyx, all challenges",
    href: "https://www.powerpyx.com/gta-6-all-challenges-guide/",
  },
  insiderChallenges: {
    label: "Insider Gaming, all GTA 6 challenges",
    href: "https://insider-gaming.com/gta-6-challenges/",
  },
  gamesggChallenges: {
    label: "GAMES.GG, all challenges",
    href: "https://games.gg/grand-theft-auto-vi/guides/gta-6-all-challenges-and-how-to-complete/",
  },
  gamesradarTrophies: {
    label: "GamesRadar+, trophy and achievement list",
    href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-trophy-achievement-list/",
  },
  powerpyxGarages: {
    label: "PowerPyx, all garage locations",
    href: "https://www.powerpyx.com/gta-6-all-garage-locations/",
  },
  gamespotGarages: {
    label: "GameSpot, all garage locations and prices",
    href: "https://www.gamespot.com/articles/all-garage-locations-and-prices-in-gta-6/",
  },
  pcgamerFences: {
    label: "PC Gamer, fence locations",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-fence-locations/",
  },
  powerpyxFences: {
    label: "PowerPyx, all fence locations",
    href: "https://www.powerpyx.com/gta-6-all-fence-locations-how-to-fence-stolen-goods/",
  },
  powerpyxMeditation: {
    label: "PowerPyx, all meditation spots",
    href: "https://www.powerpyx.com/gta-6-all-meditation-spot-locations/",
  },
  sportskeedaMeditation: {
    label: "Sportskeeda, all meditation spots",
    href: "https://www.sportskeeda.com/gta/all-meditation-spots-gta-6-locations",
  },
  powerpyxDrones: {
    label: "PowerPyx, all Top Fun drone races",
    href: "https://www.powerpyx.com/gta-6-all-top-fun-drone-race-time-trial-locations/",
  },
  trueAchievementsTopFun: {
    label: "TrueAchievements, Top Fun",
    href: "https://www.trueachievements.com/a677797/top-fun-achievement",
  },
  powerpyxRaceChallenges: {
    label: "PowerPyx, all race challenges",
    href: "https://www.powerpyx.com/gta-6-all-race-challenge-locations-gold-medals/",
  },
  powerpyxGolf: {
    label: "PowerPyx, all golf courses",
    href: "https://www.powerpyx.com/gta-6-all-golf-course-locations/",
  },
  dayOneLeisure: {
    label: "DayOne, all leisure activities",
    href: "https://playday.one/2026/11/18/all-leisure-activities-in-gta-6/",
  },
  powerpyxStrangers: {
    label: "PowerPyx, all Strangers & Freaks side missions",
    href: "https://www.powerpyx.com/gta-6-all-strangers-freaks-side-missions/",
  },
  indiatimesStrangers: {
    label: "Indiatimes, stranger missions guide",
    href: "https://www.indiatimes.com/game-guides/gta-6-stranger-missions-guide-all-7-confirmed-characters-side-activities-and-achievements-explained/articleshow/135967097.html",
  },
  powerpyxFirstPerson: {
    label: "PowerPyx, first-person view",
    href: "https://www.powerpyx.com/gta-6-how-to-play-in-first-person-view/",
  },
  gameRantFirstPerson: {
    label: "Game Rant, first-person in GTA 6",
    href: "https://gamerant.com/gta-6-first-person-camera-guide/",
  },
  vgcFirstPerson: {
    label: "VGC, first-person mode explained",
    href: "https://www.videogameschronicle.com/guide/gta-6-first-person-mode-explained-does-gta-6-have-a-first-person-mode/",
  },
} as const satisfies Record<string, Batch3Source>;

const s = batch3Sources;

export const challengeSources: Batch3Source[] = [s.powerpyxChallenges, s.insiderChallenges, s.gamesggChallenges, s.gamesradarTrophies];
export const garageSources: Batch3Source[] = [s.powerpyxGarages, s.gamespotGarages, s.gamesradarTrophies];
export const fenceSources: Batch3Source[] = [s.pcgamerFences, s.powerpyxFences];
export const meditationSources: Batch3Source[] = [s.powerpyxMeditation, s.sportskeedaMeditation, s.gamesradarTrophies];
export const droneSources: Batch3Source[] = [s.powerpyxDrones, s.trueAchievementsTopFun, s.gamesradarTrophies];
export const raceChallengeSources: Batch3Source[] = [s.powerpyxRaceChallenges, s.dayOneLeisure];
export const golfSources: Batch3Source[] = [s.powerpyxGolf, s.dayOneLeisure, s.powerpyxChallenges];
export const strangerSources: Batch3Source[] = [s.powerpyxStrangers, s.gamesradarTrophies, s.indiatimesStrangers];
export const firstPersonSources: Batch3Source[] = [s.powerpyxFirstPerson, s.gameRantFirstPerson, s.vgcFirstPerson];
