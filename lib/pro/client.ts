"use client";

import type { User } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { PRO_CHANGE_EVENT, PRO_HINT_KEY } from "@/lib/pro/config";

export type ProStatus = {
  signedIn: boolean;
  pro: boolean;
  /** Stripe and storage are both set up on the server. */
  ready: boolean;
  since?: string | null;
  error?: string;
};

const STATUS_EVENT = "gta-companion-pro-status";
let cached: { uid: string; status: ProStatus } | null = null;
let inflight: { uid: string; promise: Promise<ProStatus> } | null = null;

export function setProHint(pro: boolean) {
  try {
    if (pro) localStorage.setItem(PRO_HINT_KEY, "1");
    else localStorage.removeItem(PRO_HINT_KEY);
  } catch {
    /* storage blocked */
  }
  document.documentElement.dataset.pro = pro ? "1" : "0";
  window.dispatchEvent(new Event(PRO_CHANGE_EVENT));
}

export async function authHeader(user: User): Promise<Record<string, string>> {
  return { Authorization: `Bearer ${await user.getIdToken()}` };
}

/** One status call per user, shared by every component on the page. */
export function fetchProStatus(user: User, options: { sessionId?: string; force?: boolean } = {}): Promise<ProStatus> {
  if (!options.force && !options.sessionId) {
    if (cached?.uid === user.uid) return Promise.resolve(cached.status);
    if (inflight?.uid === user.uid) return inflight.promise;
  }
  const promise = (async () => {
    const query = options.sessionId ? `?session_id=${encodeURIComponent(options.sessionId)}` : "";
    const response = await fetch(`/api/pro/status${query}`, {
      headers: await authHeader(user),
      cache: "no-store",
    });
    const status = (await response.json().catch(() => null)) as ProStatus | null;
    const result: ProStatus = status ?? { signedIn: true, pro: false, ready: false, error: "Could not check Pro." };
    if (response.ok) {
      cached = { uid: user.uid, status: result };
      setProHint(result.pro);
      window.dispatchEvent(new Event(STATUS_EVENT));
    }
    return result;
  })();
  inflight = { uid: user.uid, promise };
  promise.finally(() => {
    if (inflight?.promise === promise) inflight = null;
  });
  return promise;
}

export function useProStatus() {
  const { user, loading: authLoading } = useAuth();
  const [status, setStatus] = useState<ProStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(
    async (options: { sessionId?: string; force?: boolean } = {}) => {
      if (!user) return null;
      setLoading(true);
      try {
        const next = await fetchProStatus(user, options);
        setStatus(next);
        return next;
      } catch {
        return null;
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;
    if (!user) {
      Promise.resolve().then(() => {
        if (cancelled) return;
        setStatus({ signedIn: false, pro: false, ready: false });
        setLoading(false);
      });
      return () => {
        cancelled = true;
      };
    }
    fetchProStatus(user)
      .then((next) => {
        if (!cancelled) setStatus(next);
      })
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    const onStatus = () => {
      if (cached?.uid === user.uid) setStatus(cached.status);
    };
    window.addEventListener(STATUS_EVENT, onStatus);
    return () => {
      cancelled = true;
      window.removeEventListener(STATUS_EVENT, onStatus);
    };
  }, [authLoading, user]);

  return { user, authLoading, status, loading: authLoading || loading, refresh };
}
