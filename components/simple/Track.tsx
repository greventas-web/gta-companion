"use client";

import { useProHint, useTracked } from "@/lib/pro/tracker";

/**
 * Tap-to-check tracking for collectibles and missions, saved on this device.
 * Storage, the mark limit and Pro sync live in lib/pro/tracker.ts.
 */

export function TrackButton({ id, label }: { id: string; label: string }) {
  const { set, toggle } = useTracked();
  const done = set.has(id);
  return (
    <button
      type="button"
      aria-pressed={done}
      aria-label={done ? `Mark ${label} as not done` : `Mark ${label} as done`}
      onClick={() => toggle(id)}
      className={`absolute left-3 top-3 z-[3] flex h-9 w-9 items-center justify-center rounded-full border text-base font-black backdrop-blur transition active:scale-90 ${
        done
          ? "border-emerald-300/60 bg-emerald-500 text-black"
          : "border-white/30 bg-black/50 text-white/70 hover:border-white/60"
      }`}
    >
      {done ? "✓" : ""}
    </button>
  );
}

export function TrackProgress({ ids, label = "done" }: { ids: readonly string[]; label?: string }) {
  const { set } = useTracked();
  const pro = useProHint();
  const count = ids.filter((id) => set.has(id)).length;
  const pct = ids.length ? Math.round((count / ids.length) * 100) : 0;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-black text-emerald-200">
      {count}/{ids.length} {label}
      {pro ? <span className="text-emerald-100/80">· {pct}%</span> : null}
      <span className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-white/10 sm:inline-block">
        <span className="block h-full bg-emerald-400 transition-all" style={{ width: `${pct}%` }} />
      </span>
    </span>
  );
}
