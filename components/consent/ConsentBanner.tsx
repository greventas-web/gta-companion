"use client";

import Link from "next/link";
import { useEffect, useId, useState, useSyncExternalStore } from "react";

import {
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  OPEN_CONSENT_EVENT,
  applyConsent,
  isGoogleCmpEnabled,
  readConsentCookie,
  readConsentGeo,
  type ConsentChoice,
} from "@/lib/consent";

const buttonBase =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14081f]";

type View = "hidden" | "banner" | "manage";

function shouldAutoShowBanner(): boolean {
  if (readConsentCookie()) return false;
  if (isGoogleCmpEnabled()) return false;
  if (typeof window.googlefc?.showRevocationMessage === "function") return false;
  return readConsentGeo() !== "OTHER";
}

function subscribeNoop() {
  return () => {};
}

export default function ConsentBanner() {
  const titleId = useId();
  const descId = useId();
  const autoShow = useSyncExternalStore(
    subscribeNoop,
    shouldAutoShowBanner,
    () => false,
  );
  const [mode, setMode] = useState<"auto" | View>("auto");
  const [draft, setDraft] = useState<ConsentChoice>(CONSENT_REJECTED);
  const view: View =
    mode === "auto" ? (autoShow ? "banner" : "hidden") : mode;

  useEffect(() => {
    const onOpen = () => {
      if (typeof window.googlefc?.showRevocationMessage === "function") {
        window.googlefc.showRevocationMessage();
        return;
      }
      setDraft(readConsentCookie() ?? CONSENT_REJECTED);
      setMode("manage");
    };

    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (view === "hidden") {
      delete document.documentElement.dataset.gtaConsentBanner;
    } else {
      document.documentElement.dataset.gtaConsentBanner = "1";
    }
    return () => {
      delete document.documentElement.dataset.gtaConsentBanner;
    };
  }, [view]);

  const choose = (choice: ConsentChoice) => {
    applyConsent(choice);
    setMode("hidden");
  };

  const openManage = () => {
    setDraft(readConsentCookie() ?? CONSENT_REJECTED);
    setMode("manage");
  };

  if (view === "hidden") return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[140] flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 print:hidden">
      <section
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="pointer-events-auto w-full max-w-3xl rounded-[28px] border border-violet-300/30 bg-[#14081f] p-4 text-white shadow-[0_24px_80px_rgba(109,40,217,0.45)] sm:p-5"
      >
        <h2 id={titleId} className="text-base font-semibold text-white">
          Cookie settings
        </h2>
        <p id={descId} className="mt-2 text-sm leading-6 text-zinc-300">
          GTA Companion uses cookies for Google Analytics and Google AdSense
          ads. In the EEA, the UK, and Switzerland these stay off until you
          choose. You can change this anytime. Read the{" "}
          <Link
            href="/privacy"
            className="font-semibold text-violet-200 underline decoration-violet-200/60 underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {view === "manage" ? (
          <div className="mt-4 space-y-3">
            <label className="flex min-h-11 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <span>
                <span className="font-semibold text-white">Essential</span>
                <span className="mt-0.5 block text-zinc-400">
                  Sign-in, security, and remembering this choice. Always on.
                </span>
              </span>
              <input
                type="checkbox"
                checked
                disabled
                className="h-5 w-5 shrink-0 accent-[#6d28d9]"
              />
            </label>
            <label className="flex min-h-11 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <span>
                <span className="font-semibold text-white">Analytics</span>
                <span className="mt-0.5 block text-zinc-400">
                  Google Analytics (GA4) helps us understand how the site is
                  used.
                </span>
              </span>
              <input
                type="checkbox"
                checked={draft.analytics}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    analytics: event.target.checked,
                  }))
                }
                className="h-5 w-5 shrink-0 accent-[#6d28d9]"
              />
            </label>
            <label className="flex min-h-11 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <span>
                <span className="font-semibold text-white">Advertising</span>
                <span className="mt-0.5 block text-zinc-400">
                  Google AdSense uses cookies to show and measure ads.
                </span>
              </span>
              <input
                type="checkbox"
                checked={draft.ad}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    ad: event.target.checked,
                  }))
                }
                className="h-5 w-5 shrink-0 accent-[#6d28d9]"
              />
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className={`${buttonBase} bg-[#6d28d9] text-white hover:bg-[#7c3aed]`}
                onClick={() => choose(draft)}
              >
                Save choices
              </button>
              <button
                type="button"
                className={`${buttonBase} bg-white text-[#1a0a2e] hover:bg-violet-100`}
                onClick={() => setMode("banner")}
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className={`${buttonBase} bg-[#6d28d9] text-white hover:bg-[#7c3aed]`}
              onClick={() => choose(CONSENT_ACCEPTED)}
            >
              Accept
            </button>
            <button
              type="button"
              className={`${buttonBase} bg-white text-[#1a0a2e] hover:bg-violet-100`}
              onClick={() => choose(CONSENT_REJECTED)}
            >
              Reject
            </button>
            <button
              type="button"
              className={`${buttonBase} border border-violet-200/50 bg-transparent text-white hover:bg-white/10`}
              onClick={openManage}
            >
              Manage
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
