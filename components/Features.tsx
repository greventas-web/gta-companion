import {
  Car,
  DollarSign,
  Map,
  ShieldCheck,
  Smartphone,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Interactive Map",
    description:
      "Explore Leonida with a premium interactive map featuring missions, collectibles, businesses, vehicles and every discoverable location.",
  },
  {
    icon: Car,
    title: "Vehicle Database",
    description:
      "Browse an expanding collection of GTA VI vehicles with manufacturers, specifications, galleries and detailed information.",
  },
  {
    icon: DollarSign,
    title: "Money Guides",
    description:
      "Discover the fastest and most efficient ways to earn money through detailed, continually updated strategy guides.",
  },
  {
    icon: Trophy,
    title: "100% Completion",
    description:
      "Track missions, collectibles, side activities and every requirement needed to achieve full game completion.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Information",
    description:
      "Built using official Rockstar information and carefully researched in-game data with accuracy as the highest priority.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Companion",
    description:
      "Designed for desktop today and built with a future mobile companion app featuring synchronized progress and favorites.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-background py-32 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />
      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-pink-400">
            Why GTA Companion
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight md:text-6xl">
            Built for
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              GTA VI Players
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            GTA Companion is being built as the definitive premium companion
            platform for Grand Theft Auto VI with verified information,
            powerful tools and a luxury user experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_25px_70px_rgba(236,72,153,.12)]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-500/20">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-8 text-2xl font-bold tracking-tight">
                  {feature.title}
                </h3>

                <p className="relative mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}