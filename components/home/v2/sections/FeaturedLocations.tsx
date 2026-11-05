import Link from "next/link";

import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

export default function FeaturedLocations() {
  return (
    <section className="mx-auto max-w-[1700px] px-8 py-24">

      <div className="mb-12 flex items-end justify-between">

        <div>

          <div className="text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            FEATURED LOCATIONS
          </div>

          <h2 className="mt-4 text-5xl font-black">
            Explore Leonida
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Discover every officially revealed location from Grand Theft Auto VI,
            recreated using Rockstar Games information.
          </p>

        </div>

        <Link
          href="/locations"
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 font-semibold text-pink-300 transition hover:bg-pink-500 hover:text-white"
        >
          View All Locations
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {locations.slice(0, 3).map((location) => (

          <LocationCard
            key={location.id}
            location={location}
          />

        ))}

      </div>

    </section>
  );
}