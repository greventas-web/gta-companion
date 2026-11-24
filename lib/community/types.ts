export const POST_TYPES = [
  { id: "tip", label: "Tip / Update" },
  { id: "screenshot", label: "Screenshot" },
  { id: "feedback", label: "Site feedback" },
] as const;

export type PostType = (typeof POST_TYPES)[number]["id"];

export type PostStatus = "pending" | "approved" | "rejected";

export const COMMUNITY_RULES = [
  "No spoilers past Chapter 3.",
  "No piracy, cheats, or leaks.",
  "No spam.",
  "Be respectful.",
  "Uploads must be your own screenshots.",
] as const;

export const TITLE_MIN = 4;
export const TITLE_MAX = 80;
export const BODY_MIN = 12;
export const BODY_MAX = 2000;
export const REASON_MIN = 4;
export const REASON_MAX = 280;
export const NAME_MAX = 40;
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
export type ImageContentType = (typeof IMAGE_TYPES)[number];

export type PublicPost = {
  id: string;
  type: PostType;
  typeLabel: string;
  title: string;
  body: string;
  authorName: string;
  pro: boolean;
  createdAt: string;
  imageUrl: string | null;
  credit: string | null;
};

export type MinePost = {
  id: string;
  type: PostType;
  typeLabel: string;
  title: string;
  body: string;
  status: "pending" | "rejected";
  statusLabel: string;
  createdAt: string;
  hasImage: boolean;
};

export type AdminReport = {
  id: string;
  reason: string;
  createdAt: string;
};

export type AdminPost = {
  id: string;
  type: PostType;
  typeLabel: string;
  title: string;
  body: string;
  status: PostStatus;
  authorName: string;
  pro: boolean;
  createdAt: string;
  reviewedAt: string | null;
  imageUrl: string | null;
  credit: string | null;
  reports: AdminReport[];
};

export function postTypeLabel(type: string): string {
  return POST_TYPES.find((item) => item.id === type)?.label ?? "Post";
}

export function isPostType(value: string): value is PostType {
  return POST_TYPES.some((item) => item.id === value);
}
