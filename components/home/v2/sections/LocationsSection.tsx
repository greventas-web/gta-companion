import LocationCard from "../cards/LocationCard";
import { locations } from "../data/locations";

export default function LocationsSection() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-[1700px] px-8">

        <div className="mb-16">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Explore Leonida
          </div>

          <h2 className="mt-8 text-6xl font-black tracking-[-0.05em] text-white">
            Discover Every Official Region
          </h2>

          <p className="mt-6 max-w-[760px] text-xl leading-9 text-zinc-400">
            Browse every location officially revealed by Rockstar Games,
            from the neon streets of Vice City to the wild beauty of
            Mount Kalaga.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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