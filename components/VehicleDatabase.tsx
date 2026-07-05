"use client";

import SearchBar from "@/components/SearchBar";
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
    <div className="mt-12">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

        <SearchBar
          placeholder="Search GTA VI vehicles..."
          value={query}
          onChange={setQuery}
        />

        <div className="mt-8">

          <VehicleFilters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
          />

        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <VehicleSort
            value={sort}
            onChange={setSort}
          />

          <ResetFilters
            onReset={resetFilters}
          />

        </div>

      </div>

      <div className="mt-10 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Vehicle Database
        </h2>

        <p className="text-zinc-400">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredVehicles.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {totalVehicles}
          </span>{" "}
          vehicles
        </p>

      </div>

      {filteredVehicles.length === 0 ? (

        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-16 text-center">

          <h3 className="text-3xl font-bold">
            No vehicles found
          </h3>

          <p className="mt-4 text-zinc-400">
            Try changing your search or selecting another category.
          </p>

        </div>

      ) : (

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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