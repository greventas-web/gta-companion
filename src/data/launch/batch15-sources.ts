/**
 * Sources for content batch 15 (Randy's wish list, the Pegassi Infernus at the
 * Crosstown Police Station, the Halifax statue choices in Dubious Provenance,
 * Jason's Rainy Day Fund stash in Key Lento).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-15-factcheck.md
 */
export type Batch15Source = { label: string; href: string };

export const batch15Sources = {
  pushSquareRandy: { label: "Push Square", href: "https://www.pushsquare.com/guides/gta-6-randys-wish-list-vehicle-locations" },
  gameRantRandy: { label: "Game Rant", href: "https://gamerant.com/gta-6-all-randy-wish-list-vehicles-locations/" },
  radioTimesRandy: { label: "Radio Times", href: "https://www.radiotimes.com/technology/gaming/gta-6-randys-wishlist-cars/" },
  culturedVulturesThrax: { label: "Cultured Vultures", href: "https://culturedvultures.com/gta-6-where-to-find-the-truffade-thrax/" },
  gamesGgThrax: { label: "games.gg", href: "https://games.gg/grand-theft-auto-vi/guides/truffade-thrax-location-how-to-find-grand-theft-auto-6/" },
  gameRantInfernus: { label: "Game Rant", href: "https://gamerant.com/gta-6-pegassi-infernus-location-randy-wish-list/" },
  radioTimesInfernus: { label: "Radio Times", href: "https://www.radiotimes.com/technology/gaming/gta-6-how-to-steal-pegassi-infernus-explained/" },
  insiderInfernus: { label: "Insider Gaming", href: "https://insider-gaming.com/where-to-find-the-pegassi-infernus-gta-6/" },
  polygonHalifax: { label: "Polygon", href: "https://www.polygon.com/gta-6-dubious-provenance-should-you-give-halifax-statue-trust-spare/" },
  pcGamerHalifax: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-give-statue-to-benedict-halifax-or-not/" },
  gamesRadarHalifax: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-give-statue-trust-benedict-halifax-or-not/" },
  screenRantHalifax: { label: "Screen Rant", href: "https://screenrant.com/gta-6-should-halifax-statue-dubious-provenance/" },
  gameRantHalifax: { label: "Game Rant", href: "https://gamerant.com/gta-6-halifax-give-statue-trust-choices/" },
  viceHalifax: { label: "Vice", href: "https://www.vice.com/en/article/gta-6-trust-halifax-or-not-missable-rewards/" },
  vgcStash: { label: "VGC", href: "https://www.videogameschronicle.com/guide/gta-6-recover-jasons-stash-grand-theft-auto/" },
  gamesGgStash: { label: "games.gg", href: "https://games.gg/grand-theft-auto-vi/guides/how-to-get-jasons-stash-back-grand-theft-auto-6-chapter-2/" },
  esportsGgStash: { label: "esports.gg", href: "https://esports.gg/guides/grand-theft-auto-6/can-you-return-to-jasons-key-lento-house-in-gta-6/" },
} as const satisfies Record<string, Batch15Source>;

const s = batch15Sources;
export const randyWishListSources = [s.pushSquareRandy, s.gameRantRandy, s.radioTimesRandy, s.culturedVulturesThrax, s.gamesGgThrax];
export const infernusSources = [s.gameRantInfernus, s.radioTimesInfernus, s.insiderInfernus, s.pushSquareRandy];
export const halifaxSources = [s.polygonHalifax, s.pcGamerHalifax, s.gamesRadarHalifax, s.screenRantHalifax, s.gameRantHalifax, s.viceHalifax];
export const jasonsStashSources = [s.vgcStash, s.gamesGgStash, s.esportsGgStash];
