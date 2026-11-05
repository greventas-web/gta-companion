"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ManufacturerCard from "@/components/ManufacturerCard";
import { manufacturers } from "@/data/manufacturers";

export default function ManufacturerDatabase() {
  const [query, setQuery] = useState("");

  const filteredManufacturers = useMemo(() => {
    const search = query.trim().toLowerCase();

    return manufacturers.filter((manufacturer) => {
      return (
        manufacturer.name.toLowerCase().includes(search) ||
        manufacturer.country.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <section className="mt-20">

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Database
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
            Browse Manufacturers
          </h2>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Search official GTA VI manufacturers by name or country.
          </p>

        </div>

        <div className="relative">

          <Search
            size={20}
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search manufacturers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-white/5 py-5 pl-14 pr-7 text-lg text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(236,72,153,.08)]"
          />

        </div>

      </div>

      <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            Database Results
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white">
            {filteredManufacturers.length} Manufacturers
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Showing {filteredManufacturers.length} of {manufacturers.length} officially confirmed manufacturers.
          </p>

        </div>

      </div>

      {filteredManufacturers.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">

          <h3 className="text-5xl font-black text-white">
            No Manufacturers Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            Try another search term.
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredManufacturers.map((manufacturer) => (

            <ManufacturerCard
              key={manufacturer.id}
              manufacturer={manufacturer}
            />

          ))}

        </div>

      )}

    </section>
  );
}