/**
 * Sources for content batch 6 (bars, convenience stores, street food, liquor
 * stores, fast food, electronics stores, footwear stores, shipwrecks).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-6-factcheck.md
 */
export type Batch6Source = { label: string; href: string };

export const batch6Sources = {
  powerpyxBars: { label: "PowerPyx, all bars", href: "https://www.powerpyx.com/gta-6-all-bar-locations/" },
  powerpyxConvenience: { label: "PowerPyx, all convenience stores", href: "https://www.powerpyx.com/gta-6-all-convenience-stores-locations/" },
  powerpyxStreetFood: { label: "PowerPyx, all street food vendors", href: "https://www.powerpyx.com/gta-6-all-street-food-vendors-locations/" },
  powerpyxLiquor: { label: "PowerPyx, all liquor stores", href: "https://www.powerpyx.com/gta-6-all-liquor-stores-locations/" },
  powerpyxFastFood: { label: "PowerPyx, all fast food stores", href: "https://www.powerpyx.com/gta-6-all-fast-food-stores-locations/" },
  powerpyxElectronics: { label: "PowerPyx, all electronics stores", href: "https://www.powerpyx.com/gta-6-all-electronics-stores-locations/" },
  powerpyxFootwear: { label: "PowerPyx, all footwear stores", href: "https://www.powerpyx.com/gta-6-all-footwear-stores-locations/" },
  gamespotKenton: {
    label: "GameSpot, underwater discoveries and Kenton's Treasures",
    href: "https://www.gamespot.com/articles/gta-6-underwater-discoveries-kentons-treasures-guide/",
  },
  pushSquareKenton: {
    label: "Push Square, underwater discoveries and Kenton's Treasures",
    href: "https://www.pushsquare.com/guides/gta-6-underwater-discoveries-locations-and-kentons-treasures",
  },
} as const satisfies Record<string, Batch6Source>;

const s = batch6Sources;
export const barSources = [s.powerpyxBars];
export const convenienceSources = [s.powerpyxConvenience];
export const streetFoodSources = [s.powerpyxStreetFood];
export const liquorSources = [s.powerpyxLiquor];
export const fastFoodSources = [s.powerpyxFastFood];
export const electronicsSources = [s.powerpyxElectronics];
export const footwearSources = [s.powerpyxFootwear];
export const shipwreckSources = [s.gamespotKenton, s.pushSquareKenton];
