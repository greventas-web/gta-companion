"use client";

import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
};

export default function MapSearch({
  value,
  onChange,
  resultCount,
}: Props) {
  return (
    <div className="absolute left-1/2 top-6 z-30 w-[min(420px,calc(100%-3rem))] -translate-x-1/2">
      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search the map..."
          className="w-full rounded-2xl border border-white/10 bg-black/75 py-4 pl-12 pr-12 text-sm font-medium text-white shadow-[0_15px_50px_rgba(0,0,0,.45)] outline-none backdrop-blur-2xl transition placeholder:text-zinc-600 focus:border-pink-500/40 focus:bg-black/85"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear map search"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-white/10 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {value && typeof resultCount === "number" && (
        <div className="mt-2 inline-flex rounded-xl border border-white/10 bg-black/75 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 backdrop-blur-xl">
          {resultCount}{" "}
          {resultCount === 1 ? "result" : "results"}
        </div>
      )}
    </div>
  );
}