export const CATEGORIES = [
  { id: "update", label: "Update", blurb: "Something you noticed in Leonida." },
  { id: "tip", label: "Tip", blurb: "A useful trick for other players." },
  { id: "screenshot", label: "Screenshot", blurb: "A picture from your game." },
  { id: "feedback", label: "Feedback", blurb: "An idea for this site." },
] as const;

export type CommunityCategory = (typeof CATEGORIES)[number]["id"];

export const RULES = [
  "No spoilers past Chapter 3.",
  "No piracy or leaks.",
  "No spam or ads.",
  "Be respectful.",
] as const;

export const CREDIT_COPY =
  "GTA Companion may use this screenshot on the site, with credit to me as the poster.";

export const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp";
export const IMAGE_LIMIT_LABEL = "JPEG, PNG, or WebP, up to 3 MB.";

export const LIMITS = {
  titleMin: 4,
  titleMax: 80,
  bodyMin: 8,
  bodyMax: 2000,
  reasonMax: 240,
  imageBytes: 3 * 1024 * 1024,
  postsPerHour: 5,
  reportsPerHour: 10,
  pendingPerUser: 3,
  maxPending: 400,
  maxPosts: 2000,
} as const;

const CATEGORY_IDS = new Set<string>(CATEGORIES.map((item) => item.id));

export function isCategory(value: unknown): value is CommunityCategory {
  return typeof value === "string" && CATEGORY_IDS.has(value);
}

export function categoryLabel(id: CommunityCategory): string {
  return CATEGORIES.find((item) => item.id === id)?.label ?? id;
}

export type PublicPost = {
  id: string;
  category: CommunityCategory;
  title: string;
  body: string;
  authorName: string;
  pro: boolean;
  createdAt: string;
  imageUrl: string | null;
};

export type OwnPost = PublicPost & {
  status: "pending" | "approved" | "rejected";
};

export type AdminPost = OwnPost & {
  authorUid: string;
  reportCount: number;
  reports: { at: string; reason: string }[];
};

export function formatPostDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

const POST_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isPostId(value: string): boolean {
  return POST_ID.test(value);
}
