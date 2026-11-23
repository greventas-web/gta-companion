/**
 * Sources for content batch 13 (the Marbelle Hotel safe, the lighthouse ghost
 * ship and Cursed Knife, the 1010 Murals and 1010 Cheetah, the jet ski dog).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-13-factcheck.md
 */
export type Batch13Source = { label: string; href: string };

export const batch13Sources = {
  dexertoMarbelle: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/easter-eggs/marbelle-hotel--silent-hill-easter-egg/" },
  theGamerMarbelle: { label: "TheGamer", href: "https://www.thegamer.com/grand-theft-auto-6-silent-hill-location-marbelle-hotel-safe-code-legendary-watch-how-to-unlock-guide/" },
  gameRantMarbelle: { label: "Game Rant", href: "https://gamerant.com/gta-6-silent-hill-easter-egg-haunted-hotel-location/" },
  sportskeedaGhostShip: { label: "Sportskeeda", href: "https://www.sportskeeda.com/esports/gta-6-where-find-ghost-ship" },
  middleEastGamerGhostShip: { label: "Middle East Gamer", href: "https://www.middleeastgamer.com/gta-6-ghost-ship-easter-egg/" },
  powerPyx1010: { label: "PowerPyx", href: "https://www.powerpyx.com/gta-6-all-1010-mural-locations/" },
  gameRantJetSkiDog: { label: "Game Rant", href: "https://gamerant.com/gta-6-cool-jet-ski-dog-find-where-how-free-money-island/" },
  dexertoJetSkiDog: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/easter-eggs/jet-ski-dog/" },
} as const satisfies Record<string, Batch13Source>;

const s = batch13Sources;
export const marbelleHotelSources = [s.dexertoMarbelle, s.theGamerMarbelle, s.gameRantMarbelle];
export const ghostShipSources = [s.sportskeedaGhostShip, s.middleEastGamerGhostShip];
export const murals1010Sources = [s.powerPyx1010];
export const jetSkiDogSources = [s.gameRantJetSkiDog, s.dexertoJetSkiDog];
