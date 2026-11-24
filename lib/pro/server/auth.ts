import { firebasePublicConfig } from "@/lib/firebase-public";

/**
 * Checks a Firebase ID token sent as "Authorization: Bearer <token>".
 *
 * Uses Firebase Auth's accounts:lookup endpoint with the site's public web
 * API key, so no service-account key is needed. The endpoint rejects
 * expired, revoked, or other-project tokens.
 */
export type ProUser = { uid: string; email: string | null; displayName: string | null };

const cache = new Map<string, { user: ProUser; until: number }>();
const CACHE_MS = 5 * 60 * 1000;

function apiKey(): string {
  return (process.env.NEXT_PUBLIC_FIREBASE_API_KEY || firebasePublicConfig.apiKey || "").trim();
}

export async function userFromRequest(request: Request): Promise<ProUser | null> {
  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(.+)$/i.exec(header);
  const token = match?.[1]?.trim();
  if (!token || token.length > 4096) return null;

  const hit = cache.get(token);
  if (hit && hit.until > Date.now()) return hit.user;

  const key = apiKey();
  if (!key) return null;

  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(key)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
        cache: "no-store",
      }
    );
    if (!response.ok) return null;
    const body = (await response.json()) as {
      users?: { localId?: string; email?: string; displayName?: string; disabled?: boolean }[];
    };
    const account = body.users?.[0];
    if (!account?.localId || account.disabled) return null;
    const user: ProUser = {
      uid: account.localId,
      email: account.email ?? null,
      displayName: account.displayName?.trim() || null,
    };
    if (cache.size > 500) cache.clear();
    cache.set(token, { user, until: Date.now() + CACHE_MS });
    return user;
  } catch {
    return null;
  }
}
