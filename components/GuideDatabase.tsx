"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";

export default function GuideDatabase() {
  const [query, setQuery] = useState("");

  const filteredGuides = useMemo(() => {
    const search = query.trim().toLowerCase();

    return guides.filter((guide) => {
      if (guide.listed === false) return false;
      return (
        guide.title.toLowerCase().includes(search) ||
        guide.category.toLowerCase().includes(search) ||
        guide.difficulty.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <section className="mt-20">

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Guides
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
            Browse Guides
          </h2>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Pre-launch notes only. Walkthroughs wait until the game is out.
          </p>

        </div>

        <div className="relative">

          <Search
            size={20}
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-white/5 py-5 pl-14 pr-7 text-lg text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(236,72,153,.08)]"
          />

        </div>

      </div>

      <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            Guide Library
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.03em] text-white">
            {filteredGuides.length} Guides
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Showing {filteredGuides.length} pre-launch notes.
          </p>

        </div>

      </div>

      {filteredGuides.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">

          <h3 className="text-5xl font-black text-white">
            No Guides Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            {query.trim()
              ? "Try another search term."
              : "Fan guides will be written after launch. Nothing is listed yet."}
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {filteredGuides.map((guide) => (

            <GuideCard
              key={guide.id}
              guide={guide}
            />

          ))}

        </div>

      )}

    </section>
  );
}