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
    <section className={`relative mt-20 ${className}`}>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.05),transparent_70%)]" />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => (

          <div
            key={stat.label}
            className="animate-[fadeInUp_.5s_ease] opacity-0"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <StatCard
              value={stat.value}
              label={stat.label}
              accent={stat.accent}
            />
          </div>

        ))}

      </div>

    </section>
  );
}