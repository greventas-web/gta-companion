/**
 * Sources for content batch 5 (WAiNK locations, magazines, books and comics,
 * unique races, UFO easter egg, car washes, gas stations).
 * Kept in data only. Pages never show them.
 * Fact check: /workspace/launch-prep/content-batch-5-factcheck.md
 */
import { batch4Sources } from "./batch4-sources";

export type Batch5Source = { label: string; href: string };

export const batch5Sources = {
  powerpyxWaink: {
    label: "PowerPyx, all WAiNK scan locations",
    href: "https://www.powerpyx.com/gta-6-all-waink-scan-locations/",
  },
  powerpyxLandmarks: {
    label: "PowerPyx, all landmark scans",
    href: "https://www.powerpyx.com/gta-6-all-landmark-scan-locations/",
  },
  powerpyxCuriosities: {
    label: "PowerPyx, all curiosity scans",
    href: "https://www.powerpyx.com/gta-6-all-curiosities-scan-locations/",
  },
  powerpyxSculptures: {
    label: "PowerPyx, all sculpture scans",
    href: "https://www.powerpyx.com/gta-6-all-sculptures-scan-locations/",
  },
  powerpyxNoFlusher: {
    label: "PowerPyx, all No Flusher tags",
    href: "https://www.powerpyx.com/gta-6-all-no-flusher-tag-utility-markings-locations/",
  },
  gamespotLandmarks: {
    label: "GameSpot, all WAiNK landmarks",
    href: "https://www.gamespot.com/articles/all-waink-landmarks-in-gta-6/",
  },
  gamespotSculptures: {
    label: "GameSpot, all WAiNK sculptures",
    href: "https://www.gamespot.com/articles/all-waink-sculptures-in-gta-6/",
  },
  gamespotCuriosities: {
    label: "GameSpot, all WAiNK curiosities",
    href: "https://www.gamespot.com/articles/all-waink-curiosities-in-gta-6/",
  },
  powerpyxMagazines: {
    label: "PowerPyx, all magazines, books and comics",
    href: "https://www.powerpyx.com/gta-6-all-magazines-books-comics-locations/",
  },
  gamespotMagazines: {
    label: "GameSpot, all magazines, books and comics",
    href: "https://www.gamespot.com/articles/gta-6-magazines-books-comics-locations-guide/",
  },
  powerpyxRaces: {
    label: "PowerPyx, all unique races",
    href: "https://www.powerpyx.com/gta-6-all-unique-race-locations-racing-activities/",
  },
  powerpyxUfo: {
    label: "PowerPyx, UFO easter egg",
    href: "https://www.powerpyx.com/gta-6-ufo-aliens-easter-egg-location/",
  },
  gamespotUfo: {
    label: "GameSpot, how to find the aliens",
    href: "https://www.gamespot.com/articles/gta-6-has-aliens-and-heres-how-to-find-them/",
  },
  powerpyxGas: {
    label: "PowerPyx, all gas stations",
    href: "https://www.powerpyx.com/gta-6-all-gas-stations-locations/",
  },
  powerpyxCarWash: {
    label: "PowerPyx, all car washes",
    href: "https://www.powerpyx.com/gta-6-all-car-washes-locations/",
  },
} as const satisfies Record<string, Batch5Source>;

const s = batch5Sources;
const hundred = [batch4Sources.powerpyxHundred, batch4Sources.insiderHundred];
export const wainkSources = [
  s.powerpyxWaink,
  s.gamespotLandmarks,
  s.gamespotSculptures,
  s.gamespotCuriosities,
  s.powerpyxLandmarks,
  s.powerpyxSculptures,
  s.powerpyxCuriosities,
  s.powerpyxNoFlusher,
  ...hundred,
];
export const magazineSources = [s.powerpyxMagazines, s.gamespotMagazines, ...hundred];
export const raceSources = [s.powerpyxRaces, ...hundred];
export const ufoSources = [s.powerpyxUfo, s.gamespotUfo];
export const gasSources = [s.powerpyxGas];
export const carWashSources = [s.powerpyxCarWash];
