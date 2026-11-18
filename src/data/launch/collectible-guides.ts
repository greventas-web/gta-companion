/**
 * Collectible hubs for content batch 2.
 * Fact check: /workspace/launch-prep/content-batch-2-factcheck.md
 */
import type { FaqItem } from "@/components/intent/FaqSection";
import {
  cardSetSources,
  flamingoSources,
  stuntSources,
  type Batch2Source,
} from "./batch2-sources";

export type CollectibleSet = {
  name: string;
  cards?: number;
};

export type CollectibleItem = {
  slug: string;
  name: string;
  /** Short value shown as a chip, e.g. "24 cards". */
  value: string;
  /** One short plain sentence for the card and detail page. */
  line: string;
  /** Extra labeled facts for the item's own page. */
  facts?: { label: string; value: string }[];
};

export type CollectibleGuide = {
  slug: string;
  title: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  /** One short plain line for the hub card. */
  line: string;
  /** Two or three plain sentences. */
  intro: string;
  /** Short label/value rows. */
  quick: { label: string; value: string }[];
  /** Short how-to rows. */
  tips?: { label: string; value: string }[];
  groups?: { heading: string; items: CollectibleItem[]; itemPages?: boolean }[];
  mapLinks: { pin: string; label: string }[];
  related: { href: string; label: string }[];
  faqs: FaqItem[];
  sources: Batch2Source[];
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const cardSets: CollectibleSet[] = [
  { name: "Vice City Flamingos", cards: 24 },
  { name: "Vice City Narcos", cards: 24 },
  { name: "Vice City Manatees", cards: 24 },
  { name: "Vice City Club De Fútbol", cards: 30 },
  { name: "Liberty City Swingers", cards: 24 },
  { name: "Liberty City Penetrators", cards: 24 },
  { name: "Liberty City Wrath", cards: 24 },
  { name: "Los Santos Corkers", cards: 24 },
  { name: "Los Santos Panic", cards: 24 },
  { name: "Los Santos Pounders", cards: 24 },
  { name: "Backyard Wrestling", cards: 12 },
  { name: "America’s Next Top Hooker", cards: 24 },
  { name: "Delights Dancers", cards: 18 },
  { name: "Jack of Hearts Dancers", cards: 36 },
  { name: "Nine1Nine Dancers", cards: 36 },
  { name: "The Legends of Ratface", cards: 36 },
  { name: "Right Wing: America’s Hero", cards: 36 },
  { name: "Ed Comics Universe", cards: 36 },
];

function setLine(set: CollectibleSet) {
  if (set.name === "Vice City Flamingos") {
    return "Find all 24 to unlock the Bubblegum filter cheat.";
  }
  return `A set of ${set.cards} cards hidden around Leonida.`;
}

export const collectibleGuides: CollectibleGuide[] = [
  {
    slug: "card-sets",
    title: "Collectible card sets",
    heading: "Collectible card sets",
    metaTitle: "GTA 6 Collectible Card Sets – All 18 Sets",
    metaDescription:
      "GTA 6 collectible card sets: all 18 sets and 480 cards, how many you need for the Don’t Touch My Deck trophy and 100%, and where cards hide. Unofficial.",
    line: "18 sets, 480 cards. Finish 3 sets for a trophy.",
    intro:
      "Cards are hidden all over Leonida. Look on shelves and walls indoors, and in yellow phone boxes and tool boxes outside. You can’t buy them.",
    quick: [
      { label: "Sets", value: "18" },
      { label: "Cards", value: "480" },
      { label: "Trophy", value: "Don’t Touch My Deck (3 sets)" },
      { label: "For 100%", value: "15 sets" },
      { label: "Track them", value: "Progress > Collections" },
    ],
    tips: [
      { label: "Bonus", value: "All 24 Vice City Flamingos unlock the Bubblegum filter cheat (after the story)" },
      { label: "Heads up", value: "Some cards show up in more than one place" },
    ],
    groups: [
      {
        heading: "All 18 sets",
        itemPages: true,
        items: cardSets.map((set) => ({
          slug: slugify(set.name),
          name: set.name,
          value: set.cards ? `${set.cards} cards` : "",
          line: setLine(set),
          facts: [
            { label: "Cards in set", value: set.cards ? `${set.cards}` : "" },
            { label: "Where", value: "Indoors on shelves and walls, outdoors in yellow phone boxes and tool boxes" },
            { label: "Track it", value: "Progress > Collections > Collectible Cards" },
            ...(set.name === "Vice City Flamingos"
              ? [{ label: "Unlocks", value: "Bubblegum filter cheat (after the story)" }]
              : []),
          ],
        })),
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:jack-of-hearts", label: "Jack of Hearts" },
      { pin: "confirmed:nine1nine", label: "Nine1Nine" },
      { pin: "confirmed:delights", label: "Delights" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/collectibles/cocaine-flamingos", label: "Cocaine Flamingos" },
      { href: "/collectibles/stunt-jumps", label: "Stunt jumps" },
      { href: "/trophies", label: "Trophies" },
      { href: "/cheats", label: "Cheats" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many collectible card sets are in GTA 6?",
        answer:
          "18 sets with 480 cards in total. Finish 3 sets for the Don’t Touch My Deck trophy. 100% needs 15 of the 18.",
        sources: cardSetSources,
      },
      {
        question: "Where do you find collectible cards in GTA 6?",
        answer:
          "Out in the world. Indoors they sit on shelves and walls, and outside they are in yellow phone boxes or tool boxes. You can’t buy them.",
        sources: cardSetSources,
      },
      {
        question: "Does completing a card set unlock anything in GTA 6?",
        answer:
          "Three sets get you the Don’t Touch My Deck trophy. All 24 Vice City Flamingos cards unlock the Bubblegum filter cheat, which works after the story.",
        sources: cardSetSources,
      },
    ],
    sources: cardSetSources,
  },
  {
    slug: "cocaine-flamingos",
    title: "Cocaine Flamingos",
    heading: "Cocaine Flamingos",
    metaTitle: "GTA 6 Cocaine Flamingos – How They Work and How Many",
    metaDescription:
      "GTA 6 Cocaine Flamingos: how to spot the real ones, how many there are, and how 50 of them unlock the Inflatable Flamingo cheat. Unofficial.",
    line: "125 hidden flamingos. Shoot 50 for a cheat.",
    intro:
      "Pink flamingo figures with a black-and-white beak are hidden around Leonida. Shoot one in the body to break it and drop its package. Ones with a yellow-and-black beak are just decoration.",
    quick: [
      { label: "Total", value: "125" },
      { label: "For 100%", value: "Any 100" },
      { label: "Cheat", value: "50 unlock Inflatable Flamingo" },
      { label: "Track them", value: "Progress > Exploration" },
    ],
    tips: [
      { label: "Real ones", value: "Black-and-white beak" },
      { label: "Fake ones", value: "Yellow-and-black beak, can’t be broken" },
      { label: "The package", value: "Optional. Sell the cocaine to a fence for cash" },
      { label: "Where", value: "Key Lento, Abismo Key, Vice City and more" },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento" },
      { pin: "confirmed:abismo-key", label: "Abismo Key" },
      { pin: "confirmed:la-perle", label: "La Perle" },
      { pin: "confirmed:vice-city", label: "Vice City" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/collectibles/card-sets", label: "Collectible card sets" },
      { href: "/collectibles/stunt-jumps", label: "Stunt jumps" },
      { href: "/vehicles/inflatable-flamingo", label: "Inflatable Flamingo" },
      { href: "/cheats", label: "Cheats" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many Cocaine Flamingos are in GTA 6?",
        answer:
          "125. You need any 100 for 100%, and breaking 50 unlocks the Inflatable Flamingo cheat after the story.",
        sources: flamingoSources,
      },
      {
        question: "How do you tell a Cocaine Flamingo from a regular flamingo in GTA 6?",
        answer:
          "Check the beak. The real ones have a black-and-white beak. Yellow-and-black ones are decoration and can’t be broken. Shoot the body to break a real one.",
        sources: flamingoSources,
      },
      {
        question: "Do you have to pick up the cocaine inside a flamingo?",
        answer:
          "No, breaking it is enough to count. If you want the cash, you can sell the cocaine to a fence.",
        sources: flamingoSources,
      },
    ],
    sources: flamingoSources,
  },
  {
    slug: "stunt-jumps",
    title: "Stunt jumps",
    heading: "Stunt jumps",
    metaTitle: "GTA 6 Stunt Jumps – Counts by County",
    metaDescription:
      "GTA 6 stunt jumps: 130 jumps by county, plus under-the-bridge, knife-flight, and base-jump totals, and how many stunts the Cunning Stunts trophy needs. Unofficial.",
    line: "397 stunts in 4 types. 250 for the trophy.",
    intro:
      "There are four kinds of stunts, and stunt jumps are one of them. Do a stunt once and it counts, so you can skip the extra challenge on the map icon. Mix any types you like.",
    quick: [
      { label: "Total stunts", value: "397" },
      { label: "Trophy", value: "Cunning Stunts (250)" },
      { label: "For 100%", value: "Any 300" },
      { label: "Track them", value: "Progress > Activities > Stunts" },
      { label: "On the map", value: "Exploration > Stunt Spots" },
    ],
    groups: [
      {
        heading: "Stunt types",
        items: [
          { slug: "stunt-jumps", name: "Stunt jumps", value: "130", line: "Hit a ramp and land the jump." },
          { slug: "under-the-bridges", name: "Under the bridges", value: "202", line: "Fly under a bridge." },
          { slug: "knife-flights", name: "Knife flights", value: "40", line: "Fly through a tight gap." },
          { slug: "base-jumps", name: "Base jumps", value: "25", line: "Jump off and land your parachute." },
        ],
      },
      {
        heading: "Stunt jumps by county",
        items: [
          { slug: "vice-dale", name: "Vice-Dale County", value: "55 jumps", line: "Most jumps, around Vice City." },
          { slug: "kelly", name: "Kelly County", value: "29 jumps", line: "" },
          { slug: "mariana", name: "Mariana County", value: "17 jumps", line: "" },
          { slug: "lummox", name: "Lummox County", value: "16 jumps", line: "" },
          { slug: "leonard", name: "Leonard County", value: "13 jumps", line: "" },
        ],
      },
      {
        heading: "Under the bridges by county",
        items: [
          { slug: "bridges-vice-dale", name: "Vice-Dale County", value: "67 bridges", line: "" },
          { slug: "bridges-kelly", name: "Kelly County", value: "51 bridges", line: "" },
          { slug: "bridges-mariana", name: "Mariana County", value: "35 bridges", line: "" },
          { slug: "bridges-leonard", name: "Leonard County", value: "32 bridges", line: "" },
          { slug: "bridges-lummox", name: "Lummox County", value: "17 bridges", line: "" },
        ],
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento" },
      { pin: "confirmed:abismo-key", label: "Abismo Key" },
      { pin: "confirmed:vice-city", label: "Vice City" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/activities/stunts", label: "Stunts activity" },
      { href: "/collectibles/card-sets", label: "Collectible card sets" },
      { href: "/trophies", label: "Trophies" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many stunt jumps are in GTA 6?",
        answer:
          "130 stunt jumps. Add 202 under-the-bridge stunts, 40 knife flights, and 25 base jumps and you get 397 stunts in total.",
        sources: stuntSources,
      },
      {
        question: "How many stunts do you need for the Cunning Stunts trophy?",
        answer: "250. For 100% you need any 300 of the 397, and you can mix all four types.",
        sources: stuntSources,
      },
      {
        question: "Do you have to finish the challenge on a stunt jump in GTA 6?",
        answer: "No. Doing the stunt once counts. The challenge on the map icon is optional.",
        sources: stuntSources,
      },
    ],
    sources: stuntSources,
  },
];

export function findCollectibleGuide(slug: string) {
  return collectibleGuides.find((guide) => guide.slug === slug);
}

export function collectibleItemPages() {
  return collectibleGuides.flatMap((guide) =>
    (guide.groups ?? [])
      .filter((group) => group.itemPages)
      .flatMap((group) => group.items.map((item) => ({ guide, item })))
  );
}

export function findCollectibleItem(guideSlug: string, itemSlug: string) {
  return collectibleItemPages().find(
    (entry) => entry.guide.slug === guideSlug && entry.item.slug === itemSlug
  );
}
