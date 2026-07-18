"use client";

import { useMemo, useState } from "react";

import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/brands";

export default function BrandDatabase() {
  const [query, setQuery] = useState("");

  const filteredBrands = useMemo(() => {
    const search = query.toLowerCase();

    return brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(search) ||
        brand.category.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <section className="mt-20">

      {/* Search */}

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)]">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Database
          </div>

          <h2 className="mt-4 text-4xl font-black text-white">
            Browse Brands
          </h2>

        </div>

        <input
          type="text"
          placeholder="Search brands..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-7 py-5 text-lg text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-pink-500"
        />

      </div>

      {/* Results */}

      <div className="mt-16">

        <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
          Database
        </div>

        <h2 className="mt-4 text-5xl font-black">
          {filteredBrands.length} Brands
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          Official GTA VI brands confirmed by Rockstar Games.
        </p>

      </div>

      {filteredBrands.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">

          <h3 className="text-5xl font-black">
            No Brands Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            Try another search term.
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredBrands.map((brand) => (

            <BrandCard
              key={brand.id}
              brand={brand}
            />

          ))}

        </div>

      )}

    </section>
  );
}