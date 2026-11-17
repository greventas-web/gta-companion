import {
  categoryById,
  categoryHasDetailPages,
  MAP_WORLD_HALF,
  type MapCategoryId,
} from "@/lib/map/model";

export type SuggestionInput = {
  category: MapCategoryId;
  title: string;
  description: string;
  x: number;
  y: number;
  entitySlug?: string;
  sourceUrl?: string;
  submitterName?: string;
  website?: string;
  startedAt?: number;
};

export type SuggestionRejection = { ok: false; status: number; error: string };
export type SuggestionDrop = { ok: false; drop: true };
export type SuggestionParsed = { ok: true; value: SuggestionInput };

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function parseSuggestion(body: unknown): SuggestionParsed | SuggestionRejection | SuggestionDrop {
  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "Send a suggestion as JSON." };
  }

  const record = body as Record<string, unknown>;
  const website = typeof record.website === "string" ? record.website.trim() : "";
  if (website) return { ok: false, drop: true };

  const startedAt = typeof record.startedAt === "number" ? record.startedAt : Number(record.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 1200 || elapsed > 12 * 60 * 60 * 1000) {
    return { ok: false, drop: true };
  }

  const category = categoryById(typeof record.category === "string" ? record.category : "");
  if (!category) return { ok: false, status: 400, error: "Choose a category." };

  const title = cleanLine(record.title, 80);
  if (!title || title.length < 2) {
    return { ok: false, status: 400, error: "Add a title (2–80 characters)." };
  }

  const description = cleanLine(record.description, 500);
  if (!description || description.length < 4) {
    return { ok: false, status: 400, error: "Add a short description." };
  }

  const x = Number(record.x);
  const y = Number(record.y);
  if (!insideMap(x) || !insideMap(y)) {
    return { ok: false, status: 400, error: "Drop the pin on the map first." };
  }

  let entitySlug: string | undefined;
  if (typeof record.entitySlug === "string" && record.entitySlug.trim()) {
    const slug = record.entitySlug.trim().toLowerCase();
    if (!SLUG.test(slug) || slug.length > 80) {
      return { ok: false, status: 400, error: "The database slug looks wrong." };
    }
    if (!categoryHasDetailPages(category.id)) {
      return { ok: false, status: 400, error: "This category has no database pages yet. Leave the slug blank." };
    }
    entitySlug = slug;
  }

  let sourceUrl: string | undefined;
  if (typeof record.sourceUrl === "string" && record.sourceUrl.trim()) {
    const parsed = cleanHttpUrl(record.sourceUrl.trim());
    if (!parsed) return { ok: false, status: 400, error: "The source link must be an http(s) URL." };
    sourceUrl = parsed;
  }

  let submitterName: string | undefined;
  if (typeof record.submitterName === "string" && record.submitterName.trim()) {
    const name = cleanLine(record.submitterName, 60);
    if (!name) return { ok: false, status: 400, error: "Name is too long." };
    submitterName = name;
  }

  return {
    ok: true,
    value: {
      category: category.id,
      title,
      description,
      x,
      y,
      entitySlug,
      sourceUrl,
      submitterName,
    },
  };
}

function insideMap(value: number): boolean {
  return Number.isFinite(value) && value >= -MAP_WORLD_HALF && value <= MAP_WORLD_HALF;
}

function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanHttpUrl(value: string): string | null {
  if (value.length > 400) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (url.username || url.password) return null;
    return url.toString();
  } catch {
    return null;
  }
}
