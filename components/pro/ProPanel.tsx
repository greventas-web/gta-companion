"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Check, Cloud, EyeOff, Infinity as InfinityIcon, LocateFixed, Lock, Percent } from "lucide-react";

import { authHeader, useProStatus } from "@/lib/pro/client";
import { BASIC_MARK_LIMIT, LAST_SYNC_KEY, PRO_NAME, PRO_PRICE_LABEL, PROGRESS_SECTIONS, SYNC_EVENT, type ProgressSection } from "@/lib/pro/config";
import { useTracked } from "@/lib/pro/tracker";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";

export type SectionTotals = Record<ProgressSection["id"], string[]>;

const FEATURES = [
  { icon: Cloud, title: "Cloud sync", line: "Phone, PC, tablet." },
  { icon: Percent, title: "Progress %", line: "Every section." },
  { icon: LocateFixed, title: "What's left near me", line: "Map filter." },
  { icon: InfinityIcon, title: "Unlimited marks", line: `Past ${BASIC_MARK_LIMIT}.` },
  { icon: EyeOff, title: "No ads", line: "Anywhere on the site." },
];

function useLastSync(): string | null {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    const read = () => {
      try {
        setValue(localStorage.getItem(LAST_SYNC_KEY));
      } catch {
        setValue(null);
      }
    };
    read();
    window.addEventListener(SYNC_EVENT, read);
    return () => window.removeEventListener(SYNC_EVENT, read);
  }, []);
  return value;
}

export default function ProPanel({ sections }: { sections: SectionTotals }) {
  const params = useSearchParams();
  const checkout = params.get("checkout");
  const sessionId = params.get("session_id");
  const { user, status, loading, refresh } = useProStatus();
  const { set } = useTracked();
  const lastSync = useLastSync();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const pro = Boolean(status?.pro);

  useEffect(() => {
    if (checkout !== "success" || !sessionId || !user || confirmed) return;
    let cancelled = false;
    refresh({ sessionId }).then(() => {
      if (!cancelled) setConfirmed(true);
    });
    return () => {
      cancelled = true;
    };
  }, [checkout, confirmed, refresh, sessionId, user]);

  const progress = useMemo(
    () =>
      PROGRESS_SECTIONS.map((section) => {
        const ids = sections[section.id];
        const done = ids.filter((id) => set.has(id)).length;
        return { ...section, done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
      }),
    [sections, set]
  );

  const overall = useMemo(() => {
    const total = progress.reduce((sum, row) => sum + row.total, 0);
    const done = progress.reduce((sum, row) => sum + row.done, 0);
    return total ? Math.round((done / total) * 100) : 0;
  }, [progress]);

  async function startCheckout() {
    if (!user) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/pro/checkout", {
        method: "POST",
        headers: await authHeader(user),
      });
      const body = (await response.json().catch(() => null)) as { url?: string; pro?: boolean; error?: string } | null;
      if (body?.pro) {
        await refresh({ force: true });
        return;
      }
      if (!response.ok || !body?.url) {
        setError(body?.error || "Could not start checkout.");
        return;
      }
      window.location.assign(body.url);
    } catch {
      setError("Could not start checkout.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-[#08080A] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">Unofficial</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black leading-none tracking-[-0.03em] sm:text-5xl">{PRO_NAME}</h1>
            <p className="mt-3 text-sm text-zinc-400">100% completion tracker</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-black tracking-tight text-emerald-300">{PRO_PRICE_LABEL}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">One-time</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {loading ? (
            <span className="h-11 w-48 animate-pulse rounded-full bg-white/5" />
          ) : pro ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-5 py-2.5 text-sm font-black text-emerald-200">
              <Check size={16} /> Pro active
            </span>
          ) : !user ? (
            <>
              <Link
                href="/login?next=/pro"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-black text-black transition hover:bg-emerald-400"
              >
                Sign in to unlock
              </Link>
              <Link
                href="/register?next=/pro"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-white/40"
              >
                Create account
              </Link>
            </>
          ) : status?.ready ? (
            <button
              type="button"
              onClick={startCheckout}
              disabled={busy}
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-black text-black transition hover:bg-emerald-400 disabled:opacity-60"
            >
              {busy ? "Opening checkout…" : `Unlock Pro · ${PRO_PRICE_LABEL}`}
            </button>
          ) : (
            <span className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-400">
              Checkout opens soon
            </span>
          )}
          {pro && lastSync ? (
            <span className="text-xs text-zinc-500">Synced {new Date(lastSync).toLocaleString()}</span>
          ) : null}
        </div>

        {checkout === "success" && !pro && !loading ? (
          <p className="mt-3 text-sm text-zinc-400">Payment received. Unlocking…</p>
        ) : null}
        {checkout === "cancel" && !pro ? <p className="mt-3 text-sm text-zinc-500">Checkout canceled.</p> : null}
        {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {FEATURES.map(({ icon: Icon, title, line }) => (
          <article key={title} className="rounded-[22px] border border-white/5 bg-[#08080A] p-4">
            <Icon size={20} className="text-emerald-300" />
            <h2 className="mt-3 text-sm font-black">{title}</h2>
            <p className="mt-1 text-xs text-zinc-500">{line}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-white/5 bg-[#08080A] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">Your progress</h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-black text-emerald-200">
            {pro ? `${overall}% complete` : <><Lock size={14} /> % with Pro</>}
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {progress.map((row) => (
            <Link
              key={row.id}
              href={row.href}
              className="group rounded-[22px] border border-white/5 bg-black/30 p-4 transition hover:border-emerald-400/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black">{row.label}</h3>
                <span className="text-sm font-black text-emerald-200">
                  {pro ? `${row.pct}%` : <Lock size={14} className="text-zinc-600" />}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                {row.done}/{row.total}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full transition-all ${pro ? "bg-emerald-400" : "bg-white/20"}`}
                  style={{ width: `${pro ? row.pct : 0}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-center text-xs text-zinc-600">
        {UNOFFICIAL_DISCLAIMER} Pro covers our own tools only. Every guide, pin and checklist stays open to all.
      </p>
    </div>
  );
}
