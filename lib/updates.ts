/**
 * Milestones for /updates.
 *
 * Add a row only when a whole section is finished: every entry has verified
 * info and a real gameplay photo. One date, one short headline, one link.
 * Newest first. Do not log single pages or daily batches.
 *
 * Progress bars are omitted. The catalogs do not share one honest
 * complete/total pair (legacy names sit beside confirmed ones, and Rockstar's
 * own radio note says the published dial is not a promise it ends there).
 *
 * Do not use the word "free". Do not spoil anything past Chapter 3.
 */

export type Milestone = {
  /** YYYY-MM-DD */
  date: string;
  /** One short headline. The whole line links to `href`. */
  headline: string;
  href: string;
};

/** How many milestones stay on screen before "Show older". */
export const MILESTONES_VISIBLE = 7;

/** Empty until a section is actually complete. */
export const milestones: readonly Milestone[] = [];

export type ComingSoonItem = {
  id: string;
  title: string;
  /** Short status. These features are not available yet. */
  status: string;
  body: string;
  /** Optional price line, already formatted. */
  price?: string;
};

export type WhatsNextItem = {
  title: string;
  body: string;
};

/**
 * Upcoming platform features. Planned only: do not describe these as available.
 * Price is the announced one-time amount in the site's euro pricing.
 */
export const comingSoon: readonly ComingSoonItem[] = [
  {
    id: "community",
    title: "Community",
    status: "Planned",
    body: "Signed-in members will post tips, screenshots, and updates, then comment and interact. Posts go through moderation.",
  },
  {
    id: "pro",
    title: "GTA Companion Pro",
    status: "Planned",
    price: "€4.99, one time",
    body: "No ads, cloud sync, and progress tracking.",
  },
  {
    id: "badge",
    title: "Gold PRO badge",
    status: "Planned",
    body: "Pro members will wear a gold PRO badge beside their name.",
  },
];

/** Content still being added. No dates, no story details. */
export const whatsNext: readonly WhatsNextItem[] = [
  {
    title: "Optional finds",
    body: "More guides for optional finds.",
  },
  {
    title: "Map locations",
    body: "More places on the Leonida map.",
  },
  {
    title: "Stills",
    body: "More real in-game stills on the pages they belong to.",
  },
];

const updateCopy = JSON.stringify({ milestones, comingSoon, whatsNext });

if (/\bfree\b/i.test(updateCopy)) {
  throw new Error("Updates copy must not use the word free.");
}

for (const milestone of milestones) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(milestone.date)) {
    throw new Error(`Bad milestone date: ${milestone.date}`);
  }
  if (!milestone.href.startsWith("/")) {
    throw new Error(`Milestone link must stay on the site: ${milestone.href}`);
  }
  const words = milestone.headline.trim().split(/\s+/).length;
  if (words < 2 || words > 18) {
    throw new Error(`Milestone headline should be one short line: ${milestone.headline}`);
  }
}

const dates = milestones.map((milestone) => milestone.date);
if (dates.some((date, index) => index > 0 && date > dates[index - 1])) {
  throw new Error("Milestones must be newest first.");
}

export function formatUpdateDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
