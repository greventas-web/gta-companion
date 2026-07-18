"use client";

import { useMemo, useState } from "react";

import WeaponCard from "@/components/WeaponCard";
import { weapons } from "@/data/weapons";

export default function WeaponDatabase() {
  const [query, setQuery] = useState("");

  const filteredWeapons = useMemo(() => {
    const search = query.toLowerCase();

    return weapons.filter(
      (weapon) =>
        weapon.name.toLowerCase().includes(search) ||
        weapon.category.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <section className="mt-20">

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)]">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Database
          </div>

          <h2 className="mt-4 text-4xl font-black">
            Browse Weapons
          </h2>

        </div>

        <input
          type="text"
          placeholder="Search weapons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-7 py-5 text-lg text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-pink-500"
        />

      </div>

      <div className="mt-16">

        <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
          Database
        </div>

        <h2 className="mt-4 text-5xl font-black">
          {filteredWeapons.length} Weapons
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          Official GTA VI weapons confirmed by Rockstar Games.
        </p>

      </div>

      {filteredWeapons.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">

          <h3 className="text-5xl font-black">
            No Weapons Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            Try another search term.
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredWeapons.map((weapon) => (

            <WeaponCard
              key={weapon.id}
              weapon={weapon}
            />

          ))}

        </div>

      )}

    </section>
  );
}