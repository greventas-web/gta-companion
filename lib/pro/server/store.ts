import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { get, put } from "@vercel/blob";
import { mergeMarks, type Marks } from "@/lib/pro/marks";

/**
 * Pro entitlements and synced progress, one private JSON file per user.
 *
 * Storage is Vercel Blob (already used by the map). Set PRO_READ_WRITE_TOKEN
 * from a PRIVATE Blob store; MAP_READ_WRITE_TOKEN (the private map
 * submissions store) is used when it is missing. Never use the public
 * BLOB_READ_WRITE_TOKEN store here.
 *
 * Local dev without a token writes to .data/pro/. On Vercel, writes fail
 * closed until a token is set.
 */

export type Entitlement = {
  uid: string;
  email: string | null;
  pro: boolean;
  source: "stripe" | "manual";
  sessionId?: string;
  paymentIntent?: string;
  amountTotal?: number;
  currency?: string;
  livemode?: boolean;
  grantedAt: string;
  revokedAt?: string;
};

type ProgressFile = { marks: Marks; updatedAt: string };

export class ProStorageUnavailable extends Error {
  constructor() {
    super("Pro storage is not configured.");
    this.name = "ProStorageUnavailable";
  }
}

const LOCAL_DIR = path.join(process.cwd(), ".data", "pro");

function token(): string | null {
  const value = process.env.PRO_READ_WRITE_TOKEN?.trim() || process.env.MAP_READ_WRITE_TOKEN?.trim();
  return value ? value : null;
}

function backend(): "blob" | "file" | "none" {
  if (token()) return "blob";
  if (process.env.VERCEL) return "none";
  return "file";
}

export function proStorageConfigured(): boolean {
  return backend() !== "none";
}

function safeUid(uid: string): string {
  if (!/^[A-Za-z0-9_-]{1,128}$/.test(uid)) throw new Error("Bad user id.");
  return uid;
}

async function readJson<T>(key: string): Promise<T | null> {
  const kind = backend();
  if (kind === "none") throw new ProStorageUnavailable();
  if (kind === "file") {
    try {
      return JSON.parse(await readFile(path.join(LOCAL_DIR, key), "utf8")) as T;
    } catch {
      return null;
    }
  }
  const result = await get(`pro/${key}`, { access: "private", useCache: false, token: token()! });
  if (!result || result.statusCode !== 200) return null;
  try {
    return JSON.parse(await new Response(result.stream).text()) as T;
  } catch {
    return null;
  }
}

async function writeJson(key: string, value: unknown): Promise<void> {
  const kind = backend();
  if (kind === "none") throw new ProStorageUnavailable();
  const body = JSON.stringify(value);
  if (kind === "file") {
    const file = path.join(LOCAL_DIR, key);
    await mkdir(path.dirname(file), { recursive: true });
    const temp = `${file}.${process.pid}.tmp`;
    await writeFile(temp, body, "utf8");
    await rename(temp, file);
    return;
  }
  await put(`pro/${key}`, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    token: token()!,
  });
}

/** Comma-separated Firebase uids in PRO_GRANT_UIDS get Pro without a purchase (owner, testers, Ko-fi buyers). */
function manualGrant(uid: string): boolean {
  const list = (process.env.PRO_GRANT_UIDS ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return list.includes(uid);
}

export async function getEntitlement(uid: string): Promise<Entitlement | null> {
  if (manualGrant(uid)) {
    return { uid, email: null, pro: true, source: "manual", grantedAt: new Date(0).toISOString() };
  }
  return readJson<Entitlement>(`entitlements/${safeUid(uid)}.json`);
}

export async function isPro(uid: string): Promise<boolean> {
  const entitlement = await getEntitlement(uid);
  return Boolean(entitlement?.pro);
}

export async function grantPro(input: Omit<Entitlement, "pro" | "grantedAt" | "revokedAt">): Promise<Entitlement> {
  const current = await readJson<Entitlement>(`entitlements/${safeUid(input.uid)}.json`);
  if (current?.pro && current.sessionId === input.sessionId) return current;
  const next: Entitlement = { ...input, pro: true, grantedAt: new Date().toISOString() };
  await writeJson(`entitlements/${safeUid(input.uid)}.json`, next);
  return next;
}

export async function revokePro(uid: string, paymentIntent?: string): Promise<void> {
  const current = await readJson<Entitlement>(`entitlements/${safeUid(uid)}.json`);
  if (!current || !current.pro) return;
  if (paymentIntent && current.paymentIntent && current.paymentIntent !== paymentIntent) return;
  await writeJson(`entitlements/${safeUid(uid)}.json`, {
    ...current,
    pro: false,
    revokedAt: new Date().toISOString(),
  });
}

export async function readProgress(uid: string): Promise<Marks> {
  const file = await readJson<ProgressFile>(`progress/${safeUid(uid)}.json`);
  return file?.marks && typeof file.marks === "object" ? file.marks : {};
}

/** Merge a device's marks into the cloud copy and return the result. */
export async function mergeProgress(uid: string, incoming: Marks): Promise<Marks> {
  const merged = mergeMarks(await readProgress(uid), incoming);
  await writeJson(`progress/${safeUid(uid)}.json`, {
    marks: merged,
    updatedAt: new Date().toISOString(),
  } satisfies ProgressFile);
  return merged;
}
