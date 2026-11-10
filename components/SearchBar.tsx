"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button
      aria-label="Open search"
      className="group flex h-12 w-[240px] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(236,72,153,.15)] min-[1600px]:w-[320px] min-[1600px]:px-4"
    >
      <div className="flex items-center gap-4">

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-pink-500/20 group-hover:bg-pink-500/10">
          <Search
            size={18}
            className="text-zinc-400 transition-colors duration-300 group-hover:text-pink-400"
          />
        </div>

        <span className="truncate text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
          <span className="min-[1600px]:hidden">Search</span>
          <span className="hidden min-[1600px]:inline">
            Search vehicles, characters, locations...
          </span>
        </span>

      </div>

      <div className="hidden shrink-0 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-zinc-500 transition-all duration-300 group-hover:border-pink-500/20 group-hover:text-pink-400 min-[1600px]:block">
        CTRL K
      </div>

    </button>
  );
}