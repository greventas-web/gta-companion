/**
 * Tracked marks with a per-id timestamp, so two devices can merge without
 * losing un-marks. Shared by the browser and the sync route.
 *
 * Each entry is [done (1) or not (0), time in ms of the last change].
 */
export type MarkEntry = [0 | 1, number];
export type Marks = Record<string, MarkEntry>;

export const MAX_MARKS = 20000;
const MAX_ID_LENGTH = 200;

/** Newest change wins. On a tie, "done" wins. */
export function mergeMarks(a: Marks, b: Marks): Marks {
  const out: Marks = { ...a };
  for (const [id, entry] of Object.entries(b)) {
    const current = out[id];
    if (
      !current ||
      entry[1] > current[1] ||
      (entry[1] === current[1] && entry[0] === 1 && current[0] === 0)
    ) {
      out[id] = entry;
    }
  }
  return out;
}

export function doneIds(marks: Marks): string[] {
  return Object.entries(marks)
    .filter(([, entry]) => entry[0] === 1)
    .map(([id]) => id);
}

/** Drops anything malformed. Returns null when the input is not an object. */
export function parseMarks(input: unknown): Marks | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const out: Marks = {};
  let count = 0;
  for (const [id, value] of Object.entries(input as Record<string, unknown>)) {
    if (count >= MAX_MARKS) break;
    if (typeof id !== "string" || id.length === 0 || id.length > MAX_ID_LENGTH) continue;
    if (!Array.isArray(value) || value.length !== 2) continue;
    const [done, at] = value;
    if ((done !== 0 && done !== 1) || typeof at !== "number" || !Number.isFinite(at) || at < 0) continue;
    out[id] = [done, Math.floor(at)];
    count += 1;
  }
  return out;
}
