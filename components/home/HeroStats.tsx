export default function HeroStats() {
  const stats = [
    {
      value: "50+",
      label: "Vehicles",
    },
    {
      value: "15+",
      label: "Characters",
    },
    {
      value: "20+",
      label: "Locations",
    },
    {
      value: "100%",
      label: "Official",
    },
  ];

  return (
    <div className="absolute bottom-12 left-1/2 z-30 hidden -translate-x-1/2 xl:flex">
      <div className="flex overflow-hidden rounded-[28px] border border-white/10 bg-black/45 backdrop-blur-3xl shadow-[0_35px_120px_rgba(0,0,0,.45)]">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative px-10 py-8 ${
              index !== stats.length - 1
                ? "border-r border-white/10"
                : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

            <div className="relative">
              <div className="text-4xl font-black tracking-tight text-white">
                {stat.value}
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-[0.32em] text-pink-400">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}