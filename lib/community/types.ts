export const FLAIRS = [
  { id: "general", label: "General" },
  { id: "tips", label: "Tips & Guides" },
  { id: "screenshots", label: "Screenshots" },
  { id: "help", label: "Help" },
  { id: "feedback", label: "Site feedback" },
] as const;

export type FlairId = (typeof FLAIRS)[number]["id"];

export const POST_KINDS = [
  { id: "text", label: "Text" },
  { id: "image", label: "Image" },
  { id: "link", label: "Link" },
] as const;

export type PostKind = (typeof POST_KINDS)[number]["id"];

export const COMMUNITY_RULES = [
  "Be respectful.",
  "No spam, swearing or hate.",
  "Keep it about GTA.",
] as const;

export const REPORT_REASONS = [
  "Spam",
  "Swearing or hate",
  "Not about GTA",
  "Not their image",
] as const;

export const TITLE_MIN = 4;
export const TITLE_MAX = 120;
export const BODY_MAX = 5000;
export const COMMENT_MAX = 2000;
export const REASON_MIN = 4;
export const REASON_MAX = 280;
export const NAME_MAX = 40;
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
export const MAX_IMAGE_EDGE = 2560;
export const MAX_INPUT_PIXELS = 16_000_000;

export type UploadImageType = "image/jpeg" | "image/png" | "image/webp";
export type StoredImageType = "image/webp" | "image/jpeg";

export type FeedSort = "hot" | "new" | "top";
export type TopRange = "day" | "week" | "all";
export type CommentSort = "best" | "new";

export function flairLabel(id: string): string {
  return FLAIRS.find((item) => item.id === id)?.label ?? "General";
}

export function isFlair(value: string): value is FlairId {
  return FLAIRS.some((item) => item.id === value);
}

export function isPostKind(value: string): value is PostKind {
  return POST_KINDS.some((item) => item.id === value);
}
