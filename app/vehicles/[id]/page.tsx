import Link from "next/link";
import { notFound } from "next/navigation";

import { vehicles } from "@/data/vehicles";

type Props = {
  params: {
    id: string;
  };
};

export default function VehicleDetailsPage({ params }: Props) {
  const vehicle = vehicles.find(
    (v) =>
      v.name.toLowerCase().replace(/\s+/g, "-") === params.id
  );

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/vehicles"
          className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-pink-500 hover:text-pink-400"
        >
          ← Back to Vehicle Database
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">

          {/* Vehicle Image */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">

              Vehicle Image

            </div>

          </div>

          {/* Vehicle Info */}

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              GTA 6 Vehicle
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {vehicle.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              This page will contain complete specifications,
              screenshots, performance statistics, spawn locations,
              customization options and every known detail about the
              {` ${vehicle.name}`} in GTA 6.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  Manufacturer
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.manufacturer}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  Category
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.category}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  Top Speed
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.topSpeed}
                </h2>
              </div>

              <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-6">
                <p className="text-sm text-pink-300">
                  Status
                </p>

                <h2 className="mt-2 text-2xl font-bold text-pink-400">
                  {vehicle.status}
                </h2>
              </div>

            </div>

          </div>

        </div>

        {/* Future Sections */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h2 className="text-3xl font-bold">
              Performance
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Handling, acceleration, braking, drivetrain,
              engine specifications and advanced performance
              metrics will appear here.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h2 className="text-3xl font-bold">
              Spawn Locations
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Interactive map locations and guaranteed spawn
              points will be available after launch.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}