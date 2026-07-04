import Image from "next/image";
import Link from "next/link";

import { Vehicle } from "@/types/vehicle";
import { Card } from "@/components/ui";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const slug = vehicle.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/vehicles/${slug}`}>
      <Card className="cursor-pointer p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/10">

        <div className="relative mb-6 h-52 overflow-hidden rounded-2xl bg-zinc-950">

          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />

        </div>

        <h3 className="text-2xl font-bold">
          {vehicle.name}
        </h3>

        <p className="mt-2 text-zinc-400">
          {vehicle.manufacturer}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
            {vehicle.category}
          </span>

          <span className="rounded-full bg-pink-500/20 px-3 py-1 text-sm text-pink-400">
            {vehicle.status}
          </span>

        </div>

      </Card>
    </Link>
  );
}