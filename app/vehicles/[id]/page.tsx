import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import VehicleCard from "@/components/VehicleCard";
import VehicleGallery from "@/components/VehicleGallery";
import ManufacturerMark from "@/components/manufacturers/ManufacturerMark";

import { manufacturerByName } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { vehicleImages } from "@/lib/media/catalog";

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

  const maker = manufacturerByName(vehicle.manufacturer);
  const photos = vehicleImages(vehicle);

  const relatedVehicles = vehicles
    .filter(
      (v) =>
        v.category === vehicle.category &&
        v.slug !== vehicle.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="mx-auto max-w-[1700px] px-8 pb-20 pt-44">

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

        <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">

          {/* Image */}

          <VehicleGallery
            images={photos}
            alt={vehicle.name}
          />

          {/* Information */}

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">

              {vehicle.category}

            </span>

            <h1 className="mt-8 break-words text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

              {vehicle.name}

            </h1>

            {maker ? (
              <Link
                href={`/manufacturers/${maker.slug}`}
                className="mt-8 inline-flex"
              >
                <ManufacturerMark
                  name={maker.name}
                  slug={maker.slug}
                />
              </Link>
            ) : null}

            <p className="mt-8 text-xl leading-9 text-zinc-400">

              {vehicle.description}

            </p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              {vehicle.status}
            </p>
            {vehicle.source ? (
              <a
                href={vehicle.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-pink-300 hover:text-pink-200"
              >
                Source: Rockstar Games
              </a>
            ) : null}

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

        {relatedVehicles.length > 0 ? (
        <section className="mt-28">

          <h2 className="text-5xl font-black">
            Related Vehicles
          </h2>

          <p className="mt-3 text-zinc-400">
            More vehicles in this category.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedVehicles.map((vehicle) => (

              <VehicleCard
                key={vehicle.slug}
                vehicle={vehicle}
              />

            ))}

          </div>

        </section>
        ) : null}

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