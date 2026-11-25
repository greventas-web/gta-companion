"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, Sparkles, Star } from "lucide-react";

import ProBadge, { proBrandFill } from "@/components/pro/ProBadge";
import ProWaitlist from "@/components/pro/ProWaitlist";
import { useProStatus } from "@/lib/pro/client";
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
  SYNC_EVENT,
  type ProCurrency,
} from "@/lib/pro/config";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";

const NOW = [
  { icon: Star, title: "Pro star seal", line: "The badge on your profile and on your forum posts." },
  { icon: Sparkles, title: "Supporter recognition", line: "Your name carries the seal wherever members appear." },
  { icon: Check, title: "The site keeps growing", line: "Your support keeps this unofficial fan site independent." },
];

const COMING = [
  "Interactive map with saved progress",
  "100% completion checklists",
  "Early access to new guides",
  "More to come",
];

const FAQ = [
  {
    q: "What is GTA Companion Pro?",
    a: "A way to support this unofficial fan site and wear the Pro star seal. Supporters also get first access to Pro features as they arrive. Guides, pins, and checklists stay open to everyone.",
  },
  {
    q: "Is this official?",
    a: "No. GTA Companion is an unofficial fan site, not affiliated with Rockstar Games or Take-Two.",
  },
  {
    q: "What does the price cover?",
    a: "A planned one-time payment, shown in the currency you select: €4.99, $4.99, or £4.49. It is not a subscription. Pro is coming. Join the list to hear first.",
  },
  {
    q: "How does payment work?",
    a: "Pro is coming. Join the list to hear first. When it opens, payment will be a one-time Stripe Checkout on the signed-in account.",
  },
  {
    q: "What about the 14-day withdrawal right?",
    a: "For digital content bought at a distance in the EU, you have 14 days to withdraw. When checkout opens, Stripe will ask you to agree that this right ends once Pro unlocks. The Refunds page has the wording.",
  },
  {
    q: "When can I pay?",
    a: "Pro is coming. Join the list to hear first.",
  },
  {
    q: "What happens to marks already on this device?",
    a: `They stay on this device. Saved progress across devices is planned for Pro and is not here yet. A device holds ${BASIC_MARK_LIMIT} marks today, and marks already saved above that stay put.`,
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

export default function ProPanel() {
  const params = useSearchParams();
  const checkout = params.get("checkout");
  const sessionId = params.get("session_id");
  const { user, status, loading, refresh } = useProStatus();
  const lastSync = useLastSync();
  const currency = useProCurrency();
  const [confirmed, setConfirmed] = useState(false);

  const pro = Boolean(status?.pro);
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

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[28px] border border-pink-500/25 bg-[#100814] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl" />
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">Unofficial</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <ProBadge size="md" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-300">Supporter</span>
            </div>
            <h1 className="mt-3 text-3xl font-black leading-[0.95] tracking-[-0.03em] sm:text-5xl">
              Back the site. Wear the star.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
              Supporters keep {PRO_NAME.replace(" Pro", "")} independent and growing. You wear the Pro star seal on your
              profile and forum posts, and you get first access to Pro features as they arrive.
            </p>
            <p className="mt-3 text-sm font-semibold text-pink-200">Pro is coming. Join the list to hear first.</p>
          </div>
          <div className="w-full sm:w-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Planned one-time</p>
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
          <p className="text-sm font-semibold text-zinc-300">Get notified when Pro opens.</p>
          {pro ? (
            <p className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${proBrandFill}`}>
              <Check size={16} /> Pro active
            </p>
          ) : null}
          <div className="mt-3">
            <ProWaitlist />
          </div>
          {pro && lastSync ? (
            <p className="mt-3 text-xs text-zinc-500">Synced {new Date(lastSync).toLocaleString()}</p>
          ) : null}
        </div>
        {checkout === "success" && !pro && !loading ? (
          <p className="mt-3 text-sm text-zinc-400">Payment received. Unlocking…</p>
        ) : null}
        {checkout === "cancel" && !pro ? <p className="mt-3 text-sm text-zinc-500">Checkout canceled.</p> : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[28px] border border-pink-500/30 bg-[#100814] p-6 sm:p-8">
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">What you get now</h2>
          <ul className="mt-5 space-y-4">
            {NOW.map(({ icon: Icon, title, line }) => (
              <li key={title} className="flex gap-3">
                <Icon className="mt-0.5 shrink-0 text-pink-300" size={18} aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{line}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[28px] border border-white/10 bg-[#08080A] p-6 sm:p-8">
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">Coming to Pro</h2>
          <ul className="mt-5 space-y-3">
            {COMING.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex shrink-0 rounded-full border border-pink-400/40 bg-pink-500/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-pink-200">
                  Coming
                </span>
                <span className="text-sm leading-6 text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-zinc-500">No dates. These arrive when they are ready.</p>
        </article>
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
