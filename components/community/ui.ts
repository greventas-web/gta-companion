export const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none placeholder:text-zinc-500 focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/30";

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,72,153,0.28)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50";

export const quietButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-pink-400/40 disabled:cursor-not-allowed disabled:opacity-50";

export function formatWhen(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

const TYPE_STYLES: Record<string, string> = {
  tip: "border-pink-400/30 bg-pink-500/10 text-pink-200",
  screenshot: "border-violet-400/30 bg-violet-500/10 text-violet-200",
  feedback: "border-teal-300/30 bg-teal-400/10 text-teal-100",
};

export function typePillClass(type: string): string {
  return TYPE_STYLES[type] ?? "border-white/15 bg-white/5 text-zinc-200";
}
