/**
 * GTA Companion Pro: shared settings (safe for the browser).
 *
 * Every guide, pin and checklist stays readable for everyone. Pro only adds
 * our own tools: cloud sync, progress %, the "what's left near me" map
 * filter, unlimited marks and no ads.
 */
export const PRO_NAME = "GTA Companion Pro";
export const PRO_PRICE_CENTS = 399;
export const PRO_CURRENCY = "eur";
export const PRO_PRICE_LABEL = "€3.99";

/** Marks one device can hold without Pro. Existing marks above it are kept. */
export const BASIC_MARK_LIMIT = 50;

/** Radius of the "what's left near me" filter, in GTA meters. */
export const NEAR_ME_RADIUS_M = 1500;

/** Device hint so ads can hide before the status call returns. */
export const PRO_HINT_KEY = "gta-companion-pro";
export const PRO_CHANGE_EVENT = "gta-companion-pro-change";

/** Last successful cloud sync on this device. */
export const LAST_SYNC_KEY = "gta-companion-last-sync";
export const SYNC_EVENT = "gta-companion-sync";

export type ProgressSection = {
  id: "missions" | "collectibles" | "trophies" | "ranges";
  label: string;
  href: string;
};

export const PROGRESS_SECTIONS: ProgressSection[] = [
  { id: "missions", label: "Missions", href: "/missions" },
  { id: "collectibles", label: "Collectibles", href: "/collectibles" },
  { id: "trophies", label: "Trophies", href: "/trophies" },
  { id: "ranges", label: "Shooting ranges", href: "/shooting-ranges" },
];

/** Section a tracked id belongs to (ids come from the existing tap-to-track buttons). */
export function sectionForTrackId(id: string): ProgressSection["id"] | null {
  if (id.startsWith("mission:")) return "missions";
  if (id.startsWith("trophy:")) return "trophies";
  if (id.startsWith("range:")) return "ranges";
  if (id.startsWith("pin:")) return null;
  return id.includes(":") ? "collectibles" : null;
}
