import { gta6LocalMidnight } from "@/lib/launchDate";

/**
 * Launch-state switch for the whole site. Edit only this file.
 *
 * Rockstar says Grand Theft Auto VI releases at midnight local time in all
 * regions on PS5 and Xbox Series X|S. PlayStation says the rolling launch
 * starts at 12:00 a.m. NZDT in New Zealand.
 *
 * Phases:
 * - "pre": before the first region unlocks.
 * - "rolling": some regions have it. A visitor whose own device has passed
 *   local midnight on November 19 sees "out" right away.
 * - "out": every time zone has passed midnight on November 19.
 *
 * Pages that show the phase revalidate every few minutes, and the client
 * re-checks every 30 seconds, so the copy flips with no deploy.
 *
 * Emergency override: set NEXT_PUBLIC_LAUNCH_PHASE to pre, rolling, or out
 * in Vercel and redeploy. Leave it unset for the automatic switch.
 */

/** 12:00 a.m. NZDT, November 19, 2026 = 6:00 a.m. ET, November 18. */
export const FIRST_UNLOCK_ISO = "2026-11-18T11:00:00Z";

/** Midnight on November 19 in the last inhabited time zone (UTC-11) = 6:00 a.m. ET, November 19. */
export const LAST_UNLOCK_ISO = "2026-11-19T11:00:00Z";

/** Swap to the article path once the first-impressions post is published. */
export const FIRST_IMPRESSIONS_HREF = "/news";

export type LaunchPhase = "pre" | "rolling" | "out";

const PHASES: readonly LaunchPhase[] = ["pre", "rolling", "out"];

function forcedPhase(): LaunchPhase | null {
  const value = process.env.NEXT_PUBLIC_LAUNCH_PHASE?.trim().toLowerCase();
  return PHASES.includes(value as LaunchPhase) ? (value as LaunchPhase) : null;
}

/** Phase without a device clock, for server rendering. */
export function globalLaunchPhase(now: number = Date.now()): LaunchPhase {
  const forced = forcedPhase();
  if (forced) return forced;
  if (now >= Date.parse(LAST_UNLOCK_ISO)) return "out";
  if (now >= Date.parse(FIRST_UNLOCK_ISO)) return "rolling";
  return "pre";
}

/** Phase for this visitor's device: "out" once their local midnight has passed. */
export function visitorLaunchPhase(now: number = Date.now()): LaunchPhase {
  const forced = forcedPhase();
  if (forced) return forced;
  const global = globalLaunchPhase(now);
  if (global === "out" || now >= gta6LocalMidnight()) return "out";
  return global;
}

/** Milliseconds until this device's local midnight on November 19. */
export function msUntilLocalUnlock(now: number = Date.now()): number {
  return Math.max(0, gta6LocalMidnight() - now);
}
