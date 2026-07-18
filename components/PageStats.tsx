import StatCard from "@/components/StatCard";

type Stat = {
  value: string | number;
  label: string;
  accent?: boolean;
};

type Props = {
  stats: Stat[];
  className?: string;
};

export default function PageStats({
  stats,
  className = "",
}: Props) {
  return (
    <section className={`mt-20 ${className}`}>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            accent={stat.accent}
          />
        ))}
      </div>
    </section>
  );
}