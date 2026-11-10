"use client";

import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import VehicleSort from "@/components/VehicleSort";
import ResetFilters from "@/components/ResetFilters";

import useVehicleSearch from "@/hooks/useVehicleSearch";
import { Vehicle } from "@/types/vehicle";

export default function VehicleDatabase() {
  const {
    query,
    setQuery,
    category,
    setCategory,
    categories,
    sort,
    setSort,
    filteredVehicles,
    totalVehicles,
    resetFilters,
  } = useVehicleSearch();

  return (
    <section className="mt-20">
      {/* Search Panel */}

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">
        <div className="mb-8">
          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Database
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
            Find Your Vehicle
          </h2>
        </div>

        <input
          type="text"
          placeholder="Search vehicles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-7 py-5 text-lg text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(236,72,153,.08)]"
        />

        <div className="mt-10">
          <VehicleFilters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <VehicleSort
            value={sort}
            onChange={setSort}
          />

          <ResetFilters onReset={resetFilters} />
        </div>
      </div>

      {/* Results */}

      <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            Database Results
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.03em] text-white">
            {filteredVehicles.length} Vehicles
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Showing {filteredVehicles.length} of {totalVehicles} vehicles.
            Use the search box to narrow the list.
          </p>
        </div>
      </div>

      {filteredVehicles.length === 0 ? (
        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">
          <h3 className="text-5xl font-black text-white">
            No Vehicles Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="mt-16 space-y-16">
          <VehicleGroup
            title="Named by Rockstar"
            note="These are the vehicles Rockstar has named for Grand Theft Auto VI. Speeds and prices have not been published."
            vehicles={filteredVehicles.filter((vehicle) => vehicle.status === "Confirmed")}
          />
          <VehicleGroup
            title="Expected / unconfirmed"
            note="These names come from earlier Grand Theft Auto games. Rockstar has not confirmed them for Grand Theft Auto VI."
            vehicles={filteredVehicles.filter((vehicle) => vehicle.status !== "Confirmed")}
          />
        </div>
      )}
    </section>
  );
}

function VehicleGroup({
  title,
  note,
  vehicles,
}: {
  title: string;
  note: string;
  vehicles: Vehicle[];
}) {
  if (vehicles.length === 0) return null;

  return (
    <div>
      <h3 className="text-3xl font-black tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-3 max-w-3xl text-zinc-400">{note}</p>
      <div className="mt-8 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}