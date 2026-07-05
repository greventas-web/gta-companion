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
      "Discover Vice City with a detailed interactive map featuring missions, collectibles, businesses and more.",
  },
  {
    icon: Car,
    title: "Vehicle Database",
    description:
      "Browse a growing database of GTA VI vehicles with manufacturers, categories and detailed information.",
  },
  {
    icon: DollarSign,
    title: "Money Guides",
    description:
      "Learn the best legitimate ways to build your fortune with detailed money-making guides.",
  },
  {
    icon: Trophy,
    title: "100% Completion",
    description:
      "Track missions, collectibles, side activities and everything needed for full completion.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every guide and database entry is designed with accuracy, speed and ease of use in mind.",
  },
  {
    icon: Smartphone,
    title: "Mobile Companion",
    description:
      "A future mobile app will let you take GTA Companion anywhere, online or offline.",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            Built for
            <span className="text-pink-400"> GTA VI Players</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            GTA Companion is designed to become the most complete companion
            platform for GTA VI with powerful tools, verified information and
            a premium user experience.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <Icon
                  className="mb-6 text-pink-400"
                  size={42}
                  strokeWidth={1.8}
                />

                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-zinc-400">
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