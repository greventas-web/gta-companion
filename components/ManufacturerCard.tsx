import Image from "next/image";
import Link from "next/link";

import { Manufacturer } from "@/types/manufacturer";
import { Card } from "@/components/ui";

type ManufacturerCardProps = {
  manufacturer: Manufacturer;
};

export default function ManufacturerCard({
  manufacturer,
}: ManufacturerCardProps) {
  return (
    <Link href={`/manufacturers/${manufacturer.slug}`}>
      <Card className="cursor-pointer p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/10">

        <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

          <Image
            src={manufacturer.logo}
            alt={manufacturer.name}
            fill
            className="object-contain p-3"
          />

        </div>

        <h3 className="text-center text-2xl font-bold">
          {manufacturer.name}
        </h3>

        <p className="mt-3 text-center text-zinc-400">
          {manufacturer.country}
        </p>

        <p className="mt-6 text-center text-sm text-zinc-500">
          {manufacturer.vehicleCount} Vehicle
          {manufacturer.vehicleCount !== 1 ? "s" : ""}
        </p>

      </Card>
    </Link>
  );
}