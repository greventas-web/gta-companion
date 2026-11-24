"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { useInstallPrompt } from "@/hooks/useInstallPrompt";

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#6d28d9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7c3aed]";

export default function InstallPrompt() {
  const pathname = usePathname();
  const { ready, installed, ios, dismissed, canPrompt, dismiss, promptInstall } =
    useInstallPrompt();

  if (!ready || installed || dismissed) return null;
  if (pathname === "/app" || pathname.startsWith("/map") || pathname.startsWith("/community/admin")) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[130] flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] print:hidden">
      <section
        aria-label="Install the app"
        data-testid="install-prompt"
        className="pointer-events-auto w-full max-w-xl rounded-[28px] border border-violet-300/30 bg-[#1a0a2e]/95 p-4 text-white shadow-[0_24px_80px_rgba(109,40,217,0.45)] backdrop-blur-xl"
      >
        <div className="flex items-start gap-3">
          <Image
            src="/logo/logo-night.jpg"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-white/20"
          />
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-white">
              {ios ? "Add to Home Screen" : "Install the app"}
            </h2>
            <p className="mt-1 text-sm leading-6 text-zinc-300">
              {ios
                ? "In Safari, tap Share, then Add to Home Screen, then Add."
                : "Add GTA Companion to your home screen or desktop. Unofficial fan app for GTA 6, not affiliated with Rockstar Games."}
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss install prompt"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 pl-[3.75rem]">
          {ios ? (
            <Link href="/app" className={buttonClass}>
              How to add it
            </Link>
          ) : canPrompt ? (
            <button type="button" className={buttonClass} onClick={() => void promptInstall()}>
              Install
            </button>
          ) : (
            <Link href="/app" className={buttonClass}>
              Install the app
            </Link>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:text-white"
          >
            Not now
          </button>
        </div>
      </section>
    </div>
  );
}
