import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import VehicleCard from "@/components/VehicleCard";

import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ManufacturerPage({
  params,
}: Props) {
  const { slug } = await params;

  const manufacturer = manufacturers.find(
    (m) => m.slug === slug
  );

  if (!manufacturer) {
    notFound();
  }

  const manufacturerVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.manufacturer === manufacturer.name
  );

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
              label: "Manufacturers",
              href: "/manufacturers",
            },
            {
              label: manufacturer.name,
            },
          ]}
        />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">

          <div className="relative h-36 w-36 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

            <Image
              src={manufacturer.logo}
              alt={manufacturer.name}
              fill
              className="object-contain p-6"
            />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-pink-400">
              {manufacturer.country}
            </p>

            <h1 className="mt-4 text-6xl font-extrabold">
              {manufacturer.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {manufacturer.description}
            </p>

          </div>

        </div>

        <div className="mt-20">

          <h2 className="text-4xl font-bold">
            Vehicles
          </h2>

          <p className="mt-3 text-zinc-500">
            {manufacturerVehicles.length} confirmed vehicles
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {manufacturerVehicles.map((vehicle) => (

              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}