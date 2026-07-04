import Link from "next/link";
import { notFound } from "next/navigation";

import { vehicles } from "@/data/vehicles";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VehicleDetailsPage({ params }: Props) {
  const { id } = await params;

  const vehicle = vehicles.find(
    (v) => v.name.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!vehicle) {
    notFound();
  }

  const manufacturerSlug = vehicle.manufacturer.toLowerCase();

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

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
            <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
              Vehicle Image
            </div>
          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              GTA 6 Vehicle
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {vehicle.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Complete specifications, performance, locations,
              customization options and screenshots will appear here.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Manufacturer</p>

                <Link
                  href={`/manufacturers/${manufacturerSlug}`}
                  className="mt-2 block text-2xl font-bold text-pink-400 hover:underline"
                >
                  {vehicle.manufacturer}
                </Link>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Category</p>
                <h2 className="mt-2 text-2xl font-bold">{vehicle.category}</h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Top Speed</p>
                <h2 className="mt-2 text-2xl font-bold">{vehicle.topSpeed}</h2>
              </div>

              <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-6">
                <p className="text-sm text-pink-300">Status</p>
                <h2 className="mt-2 text-2xl font-bold text-pink-400">
                  {vehicle.status}
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}