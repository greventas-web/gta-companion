import Link from "next/link";
import {
  Users,
  MapPin,
  Car,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "7",
    label: "Characters",
    subtitle: "Official Profiles",
    icon: Users,
    href: "/characters",
  },
  {
    value: "6",
    label: "Locations",
    subtitle: "Confirmed Regions",
    icon: MapPin,
    href: "/locations",
  },
  {
    value: "7",
    label: "Vehicles",
    subtitle: "Official Database",
    icon: Car,
    href: "/vehicles",
  },
  {
    value: "100%",
    label: "Rockstar",
    subtitle: "Verified Information",
    icon: ShieldCheck,
    href: "/about",
  },
];

export default function HomeStatsV2() {
  return (
    <section className="relative mx-auto max-w-[1700px] px-8 py-32">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.08),transparent_72%)]" />

      <div className="mx-auto mb-20 max-w-4xl text-center">

        <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
          GTA COMPANION
        </div>

        <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
          Everything Official.
        </h2>

        <p className="mt-8 text-xl leading-10 text-zinc-400">
          Every page is built around officially confirmed Rockstar Games
          information, creating the most complete GTA VI companion platform.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#111114] to-[#09090B] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/30 hover:shadow-[0_40px_120px_rgba(236,72,153,.20)]"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
                <Icon className="text-pink-400" size={30} />
              </div>

              <div className="relative mt-10 text-6xl font-black tracking-tight text-white">
                {stat.value}
              </div>

              <h3 className="relative mt-5 text-2xl font-black text-white">
                {stat.label}
              </h3>

              <p className="relative mt-2 text-zinc-400">
                {stat.subtitle}
              </p>

              <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-pink-400">
                  Explore
                </span>

                <span className="text-pink-400 transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}