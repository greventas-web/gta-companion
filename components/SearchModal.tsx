"use client";

import { Search, X, Command } from "lucide-react";

import useGlobalSearch from "@/hooks/useGlobalSearch";
import SearchResult from "./SearchResult";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const {
    query,
    setQuery,
    groupedResults,
    hasResults,
  } = useGlobalSearch();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 p-6 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-24 w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-[#09090B] shadow-[0_30px_120px_rgba(0,0,0,.65)]"
      >
        {/* Header */}

        <div className="flex items-center gap-4 border-b border-white/10 px-7 py-5">

          <Search
            size={22}
            className="text-pink-400"
          />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search vehicles, characters, locations..."
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-400 md:flex">
            <Command size={14} />
            ESC
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            <X size={20} />
          </button>

        </div>

        {/* Content */}

        <div className="max-h-[70vh] overflow-y-auto">

          {!query && (
            <div className="space-y-8 p-10">

              <div>

                <div className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-pink-400">
                  Popular Searches
                </div>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Lucia",
                    "Jason",
                    "Vice City",
                    "Banshee",
                    "Police",
                    "Weapons",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setQuery(item)}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-pink-500/30 hover:bg-white/[0.08] hover:text-white"
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">

                <div className="text-lg font-bold text-white">
                  Search everything
                </div>

                <div className="mt-2 text-sm leading-7 text-zinc-400">
                  Instantly search vehicles, characters, locations,
                  businesses, news, media and every future addition to GTA
                  Companion.
                </div>

              </div>

            </div>
          )}

          {query && !hasResults && (
            <div className="flex flex-col items-center justify-center px-10 py-24 text-center">

              <Search
                size={42}
                className="mb-6 text-zinc-700"
              />

              <h3 className="text-xl font-bold text-white">
                No results found
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
                Try searching for another vehicle, character, location,
                business or news article.
              </p>

            </div>
          )}

          {Array.from(groupedResults.entries()).map(
            ([category, items]) => (
              <section
                key={category}
                className="border-t border-white/5"
              >
                <div className="sticky top-0 border-b border-white/5 bg-[#09090B]/95 px-7 py-3 backdrop-blur-xl">

                  <div className="text-xs font-black uppercase tracking-[0.3em] text-pink-400">
                    {category}
                  </div>

                </div>

                {items.map((item) => (
                  <SearchResult
                    key={item.id}
                    item={item}
                  />
                ))}

              </section>
            )
          )}

        </div>

      </div>
    </div>
  );
}