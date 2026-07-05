type StatsCardProps = {
  label: string;
  value: string | number;
};

export default function StatsCard({
  label,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        {value}
      </h2>

    </div>
  );
}