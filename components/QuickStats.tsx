import { vehicles } from "@/data/vehicles";
import { manufacturers } from "@/data/manufacturers";

export default function QuickStats() {
  const categories = new Set(
    vehicles.map((vehicle) => vehicle.category)
  ).size;

  return (
    <section className="mt-24">

      <div className="grid gap-6 md:grid-cols-4">

        <Stat
          title="Vehicles"
          value={vehicles.length}
        />

        <Stat
          title="Manufacturers"
          value={manufacturers.length}
        />

        <Stat
          title="Categories"
          value={categories}
        />

        <Stat
          title="Confirmed"
          value="100%"
        />

      </div>

    </section>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-5xl font-black">
        {value}
      </h2>

    </div>
  );
}