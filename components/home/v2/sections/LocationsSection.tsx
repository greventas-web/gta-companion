import Link from "next/link";
import LocationCard from "../cards/LocationCard";
import { locations } from "../data/locations";

export default function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#040404] py-40">

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[170px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-[1700px] px-8">

        <div className="mb-16 flex items-end justify-between">

          <div>

            <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
              Explore Leonida
            </div>

            <h2 className="mt-8 text-6xl font-black tracking-[-0.05em] text-white lg:text-7xl">
              Discover Every Official Region
            </h2>

            <p className="mt-6 max-w-[760px] text-xl leading-9 text-zinc-400">
              Browse every location officially revealed by Rockstar Games,
              from the neon streets of Vice City to the wild beauty of
              Mount Kalaga.
            </p>

          </div>

          <Link
            href="/locations"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10 lg:block"
          >
            View All Locations
          </Link>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {locations.map((location) => (

            <LocationCard
              key={location.name}
              name={location.name}
              description={location.description}
              image={location.image}
              href={location.href}
            />

          ))}

        </div>

      </div>

    </section>
  );
}