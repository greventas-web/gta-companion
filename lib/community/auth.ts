import { firebasePublicConfig } from "@/lib/firebase-public";
import { displayName } from "@/lib/community/validate";

/**
 * Signed-in player, from a Firebase ID token on Authorization: Bearer.
 * Same accounts:lookup check the rest of the site uses. No service account.
 */
export type CommunityUser = {
  uid: string;
  email: string | null;
  name: string;
};

const cache = new Map<string, { user: CommunityUser; until: number }>();
const CACHE_MS = 5 * 60 * 1000;

function apiKey(): string {
  return (process.env.NEXT_PUBLIC_FIREBASE_API_KEY || firebasePublicConfig.apiKey || "").trim();
}

export async function userFromRequest(request: Request): Promise<CommunityUser | null> {
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
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(account.localId)) return null;
    const user: CommunityUser = {
      uid: account.localId,
      email: account.email ?? null,
      name: displayName(account.displayName),
    };
    if (cache.size > 500) cache.clear();
    cache.set(token, { user, until: Date.now() + CACHE_MS });
    return user;
  } catch {
    return null;
  }
}
