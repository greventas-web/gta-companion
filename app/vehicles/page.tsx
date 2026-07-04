"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/SearchBar";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  const [search, setSearch] = useState("");

  const filteredVehicles = useMemo(() => {
    const query = search.toLowerCase();

    return vehicles.filter((vehicle) =>
      vehicle.name.toLowerCase().includes(query) ||
      vehicle.manufacturer.toLowerCase().includes(query) ||
      vehicle.category.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          GTA 6 Vehicle Database
        </span>

        <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
          Every Vehicle.
          <span className="text-pink-400"> One Place.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          Browse every confirmed GTA 6 vehicle with statistics,
          manufacturers, locations and performance ratings.
        </p>

        <SearchBar
          placeholder="Search vehicles..."
          value={search}
          onChange={setSearch}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {filteredVehicles.length === 0 ? (

            <div className="col-span-full rounded-3xl border border-zinc-800 bg-zinc-900/40 p-16 text-center">

              <h2 className="text-3xl font-bold">
                No vehicles found
              </h2>

              <p className="mt-4 text-zinc-400">
                Try searching for another vehicle.
              </p>

            </div>

          ) : (

            filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))

          )}

        </div>

      </section>
    </main>
  );
}