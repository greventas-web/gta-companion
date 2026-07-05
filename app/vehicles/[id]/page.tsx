import Image from "next/image";
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
    (v) => v.slug === id
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

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <div className="relative h-[420px] overflow-hidden rounded-2xl">

              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              GTA VI Vehicle
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {vehicle.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              {vehicle.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Manufacturer</p>

                <Link
                  href={`/manufacturers/${vehicle.manufacturer.toLowerCase()}`}
                  className="mt-2 block text-2xl font-bold text-pink-400 hover:underline"
                >
                  {vehicle.manufacturer}
                </Link>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Category</p>
                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.category}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Top Speed</p>
                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.topSpeed}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Drivetrain</p>
                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.drivetrain}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">Seats</p>
                <h2 className="mt-2 text-2xl font-bold">
                  {vehicle.seats}
                </h2>
              </div>

              <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-6">
                <p className="text-sm text-pink-300">Price</p>
                <h2 className="mt-2 text-2xl font-bold text-pink-400">
                  {vehicle.price}
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}