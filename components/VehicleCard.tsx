import Image from "next/image";
import Link from "next/link";

import { Vehicle } from "@/types/vehicle";
import { Card } from "@/components/ui";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link href={`/vehicles/${vehicle.slug}`}>
      <Card className="cursor-pointer overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/10">

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

          <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
            {vehicle.drivetrain}
          </span>

          <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
            {vehicle.seats} Seats
          </span>

        </div>

        <div className="mt-6 space-y-2 border-t border-zinc-800 pt-6 text-sm">

          <div className="flex justify-between">
            <span className="text-zinc-400">Top Speed</span>
            <span>{vehicle.topSpeed}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-400">Price</span>
            <span>{vehicle.price}</span>
          </div>

        </div>

      </Card>
    </Link>
  );
}