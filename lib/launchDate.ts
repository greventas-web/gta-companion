/** Calendar date of the PlayStation 5 and Xbox Series X|S launch. */
export const GTA6_LAUNCH = { year: 2026, month: 11, day: 19 } as const;

/**
 * Midnight at the start of this calendar day in the device's local time zone.
 * Month is 1–12. Rockstar Support says the game unlocks at midnight local time.
 */
export function localMidnight(clock: {
  year: number;
  month: number;
  day: number;
}) {
  return new Date(clock.year, clock.month - 1, clock.day, 0, 0, 0, 0).getTime();
}

export function gta6LocalMidnight() {
  return localMidnight(GTA6_LAUNCH);
}
