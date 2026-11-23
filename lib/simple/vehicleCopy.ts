import { makerLabel, vehicleMark, vehicleNoun } from "@/lib/simple/marks";
import type { Vehicle } from "@/types/vehicle";

/**
 * Catalog sentences for a vehicle page. Strips source-voice and keeps
 * cheat unlocks out of the lead. Uses only text already stored on the vehicle.
 */
export function vehicleCatalog(vehicle: Vehicle) {
  const unlock = unlockLine(vehicle.description);
  const about = plainSentences(stripResearch(vehicle.description));
  const place = cleanPlace(vehicle.whereToFind ?? "");
  const parts = place.split(/(?<=\.)\s+/).filter(Boolean);
  const spawn = parts.filter((sentence) =>
    /can spawn|shows up|parked|docked|marker|message|only car|during chapter|bottom of the ramp|mile zero|level b1|unlocks later|from the|at the|apartment|garage|hotel|station|junkyard|street|beach/i.test(sentence),
  );
  const rest = parts.filter((sentence) => !spawn.includes(sentence));
  const kind = vehicleNoun(vehicle.category, vehicleMark(vehicle.category, vehicle.slug));
  const maker = makerLabel(vehicle.manufacturer);
  const fallback = maker ? `A ${maker} ${kind}.` : `A ${kind}.`;
  const where = spawn.join(" ");
  const aboutSentences = about.match(/[^.!?]+[.!?]+/g) ?? (about ? [ensurePeriod(about)] : []);
  const kept = [...aboutSentences, ...rest].map((sentence) => sentence.trim()).filter((sentence) => sentence && !overlaps(sentence, where));
  const lead = capFirst(kept.join(" "));
  const summary = lead.length > 8 ? withMaker(ensurePeriod(lead), maker, fallback) : fallback;
  return {
    summary: capSentences(summary, 2),
    where,
    unlock,
  };
}

function overlaps(sentence: string, where: string) {
  if (!where) return false;
  const words = sentence.toLowerCase().split(/\W+/).filter((word) => word.length > 3);
  const hits = words.filter((word) => where.toLowerCase().includes(word));
  return hits.length >= 4;
}

/** Name the maker without adding a sentence that pushes a real fact out. */
function withMaker(lead: string, maker: string, fallback: string) {
  if (!maker || new RegExp(maker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(lead)) return lead;
  if (/^An?\s/i.test(lead)) return lead.replace(/^An?\s/i, (article) => `${article}${maker} `);
  return `${fallback} ${lead}`;
}

function capFirst(text: string) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function unlockLine(text: string) {
  const match = text.match(/Unlock:\s*([^.]*)/i);
  if (!match) return "";
  const afterStory = /cheat spawns one after the story/i.test(text);
  const unlock = match[1].trim().replace(/\.$/, "");
  if (!unlock) return "";
  const sentence = unlock.charAt(0).toUpperCase() + unlock.slice(1);
  return afterStory ? `${sentence}, after the story.` : `${sentence}.`;
}

function stripResearch(text: string) {
  return text
    .replace(/The fastest (?:muscle )?car (?:found so far )?by the in-game Speed bar(?: so far)? \([^)]+\)(?:, and)?\s*/gi, "")
    .replace(/Some launch-week lists spell it Shafter; walkthroughs that quote the on-screen text use Schafter\.?\s*/gi, "")
    .replace(/Launch-week checklists place one /gi, "One is ")
    .replace(/Launch-week checklists list two versions in the game: /gi, "It comes as ")
    .replace(/A cheat spawns one after the story\.?\s*/gi, "")
    .replace(/Unlock:\s*[^.]+\.?\s*/gi, "")
    .replace(/\(\s*from Chapter [4-9][^)]*\)/gi, "")
    .replace(/\(\s*Chapter [4-9][^)]*\)/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s*,?\s*and\s+/i, "")
    .trim();
}

function cleanPlace(text: string) {
  return text
    .replace(/Push Square spotted one /gi, "Can spawn ")
    .replace(/Push Square found one /gi, "Can spawn ")
    .replace(/at about /gi, "around ")
    .replace(/\(\s*from Chapter [4-9][^)]*\)/gi, "")
    .replace(/\(\s*Chapter [4-9][^)]*\)/gi, "")
    .replace(/It only shows up later in the story\s*\.?/gi, "It shows up later in the story.")
    .replace(/It unlocks late in the story\s*\.?/gi, "It unlocks later in the story.")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
}

function plainSentences(text: string) {
  return text.replace(/\s{2,}/g, " ").trim();
}

function ensurePeriod(text: string) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function capSentences(text: string, max: number) {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return text;
  return sentences.slice(0, max).join(" ").trim();
}
