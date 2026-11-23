/**
 * Sources for content batch 14 (update 01.002.002 patch notes, the La Perle
 * garage and Vanessa's Growler, the Declasse Vamos garage, all garage codes,
 * Freddie Gibbs' prepper compound, the Black Eagle warehouse safe).
 * Kept in data. Pages show them only when SHOW_PUBLIC_SOURCES is on, as short
 * "Source: X" labels.
 * Fact check: /workspace/launch-prep/content-batch-14-factcheck.md
 */
export type Batch14Source = { label: string; href: string };

export const batch14Sources = {
  polygonPatch: { label: "Polygon", href: "https://www.polygon.com/gta-6-update-today-ver-01002002-where-is-ps5-xbox-download-size-patch-notes/" },
  insiderPatch: { label: "Insider Gaming", href: "https://insider-gaming.com/gta-6-update-01-002-002-all-changes-download-size/" },
  vicePatch: { label: "Vice", href: "https://www.vice.com/en/article/gta-6-patch-notes-update-phone-call-fix/" },
  pcGamerLaptop: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-laptop-password-aunties-place-la-perle/" },
  radioTimesAuntie: { label: "Radio Times", href: "https://www.radiotimes.com/technology/gaming/gta-6-aunties-place-location-la-perle/" },
  insiderLaptop: { label: "Insider Gaming", href: "https://insider-gaming.com/gta-6-laptop-password-puzzle-muffins-la-perle-garage/" },
  gameRantLaptop: { label: "Game Rant", href: "https://gamerant.com/gta-6-apartment-laptop-password-lapere-garage-growler-location/" },
  keenGamerLaPerle: { label: "KeenGamer", href: "https://www.keengamer.com/articles/guides/gta-6-la-perle-garage-code-location-and-free-car/" },
  polygonVamos: { label: "Polygon", href: "https://www.polygon.com/gta-6-declasse-vamos-code-car-location/" },
  pcGamerVamos: { label: "PC Gamer", href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-declasse-vamos-code/" },
  viceVamos: { label: "Vice", href: "https://www.vice.com/en/article/declasse-vamos-gta-6-code/" },
  gameRantCodes: { label: "Game Rant", href: "https://gamerant.com/gta-6-safe-codes-keypad-combinations-door-passwords-list/" },
  gtaBaseBobcat: { label: "GTABase", href: "https://www.gtabase.com/gta-6/vehicles/applesauce-bobcat" },
  vgcFreddie: { label: "VGC", href: "https://www.videogameschronicle.com/guide/gta-6-find-break-in-freddie-doomsday-compound-grand-theft-auto/" },
  bigLeadFreddie: { label: "The Big Lead", href: "https://www.thebiglead.com/gta-6-prepper-outpost-guide-should-you-stay-shelter-freddie-leave/" },
  beebomFreddie: { label: "Beebom", href: "https://beebom.com/gta-6-freddie-gibbs-cameo-choice/" },
  dexertoKalinga: { label: "Dexerto", href: "https://www.dexerto.com/wikis/gta-6/weapons/pistols/black-eagle-import-kalinga/" },
} as const satisfies Record<string, Batch14Source>;

const s = batch14Sources;
export const patchNotesSources = [s.polygonPatch, s.insiderPatch, s.vicePatch];
export const laPerleGarageSources = [s.pcGamerLaptop, s.radioTimesAuntie, s.insiderLaptop, s.gameRantLaptop, s.keenGamerLaPerle];
export const vamosSources = [s.polygonVamos, s.pcGamerVamos, s.viceVamos];
export const garageCodesSources = [s.gameRantCodes, s.gtaBaseBobcat, s.polygonVamos, s.pcGamerLaptop];
export const freddieGibbsSources = [s.vgcFreddie, s.bigLeadFreddie, s.beebomFreddie];
export const blackEagleSources = [s.gameRantCodes, s.dexertoKalinga];
