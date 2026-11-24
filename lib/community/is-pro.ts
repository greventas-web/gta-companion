import { isPro as readEntitlement } from "@/lib/pro/server/store";

/**
 * Community's only look at Pro. A later Pro rework should keep this function
 * working: given a Firebase uid, return whether that player has Pro.
 */
const cache = new Map<string, { pro: boolean; until: number }>();
const TTL_MS = 60_000;

export async function isPro(uid: string): Promise<boolean> {
  if (!uid) return false;
  const hit = cache.get(uid);
  const now = Date.now();
  if (hit && hit.until > now) return hit.pro;

  let pro = false;
  try {
    pro = await readEntitlement(uid);
  } catch {
    pro = false;
  }

  if (cache.size > 1000) cache.clear();
  cache.set(uid, { pro, until: now + TTL_MS });
  return pro;
}

export async function proFlags(uids: string[]): Promise<Map<string, boolean>> {
  const unique = [...new Set(uids.filter(Boolean))];
  const entries = await Promise.all(unique.map(async (uid) => [uid, await isPro(uid)] as const));
  return new Map(entries);
}
