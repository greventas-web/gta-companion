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
  /** Dual-sourced set name (PowerPyx + The Big Lead), or single-source. */
  confirmation: "two-sources" | "single-source";
};

export type CollectibleGuide = {
  slug: string;
  title: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  facts: string[];
  groups?: { heading: string; rows: { label: string; value: string; note?: string }[] }[];
  mapLinks: { pin: string; label: string }[];
  related: { href: string; label: string }[];
  faqs: FaqItem[];
  sources: Batch2Source[];
};

export const cardSets: CollectibleSet[] = [
  { name: "Vice City Flamingos", cards: 24, confirmation: "single-source" },
  { name: "Vice City Narcos", cards: 24, confirmation: "single-source" },
  { name: "Vice City Manatees", cards: 24, confirmation: "two-sources" },
  { name: "Vice City Club De Fútbol", cards: 30, confirmation: "two-sources" },
  { name: "Liberty City Swingers", cards: 24, confirmation: "two-sources" },
  { name: "Liberty City Penetrators", cards: 24, confirmation: "two-sources" },
  { name: "Liberty City Wrath", cards: 24, confirmation: "two-sources" },
  { name: "Los Santos Corkers", cards: 24, confirmation: "single-source" },
  { name: "Los Santos Panic", cards: 24, confirmation: "two-sources" },
  { name: "Los Santos Pounders", cards: 24, confirmation: "two-sources" },
  { name: "Backyard Wrestling", cards: 12, confirmation: "two-sources" },
  { name: "America’s Next Top Hooker", cards: 24, confirmation: "two-sources" },
  { name: "Delights Dancers", cards: 18, confirmation: "two-sources" },
  { name: "Jack of Hearts Dancers", cards: 36, confirmation: "two-sources" },
  { name: "Nine1Nine Dancers", cards: 36, confirmation: "single-source" },
  { name: "The Legends of Ratface", cards: 36, confirmation: "single-source" },
  { name: "Right Wing: America’s Hero", cards: 36, confirmation: "single-source" },
  { name: "Ed Comics Universe", cards: 36, confirmation: "two-sources" },
];

export const collectibleGuides: CollectibleGuide[] = [
  {
    slug: "card-sets",
    title: "Collectible card sets",
    heading: "GTA 6 collectible card sets",
    metaTitle: "GTA 6 Collectible Card Sets – All 18 Sets",
    metaDescription:
      "GTA 6 collectible card sets: 18 named sets and 480 cards, how many you need for the Don’t Touch My Deck trophy and 100%, and how to track them. Unofficial.",
    intro:
      "Collectible cards come in named sets across Leonida. The published trophy Don’t Touch My Deck asks you to complete 3 sets. A launch-day completion guide says the 100% list asks for 15 of the 18 sets.",
    facts: [
      "PowerPyx’s Progress database lists 18 collectible card sets and 480 unique cards. Those totals are single-source; GTA Culture reprints the same figures.",
      "The published trophy Don’t Touch My Deck asks you to complete 3 collectible card sets.",
      "PowerPyx says the 100% list asks for 15 complete sets, that some cards appear in more than one place, and that progress is tracked under Progress > Collections > Collectible Cards. Single-source.",
      "PowerPyx says cards are picked up in the world, often on surfaces or walls indoors, and in yellow phone boxes or tool boxes outdoors, and that they cannot be bought. Single-source. This page does not copy other sites’ location lists.",
      "The Bubblegum screen-filter cheat unlocks after you find all 24 Vice City Flamingos cards, and only works after the story.",
    ],
    groups: [
      {
        heading: "All 18 sets",
        rows: cardSets.map((set) => ({
          label: set.name,
          value: set.cards ? `${set.cards} cards` : "Count not published",
          note:
            set.confirmation === "two-sources"
              ? "Named by PowerPyx and The Big Lead. Card count is from PowerPyx."
              : "Set name and card count from PowerPyx (single-source).",
        })),
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys on the map" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn on the map" },
      { pin: "confirmed:jack-of-hearts", label: "Jack of Hearts on the map" },
      { pin: "confirmed:nine1nine", label: "Nine1Nine on the map" },
      { pin: "confirmed:delights", label: "Delights on the map" },
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
          "PowerPyx lists 18 collectible card sets and 480 unique cards. The published trophy Don’t Touch My Deck asks you to complete 3 sets. PowerPyx says the 100% list asks for 15 of the 18 sets.",
        sources: cardSetSources,
      },
      {
        question: "Where do you find collectible cards in GTA 6?",
        answer:
          "PowerPyx says they are picked up in the world, inside and outside buildings — often on surfaces or walls indoors, and in yellow phone boxes or tool boxes outdoors — and that they cannot be bought. We only pin a specific card once its exact position is confirmed, so this page links neighborhoods rather than a full card map.",
        sources: cardSetSources,
      },
      {
        question: "Does completing a card set unlock anything in GTA 6?",
        answer:
          "Completing 3 sets unlocks the Don’t Touch My Deck trophy. The Bubblegum filter cheat unlocks after you find all 24 Vice City Flamingos cards, and cheats only work after the story.",
        sources: cardSetSources,
      },
    ],
    sources: cardSetSources,
  },
  {
    slug: "cocaine-flamingos",
    title: "Cocaine Flamingos",
    heading: "GTA 6 Cocaine Flamingos",
    metaTitle: "GTA 6 Cocaine Flamingos – How They Work and How Many",
    metaDescription:
      "GTA 6 Cocaine Flamingos: how to tell them from decorative flamingos, how many a launch-day guide counts, and what the Inflatable Flamingo cheat needs. Unofficial.",
    intro:
      "Cocaine Flamingos are hidden pink flamingo figures in Leonida. Destroying 50 of them unlocks the Inflatable Flamingo vehicle cheat after the story. Launch-day guides also treat them as an exploration collectible.",
    facts: [
      "PowerPyx counts 125 Cocaine Flamingos and says the 100% list asks for any 100 of them. Those counts are single-source; GTA Culture reprints the same figures.",
      "PowerPyx says they are pink flamingo figures with a black-and-white beak. Shoot the body to destroy one and drop the package inside. Decorative flamingos with a yellow-and-black beak do not count and cannot be destroyed. Single-source.",
      "Picking up the package is not required for the flamingo count. PowerPyx says the cocaine can be sold to a fence. Single-source.",
      "Progress is tracked under Progress > Collections > Exploration > Cocaine Flamingos, and PowerPyx says that category appears after you find the first one. Single-source.",
      "Destroying 50 cocaine flamingos unlocks the Inflatable Flamingo vehicle cheat, which only works after the story.",
      "This page does not copy other sites’ location lists. Guides mention flamingos in areas such as Key Lento, Abismo Key, and Vice City; those neighborhoods are linked on our map where we already have pins.",
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento on the map" },
      { pin: "confirmed:abismo-key", label: "Abismo Key on the map" },
      { pin: "confirmed:la-perle", label: "La Perle on the map" },
      { pin: "confirmed:vice-city", label: "Vice City on the map" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn on the map" },
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
          "PowerPyx counts 125 and says the 100% list asks for any 100 of them. Destroying 50 unlocks the Inflatable Flamingo vehicle cheat after the story.",
        sources: flamingoSources,
      },
      {
        question: "How do you tell a Cocaine Flamingo from a regular flamingo in GTA 6?",
        answer:
          "PowerPyx says the collectible figures have a black-and-white beak, and that decorative flamingos with a yellow-and-black beak do not count and cannot be destroyed. Shoot the body of a collectible flamingo to destroy it.",
        sources: flamingoSources,
      },
      {
        question: "Do you have to pick up the cocaine inside a flamingo?",
        answer:
          "PowerPyx says picking up the package is not required for the flamingo count, but the cocaine can be sold to a fence if you want the money.",
        sources: flamingoSources,
      },
    ],
    sources: flamingoSources,
  },
  {
    slug: "stunt-jumps",
    title: "Stunt jumps",
    heading: "GTA 6 stunt jumps",
    metaTitle: "GTA 6 Stunt Jumps – Counts by County",
    metaDescription:
      "GTA 6 stunt jumps: 130 jumps by county, plus under-the-bridge, knife-flight, and base-jump totals, and how many stunts the Cunning Stunts trophy needs. Unofficial.",
    intro:
      "Stunts in GTA 6 are tracked in four categories, including stunt jumps. The published trophy Cunning Stunts asks you to complete 250 stunts. A launch-day completion guide says the 100% list asks for any 300 of 397 stunts, and you can mix categories.",
    facts: [
      "PowerPyx and DayOne both list 397 stunts in four categories: 130 stunt jumps, 202 under the bridges, 40 knife flights, and 25 base jumps.",
      "The 130 stunt jumps, by county, also match on both guides: 55 in Vice-Dale County, 29 in Kelly County, 17 in Mariana County, 16 in Lummox County, and 13 in Leonard County.",
      "DayOne also splits the 202 under-the-bridge stunts by county: 67 in Vice-Dale, 51 in Kelly, 35 in Mariana, 32 in Leonard, and 17 in Lummox. That split is single-source; the 202 total is on both guides.",
      "The published trophy Cunning Stunts asks you to complete 250 stunts.",
      "PowerPyx says the 100% list asks for any 300 of 397, so you can pick the easier categories. Single-source; GTA Culture reprints the same figure.",
      "PowerPyx says you can track them under Progress > Activities > Stunts, or on the map under Exploration > Stunt Spots, that each stunt has a unique name, and that performing the stunt once counts — the optional challenge on the map icon is not required. Single-source.",
    ],
    groups: [
      {
        heading: "Stunt jumps by county",
        rows: [
          { label: "Vice-Dale County", value: "55", note: "PowerPyx and DayOne." },
          { label: "Kelly County", value: "29", note: "PowerPyx and DayOne." },
          { label: "Mariana County", value: "17", note: "PowerPyx and DayOne." },
          { label: "Lummox County", value: "16", note: "PowerPyx and DayOne." },
          { label: "Leonard County", value: "13", note: "PowerPyx and DayOne." },
          { label: "Total stunt jumps", value: "130", note: "PowerPyx and DayOne." },
        ],
      },
      {
        heading: "All stunt categories",
        rows: [
          { label: "Stunt jumps", value: "130", note: "PowerPyx and DayOne." },
          { label: "Under the bridges", value: "202", note: "PowerPyx and DayOne." },
          { label: "Knife flights", value: "40", note: "PowerPyx and DayOne." },
          { label: "Base jumps", value: "25", note: "PowerPyx and DayOne." },
          { label: "Total stunts", value: "397", note: "PowerPyx and DayOne." },
        ],
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento on the map" },
      { pin: "confirmed:abismo-key", label: "Abismo Key on the map" },
      { pin: "confirmed:vice-city", label: "Vice City on the map" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn on the map" },
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
          "PowerPyx and DayOne both count 130 stunt jumps. They are one of four stunt categories. The other three are 202 under-the-bridge stunts, 40 knife flights, and 25 base jumps, for 397 stunts in total.",
        sources: stuntSources,
      },
      {
        question: "How many stunts do you need for the Cunning Stunts trophy?",
        answer:
          "The published trophy Cunning Stunts asks you to complete 250 stunts. PowerPyx says the 100% list asks for any 300 of 397, and you can mix the four categories.",
        sources: stuntSources,
      },
      {
        question: "Do you have to finish the challenge on a stunt jump in GTA 6?",
        answer:
          "PowerPyx says the challenge shown on a stunt’s map icon is not required. Performing the stunt once counts as completed.",
        sources: stuntSources,
      },
    ],
    sources: stuntSources,
  },
];

export function findCollectibleGuide(slug: string) {
  return collectibleGuides.find((guide) => guide.slug === slug);
}
