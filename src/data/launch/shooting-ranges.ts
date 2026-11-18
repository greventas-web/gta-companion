/**
 * Shooting ranges for content batch 2.
 * Fact check: /workspace/launch-prep/content-batch-2-factcheck.md
 */
import type { FaqItem } from "@/components/intent/FaqSection";
import { batch2Sources as src, rangeSources, type Batch2Source } from "./batch2-sources";

export type ShootingCourse = {
  name: string;
  goldMedals: number;
  note?: string;
};

export type ShootingRange = {
  slug: string;
  name: string;
  area: string;
  areaPin: string;
  format: string;
  goldMedals: number;
  courses: ShootingCourse[];
};

export const shootingRanges: ShootingRange[] = [
  {
    slug: "griffin-shooting-range",
    name: "Griffin Shooting Range",
    area: "North-west Vice City",
    areaPin: "confirmed:vice-city",
    format: "Timed courses where you move through the range and shoot targets.",
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
    format: "Stationary scoring courses. PowerPyx says a multiplier builds if you hit a target in the body before the head, and that a missed shot lowers it. Single-source for the scoring tip.",
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

export const shootingRangeNotes = [
  "PowerPyx and DayOne both describe two shooting ranges and the same 12 course names: six at Griffin Shooting Range in north-west Vice City, and six at Rodgers Ranch & Shooting Range in north-east Port Gellhorn.",
  "PowerPyx’s dedicated range guide and 100% checklist count 12 challenges and 42 gold medals (18 at Griffin, 24 at Rodgers). The Progress database heading on the same site says “14 Shooting Range Challenges (42 Gold Medals).” This page follows the 12 named courses, which also match DayOne, and notes that heading.",
  "The published trophy The Shootist asks you to earn a gold medal in all shooting range challenges. PowerPyx also lists all 42 gold medals on the 100% checklist. The 42 total is single-source; the trophy is in published trophy lists.",
  "PowerPyx says that at each range you talk to the clerk and buy a $5 Waiver Pass, after which the challenges appear on the map. If you do not have the required weapon type, you can rent one for $10, or use your own. Those prices are single-source.",
  "PowerPyx says finishing or quitting a challenge raises your Focus stat. Single-source.",
  "After the story, combat cheats unlock from shooting-range medals: Max Ammo after 25 bronze medals or better, Infinite Ammo after 25 silver or better, and No Reload after 25 gold medals.",
  "Exact coordinates for the two range buildings have not been published by a source we trust, so this page links the Vice City and Port Gellhorn area pins rather than adding new pins.",
];

export const shootingRangeFaqs: FaqItem[] = [
  {
    question: "How many shooting ranges are in GTA 6?",
    answer:
      "Two: Griffin Shooting Range in north-west Vice City, and Rodgers Ranch & Shooting Range in north-east Port Gellhorn. PowerPyx and DayOne both list six courses at each range.",
    sources: rangeSources,
  },
  {
    question: "How many gold medals are there at the GTA 6 shooting ranges?",
    answer:
      "PowerPyx counts 42 gold medals: 18 at Griffin (three per course) and 24 at Rodgers Ranch (four per course). The published trophy The Shootist asks you to earn a gold medal in all shooting range challenges. PowerPyx’s Progress database heading says 14 challenges with the same 42 gold medals; this page uses the 12 named courses from the range guide and from DayOne.",
    sources: rangeSources,
  },
  {
    question: "How do you start the shooting range challenges in GTA 6?",
    answer:
      "PowerPyx says you talk to the clerk at each range and buy a $5 Waiver Pass, and the challenges then appear on the map. If you do not have the required weapon type, you can rent one for $10, or use your own.",
    sources: rangeSources,
  },
  {
    question: "Do shooting range medals unlock cheats in GTA 6?",
    answer:
      "Yes, after the story. Max Ammo unlocks after 25 bronze medals or better, Infinite Ammo after 25 silver medals or better, and No Reload after 25 gold medals.",
    sources: [src.powerpyxCheats, src.gamesradarCheats, src.powerpyxRange],
  },
];

export const shootingRangeSources: Batch2Source[] = rangeSources;
