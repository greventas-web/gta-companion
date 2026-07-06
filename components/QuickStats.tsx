const stats = [
  {
    value: "50+",
    title: "Confirmed Vehicles",
    subtitle: "Official Rockstar data",
    icon: "🚗",
  },
  {
    value: "10+",
    title: "Manufacturers",
    subtitle: "Official & in-game brands",
    icon: "🏭",
  },
  {
    value: "100%",
    title: "Official Sources",
    subtitle: "Accurate & trusted information",
    icon: "⭐",
  },
];

export default function QuickStats() {
  return (
    <section className="relative z-30 mx-auto -mt-24 max-w-7xl px-6">
      <div className="grid gap-8 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="group overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_20px_60px_rgba(236,72,153,0.12)]"
          >
            <div className="flex items-start justify-between">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-500/10 text-5xl">
                {stat.icon}
              </div>

              <div className="text-right">
                <div className="text-6xl font-black leading-none">
                  {stat.value}
                </div>
              </div>

            </div>

            <h3 className="mt-8 text-3xl font-black">
              {stat.title}
            </h3>

            <p className="mt-3 text-lg text-zinc-400">
              {stat.subtitle}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}