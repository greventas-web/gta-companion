"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button
      aria-label="Open search"
      className="group flex h-14 w-[340px] items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.08]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-pink-500/10">
          <Search
            size={18}
            className="text-zinc-400 transition-colors group-hover:text-pink-400"
          />
        </div>

        <span className="text-[15px] font-medium text-zinc-400 transition-colors group-hover:text-zinc-200">
          Search guides, vehicles, weapons...
        </span>
      </div>

      <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-500 transition-colors group-hover:border-white/20 group-hover:text-zinc-300">
        CTRL&nbsp;K
      </div>
    </button>
  );
}