export default function HeroStats() {
  const stats = [
    { value: "50+", label: "Vehicles" },
    { value: "15+", label: "Characters" },
    { value: "20+", label: "Locations" },
    { value: "100%", label: "Official" },
  ];

  return (
    <div className="mt-20 grid grid-cols-2 gap-5 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-3xl"
        >
          <div className="text-4xl font-black text-white">{stat.value}</div>
          <div className="mt-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
