import Link from "next/link";
import { notFound } from "next/navigation";

import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ManufacturerPage({ params }: Props) {
  const { slug } = await params;

  const manufacturer = manufacturers.find(
    (m) => m.slug === slug
  );

  if (!manufacturer) {
    notFound();
  }

  const manufacturerVehicles = vehicles.filter(
    (v) => v.manufacturer === manufacturer.name
  );

  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/vehicles"
          className="text-pink-400 hover:underline"
        >
          ← Back to Vehicles
        </Link>

        <h1 className="mt-8 text-6xl font-extrabold">
          {manufacturer.name}
        </h1>

        <p className="mt-4 max-w-3xl text-xl text-zinc-400">
          {manufacturer.description}
        </p>

        <div className="mt-4 inline-block rounded-full bg-zinc-800 px-4 py-2">
          {manufacturer.country}
        </div>

        <h2 className="mt-16 text-3xl font-bold">
          Vehicles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {manufacturerVehicles.map((vehicle) => {
            const vehicleSlug = vehicle.name
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <Link
                key={vehicle.id}
                href={`/vehicles/${vehicleSlug}`}
              >
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-pink-500">

                  <h3 className="text-2xl font-bold">
                    {vehicle.name}
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    {vehicle.category}
                  </p>

                </div>
              </Link>
            );
          })}

        </div>

      </section>
    </main>
  );
}