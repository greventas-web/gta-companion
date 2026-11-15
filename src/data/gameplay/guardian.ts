import type { SourceRef } from "@/components/SourceLink";

export function guardianPrint(): SourceRef {
  return {
    label: "The Guardian (print, Nov 14)",
  };
}

export const guardianOnline: SourceRef = {
  label: "The Guardian",
  href: "https://www.theguardian.com/games/2026/nov/11/a-world-of-its-own-inside-the-making-of-the-most-detailed-grand-theft-auto-yet",
};

export const guardianOnlineNotes = [
  {
    title: "Research trips",
    body: "Rob Nelson told The Guardian that Rockstar North developers first went to Miami in 2015, before the organised research trips, to immerse themselves in the place, its history, and the experiences they wanted characters to have.",
    source: guardianOnline,
  },
  {
    title: "Donut and beer",
    body: "In a gas station, Jason takes bites of a donut with one hand while sipping a beer with the other. When he starts running, he hikes a six-pack into the crook of his arm, and the liquid in the bottles sloshes.",
    source: guardianOnline,
  },
] as const;

export const guardianSwitching =
  "For some acts of this game you are locked into one character's perspective, but most of the time you can switch freely between them.";

export const guardianApart =
  "When they are apart, you can ensure they text and call each other.";

export const guardianRelationship =
  "You as the player become the steward of their relationship, and if you neglect it then there will be consequences. Rob Nelson says: “The relationship is yours to nurture or yours to lose. Whether it remains a romantic relationship is in your hands.”";

export const guardianHands =
  "When they are together, you can press a button to make them hold hands.";

export const guardianCharacterSources = [
  guardianPrint(),
  guardianPrint(),
  guardianPrint(),
] as const satisfies readonly SourceRef[];

const printIntro =
  "Unofficial notes from Keza MacDonald’s hands-on at Rockstar North, printed in The Guardian Saturday magazine on 14 Nov 2026. Rockstar Games made Grand Theft Auto VI. This feature is not posted on the Rockstar site.";

export const guardianPrintIntro = printIntro;

export const animalPrintNotes = [
  {
    title: "Binoculars and a wildlife logbook",
    body: "Jason pulls out a pair of binoculars, a gull is recorded in a wildlife logbook, and there are 62 types of birds to spot.",
    source: guardianPrint(),
  },
] as const;

export const activityPrintNotes = [
  {
    title: "Little dates",
    body: "When they're together, you can take them on little dates: to the gym, out to a bar, to a meditation retreat or to a liquor-store stick-up.",
    source: guardianPrint(),
  },
  {
    title: "Hotwiring and locks",
    body: "Jason and Lucia can't just steal any car or bust their way into a bank; at the start they can only hotwire low-end vehicles and pick basic locks, working their way up to the higher-value jobs later.",
    source: guardianPrint(),
  },
  {
    title: "Robbery prep",
    body: "You have to scope out your targets, whether it's a gas station or an upscale mall boutique. You can disable security cameras or steal the footage, find back doors and safe codes so that you can get in without pulling a gun on anyone, and get out before witnesses arrive.",
    source: guardianPrint(),
  },
  {
    title: "Gas station",
    body: "In a gas station, Jason wanders with a doughnut in one hand and a six-pack of beer in the other. The liquid inside the bottles sloshes as he walks, and the racks are stocked with fully illustrated magazines that you can take off the shelf and read through.",
    source: guardianPrint(),
  },
  {
    title: "Pedestrians",
    body: "You can overhear pedestrians' conversations as you pass by, and interrupting them might result in a bemused “Have we met?” or a stream of invective.",
    source: guardianPrint(),
  },
] as const;

export const characterPrintNotes = [
  {
    title: "Switching",
    body: guardianSwitching,
    source: guardianPrint(),
  },
  {
    title: "Calls and texts",
    body: guardianApart,
    source: guardianPrint(),
  },
  {
    title: "The relationship",
    body: guardianRelationship,
    source: guardianPrint(),
  },
  {
    title: "Holding hands",
    body: guardianHands,
    source: guardianPrint(),
  },
] as const;
