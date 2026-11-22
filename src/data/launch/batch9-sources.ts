/**
 * Sources for content batch 9 (crab research outpost codes, the silenced
 * pistol, the Key Lento sniper rifle, the missing tourists mystery,
 * motorcycles, ATM robberies, armored trucks, the UFO house Easter egg).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-9-factcheck.md
 */
export type Batch9Source = { label: string; href: string };

export const batch9Sources = {
  thegamerCrab: {
    label: "TheGamer, giant crab location and research codes",
    href: "https://www.thegamer.com/grand-theft-auto-6-giant-crab-location-crabshack-vf5-legendary-smg-research-code-safe-double-success-guide/",
  },
  gameRantCrab: { label: "Game Rant, Pelican Valley outpost codes", href: "https://gamerant.com/gta-6-pelican-valley-outpost-safe-code-how-get-crabshack-vf5-smg/" },
  bigLeadCrab: {
    label: "The Big Lead, crab research outpost password and codes",
    href: "https://www.thebiglead.com/gta-6-pelican-valley-crab-research-outpost-computer-password-keypad-codes/",
  },
  gameRantNipper: { label: "Game Rant, silenced pistol (Assassin Nipper .38)", href: "https://gamerant.com/gta-6-how-get-silenced-pistol-assassin-nipper-38-unique-legendary-weapon/" },
  thegamerNipper: { label: "TheGamer, Assassin's pistol unlock", href: "https://www.thegamer.com/gta-6-legendary-assassins-pistol-unlock-guide-how-to-find-best-starting-weapon/" },
  esportsNipper: { label: "esports.gg, Assassin Nipper location", href: "https://esports.gg/guides/grand-theft-auto-6/assassin-nipper-where/" },
  thegamerSniper: { label: "TheGamer, Shrewsbury SM-69 location", href: "https://www.thegamer.com/grand-theft-auto-6-gta6-shrewsbury-sm-69-sniper-rifle-location-guide/" },
  gtabaseSniper: { label: "GTABase, SM-69 in the Key Lento tower", href: "https://www.gtabase.com/gta-6/articles/how-to-get-a-free-sniper-rifle-early-in-gta-6" },
  gameRantPhotos: { label: "Game Rant, investigate the photos", href: "https://gamerant.com/gta-6-serial-killer-mission-investigate-photos-guide/" },
  esportsPhotos: { label: "esports.gg, investigate the photos", href: "https://esports.gg/guides/grand-theft-auto-6/gta-6-investigate-the-photos/" },
  bigLeadPhotos: { label: "The Big Lead, missing people guide", href: "https://www.thebiglead.com/gta-6-missing-people-guide-port-gellhorn-poster/" },
  gamesradarMoney: { label: "GamesRadar+, make money (ATM theft)", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-make-money-fast/" },
  gamersHeroesAtm: { label: "Gamers Heroes, rob ATM machines", href: "https://www.gamersheroes.com/game-guides/how-to-rob-atm-machines-in-gta-6/" },
  pstBlitz: { label: "PlayStationTrophies, A Classic Blitz Play", href: "https://www.playstationtrophies.org/game/grand-theft-auto-6/trophy/a-classic-blitz-play.html" },
  powerpyxTwistWrist: { label: "PowerPyx, Twist Wrist, Smash, Grab", href: "https://www.powerpyx.com/gta-6-twist-wrist-smash-grab-join-billy-on-a-job-walkthrough/" },
  powerpyxThrillbillies: { label: "PowerPyx, Thrillbillies", href: "https://www.powerpyx.com/gta-6-thrillbillies-check-out-the-mud-club-walkthrough/" },
  forbesStreetBike: { label: "Forbes, best early-game vehicle", href: "https://tech.yahoo.com/gaming/articles/best-early-game-gta-6-140434169.html" },
  pcgamerUfoHouse: {
    label: "PC Gamer, the UFO house",
    href: "https://www.pcgamer.com/games/grand-theft-auto/the-5-year-long-mystery-of-the-ufo-house-has-finally-been-solved-in-gta-6-but-one-npc-knows-too-much/",
  },
} as const satisfies Record<string, Batch9Source>;

const s = batch9Sources;
export const crabLabSources = [s.thegamerCrab, s.gameRantCrab, s.bigLeadCrab];
export const silencedPistolSources = [s.gameRantNipper, s.thegamerNipper, s.esportsNipper];
export const sniperRifleSources = [s.thegamerSniper, s.gtabaseSniper];
export const missingTouristsSources = [s.gameRantPhotos, s.esportsPhotos, s.bigLeadPhotos];
export const motorcycleSources = [s.powerpyxThrillbillies, s.powerpyxTwistWrist, s.forbesStreetBike];
export const atmSources = [s.gamesradarMoney, s.gamersHeroesAtm];
export const armoredTruckSources = [s.pstBlitz, s.powerpyxTwistWrist];
export const ufoHouseSources = [s.pcgamerUfoHouse];
