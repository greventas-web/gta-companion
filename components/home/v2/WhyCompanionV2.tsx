import {
  ShieldCheck,
  Sparkles,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Official Rockstar Data",
    description:
      "Every database is built only from officially confirmed Rockstar Games information.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Fast, modern, distraction-free design built specifically for GTA players.",
  },
  {
    icon: Rocket,
    title: "Always Growing",
    description:
      "As Rockstar reveals new content, GTA Companion expands with new databases, guides and interactive tools.",
  },
];

export default function WhyCompanionV2() {
  return (
    <section className="mx-auto max-w-[1700px] px-8 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
          WHY GTA COMPANION
        </div>

        <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
          Built For GTA Players
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
          GTA Companion is designed to become the world's most useful GTA VI
          companion platform with official information, premium design and
          powerful tools.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_30px_80px_rgba(236,72,153,.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.05),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/20 to-violet-500/20">
                <Icon className="h-8 w-8 text-pink-400" />
              </div>

              <h3 className="relative mt-8 text-3xl font-black text-white">
                {feature.title}
              </h3>

              <p className="relative mt-6 text-lg leading-8 text-zinc-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}