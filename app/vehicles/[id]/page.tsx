import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import VehicleCard from "@/components/VehicleCard";

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

  const vehicle = vehicles.find(
    (v) => v.slug === id
  );

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
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="mx-auto max-w-[1700px] px-8 py-20">

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

        <div className="mt-12 grid gap-14 xl:grid-cols-[58%_42%]">

          {/* Image */}

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

            <div className="relative aspect-[16/10]">

              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

          </div>

          {/* Information */}

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">

              {vehicle.category}

            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight">

              {vehicle.name}

            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">

              {vehicle.description}

            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                label="Manufacturer"
                value={vehicle.manufacturer}
              />

              <Info
                label="Category"
                value={vehicle.category}
              />

              <Info
                label="Status"
                value={vehicle.status}
              />

              <Info
                label="First Appearance"
                value={vehicle.firstAppearance}
              />

            </div>

          </div>

        </div>

        {/* Related Vehicles */}

        <section className="mt-28">

          <h2 className="text-5xl font-black">
            Related Vehicles
          </h2>

          <p className="mt-3 text-zinc-400">
            More officially confirmed GTA VI vehicles.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedVehicles.map((vehicle) => (

              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />

            ))}

          </div>

        </section>

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
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">

        {label}

      </p>

      <h3 className="mt-3 text-2xl font-black">

        {value}

      </h3>

    </div>
  );
}