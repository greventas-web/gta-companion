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
      className="group block"
    >
      <article className="h-full rounded-[36px] border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

        <div className="flex items-center gap-6">

          <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-black">

            <Image
              src={manufacturer.logo}
              alt={manufacturer.name}
              fill
              className="object-contain p-4 transition duration-700 group-hover:scale-110"
            />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              {manufacturer.country}
            </p>

            <h2 className="mt-2 text-4xl font-black text-white transition group-hover:text-pink-400">
              {manufacturer.name}
            </h2>

          </div>

        </div>

        <p className="mt-8 line-clamp-4 text-lg leading-8 text-zinc-400">
          {manufacturer.description}
        </p>

        <div className="mt-10 flex items-center justify-between border-t border-zinc-800 pt-6">

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            {manufacturer.vehicleCount ?? 0} Vehicles
          </span>

          <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-2">
            View Details →
          </span>

        </div>

      </article>
    </Link>
  );
}