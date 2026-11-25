import type { FlairId } from "@/lib/community/types";

export const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none placeholder:text-zinc-500 focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/30";

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,72,153,0.28)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50";

export const quietButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-pink-400/40 disabled:cursor-not-allowed disabled:opacity-50";

const FLAIR_STYLES: Record<FlairId, string> = {
  general: "border-white/15 bg-white/5 text-zinc-200",
  tips: "border-pink-400/40 bg-pink-500/15 text-pink-100",
  screenshots: "border-violet-400/40 bg-violet-500/15 text-violet-100",
  help: "border-teal-300/40 bg-teal-400/10 text-teal-100",
  feedback: "border-fuchsia-400/40 bg-fuchsia-500/15 text-fuchsia-100",
};

export function flairClass(id: string): string {
  return FLAIR_STYLES[id as FlairId] ?? FLAIR_STYLES.general;
}

export function ageLabel(iso: string, now = Date.now()): string {
  const seconds = Math.max(0, (now - Date.parse(iso)) / 1000);
  if (!Number.isFinite(seconds)) return "";
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}

export function hostOf(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}
