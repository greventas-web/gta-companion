import type { Vehicle } from "@/types/vehicle";
import { fillSources as fs } from "@/src/data/launch/fill-sources";

/**
 * Launch-week facts for vehicles already in the catalog: in-game stat panel
 * values (0 to 10), where to find them, sale values and spelling fixes.
 * Only values a launch-week guide published are here. Stats are the in-game
 * panel bars as read by nettoge and collected in Timesaver's CC BY 4.0
 * dataset, not measured speeds. Field log: /workspace/launch-prep/fill-sources.md
 */
export type VehicleFill = Partial<
  Pick<Vehicle, "name" | "manufacturer" | "description" | "price" | "seats" | "stats" | "whereToFind">
> & { sources?: { label: string; href: string }[] };

const STAT = [fs.nettogeFastest, fs.timesaverCars];
const UE = [fs.powerpyxUltimate, fs.pushSquareUltimate];

export const vehicleFill: Record<string, VehicleFill> = {
  "bravado-banshee": {
    stats: { speed: 6, acceleration: 6.3, handling: 5.8 },
    whereToFind:
      "One of the cars on Randy's Wish List: steal one and drop it with Randy at Leonida Auto World in west Vice City. Push Square spotted one outside the Sweetbay Inn on East Buckley Dr, Capri, at about 3 AM.",
    sources: [...STAT, fs.gameChecklistsVehicles],
  },
  "nagasaki-carbon-rs": {
    stats: { speed: 6.7, acceleration: 7.7, handling: 7.6 },
    sources: STAT,
  },
  "dinka-enduro": {
    stats: { speed: 3.9, acceleration: 5.7, handling: 5.2 },
    whereToFind: "Parked at Jason's house in Key Lento. You can only pick it up during Chapter 1.",
    sources: [...STAT, ...UE],
  },
  "crest-kayak": {
    whereToFind: "At the bottom of the ramp by Jason's house in Key Lento, during Chapter 1.",
    sources: UE,
  },
  "shitzu-squalo": {
    whereToFind: "Docked near Atlantic Ave in Washington Beach, just east of the Y Hotel. It only shows up later in the story (from Chapter 4).",
    sources: UE,
  },
  "vapid-dominator-buggy": {
    stats: { speed: 5, acceleration: 6.1, handling: 3.5 },
    whereToFind:
      "During Chapter 2 a message tells you it is ready at the Paradise garage in Watson Bay, Mariana County. Get in to register it.",
    sources: [...STAT, ...UE],
  },
  "vapid-ganado": {
    seats: 2,
    stats: { speed: 4.7, acceleration: 5.3, handling: 3.6 },
    whereToFind: "Jason's own car from the start. In Chapter 1 it is the only car you can keep.",
    sources: STAT,
  },
  "vapid-stanier-1955": {
    stats: { speed: 3.9, acceleration: 3.7, handling: 3.2 },
    whereToFind:
      "Soon after you reach Vice City in Chapter 3, a marker sends you to the Ocean View Hotel in Vice Beach. Getting in also gives you the Shore Court garage.",
    sources: [...STAT, ...UE],
  },
  "benefactor-schafter-v12": {
    description: "A Benefactor four-door with a V12. Some launch-week lists spell it Shafter; walkthroughs that quote the on-screen text use Schafter.",
    stats: { speed: 6, acceleration: 6.6, handling: 4.5 },
    sources: [...STAT, fs.gameChecklistsVehicles],
  },
  "grotti-cheetah-1995": {
    stats: { speed: 6.6, handling: 6.5 },
    whereToFind:
      "Parked on level B1 of the Pegassi Residences garage in Tequesta Retreat. It unlocks late in the story (Chapter 5).",
    sources: [...STAT, ...UE],
  },
  "maibatsu-boomazoom": {
    stats: { speed: 0.2, acceleration: 0.1, handling: 0.2 },
    sources: STAT,
  },
  "vapid-dominator-65": {
    stats: { speed: 5.1, acceleration: 5.6, handling: 3.7 },
    sources: STAT,
  },
  "progen-emerus": {
    stats: { speed: 8.3, acceleration: 8.3, handling: 8.4 },
    description:
      "The fastest car found so far by the in-game Speed bar (8.3 out of 10). A cheat spawns one after the story. Unlock: complete all vehicle challenges.",
    sources: [...STAT, fs.gameChecklistsVehicles],
  },
  "maibatsu-sanchez": {
    stats: { speed: 3.9, handling: 5.2 },
    sources: STAT,
  },
  "western-zombie-bobber": {
    stats: { speed: 4.4, acceleration: 5.3 },
    sources: STAT,
  },
  "hauners-rhino-tank": {
    whereToFind: "Parked at Mile Zero Air Station on Goose Key. Taking it starts a wanted level.",
    sources: [fs.timesaverCars, fs.gameChecklistsVehicles],
  },
  "hauners-p-996-lazer": {
    whereToFind:
      "Parked on the north side of Mile Zero Air Station. Taking it brings a 4-star wanted level and two jets after you.",
    sources: [fs.timesaverCars, fs.gameChecklistsVehicles],
  },
  "pegassi-zorrusso": {
    name: "Granforma Zorrusso",
    manufacturer: "Granforma",
    price: "$21,250 from Randy",
    stats: { speed: 7.5, acceleration: 7.8, handling: 7.1 },
    whereToFind:
      "You steal one from the Hathaway Apartments in Ocean Beach in the Chapter 3 mission Clonin' Keys, Makin' GS. It has an advanced tracker, and Randy pays $21,250 for it.",
    sources: [...STAT, fs.gameChecklistsVehicles, fs.notebookVehicles],
  },
  "pegassi-tempesta": {
    description:
      "A Pegassi supercar on Randy's Wish List. Steal one and drop it with Randy at Leonida Auto World in west Vice City. Keyless cars like this need the Key Cloner from Chapter 3.",
    stats: { speed: 7.6, acceleration: 7.8, handling: 6.9 },
    sources: [...STAT, fs.gameChecklistsVehicles],
  },
  "bravado-gauntlet-hellfire": {
    description:
      "The fastest muscle car by the in-game Speed bar so far (7.8 out of 10), and one of the cars on Randy's Wish List.",
    stats: { speed: 7.8, acceleration: 7.8 },
    whereToFind: "Push Square found one at the M7 junkyard east of Boone Speedway, on Galerina St in Hamlet.",
    sources: [...STAT, fs.gameChecklistsVehicles],
  },
  "buckingham-maverick": {
    description: "A civilian helicopter. Launch-week checklists place one in the Leonida Keys.",
    sources: [fs.gameChecklistsVehicles, fs.notebookVehicles],
  },
  "bravado-buffalo": {
    description:
      "A Bravado four-door. Launch-week checklists list two versions in the game: a 2019 muscle car and an older 2007 sports model.",
    sources: [fs.gameChecklistsVehicles, fs.notebookVehicles],
  },
};

/** Pre-launch names now confirmed in the released game by two launch-week guides. */
export const fillConfirmed = new Set([
  "pegassi-tempesta",
  "bravado-gauntlet-hellfire",
  "buckingham-maverick",
  "bravado-buffalo",
]);
