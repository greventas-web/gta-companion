"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function MegaMenu() {
  return (
    <div className="group relative">

      <button className="flex items-center gap-2 font-semibold text-white transition hover:text-pink-400">
        Explore

        <ChevronDown
          size={16}
          className="transition group-hover:rotate-180"
        />
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-5 w-[340px] -translate-x-1/2 rounded-3xl border border-zinc-800 bg-zinc-950/95 p-6 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">

        <div className="grid gap-3">

          <Link href="/vehicles" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            🚗 Vehicles
          </Link>

          <Link href="/manufacturers" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            🏭 Manufacturers
          </Link>

          <Link href="/characters" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            👤 Characters
          </Link>

          <Link href="/locations" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            📍 Locations
          </Link>

          <Link href="/businesses" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            💼 Businesses
          </Link>

          <Link href="/weapons" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            🔫 Weapons
          </Link>

          <Link href="/animals" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            🐊 Animals
          </Link>

          <Link href="/activities" className="rounded-xl px-4 py-3 transition hover:bg-zinc-900 hover:text-pink-400">
            🏄 Activities
          </Link>

        </div>

      </div>

    </div>
  );
}