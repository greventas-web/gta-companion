"use client";

import { MapPinned, Search } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
  onClearSearch?: () => void;
};

export default function MapEmptyState({
  title = "No Locations Found",
  description = "Try a different search term or clear the active filters.",
  onClearSearch,
}: Props) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#070708]/80 p-8 backdrop-blur-sm">
      <div className="max-w-md rounded-[32px] border border-white/10 bg-[#101014]/95 p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,.6)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-pink-500/20 bg-pink-500/10">
          <MapPinned
            size={28}
            className="text-pink-400"
          />
        </div>

        <h3 className="mt-6 text-2xl font-black text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {description}
        </p>

        {onClearSearch && (
          <button
            type="button"
            onClick={onClearSearch}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(236,72,153,.35)]"
          >
            <Search size={16} />
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
}