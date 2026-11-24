"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/search/SearchProvider";

export default function SearchBar() {
  const { open } = useSearch();

  return (
    <button
      type="button"
      aria-label="Open search"
      onClick={open}
      className="@container group flex h-12 w-full min-w-0 max-w-[320px] items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(236,72,153,.15)]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-pink-500/20 group-hover:bg-pink-500/10">
        <Search
          size={18}
          className="text-zinc-400 transition-colors duration-300 group-hover:text-pink-400"
        />
      </span>

      <span className="min-w-0 flex-1 truncate text-left text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
        Search vehicles, characters, locations...
      </span>

      <span className="hidden shrink-0 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-zinc-500 transition-all duration-300 group-hover:border-pink-500/20 group-hover:text-pink-400 @[260px]:inline-flex">
        CTRL K
      </span>
    </button>
  );
}
