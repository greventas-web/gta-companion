"use client";

import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import VehicleSort from "@/components/VehicleSort";
import ResetFilters from "@/components/ResetFilters";

import useVehicleSearch from "@/hooks/useVehicleSearch";

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

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)]">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search Database
          </div>

          <h2 className="mt-4 text-4xl font-black text-white">
            Find Your Vehicle
          </h2>

        </div>

        <input
          type="text"
          placeholder="Search vehicles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-7 py-5 text-lg text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-pink-500"
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

          <ResetFilters
            onReset={resetFilters}
          />

        </div>

      </div>

      {/* Results */}

      <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            Database Results
          </div>

          <h2 className="mt-4 text-5xl font-black">
            {filteredVehicles.length} Vehicles
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Showing {filteredVehicles.length} of {totalVehicles} officially
            revealed GTA VI vehicles.
          </p>

        </div>

      </div>

      {filteredVehicles.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-24 text-center">

          <h3 className="text-5xl font-black">
            No Vehicles Found
          </h3>

          <p className="mt-6 text-xl text-zinc-400">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredVehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />

          ))}

        </div>

      )}

    </section>
  );
}