import Image from "next/image";
import Link from "next/link";

import { Manufacturer } from "@/types/manufacturer";

type Props = {
  manufacturer: Manufacturer;
};

export default function ManufacturerCard({
  manufacturer,
}: Props) {
  return (
    <Link
      href={`/manufacturers/${manufacturer.slug}`}
      className="group"
    >
      <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">

        <div className="flex items-center gap-5">

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-black">

            <Image
              src={manufacturer.logo}
              alt={manufacturer.name}
              fill
              className="object-contain p-3"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              {manufacturer.name}
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {manufacturer.country}
            </p>

          </div>

        </div>

        <p className="mt-8 leading-7 text-zinc-400">
          {manufacturer.description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
            {manufacturer.vehicleCount ?? 0} Vehicles
          </span>

          <span className="font-semibold text-pink-400 transition group-hover:translate-x-1">
            View →
          </span>

        </div>

      </div>
    </Link>
  );
}