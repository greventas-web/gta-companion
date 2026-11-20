/**
 * Sources for content batch 4 (100% checklist, Smash 'n' Grabs, Payday Loans,
 * gyms, clubs, pool opponents, video games, Book Swaps, unique playlists).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-4-factcheck.md
 */
export type Batch4Source = { label: string; href: string };

export const batch4Sources = {
  powerpyxHundred: {
    label: "PowerPyx, 100% completion checklist",
    href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/",
  },
  insiderHundred: {
    label: "Insider Gaming, 100% completion",
    href: "https://insider-gaming.com/gta-6-100-completion-a-long-road-trophy/",
  },
  powerpyxPool: {
    label: "PowerPyx, all pool opponents",
    href: "https://www.powerpyx.com/gta-6-all-pool-opponent-locations/",
  },
  powerpyxVideoGames: {
    label: "PowerPyx, all video games",
    href: "https://www.powerpyx.com/gta-6-all-video-game-locations/",
  },
  powerpyxBookSwaps: {
    label: "PowerPyx, all Book Swaps",
    href: "https://www.powerpyx.com/gta-6-all-book-swap-locations/",
  },
  powerpyxPlaylists: {
    label: "PowerPyx, all unique playlists",
    href: "https://www.powerpyx.com/gta-6-all-unique-playlist-collectible-locations/",
  },
} as const satisfies Record<string, Batch4Source>;

const s = batch4Sources;
export const poolSources = [s.powerpyxPool, s.powerpyxHundred, s.insiderHundred];
export const videoGameSources = [s.powerpyxVideoGames, s.powerpyxHundred, s.insiderHundred];
export const bookSwapSources = [s.powerpyxBookSwaps, s.powerpyxHundred, s.insiderHundred];
export const playlistSources = [s.powerpyxPlaylists, s.powerpyxHundred, s.insiderHundred];
