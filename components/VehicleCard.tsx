import { Vehicle } from "@/types/vehicle";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-2 hover:border-pink-500">

      <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
        Vehicle Image
      </div>

      <h3 className="text-2xl font-bold">
        {vehicle.name}
      </h3>

      <p className="mt-3 text-zinc-400">
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

    </div>
  );
}