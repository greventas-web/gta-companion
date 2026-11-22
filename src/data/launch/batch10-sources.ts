/**
 * Sources for content batch 10 (safe codes, unique weapons, early shotguns).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-10-factcheck.md
 */
export type Batch10Source = { label: string; href: string };

const dex = (path: string) => `https://www.dexerto.com/wikis/gta-6/weapons/${path}/`;

export const batch10Sources = {
  polygonBowling: { label: "Polygon", href: "https://www.polygon.com/gta-6-kingpin-bowling-alley-safe-code-location-grand-theft-auto/" },
  viceBowling: { label: "VICE", href: "https://www.vice.com/en/article/gta-6-bowling-alley-safe-code/" },
  vicePortGellhorn: { label: "VICE", href: "https://www.vice.com/en/article/gta-6-chapter-2-port-gellhorn-safe-codes/" },
  viceAllCodes: { label: "VICE", href: "https://www.vice.com/en/article/all-gta-6-safe-codes-illegal-operations/" },
  gamesradarBowling: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-bowling-alley-safe-code/" },
  culturedVulturesCodes: { label: "Cultured Vultures", href: "https://culturedvultures.com/gta-6-all-door-codes-and-safe-combinations/" },
  gameRantJanjak: { label: "Game Rant", href: "https://gamerant.com/gta-6-how-rob-san4san-janjak-garage-safe-code-vice-city/" },
  keengamerUnique: { label: "KeenGamer", href: "https://www.keengamer.com/articles/guides/gta-6-best-early-game-unique-weapon-locations/" },
  game8Unique: { label: "Game8", href: "https://game8.co/games/GTA-6/archives/638610" },
  dexertoGorse: { label: "Dexerto", href: dex("shotguns/smuggler-gorse-425") },
  dexertoComshot: { label: "Dexerto", href: dex("shotguns/unpacked-comshot-12") },
  dexertoGutterball: { label: "Dexerto", href: dex("shotguns/gutterball-moreland-850") },
  dexertoSwampBait: { label: "Dexerto", href: dex("revolvers/swamp-bait-akulus") },
  dexertoHuntsman: { label: "Dexerto", href: dex("sniper-rifles/cruel-huntsmans-sm-69") },
  dexertoConspiracist: { label: "Dexerto", href: dex("submachine-guns/conspiracist-type-9") },
  dexertoTurnt: { label: "Dexerto", href: dex("pistols/turnt-nipper-38") },
  dexertoDrugMule: { label: "Dexerto", href: dex("assault-rifles/drug-mule-kz-59") },
  dexertoW22: { label: "Dexerto", href: dex("small-game-rifles/kingfishers-w-22") },
  dexertoLaird: { label: "Dexerto", href: dex("sniper-rifles/kingfishers-laird-350") },
  dexertoDonnie: { label: "Dexerto", href: dex("revolvers/donnies-hl-38") },
  dexertoScrapper: { label: "Dexerto", href: dex("submachine-guns/scrapper-vf5c") },
  dexertoClunker: { label: "Dexerto", href: dex("assault-rifles/clunker-556") },
  dexertoCouch: { label: "Dexerto", href: dex("revolvers/couch-potato-mustang-357") },
} as const satisfies Record<string, Batch10Source>;

const s = batch10Sources;
export const safeCodesSources = [s.polygonBowling, s.vicePortGellhorn, s.viceAllCodes, s.gamesradarBowling, s.culturedVulturesCodes, s.gameRantJanjak];
export const uniqueWeaponsSources = [s.keengamerUnique, s.game8Unique, s.dexertoGorse, s.dexertoSwampBait, s.dexertoDrugMule];
export const shotgunSources = [s.dexertoGorse, s.dexertoComshot, s.keengamerUnique];
