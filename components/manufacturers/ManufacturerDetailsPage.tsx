import {
  BadgeCheck,
  Building2,
  CarFront,
  Globe,
} from "lucide-react";

import BrandedNameCard from "@/components/BrandedNameCard";
import Breadcrumb from "@/components/Breadcrumb";
import VehicleCard from "@/components/VehicleCard";

import { Manufacturer } from "@/types/manufacturer";
import { Vehicle } from "@/types/vehicle";

type Props = {
  manufacturer: Manufacturer;
  vehicles: Vehicle[];
};

export default function ManufacturerDetailsPage({
  manufacturer,
  vehicles,
}: Props) {
  return (
    <section className="mx-auto max-w-[1700px]">

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

      <div className="mt-12 grid gap-14 xl:grid-cols-[360px_1fr]">

        {/* Logo */}

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">

          <div className="relative aspect-[4/5] min-h-80">

            <BrandedNameCard name={manufacturer.name} />

          </div>

          <div className="space-y-5 p-8">

            <Info
              icon={<Globe size={18} />}
              label="Country"
              value={manufacturer.country}
            />

            <Info
              icon={<Building2 size={18} />}
              label="Headquarters"
              value={
                manufacturer.headquarters ??
                manufacturer.country
              }
            />

            <Info
              icon={<CarFront size={18} />}
              label="Vehicles"
              value={String(vehicles.length)}
            />

          </div>

        </div>

        {/* Content */}

        <div>

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">

            Manufacturer

          </span>

          <h1 className="mt-8 break-words text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-6xl">

            {manufacturer.name}

          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">

            {manufacturer.description}

          </p>

          <div className="mt-10 rounded-[30px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-900 to-black p-8">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">

              GTA Companion Notes

            </p>

            <p className="mt-5 leading-8 text-zinc-400">

              Names and counts come from the vehicles listed on this site.
              A photo on the manufacturer list is an official Rockstar
              picture of one vehicle from that maker. Images: Rockstar Games.

            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Info
              icon={<BadgeCheck size={18} />}
              label="Status"
              value={manufacturer.status}
            />

            <Info
              icon={<Building2 size={18} />}
              label="Industry"
              value={manufacturer.industry ?? "Automotive"}
            />

            <Info
              icon={<Globe size={18} />}
              label="Founded"
              value={manufacturer.founded ?? "Unknown"}
            />

            <Info
              icon={<Building2 size={18} />}
              label="Parent Company"
              value={
                manufacturer.parentCompany ??
                "Unknown"
              }
            />

            <Info
              icon={<CarFront size={18} />}
              label="Vehicle Count"
              value={String(manufacturer.vehicleCount)}
            />

            <Info
              icon={<Globe size={18} />}
              label="Country"
              value={manufacturer.country}
            />

          </div>

        </div>

      </div>

      {/* Vehicles */}

      <section className="mt-28">

        <h2 className="text-5xl font-black">

          Vehicle Lineup

        </h2>

        <p className="mt-3 max-w-3xl text-zinc-400">
          Confirmed vehicles are ones Rockstar has named for Grand Theft Auto VI.
          The rest are earlier Grand Theft Auto names that have not been confirmed.
        </p>

        {vehicles.length === 0 ? (

          <div className="mt-12 rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-20 text-center">

            <h3 className="text-4xl font-black">

              No Vehicles Available

            </h3>

            <p className="mt-5 text-zinc-400">

              Rockstar has not officially revealed any vehicles for this
              manufacturer yet.

            </p>

          </div>

        ) : (

          <div className="mt-12 space-y-14">
            <div>
              <h3 className="text-2xl font-black text-pink-300">Confirmed</h3>
              <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {vehicles
                  .filter((vehicle) => vehicle.status === "Confirmed")
                  .map((vehicle) => (
                    <VehicleCard key={vehicle.slug} vehicle={vehicle} />
                  ))}
              </div>
              {vehicles.every((vehicle) => vehicle.status !== "Confirmed") && (
                <p className="mt-4 text-zinc-500">
                  Rockstar has not named a {manufacturer.name} vehicle for Grand Theft Auto VI.
                </p>
              )}
            </div>
            {vehicles.some((vehicle) => vehicle.status !== "Confirmed") && (
            <div>
              <h3 className="text-2xl font-black text-teal-300">Expected / unconfirmed</h3>
              <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {vehicles
                  .filter((vehicle) => vehicle.status !== "Confirmed")
                  .map((vehicle) => (
                    <VehicleCard key={vehicle.slug} vehicle={vehicle} />
                  ))}
              </div>
            </div>
            )}
          </div>

        )}

      </section>

    </section>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <div className="flex items-center gap-3 text-pink-400">

        {icon}

        <span className="text-xs font-bold uppercase tracking-[0.25em]">

          {label}

        </span>

      </div>

      <h3 className="mt-4 break-words text-2xl font-black text-white">

        {value}

      </h3>

    </div>
  );
}