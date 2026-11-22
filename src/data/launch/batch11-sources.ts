/**
 * Sources for content batch 11 (melee weapons, equipment, Wyman's cars,
 * the cowboy hat yard sale, The Final Flush). Kept in data. Pages show them
 * only when SHOW_PUBLIC_SOURCES is on, as short "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-11-factcheck.md
 */
export type Batch11Source = { label: string; href: string };

const dex = (slug: string) => `https://www.dexerto.com/wikis/gta-6/weapons/melee-weapons/${slug}/`;
const gtabase = (slug: string) => `https://www.gtabase.com/gta-6/weapons/${slug}`;

export const batch11Sources = {
  powerpyx100: { label: "PowerPyx", href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/" },
  dexertoMelee: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/weapons/melee-weapons/" },
  dexertoShark: { label: "Dexerto", href: dex("shark-knife") },
  dexertoSoldier: { label: "Dexerto", href: dex("soldiers-combat-knife") },
  dexertoTallaloko: { label: "Dexerto", href: dex("tallaloko-knife") },
  dexertoExplorer: { label: "Dexerto", href: dex("explorers-knife") },
  gtabaseBat: { label: "GTABase", href: gtabase("brontasaurus-bat") },
  gtabaseShark: { label: "GTABase", href: gtabase("shark-knife") },
  game8Bat: { label: "Game8", href: "https://game8.co/games/GTA-6/archives/639188" },
  game8Explorer: { label: "Game8", href: "https://game8.co/games/GTA-6/archives/639280" },
  gamesradarEquipment: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/all-gta-6-equipment-explained/" },
  gameRantEquipment: { label: "Game Rant", href: "https://gamerant.com/gta-6-all-equipment-locations/" },
  vgcHeders: { label: "VGC", href: "https://www.videogameschronicle.com/guide/gta-6-meet-the-heders-walkthrough-find-and-open-the-scoop-container/" },
  pcGamerTransgressor: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-transgressor-locations/" },
  pcGamerRiata: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-riata-locations/" },
  pcGamerMamba: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mamba-gt-locations/" },
  pushSquareWyman: { label: "Push Square", href: "https://www.pushsquare.com/guides/gta-6-wymans-classic-car-locations" },
  gamesradarTransgressor: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-transgressor-locations-wyman/" },
  pcGamerHat: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/arthur-morgan-hat-location-rdr2/" },
  gamesradarHat: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-arthur-morgans-hat/" },
  gameRantHat: { label: "Game Rant", href: "https://gamerant.com/gta-6-arthur-morgan-hat-location/" },
  powerpyxFlush: { label: "PowerPyx", href: "https://www.powerpyx.com/gta-6-the-final-flush-meet-at-franks-waffles-walkthrough/" },
  gamesradarFlush: { label: "GamesRadar+", href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-final-flush-increase-maximum-stamina/" },
} as const satisfies Record<string, Batch11Source>;

const s = batch11Sources;
export const meleeWeaponsSources = [s.powerpyx100, s.dexertoMelee, s.dexertoShark, s.dexertoSoldier, s.dexertoTallaloko, s.dexertoExplorer, s.gtabaseBat, s.gtabaseShark, s.game8Bat, s.game8Explorer];
export const equipmentSources = [s.gamesradarEquipment, s.gameRantEquipment, s.vgcHeders];
export const wymanCarsSources = [s.pcGamerTransgressor, s.pcGamerRiata, s.pcGamerMamba, s.pushSquareWyman, s.gamesradarTransgressor];
export const cowboyHatSources = [s.pcGamerHat, s.gamesradarHat, s.gameRantHat];
export const finalFlushSources = [s.powerpyxFlush, s.gamesradarFlush];
