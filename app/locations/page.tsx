import LocationCard from "@/components/LocationCard";

import { locations } from "@/data/locations";

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-240px] top-[-160px] h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[220px]" />

      <div className="absolute right-[-240px] bottom-[-180px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[220px]" />

      <section className="relative mx-auto max-w-[1700px] px-8 pb-32 pt-36">

        {/* Hero */}

        <div className="mb-20">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Official GTA VI Locations
          </div>

          <h1 className="mt-8 text-7xl font-black tracking-[-0.05em]">
            Explore Leonida
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Discover every officially revealed region in Grand Theft Auto VI,
            from the neon streets of Vice City to the remote wilderness of
            Mount Kalaga. GTA Companion only includes locations confirmed by
            Rockstar Games.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              {locations.length}
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Confirmed Locations
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              Leonida
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              State Revealed
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black text-pink-400">
              100%
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Official Rockstar Sources
            </p>

          </div>

        </div>

        {/* Locations */}

        <section className="mt-20">

          <div className="mb-10">

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              Official Map
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Confirmed Regions
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {locations.map((location) => (

              <LocationCard
                key={location.id}
                location={location}
              />

            ))}

          </div>

        </section>

        {/* Bottom CTA */}

        <section className="mt-28 rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-transparent to-violet-500/10 p-14 text-center">

          <h2 className="text-5xl font-black">
            Leonida Will Continue To Grow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
            As Rockstar Games officially reveals more towns, landmarks,
            neighborhoods and hidden locations, GTA Companion will expand this
            interactive location database with new information.
          </p>

        </section>

      </section>

    </main>
  );
}