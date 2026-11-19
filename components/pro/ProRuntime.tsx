"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { authHeader, fetchProStatus, setProHint } from "@/lib/pro/client";
import { BASIC_MARK_LIMIT, LAST_SYNC_KEY, PRO_PRICE_LABEL, SYNC_EVENT } from "@/lib/pro/config";
import { mergeMarks, type Marks } from "@/lib/pro/marks";
import { LIMIT_EVENT, readLocalMarks, TRACK_EVENT, writeLocalMarks } from "@/lib/pro/tracker";

const PUSH_DELAY_MS = 3000;

function sameMarks(a: Marks, b: Marks): boolean {
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((key) => b[key] && b[key][0] === a[key][0] && b[key][1] === a[key][1]);
}

/**
 * Site-wide Pro plumbing: confirms Pro with the server, keeps the ads flag
 * on <html>, syncs tracked marks for Pro accounts, and shows the mark-limit
 * card. Renders nothing else.
 */
export default function ProRuntime() {
  const { user, loading } = useAuth();
  const [pro, setPro] = useState(false);
  const [limitHit, setLimitHit] = useState(false);
  const applying = useRef(false);

  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    if (!user) {
      setProHint(false);
      Promise.resolve().then(() => {
        if (!cancelled) setPro(false);
      });
      return () => {
        cancelled = true;
      };
    }
    fetchProStatus(user)
      .then((status) => {
        if (!cancelled) setPro(status.pro);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [loading, user]);

  useEffect(() => {
    if (!user || !pro) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let stopped = false;

    const apply = (marks: Marks) => {
      if (sameMarks(marks, readLocalMarks())) return;
      applying.current = true;
      try {
        writeLocalMarks(marks);
      } finally {
        applying.current = false;
      }
    };

    const stamp = () => {
      try {
        localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
      } catch {
        /* storage blocked */
      }
      window.dispatchEvent(new Event(SYNC_EVENT));
    };

    const push = async () => {
      const response = await fetch("/api/pro/sync", {
        method: "PUT",
        headers: { ...(await authHeader(user)), "Content-Type": "application/json" },
        body: JSON.stringify({ marks: readLocalMarks() }),
      });
      if (!response.ok || stopped) return;
      const body = (await response.json()) as { marks?: Marks };
      if (body.marks) apply(body.marks);
      stamp();
    };

    const pull = async () => {
      const response = await fetch("/api/pro/sync", { headers: await authHeader(user), cache: "no-store" });
      if (!response.ok || stopped) return;
      const body = (await response.json()) as { marks?: Marks };
      const local = readLocalMarks();
      const merged = mergeMarks(body.marks ?? {}, local);
      apply(merged);
      if (!sameMarks(merged, body.marks ?? {})) await push();
      else stamp();
    };

    const onChange = () => {
      if (applying.current) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        push().catch(() => undefined);
      }, PUSH_DELAY_MS);
    };

    const onVisible = () => {
      if (document.visibilityState === "visible") pull().catch(() => undefined);
    };

    pull().catch(() => undefined);
    window.addEventListener(TRACK_EVENT, onChange);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
      window.removeEventListener(TRACK_EVENT, onChange);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [pro, user]);

  useEffect(() => {
    const onLimit = () => setLimitHit(true);
    window.addEventListener(LIMIT_EVENT, onLimit);
    return () => window.removeEventListener(LIMIT_EVENT, onLimit);
  }, []);

  if (!limitHit) return null;

  return (
    <div
      role="dialog"
      aria-label="Mark limit reached"
      className="fixed inset-x-3 bottom-3 z-[1200] mx-auto max-w-sm rounded-[22px] border border-emerald-400/30 bg-[#08080A]/95 p-4 text-white shadow-2xl backdrop-blur sm:bottom-6"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Unofficial</p>
      <p className="mt-1 text-base font-black">{BASIC_MARK_LIMIT} marks on this device</p>
      <p className="mt-1 text-sm text-zinc-400">Unlimited marks, synced everywhere.</p>
      <div className="mt-3 flex items-center gap-2">
        <Link
          href="/pro"
          onClick={() => setLimitHit(false)}
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-black text-black transition hover:bg-emerald-400"
        >
          Pro · {PRO_PRICE_LABEL}
        </Link>
        <button
          type="button"
          onClick={() => setLimitHit(false)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
