import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { vehicles } from "@/data/vehicles";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VehicleDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const vehicle = vehicles.find((v) => v.slug === id);

  if (!vehicle) {
    notFound();
  }

  const relatedVehicles = vehicles
    .filter(
      (v) =>
        v.category === vehicle.category &&
        v.slug !== vehicle.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Vehicles",
              href: "/vehicles",
            },
            {
              label: vehicle.name,
            },
          ]}
        />

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          <div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

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
              {vehicle.category}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {vehicle.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {vehicle.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <Info
                label="Manufacturer"
                value={vehicle.manufacturer}
              />

              <Info
                label="Seats"
                value={vehicle.seats.toString()}
              />

              <Info
                label="Drivetrain"
                value={vehicle.drivetrain}
              />

              <Info
                label="Top Speed"
                value={vehicle.topSpeed}
              />

              <Info
                label="Price"
                value={vehicle.price}
              />

            </div>

          </div>

        </div>

        <div className="mt-24">

          <h2 className="text-4xl font-bold">
            Related Vehicles
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedVehicles.map((related) => (

              <Link
                key={related.id}
                href={`/vehicles/${related.slug}`}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-pink-500"
              >
                <h3 className="text-2xl font-bold">
                  {related.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {related.manufacturer}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">

      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}