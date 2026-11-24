import { isCategory, LIMITS, type CommunityCategory } from "@/lib/community/shared";

const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL, "").replace(/\s+/g, " ").trim().slice(0, max);
}

export function cleanBody(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n/g, "\n")
    .replace(CONTROL, "")
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max);
}

export function displayName(value: unknown): string {
  const cleaned = cleanLine(value, 40);
  return cleaned.length >= 2 ? cleaned : "Player";
}

export type ParsedPost = {
  category: CommunityCategory;
  title: string;
  body: string;
  imageConsent: boolean;
};

export function parsePostFields(input: {
  category: unknown;
  title: unknown;
  body: unknown;
  credit: unknown;
  hasImage: boolean;
}): { ok: true; value: ParsedPost } | { ok: false; error: string; status: number } {
  if (
    (typeof input.title === "string" && input.title.length > LIMITS.titleMax + 400) ||
    (typeof input.body === "string" && input.body.length > LIMITS.bodyMax + 800)
  ) {
    return { ok: false, error: "That post is too long.", status: 400 };
  }

  if (!isCategory(input.category)) {
    return { ok: false, error: "Choose a category.", status: 400 };
  }

  const title = cleanLine(input.title, LIMITS.titleMax);
  const body = cleanBody(input.body, LIMITS.bodyMax);
  if (title.length < LIMITS.titleMin || title.length > LIMITS.titleMax) {
    return { ok: false, error: `Give the post a title (${LIMITS.titleMin}–${LIMITS.titleMax} characters).`, status: 400 };
  }
  if (body.length < LIMITS.bodyMin || body.length > LIMITS.bodyMax) {
    return { ok: false, error: `Write a little more (${LIMITS.bodyMin}–${LIMITS.bodyMax} characters).`, status: 400 };
  }

  const screenshot = input.category === "screenshot";
  if (screenshot && !input.hasImage) {
    return { ok: false, error: "Add a screenshot to this post.", status: 400 };
  }
  if (!screenshot && input.hasImage) {
    return { ok: false, error: "Images belong on screenshot posts.", status: 400 };
  }
  if (screenshot && input.credit !== true && input.credit !== "yes") {
    return {
      ok: false,
      error: "Confirm that GTA Companion may use this screenshot, with credit to you.",
      status: 400,
    };
  }

  return {
    ok: true,
    value: {
      category: input.category,
      title,
      body,
      imageConsent: screenshot,
    },
  };
}

export function parseReportReason(value: unknown): { ok: true; reason: string } | { ok: false; error: string } {
  if (value == null || value === "") return { ok: true, reason: "" };
  if (typeof value !== "string") return { ok: false, error: "That report could not be read." };
  if (value.length > LIMITS.reasonMax + 200) return { ok: false, error: "That report is too long." };
  return { ok: true, reason: cleanLine(value, LIMITS.reasonMax) };
}
