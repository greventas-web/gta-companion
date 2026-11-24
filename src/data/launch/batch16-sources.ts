/**
 * Sources for content batch 16 (the Tommy Vercetti / Malibu Club portal Easter
 * egg, the Satan event and the Hellspawn Comshot 12 in Port Gellhorn, and the
 * second part of the UFO story at the South Point Airfield alien base).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-16-factcheck.md
 */
export type Batch16Source = { label: string; href: string };

export const batch16Sources = {
  theGamerVercetti: { label: "TheGamer", href: "https://www.thegamer.com/grand-theft-auto-6-tommy-vercetti-shirt-motorcycle-power-station-code-order-locations-lpl-guide/" },
  viceVercetti: { label: "Vice", href: "https://www.vice.com/en/article/gta-6-tommy-vercetti-shirt-vice-city-easter-egg/" },
  dexertoVercetti: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/easter-eggs/tommy-vercetti-easter-egg/" },
  gtaBoomVercetti: { label: "GTA BOOM", href: "https://www.gtaboom.com/how-to-get-tommy-vercettis-shirt-and-bike-in-gta-6-3313" },
  viceHell: { label: "Vice", href: "https://www.vice.com/en/article/gta-6-hellspawn-shotgun-satan-easter-egg/" },
  polygonHell: { label: "Polygon", href: "https://www.polygon.com/gta-6-hell-event-port-hellhorn-circles-of-hell-hellspawn-comshot/" },
  gameRantHell: { label: "Game Rant", href: "https://gamerant.com/gta-6-satan-location-hellspawn-shotgun/" },
  polygonUfo: { label: "Polygon", href: "https://www.polygon.com/gta-6-ufo-dream-house-location-where-to-find-grand-theft-auto/" },
  vgcUfo: { label: "VGC", href: "https://www.videogameschronicle.com/guide/gta-6-full-alien-ufo-questline-walkthrough/" },
  gameSpotUfo: { label: "GameSpot", href: "https://www.gamespot.com/articles/gta-6-has-aliens-and-heres-how-to-find-them/" },
  bigLeadUfo: { label: "The Big Lead", href: "https://www.thebiglead.com/gta-6-keypad-door-code-south-point-airfield/" },
} as const satisfies Record<string, Batch16Source>;

const s = batch16Sources;
export const vercettiSources = [s.theGamerVercetti, s.viceVercetti, s.dexertoVercetti, s.gtaBoomVercetti];
export const hellspawnSources = [s.viceHell, s.polygonHell, s.gameRantHell];
export const alienBaseSources = [s.vgcUfo, s.polygonUfo, s.gameSpotUfo, s.bigLeadUfo];
