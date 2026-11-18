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
    price: "$1,000–$10,000+",
    summary:
      "From Chapter 2, steal a car with no tracker and sell it to Moses in Port Gellhorn. Scan cars with the WAiNK app to check.",
    details: [
      { label: "Unlocks", value: "Chapter 2 (mission Moses)" },
      { label: "Where", value: "Moses's garage, Port Gellhorn" },
      { label: "Pays", value: "About $1,000 to $10,000+, depends on the car" },
      { label: "Tip", value: "Don't steal right next to his garage. Grab one off the main road" },
      { label: "Cooldown", value: "About 2 minutes between sales" },
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
    price: "$4,000+",
    summary:
      "From early Chapter 3, sell stolen cars at any of the 19 Pay 'n' Sprays. Newer cars and ones with a Standard tracker pay more.",
    details: [
      { label: "Unlocks", value: "Early Chapter 3" },
      { label: "Where", value: "Any Pay 'n' Spray (19 on the map)" },
      { label: "Pays", value: "Around $4,000+ for a good car" },
      { label: "Won't take", value: "Cars with a high-end tracker" },
    ],
    sources: [src.powerpyxMoney, src.powerpyxPersonalCar, src.gamespotMoney],
    links: [{ href: "/where-to-find/pay-n-spray", label: "All 19 Pay 'n' Spray locations" }],
  },
  {
    slug: "randy-wish-list",
    title: "Randy's wish list (high-end cars)",
    price: "$30,000+",
    summary:
      "Mid Chapter 3 you get the key cloner for modern cars. Randy sends a list of 18 high-end cars to find around Vice City.",
    details: [
      { label: "Unlocks", value: "Mid Chapter 3 (mission Clonin' Keys, Makin' GS)" },
      { label: "Where", value: "Randy, western Vice City" },
      { label: "Pays", value: "Usually $30,000+ in perfect condition" },
      { label: "Tip", value: "Text Randy from the phone's Reminders for hints" },
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    slug: "jewelry-store-robberies",
    title: "Rob jewelry stores",
    price: "$10,000–$25,000",
    summary:
      "From early Chapter 3, rob jewelry stores and sell the loot to Yasmani. Crack the back-room safe if you can, then get out before the cops arrive.",
    details: [
      { label: "Unlocks", value: "Early Chapter 3 (mission Yasmani's Jewelry Jobs)" },
      { label: "Pays", value: "$10,000–$25,000 per robbery" },
      { label: "Best stores", value: "Capri, Ocean Beach, and downtown Vice City" },
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    slug: "gang-operations",
    title: "Raid gang operations",
    summary:
      "Yellow map icons mark 39 gang hideouts. Clear one, grab the cash and goods, and sell the goods to a dealer for fast pay.",
    details: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "Where", value: "Yellow icons on the map" },
      { label: "Enemies", value: "One or two dozen per hideout" },
      { label: "Bonus", value: "Some have guns and vehicles to take" },
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney],
    links: [{ href: "/wanted-system", label: "How to lose the police afterwards" }],
  },
  {
    slug: "store-robberies",
    title: "Rob convenience stores",
    summary:
      "From Chapter 1, point a gun at the clerk and empty the register. Some have a back-room safe too.",
    details: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "Where", value: "72 convenience stores on the map" },
    ],
    sources: [src.powerpyxMoney, src.gamespotMoney, src.powerpyxProgress],
    links: [{ href: "/wanted-system", label: "Wanted system and Heat" }],
  },
  {
    slug: "kenton-treasure-diving",
    title: "Treasure diving for Kenton",
    price: "Tens of thousands",
    summary:
      "Kenton in Key Lento sends you to dive spots off the Keys. Search the sea floor for treasure.",
    details: [
      { label: "Where", value: "Dive spots around Key Lento" },
      { label: "Pays", value: "Tens of thousands for all the treasure" },
    ],
    sources: [src.gamespotMoney],
  },
  {
    slug: "street-races",
    title: "Win street races",
    summary: "There are 40 races in 6 groups, open from Chapter 1. Win them for prize money.",
    details: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "Races", value: "40 in 6 groups" },
    ],
    sources: [src.powerpyxMoney, src.powerpyxProgress],
  },
];

export const moneyNotes = [
  { label: "Biggest scores", value: "Large bank vaults, up to $205,000, open late in the story" },
  { label: "Money cheat", value: "$250,000, after the story" },
  { label: "Chapter 1 tip", value: "Don't grind money yet. Push the story" },
] as const;
