"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button
      aria-label="Open search"
      className="group flex h-14 w-[360px] items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(236,72,153,.15)]"
    >
      <div className="flex items-center gap-4">

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-pink-500/20 group-hover:bg-pink-500/10">
          <Search
            size={18}
            className="text-zinc-400 transition-colors duration-300 group-hover:text-pink-400"
          />
        </div>

        <span className="text-[15px] font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
          Search vehicles, characters, locations...
        </span>

      </div>

      <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-zinc-500 transition-all duration-300 group-hover:border-pink-500/20 group-hover:text-pink-400">
        CTRL K
      </div>

    </button>
  );
}