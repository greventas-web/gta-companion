import { batch1Sources as src } from "./batch1-sources";
import type { LaunchEntry } from "./types";

/**
 * Spoiler-safe money methods from launch-day guides (Nov 18, 2026).
 * Chapter gates only up to Chapter 3; no later mission names.
 * Fact check: /workspace/launch-prep/content-batch-1-factcheck.md (section 3).
 */
export const moneyMethods: LaunchEntry[] = [
  {
    slug: "sell-cars-to-moses",
    title: "Sell stolen cars to Moses",
    summary:
      "From early Chapter 2, steal cars without a tracker and sell them at Moses's garage in Port Gellhorn. The best repeatable early money.",
    details: [
      { label: "Unlocks", value: "Chapter 2, main mission Moses (Take A Vehicle to Moses)" },
      { label: "Where", value: "Moses's garage, Port Gellhorn" },
      { label: "Payout", value: "Sources differ: about $1,000+ (PowerPyx) vs. often $10,000+ (GameSpot)" },
    ],
    body: [
      "After the Moses mission in Chapter 2 you can bring Moses any car that has no tracker and either register it as your personal vehicle or sell it. Hold the WAiNK phone app on a car to scan it and see whether it has a tracker.",
      "Moses won't take cars stolen too close to his garage, so walk to the main road in Port Gellhorn and take one from there. After a sale there is a short cooldown (about two minutes) before his garage opens again.",
      "The two guides disagree on the payout: PowerPyx says cars typically pay $1,000 or more, while GameSpot says deliveries often pay upwards of $10,000. Expect it to depend on the car.",
    ],
    sources: [src.powerpyxMoney, src.powerpyxPersonalCar, src.gamespotMoney],
    links: [
      { href: "/where-to-find/garages", label: "Garages and prices" },
      { href: "/gta-6-apps", label: "Phone apps (WAiNK)" },
    ],
  },
  {
    slug: "sell-cars-at-pay-n-spray",
    title: "Sell cars at any Pay 'n' Spray",
    summary:
      "From early Chapter 3 you can sell stolen cars at any of the 19 Pay 'n' Sprays, including cars with a Standard tracker.",
    details: [
      { label: "Unlocks", value: "Early Chapter 3" },
      { label: "Where", value: "Any Pay 'n' Spray (19 on the map)" },
      { label: "Payout", value: "Around $4,000+ for a good car (PowerPyx)" },
    ],
    body: [
      "Early in Chapter 3 you can sell stolen vehicles at any Pay 'n' Spray and register cars with Standard trackers. Cars with Standard trackers pay more than cars without a tracker, around $4,000 or more for a good one according to PowerPyx.",
      "Pay 'n' Spray will not take cars with a high-end tracker. Older cars pay little; newer cars pay a decent amount.",
    ],
    sources: [src.powerpyxMoney, src.powerpyxPersonalCar, src.gamespotMoney],
    links: [{ href: "/where-to-find/pay-n-spray", label: "All 19 Pay 'n' Spray locations" }],
  },
  {
    slug: "randy-wish-list",
    title: "Randy's wish list (high-end cars)",
    summary:
      "Halfway through Chapter 3 you unlock the key cloner and Randy's list of 18 high-end cars. Deliveries in perfect condition pay $30,000 or more.",
    details: [
      { label: "Unlocks", value: "Mid Chapter 3, main mission Clonin' Keys, Makin' GS" },
      { label: "Where", value: "Randy, western Vice City" },
      { label: "Payout", value: "Usually $30,000+ in perfect condition (PowerPyx)" },
    ],
    body: [
      "The Chapter 3 mission Clonin' Keys, Makin' GS gives you the key cloner, which opens modern cars with advanced trackers. Randy then sends a wish list of 18 high-end sports cars that you can find driving around Vice City.",
      "Condition matters: both guides say a clean car pays far more. Randy also marks a few parked cars, and you can text him from the phone's Reminders for more tips.",
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    slug: "jewelry-store-robberies",
    title: "Rob jewelry stores",
    summary:
      "Jewelry store robberies open early in Chapter 3 and pay $10,000 to $25,000 each when you sell the jewelry to Yasmani.",
    details: [
      { label: "Unlocks", value: "Early Chapter 3, main mission Yasmani's Jewelry Jobs" },
      { label: "Payout", value: "$10,000–$25,000 per robbery (PowerPyx)" },
    ],
    body: [
      "You can rob several jewelry stores in a row. Also open the safe in the back room if you can, and leave before the police arrive.",
      "Views differ: GameSpot calls small pawn-shop and jewelry hits less worth it than higher-end stores in Capri, Ocean Beach, and downtown Vice City.",
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    slug: "gang-operations",
    title: "Raid gang operations",
    summary:
      "Yellow map icons mark 39 gang operations. Clear them, take the cash and goods, and sell the goods to a dealer for fast pay.",
    details: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "Where", value: "Yellow icons on the map; labels show gang, security, and score" },
    ],
    body: [
      "Each hideout has one or two dozen enemies, plus cash and illegal goods to steal. Some also have valuable guns and vehicles. Drop the goods with a dealer and you are paid almost at once.",
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
    links: [{ href: "/wanted-system", label: "How to lose the police afterwards" }],
  },
  {
    slug: "store-robberies",
    title: "Rob convenience stores",
    summary:
      "From Chapter 1, aim a gun at a clerk to empty the register. Some stores have a back-room safe.",
    details: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "Where", value: "Stores marked on the map (72 convenience stores)" },
    ],
    body: [
      "Aim your gun at the clerk and loot the cash register. Some stores have a safe in the back room; ask for the code before you try to open it. It is small money, but it works from the start of the game.",
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney, src.powerpyxProgress],
    links: [{ href: "/wanted-system", label: "Wanted system and Heat" }],
  },
  {
    slug: "kenton-treasure-diving",
    title: "Treasure diving for Kenton",
    summary:
      "Kenton in Key Lento sends Jason to dive for treasure off the Keys. Finding every piece pays tens of thousands.",
    details: [
      { label: "Where", value: "Dive spots around Key Lento" },
      { label: "Payout", value: "Tens of thousands for all treasure (GameSpot)" },
    ],
    body: [
      "Kenton runs a scuba-boat tourist shop in Key Lento. Take your boat and scuba gear to the dive spots he gives you and search the sea floor. GameSpot says it pays tens of thousands of dollars once every treasure at each spot is found.",
    ],
    sources: [src.gamespotMoney],
  },
  {
    slug: "street-races",
    title: "Win street races",
    summary: "There are 40 unique races in 6 race groups. Winning them is listed as a Chapter 1 money method.",
    details: [{ label: "Unlocks", value: "Chapter 1" }],
    sources: [src.powerpyxMoney, src.powerpyxProgress],
  },
];

export const moneyNotes = [
  "The biggest payouts (large bank vaults, up to $205,000) open only late in the story.",
  "After the story, the $250,000 cheat is the only money cheat.",
  "PowerPyx advises not to farm money in Chapter 1 and to focus on the story.",
] as const;
