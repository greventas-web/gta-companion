import {
  BODY_MAX,
  BODY_MIN,
  IMAGE_TYPES,
  MAX_IMAGE_BYTES,
  NAME_MAX,
  REASON_MAX,
  REASON_MIN,
  TITLE_MAX,
  TITLE_MIN,
  type ImageContentType,
  type PostType,
  isPostType,
} from "@/lib/community/types";

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

/** Public name. Drops anything that looks like an email address. */
export function publicName(value: unknown): string {
  const cleaned = cleanLine(value, NAME_MAX);
  if (!cleaned) return "Player";
  if (!cleaned.includes("@")) return cleaned;
  const local = cleanLine(cleaned.split("@")[0] ?? "", NAME_MAX);
  return local || "Player";
}

export type PostDraft = {
  type: PostType;
  title: string;
  body: string;
};

export function parsePostFields(input: {
  type: unknown;
  title: unknown;
  body: unknown;
}): { ok: true; value: PostDraft } | { ok: false; error: string } {
  const type = typeof input.type === "string" ? input.type : "";
  if (!isPostType(type)) return { ok: false, error: "Choose Tip / Update, Screenshot, or Site feedback." };

  const title = cleanLine(input.title, TITLE_MAX);
  if (title.length < TITLE_MIN) {
    return { ok: false, error: `Give the post a title (${TITLE_MIN}-${TITLE_MAX} characters).` };
  }

  const body = cleanBody(input.body, BODY_MAX);
  if (body.length < BODY_MIN) {
    return { ok: false, error: `Write a little more (at least ${BODY_MIN} characters).` };
  }

  return { ok: true, value: { type, title, body } };
}

export function parseReportReason(value: unknown): string | null {
  const reason = cleanBody(value, REASON_MAX);
  if (reason.length < REASON_MIN) return null;
  return reason;
}

export function detectImageType(bytes: Uint8Array): ImageContentType | null {
  if (bytes.length < 12 || bytes.length > MAX_IMAGE_BYTES) return null;
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 && bytes[4] === 0x0d && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a) {
    return "image/png";
  }
  if (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }
  return null;
}

export function imageTypeLabel(): string {
  return IMAGE_TYPES.join(", ");
}
