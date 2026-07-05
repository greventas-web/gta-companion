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
    <>
      <SearchBar
        placeholder="Search vehicles..."
        value={query}
        onChange={setQuery}
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">

        <VehicleFilters
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
        />

        <VehicleSort
          value={sort}
          onChange={setSort}
        />

        <ResetFilters
          onReset={resetFilters}
        />

      </div>

      <p className="mt-6 text-zinc-400">
        Showing <span className="font-semibold text-white">{filteredVehicles.length}</span> of{" "}
        <span className="font-semibold text-white">{totalVehicles}</span> vehicles
      </p>

      {filteredVehicles.length === 0 ? (
        <div className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-12 text-center">
          <h2 className="text-3xl font-bold">No vehicles found</h2>

          <p className="mt-4 text-zinc-400">
            Try another search or category.
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
    </>
  );
}