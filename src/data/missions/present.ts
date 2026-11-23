import type { Mission } from "@/types/mission";

import { missions } from "./index";

/** Official Rockstar character stills already in the repo. Not mission screenshots. */
const PORTRAITS: { test: RegExp; src: string; alt: string }[] = [
  { test: /^jason\b/i, src: "/images/official/characters/jason-duval.webp", alt: "Jason Duval" },
  { test: /^lucia\b/i, src: "/images/official/characters/lucia-caminos.webp", alt: "Lucia Caminos" },
  { test: /^cal\b/i, src: "/images/official/characters/cal-hampton.webp", alt: "Cal Hampton" },
  { test: /^brian\b/i, src: "/images/official/characters/brian-heder.webp", alt: "Brian Heder" },
  { test: /^boobie\b/i, src: "/images/official/characters/boobie-ike.webp", alt: "Boobie Ike" },
  { test: /^dre'?quan\b/i, src: "/images/official/characters/drequan-priest.webp", alt: "Dre'Quan Priest" },
  { test: /^raul\b/i, src: "/images/official/characters/raul-bautista.webp", alt: "Raul Bautista" },
];

/**
 * Unlocks already stated on the site's own guides. Nothing new.
 * buck-me → bank account (guides/bank-account-atm)
 * down-to-earth → Focus (guides/focus)
 * dealers-choice → street races (guides/street-races)
 * credit-check → bank jobs (guides/bank-jobs)
 * just-a-scratch → Coastal Auto Care stays on the map (guides/just-a-scratch)
 */
const UNLOCKS: Record<string, string> = {
  "buck-me": "Bank account",
  "down-to-earth": "Focus",
  "dealers-choice": "Street races",
  "credit-check": "Bank jobs",
  "just-a-scratch": "Coastal Auto Care",
};

/** Timing notes already in the public mission summary. */
const TIPS: Record<string, string> = {
  "strangers-shirley": "These jobs are gone after Chapter 1.",
  "strangers-yago": "One race is time-limited and can be missed.",
  "strangers-kirk": "Some parts only start at night.",
  "strangers-bret": "The first job is for Jason only.",
  "strangers-andy": "This strand is for Lucia only.",
};

const MISSABLE = new Set(["strangers-shirley", "strangers-yago"]);

export function giverPortrait(giver?: string) {
  if (!giver) return undefined;
  return PORTRAITS.find((portrait) => portrait.test.test(giver));
}

export function missionUnlock(mission: Mission) {
  return UNLOCKS[mission.slug] ?? "";
}

export function missionTip(mission: Mission) {
  return TIPS[mission.slug] ?? "";
}

export function missionTags(mission: Mission) {
  const tags: string[] = [];
  if (MISSABLE.has(mission.slug)) tags.push("Missable");
  const unlock = UNLOCKS[mission.slug];
  if (unlock) tags.push(`Unlocks ${unlock}`);
  if (mission.edition) tags.push(mission.edition);
  return tags;
}

export function missionArea(mission: Mission) {
  const parts = [mission.place, mission.startArea].filter((part): part is string => Boolean(part));
  if (mission.region && mission.region !== "Leonida" && !parts.includes(mission.region)) parts.push(mission.region);
  return parts.join(", ");
}

/** 1–2 spoiler-safe sentences from fields the page already has. */
export function missionLead(mission: Mission) {
  const generic = /^Chapter \d+/i.test(mission.summary) && /mission \d+/i.test(mission.summary);
  if (!generic) return mission.summary;

  const bits: string[] = [];
  if (mission.giver && mission.place) {
    const area = mission.startArea ? `, ${mission.startArea}` : "";
    bits.push(`${mission.giver} gives this one. It starts at ${mission.place}${area}.`);
  } else if (mission.giver && mission.startArea) {
    bits.push(`${mission.giver} gives this one, in ${mission.startArea}.`);
  } else if (mission.giver) {
    bits.push(`${mission.giver} gives this one.`);
  } else if (mission.place) {
    bits.push(`It starts at ${mission.place}.`);
  } else if (mission.startArea) {
    bits.push(`It starts in ${mission.startArea}.`);
  }

  const chapter = mission.chapter
    ? `Chapter ${mission.chapter}${mission.chapterName ? `, ${mission.chapterName}` : ""}`
    : "";
  const number = mission.order ? `mission ${mission.order}` : "";
  const tail = [chapter, number].filter(Boolean).join(", ");
  if (tail) bits.push(`${tail}.`);
  return bits.join(" ") || mission.summary;
}

export function rewardText(rewards?: string) {
  return (rewards ?? "").replace(/\.\s*$/, "").trim();
}

export function missionNeighbors(mission: Mission) {
  const pool =
    mission.type === "story"
      ? missions
          .filter((item) => item.type === "story")
          .sort((a, b) => (a.chapter ?? 0) - (b.chapter ?? 0) || (a.order ?? 0) - (b.order ?? 0))
      : mission.type === "side"
        ? missions.filter((item) => item.type === "side")
        : [];
  const index = pool.findIndex((item) => item.slug === mission.slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? pool[index - 1] : undefined,
    next: index < pool.length - 1 ? pool[index + 1] : undefined,
  };
}

export function chapterEyebrow(mission: Mission) {
  if (mission.type === "edition") return mission.edition ? `Edition · ${mission.edition}` : "Edition";
  if (mission.type === "side") return mission.chapter ? `Side · Chapter ${mission.chapter}` : "Side mission";
  if (mission.chapter && mission.chapterName) return `Chapter ${mission.chapter} · ${mission.chapterName}`;
  if (mission.chapter) return `Chapter ${mission.chapter}`;
  return "Story";
}
