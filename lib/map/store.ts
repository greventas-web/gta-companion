import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { get, put } from "@vercel/blob";
import { unconfirmedPending } from "@/lib/map/pending-seed";
import {
  entityTypeForCategory,
  hrefForEntity,
  type CompanionPin,
  type MapCategoryId,
  type MapEntityType,
} from "@/lib/map/model";

/**
 * Pending and approved suggestions.
 *
 * Production: a private Vercel Blob store.
 *   BLOB_READ_WRITE_TOKEN  (local or a public-token store)
 *   BLOB_STORE_ID          (set when a Blob store is connected on Vercel)
 * The file is private so pending rows are not readable from a public URL.
 *
 * Local dev without those variables uses .data/map-submissions.json.
 * On Vercel, writes fail closed until Blob is configured. The map still
 * loads curated pins.
 */

const BLOB_PATH = "map/submissions.json";
const LOCAL_PATH = path.join(process.cwd(), ".data", "map-submissions.json");
const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 5;

export type SubmissionStatus = "pending" | "approved" | "rejected";

export type Submission = {
  id: string;
  status: SubmissionStatus;
  category: MapCategoryId;
  entityType?: MapEntityType;
  entitySlug?: string;
  title: string;
  description: string;
  sourceUrl?: string;
  submitterName?: string;
  x: number;
  y: number;
  createdAt: string;
};

type StoreShape = {
  submissions: Submission[];
  hits: Record<string, number[]>;
};

export class StorageUnavailable extends Error {
  constructor() {
    super("Map submission storage is not configured.");
    this.name = "StorageUnavailable";
  }
}

function emptyStore(): StoreShape {
  return { submissions: [], hits: {} };
}

export function blobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

function backend(): "blob" | "file" | "none" {
  if (blobConfigured()) return "blob";
  if (process.env.VERCEL) return "none";
  return "file";
}

function parseStore(text: string): StoreShape {
  try {
    const parsed = JSON.parse(text) as Partial<StoreShape>;
    return {
      submissions: Array.isArray(parsed.submissions) ? parsed.submissions : [],
      hits: parsed.hits && typeof parsed.hits === "object" ? parsed.hits : {},
    };
  } catch {
    return emptyStore();
  }
}

async function readStore(): Promise<StoreShape> {
  const kind = backend();
  let store = emptyStore();
  if (kind === "file") {
    try {
      store = parseStore(await readFile(LOCAL_PATH, "utf8"));
    } catch {
      store = emptyStore();
    }
  } else if (kind === "blob") {
    const result = await get(BLOB_PATH, { access: "private", useCache: false });
    if (result && result.statusCode === 200) {
      store = parseStore(await new Response(result.stream).text());
    }
  }
  return withUnconfirmedSeed(store);
}

function withUnconfirmedSeed(store: StoreShape): StoreShape {
  const ids = new Set(store.submissions.map((item) => item.id));
  for (const seed of unconfirmedPending()) {
    if (!ids.has(seed.id)) store.submissions.push(seed);
  }
  return store;
}

async function writeStore(store: StoreShape): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new StorageUnavailable();
  const body = JSON.stringify(store);
  if (kind === "file") {
    await mkdir(path.dirname(LOCAL_PATH), { recursive: true });
    const temp = `${LOCAL_PATH}.tmp`;
    await writeFile(temp, body);
    await rename(temp, LOCAL_PATH);
    return;
  }

  await put(BLOB_PATH, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
}

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

export function rateKey(ip: string): string {
  return createHash("sha256").update(`map-suggest|${ip}`).digest("hex").slice(0, 24);
}

export async function addSubmission(
  submission: Submission,
  key: string
): Promise<"ok" | "limited"> {
  let limited = false;
  await enqueue(async () => {
    const store = await readStore();
    const now = Date.now();
    const recent = (store.hits[key] ?? []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= LIMIT) {
      store.hits[key] = recent;
      limited = true;
      await writeStore(store);
      return;
    }
    store.hits[key] = [...recent, now];
    for (const hitKey of Object.keys(store.hits)) {
      store.hits[hitKey] = store.hits[hitKey].filter((time) => now - time < WINDOW_MS);
      if (store.hits[hitKey].length === 0) delete store.hits[hitKey];
    }
    store.submissions.push(submission);
    await writeStore(store);
  });
  return limited ? "limited" : "ok";
}

export async function listSubmissions(): Promise<Submission[]> {
  const store = await readStore();
  return [...store.submissions].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function setSubmissionStatus(
  id: string,
  status: Exclude<SubmissionStatus, "pending">
): Promise<Submission | null> {
  let updated: Submission | null = null;
  await enqueue(async () => {
    const store = await readStore();
    const found = store.submissions.find((item) => item.id === id);
    if (!found) return;
    found.status = status;
    updated = found;
    await writeStore(store);
  });
  return updated;
}

export function toCompanionPin(submission: Submission): CompanionPin {
  const entityType = submission.entityType ?? entityTypeForCategory(submission.category);
  return {
    id: submission.id,
    origin: "community",
    category: submission.category,
    entityType,
    entitySlug: submission.entitySlug,
    title: submission.title,
    description: submission.description,
    x: submission.x,
    y: submission.y,
    href: hrefForEntity(entityType, submission.entitySlug),
    sourceUrl: submission.sourceUrl,
    sourceLabel: submission.submitterName
      ? `Suggested by ${submission.submitterName}`
      : "Community suggestion",
  };
}
