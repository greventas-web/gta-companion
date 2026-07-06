"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button className="group hidden h-12 w-72 items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 transition-all duration-300 hover:border-pink-500 lg:flex">

      <div className="flex items-center gap-3">

        <Search
          size={18}
          className="text-zinc-500 transition group-hover:text-pink-400"
        />

        <span className="text-sm text-zinc-500">
          Search everything...
        </span>

      </div>

      <div className="rounded-lg border border-zinc-700 px-2 py-1 text-xs text-zinc-400">
        Ctrl K
      </div>

    </button>
  );
}