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
    <div className="py-20">

      {/* Controls */}

      <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">

        <input
          type="text"
          placeholder="Search vehicles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg text-white placeholder:text-zinc-500 outline-none transition focus:border-pink-500"
        />

        <div className="mt-8">

          <VehicleFilters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
          />

        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <VehicleSort
            value={sort}
            onChange={setSort}
          />

          <ResetFilters
            onReset={resetFilters}
          />

        </div>

      </div>

      {/* Header */}

      <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h2 className="text-4xl font-black tracking-tight">

            All Vehicles

          </h2>

          <p className="mt-2 text-zinc-400">

            Browse the complete GTA VI vehicle database.

          </p>

        </div>

        <div className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-3 text-sm font-semibold text-pink-400">

          {filteredVehicles.length} of {totalVehicles} Vehicles

        </div>

      </div>

      {/* Empty State */}

      {filteredVehicles.length === 0 ? (

        <div className="mt-14 rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-20 text-center">

          <h3 className="text-4xl font-black">

            No Vehicles Found

          </h3>

          <p className="mt-5 text-lg text-zinc-400">

            Try changing your search or filters.

          </p>

        </div>

      ) : (

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredVehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />

          ))}

        </div>

      )}

    </div>
  );
}