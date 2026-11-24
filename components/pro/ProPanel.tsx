"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Check, Cloud, EyeOff, Infinity as InfinityIcon, LocateFixed, Lock, Percent } from "lucide-react";

import ProBadge, { proBrandFill } from "@/components/pro/ProBadge";
import ProWaitlist from "@/components/pro/ProWaitlist";
import { authHeader, useProStatus } from "@/lib/pro/client";
import {
  BASIC_MARK_LIMIT,
  currencyFromLocales,
  isProCurrency,
  LAST_SYNC_KEY,
  PRO_CURRENCY,
  PRO_CURRENCY_CODES,
  PRO_CURRENCY_STORAGE_KEY,
  PRO_NAME,
  PRO_PRICES,
  PROGRESS_SECTIONS,
  SYNC_EVENT,
  type ProCurrency,
  type ProgressSection,
} from "@/lib/pro/config";
import { useTracked } from "@/lib/pro/tracker";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";

export type SectionTotals = Record<ProgressSection["id"], string[]>;

const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud sync",
    line: "The same marks on your phone, PC, and tablet.",
  },
  {
    icon: Percent,
    title: "Progress %",
    line: "Missions, collectibles, trophies, and shooting ranges.",
  },
  {
    icon: LocateFixed,
    title: "What's left near me",
    line: "A map filter for marks still open around the map center.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited marks",
    line: `Past the ${BASIC_MARK_LIMIT} marks kept on a device without Pro.`,
  },
];

const PAYMENT_STEPS = [
  { title: "Sign in", line: "Use your GTA Companion account. Pro is tied to that account." },
  {
    title: "Secure Stripe Checkout",
    line: "Card details go to Stripe. We never see or store the card number.",
  },
  {
    title: "One-time payment",
    line: "€4.99, $4.99, or £4.49. Not a subscription. You pick the currency here.",
  },
  {
    title: "Instant unlock",
    line: "Pro turns on for that account as soon as Stripe confirms the payment.",
  },
  {
    title: "Receipt by email",
    line: "Stripe emails the receipt to the address on your account.",
  },
];

const FAQ = [
  {
    q: "What is GTA Companion Pro?",
    a: "An optional one-time upgrade on this unofficial fan site. It adds no ads, cloud sync, progress percentages, a what's-left-near-me map filter, and unlimited marks. Every guide, pin, and checklist stays open to everyone.",
  },
  {
    q: "Is this official?",
    a: "No. GTA Companion is an unofficial fan site, not affiliated with Rockstar Games or Take-Two. Pro only covers tools we built.",
  },
  {
    q: "What does the price cover?",
    a: "One payment, shown in the currency you select: €4.99, $4.99, or £4.49. The same account keeps Pro on every device you sign in with.",
  },
  {
    q: "How does payment work?",
    a: "Sign in, confirm that you want immediate delivery, then pay once on Stripe Checkout. Stripe emails the receipt, and Pro unlocks when the payment is confirmed. Checkout is not open yet.",
  },
  {
    q: "What about the 14-day withdrawal right?",
    a: "For digital content bought at a distance in the EU, you have 14 days to withdraw. Pro is delivered immediately, so checkout asks you to request that delivery and acknowledge that the withdrawal right ends once delivery starts. The Refunds page has the draft wording.",
  },
  {
    q: "When can I pay?",
    a: "Checkout opening soon. Until payments are switched on, nothing on this page can charge you.",
  },
  {
    q: "What happens to marks already on this device?",
    a: `They stay on this device. With Pro they sync to your account. Without Pro a device holds ${BASIC_MARK_LIMIT} marks, and marks already saved above that stay put.`,
  },
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

let chosenCurrency: ProCurrency | null = null;
const currencyListeners = new Set<() => void>();

function readChosenCurrency(): ProCurrency {
  if (chosenCurrency) return chosenCurrency;
  let next: ProCurrency = PRO_CURRENCY;
  try {
    const stored = localStorage.getItem(PRO_CURRENCY_STORAGE_KEY);
    if (isProCurrency(stored)) next = stored;
    else {
      const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
      next = currencyFromLocales(locales);
    }
  } catch {
    next = PRO_CURRENCY;
  }
  chosenCurrency = next;
  return next;
}

function subscribeCurrency(listener: () => void) {
  currencyListeners.add(listener);
  return () => {
    currencyListeners.delete(listener);
  };
}

function chooseCurrency(next: ProCurrency) {
  chosenCurrency = next;
  try {
    localStorage.setItem(PRO_CURRENCY_STORAGE_KEY, next);
  } catch {
    /* storage blocked */
  }
  currencyListeners.forEach((listener) => listener());
}

function useProCurrency(): ProCurrency {
  return useSyncExternalStore(subscribeCurrency, readChosenCurrency, () => PRO_CURRENCY);
}

export default function ProPanel({ sections }: { sections: SectionTotals }) {
  const params = useSearchParams();
  const checkout = params.get("checkout");
  const sessionId = params.get("session_id");
  const { user, status, loading, refresh } = useProStatus();
  const { set } = useTracked();
  const lastSync = useLastSync();
  const currency = useProCurrency();
  const [waiver, setWaiver] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const pro = Boolean(status?.pro);
  const ready = Boolean(status?.ready);
  const price = PRO_PRICES[currency];

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
    if (!user || !waiver) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/pro/checkout", {
        method: "POST",
        headers: { ...(await authHeader(user)), "Content-Type": "application/json" },
        body: JSON.stringify({ currency, withdrawalWaiver: true }),
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
      <section className="relative overflow-hidden rounded-[28px] border border-pink-500/25 bg-[#100814] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl" />
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">Unofficial</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <ProBadge size="md" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-300">One-time</span>
            </div>
            <h1 className="mt-3 text-3xl font-black leading-none tracking-[-0.03em] sm:text-5xl">{PRO_NAME}</h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
              The completion tracker for this fan site. No ads, cloud sync, progress, and the map filter, on one account.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Price</p>
            <p aria-live="polite" className="mt-1 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300 bg-clip-text text-5xl font-black tracking-tight text-transparent">
              {price.label}
            </p>
            <div
              role="radiogroup"
              aria-label="Currency"
              className="mt-3 inline-flex rounded-full border border-white/10 bg-black/50 p-1"
            >
              {PRO_CURRENCY_CODES.map((code) => {
                const selected = code === currency;
                return (
                  <button
                    key={code}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => chooseCurrency(code)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-black tracking-wide transition ${
                      selected ? proBrandFill : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {PRO_PRICES[code].name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6">
          {loading ? (
            <span className="inline-flex h-11 w-52 animate-pulse rounded-full bg-white/5" />
          ) : pro ? (
            <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black ${proBrandFill}`}>
              <Check size={16} /> Pro active
            </span>
          ) : ready && user ? (
            <button
              type="button"
              onClick={startCheckout}
              disabled={busy || !waiver}
              className={`rounded-full px-5 py-2.5 text-sm font-black transition disabled:opacity-50 ${proBrandFill}`}
            >
              {busy ? "Opening checkout…" : `Continue to checkout · ${price.label}`}
            </button>
          ) : (
            <ProWaitlist />
          )}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {!loading && !pro && !user ? (
              <Link
                href="/login?next=/pro"
                className="text-sm font-semibold text-zinc-300 underline-offset-4 hover:text-white hover:underline"
              >
                Sign in
              </Link>
            ) : null}
            {pro && lastSync ? (
              <span className="text-xs text-zinc-500">Synced {new Date(lastSync).toLocaleString()}</span>
            ) : null}
          </div>
        </div>
        {!loading && !pro && !ready ? (
          <p className="mt-3 max-w-xl text-sm text-zinc-500">
            Payments are not open. Nothing on this page can charge you.
          </p>
        ) : null}

        {checkout === "success" && !pro && !loading ? (
          <p className="mt-3 text-sm text-zinc-400">Payment received. Unlocking…</p>
        ) : null}
        {checkout === "cancel" && !pro ? <p className="mt-3 text-sm text-zinc-500">Checkout canceled.</p> : null}
        {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
      </section>

      <section className="relative overflow-hidden rounded-[28px] border border-pink-500/30 bg-[#120816] p-6 sm:p-8">
        <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
        <EyeOff className="text-pink-300" size={22} aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">No ads</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
          Pro keeps advertisements off on every page of this site, on each device where that account is signed in.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {FEATURES.map(({ icon: Icon, title, line }) => (
          <article key={title} className="rounded-[22px] border border-white/5 bg-[#08080A] p-5">
            <Icon size={20} className="text-pink-300" aria-hidden="true" />
            <h2 className="mt-3 text-base font-black">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-zinc-400">{line}</p>
          </article>
        ))}
      </section>

      <section id="payment" className="rounded-[28px] border border-white/5 bg-[#08080A] p-6 sm:p-8">
        <h2 className="text-xl font-black tracking-tight sm:text-2xl">How payment works</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Seller details are available on request at{" "}
          <a href="mailto:contact@gta-companion.com" className="underline-offset-4 hover:text-pink-300 hover:underline">
            contact@gta-companion.com
          </a>
          .
        </p>
        <ol className="mt-6 space-y-4">
          {PAYMENT_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black ${proBrandFill}`}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-black sm:text-base">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{step.line}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-[22px] border border-white/10 bg-black/30 p-4 sm:p-5">
          <h3 className="text-sm font-black">Immediate delivery</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Pro is digital and is delivered as soon as payment is confirmed. At checkout you will be asked to request
            that delivery and acknowledge that the 14-day withdrawal right ends once delivery starts.{" "}
            <Link href="/refunds" className="font-semibold text-pink-300 underline-offset-4 hover:underline">
              Refunds
            </Link>
            {" · "}
            <Link href="/terms" className="font-semibold text-pink-300 underline-offset-4 hover:underline">
              Terms
            </Link>
          </p>
          {ready && user && !pro ? (
            <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-zinc-200">
              <input
                type="checkbox"
                checked={waiver}
                onChange={(event) => setWaiver(event.target.checked)}
                className="mt-1 h-4 w-4 accent-pink-500"
              />
              <span>
                I request immediate delivery of {PRO_NAME} and I acknowledge that I lose the 14-day right of withdrawal
                once delivery starts.
              </span>
            </label>
          ) : (
            <p className="mt-3 text-sm text-zinc-500">Checkout opening soon. The confirmation box appears when checkout opens.</p>
          )}
        </div>
      </section>

      <section className="rounded-[28px] border border-white/5 bg-[#08080A] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">Your progress</h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/35 bg-pink-500/10 px-3 py-1 text-sm font-semibold text-pink-100">
            {pro ? (
              `${overall}% complete`
            ) : (
              <>
                <Lock size={14} /> % with Pro
              </>
            )}
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {progress.map((row) => (
            <Link
              key={row.id}
              href={row.href}
              className="group rounded-[22px] border border-white/5 bg-black/30 p-4 transition hover:border-pink-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black">{row.label}</h3>
                <span className="text-sm font-black text-pink-200">
                  {pro ? `${row.pct}%` : <Lock size={14} className="text-zinc-600" />}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                {row.done}/{row.total}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full transition-all ${pro ? "bg-gradient-to-r from-pink-500 to-violet-500" : "bg-white/20"}`}
                  style={{ width: `${pro ? row.pct : 0}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="rounded-[28px] border border-white/5 bg-[#08080A] p-6 sm:p-8">
        <h2 className="text-xl font-black tracking-tight sm:text-2xl">FAQ</h2>
        <div className="mt-4 divide-y divide-white/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-black text-white sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span aria-hidden="true" className="text-pink-300 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="text-center text-xs leading-5 text-zinc-600">
        {UNOFFICIAL_DISCLAIMER} Pro covers our own tools only. Every guide, pin, and checklist stays open to everyone.
      </p>
    </div>
  );
}
