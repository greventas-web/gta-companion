/**
 * Sources for content batch 12 (every radio station and host, the Hyde
 * Island hunt, the Backrooms container, the Kraken). Kept in data. Pages show
 * them only when SHOW_PUBLIC_SOURCES is on, as short "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-12-factcheck.md
 */
export type Batch12Source = { label: string; href: string };

export const batch12Sources = {
  vgcRadio: { label: "VGC", href: "https://www.videogameschronicle.com/guide/gta-6-radio-djs-and-podcast-hosts-every-famous-voice-on-gta-6s-radio/" },
  nmeRadio: { label: "NME", href: "https://www.nme.com/news/gaming-news/lindsey-buckingham-keith-richards-jason-sudeikis-pinkpantheress-and-more-confirmed-as-gta-6-radio-hosts-3976527" },
  pitchforkRadio: { label: "Pitchfork", href: "https://pitchfork.com/story/a-guide-to-the-gta-vi-radio-stations/" },
  gameRantHyde: { label: "Game Rant", href: "https://gamerant.com/gta-6-island-poacher-location-saw-hunger-games-easter-egg/" },
  dexertoHyde: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/easter-eggs/hyde-island-hunt-easter-egg-manhuntsaw/" },
  polygonEggs: { label: "Polygon", href: "https://www.polygon.com/gta-6-easter-eggs/" },
  gameRantBackrooms: { label: "Game Rant", href: "https://gamerant.com/gta-6-where-to-find-the-backrooms-dimension/" },
  sportskeedaBackrooms: { label: "Sportskeeda", href: "https://www.sportskeeda.com/esports/how-travel-backrooms-gta-6" },
  dexertoKraken: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/easter-eggs/kraken-easter-egg/" },
  criticalHitsKraken: { label: "Critical Hits", href: "https://criticalhits.com.br/games/jogadores-encontram-kraken-em-gta-6-no-fundo-do-mar/" },
  dualShockersKraken: { label: "DualShockers", href: "https://www.dualshockers.com/gta-6-how-to-find-the-kraken/" },
} as const satisfies Record<string, Batch12Source>;

const s = batch12Sources;
export const radioListSources = [s.vgcRadio, s.nmeRadio, s.pitchforkRadio];
export const hydeIslandSources = [s.gameRantHyde, s.dexertoHyde, s.polygonEggs];
export const backroomsSources = [s.gameRantBackrooms, s.sportskeedaBackrooms];
export const krakenSources = [s.dexertoKraken, s.criticalHitsKraken, s.dualShockersKraken];
