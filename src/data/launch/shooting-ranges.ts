/**
 * Shooting ranges for content batch 2.
 * Fact check: /workspace/launch-prep/content-batch-2-factcheck.md
 */
import type { FaqItem } from "@/components/intent/FaqSection";
import { batch2Sources as src, rangeSources, type Batch2Source } from "./batch2-sources";

export type ShootingCourse = {
  name: string;
  goldMedals: number;
};

export type ShootingRange = {
  slug: string;
  name: string;
  area: string;
  areaPin: string;
  image?: string;
  imageAlt?: string;
  /** One short plain line for the card. */
  line: string;
  /** Two or three plain sentences for the detail page. */
  summary: string;
  style: string;
  goldMedals: number;
  courses: ShootingCourse[];
};

/** Prices at both ranges. */
export const rangePrices = [
  { label: "Waiver pass", value: "$5" },
  { label: "Rent a gun", value: "$10" },
];

export const shootingRanges: ShootingRange[] = [
  {
    slug: "griffin-shooting-range",
    name: "Griffin Shooting Range",
    area: "North-west Vice City",
    areaPin: "confirmed:vice-city",
    line: "Timed courses on the move.",
    summary:
      "Buy the $5 waiver pass from the clerk and the courses show up on your map. Run through each one and hit targets against the clock.",
    style: "Timed, on the move",
    goldMedals: 18,
    courses: [
      { name: "3-Point Range", goldMedals: 3 },
      { name: "Hook Range", goldMedals: 3 },
      { name: "Loop Range", goldMedals: 3 },
      { name: "Maze Range", goldMedals: 3 },
      { name: "Compound Range", goldMedals: 3 },
      { name: "Villa Range", goldMedals: 3 },
    ],
  },
  {
    slug: "rodgers-ranch",
    name: "Rodgers Ranch & Shooting Range",
    area: "North-east Port Gellhorn",
    areaPin: "confirmed:port-gellhorn",
    line: "Score courses, standing still.",
    summary:
      "Stand still and shoot for points. Hit the body before the head to build your multiplier, and don't miss.",
    style: "Score attack, standing still",
    goldMedals: 24,
    courses: [
      { name: "Market Range", goldMedals: 4 },
      { name: "Zombie Range", goldMedals: 4 },
      { name: "Hunting Range", goldMedals: 4 },
      { name: "Saloon Range", goldMedals: 4 },
      { name: "Cops & Robbers Range", goldMedals: 4 },
      { name: "Alien Range", goldMedals: 4 },
    ],
  },
];

export function findShootingRange(slug: string) {
  return shootingRanges.find((range) => range.slug === slug);
}

/** Short "good to know" rows shown on the ranges page. */
export const shootingRangeQuickFacts = [
  { label: "Ranges", value: "2" },
  { label: "Courses", value: "12" },
  { label: "Gold medals", value: "42" },
  { label: "Trophy", value: "The Shootist (gold on every course)" },
  { label: "Bonus", value: "Each run raises your Focus stat" },
];

/** Cheats you unlock with range medals (they only work after the story). */
export const shootingRangeCheats = [
  { label: "Max Ammo", value: "25 bronze medals" },
  { label: "Infinite Ammo", value: "25 silver medals" },
  { label: "No Reload", value: "25 gold medals" },
];

export const shootingRangeFaqs: FaqItem[] = [
  {
    question: "How many shooting ranges are in GTA 6?",
    answer:
      "Two. Griffin Shooting Range is in north-west Vice City and Rodgers Ranch & Shooting Range is in north-east Port Gellhorn. Each one has six courses.",
    sources: rangeSources,
  },
  {
    question: "How many gold medals are there at the GTA 6 shooting ranges?",
    answer:
      "42 in total: 18 at Griffin (three per course) and 24 at Rodgers Ranch (four per course). Get gold on every course for The Shootist trophy.",
    sources: rangeSources,
  },
  {
    question: "How do you start the shooting range challenges in GTA 6?",
    answer:
      "Talk to the clerk and buy a $5 waiver pass. The courses then show up on your map. No right gun? Rent one for $10 or bring your own.",
    sources: rangeSources,
  },
  {
    question: "Do shooting range medals unlock cheats in GTA 6?",
    answer:
      "Yes, after the story. 25 bronze medals unlock Max Ammo, 25 silver unlock Infinite Ammo, and 25 gold unlock No Reload.",
    sources: [src.powerpyxCheats, src.gamesradarCheats, src.powerpyxRange],
  },
];

export const shootingRangeSources: Batch2Source[] = rangeSources;

/** Tap-to-check id for one course. */
export function courseTrackId(rangeSlug: string, courseName: string) {
  return `range:${rangeSlug}:${courseName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
