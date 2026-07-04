import { Map, Car, DollarSign, Smartphone } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Interactive Map",
    description: "Explore Vice City with the most detailed GTA 6 map."
  },
  {
    icon: Car,
    title: "Vehicle Database",
    description: "Browse every vehicle with locations and statistics."
  },
  {
    icon: DollarSign,
    title: "Money Guides",
    description: "Find the fastest ways to earn money in GTA 6."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Take GTA Companion with you everywhere."
  }
];

export default function Features() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Coming to
          <span className="text-pink-400"> GTA Companion</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-400">
          We're building the ultimate companion platform for GTA players.
          Everything below is being crafted with performance, simplicity and quality in mind.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                <Icon
                  size={48}
                  strokeWidth={1.8}
                  className="mb-6 text-pink-400"
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