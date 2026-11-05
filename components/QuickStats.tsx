import {
  Car,
  ShieldCheck,
  Star,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    title: "Confirmed Vehicles",
    subtitle: "And counting...",
    icon: Car,
  },
  {
    value: "10+",
    title: "Manufacturers",
    subtitle: "Official & in-game brands",
    icon: ShieldCheck,
  },
  {
    value: "100%",
    title: "Official Rockstar Sources",
    subtitle: "Accurate & trusted information",
    icon: Star,
  },
];

export default function QuickStats() {
  return (
    <section className="relative z-30 mx-auto -mt-8 max-w-[1600px] px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0D]/95 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent" />

              <div className="flex items-center gap-6 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-500">
                  <Icon size={34} strokeWidth={2} />
                </div>

                <div>
                  <div className="text-[56px] font-black leading-none text-white">
                    {stat.value}
                  </div>

                  <h3 className="mt-1 text-[20px] font-bold text-white">
                    {stat.title}
                  </h3>

                  <p className="mt-1 text-[16px] text-zinc-400">
                    {stat.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </section>
);
}