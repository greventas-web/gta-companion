"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button
      type="button"
      aria-label="Search GTA Companion"
      className="group hidden h-14 w-[420px] items-center justify-between overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] px-5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/40 hover:bg-white/[0.08] hover:shadow-[0_18px_60px_rgba(236,72,153,.18)] lg:flex"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-pink-500/40 group-hover:bg-pink-500/20">
          <Search
            size={18}
            className="text-pink-400"
          />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-white transition-colors duration-300">
            Search GTA Companion
          </span>

          <span className="text-xs text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            Vehicles, characters, locations...
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-all duration-300 group-hover:border-pink-500/30 group-hover:bg-pink-500/10 group-hover:text-pink-300">
        Ctrl&nbsp;+&nbsp;K
      </div>
    </button>
  );
}