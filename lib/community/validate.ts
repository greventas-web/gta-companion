import {
  BODY_MAX,
  COMMENT_MAX,
  NAME_MAX,
  REASON_MAX,
  REASON_MIN,
  TITLE_MAX,
  TITLE_MIN,
  type FlairId,
  type PostKind,
  isFlair,
  isPostKind,
} from "@/lib/community/types";
import { countUrls, moderateText } from "@/lib/community/moderate";

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
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max);
}

export function publicName(value: unknown): string {
  const cleaned = cleanLine(value, NAME_MAX);
  if (!cleaned) return "Player";
  if (!cleaned.includes("@")) return cleaned;
  const local = cleanLine(cleaned.split("@")[0] ?? "", NAME_MAX);
  return local || "Player";
}

export function parseLink(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 400) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export type PostDraft = {
  kind: PostKind;
  flair: FlairId;
  title: string;
  body: string;
  linkUrl: string | null;
};

export function parsePostDraft(input: {
  kind: unknown;
  flair: unknown;
  title: unknown;
  body: unknown;
  linkUrl: unknown;
  hasImage: boolean;
}): { ok: true; value: PostDraft } | { ok: false; error: string } {
  const kind = typeof input.kind === "string" ? input.kind : "";
  const flair = typeof input.flair === "string" ? input.flair : "";
  if (!isPostKind(kind)) return { ok: false, error: "Choose Text, Image, or Link." };
  if (!isFlair(flair)) return { ok: false, error: "Choose a flair." };

  const title = cleanLine(input.title, TITLE_MAX);
  if (title.length < TITLE_MIN) {
    return { ok: false, error: `Give the post a title (${TITLE_MIN}-${TITLE_MAX} characters).` };
  }
  const body = cleanBody(input.body, BODY_MAX);
  if (kind === "text" && body.length < 1) return { ok: false, error: "Write something in the post." };
  if (kind === "image" && !input.hasImage) return { ok: false, error: "Add an image." };

  let linkUrl: string | null = null;
  if (kind === "link") {
    linkUrl = parseLink(input.linkUrl);
    if (!linkUrl) return { ok: false, error: "Add a valid http or https link." };
  }

  const titleCheck = moderateText(title);
  if (!titleCheck.ok) return titleCheck;
  const bodyCheck = moderateText(body);
  if (!bodyCheck.ok) return bodyCheck;

  return { ok: true, value: { kind, flair, title: titleCheck.text, body: bodyCheck.text, linkUrl } };
}

export function parseCommentBody(value: unknown): { ok: true; text: string } | { ok: false; error: string } {
  const body = cleanBody(value, COMMENT_MAX);
  if (body.length < 1) return { ok: false, error: "Write a comment." };
  return moderateText(body);
}

export function parseReportReason(value: unknown): string | null {
  const reason = cleanBody(value, REASON_MAX);
  if (reason.length < REASON_MIN) return null;
  const checked = moderateText(reason);
  if (!checked.ok) return null;
  return checked.text;
}

export function tooManyLinks(body: string, linkUrl: string | null, isNew: boolean): boolean {
  if (!isNew) return false;
  return countUrls(body) + (linkUrl ? 1 : 0) > 1;
}
