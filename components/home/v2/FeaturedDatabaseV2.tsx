import Link from "next/link";
import {
  Users,
  Car,
  MapPin,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "Characters",
    description:
      "Meet every officially confirmed GTA VI protagonist, supporting character and key figure revealed by Rockstar Games.",
    href: "/characters",
    stat: "8 Profiles",
    icon: Users,
    gradient: "from-pink-500/20 to-fuchsia-500/5",
  },
  {
    title: "Vehicles",
    description:
      "Discover cars, motorcycles, aircraft and boats with detailed specifications and official media.",
    href: "/vehicles",
    stat: "7 Vehicles",
    icon: Car,
    gradient: "from-violet-500/20 to-indigo-500/5",
  },
  {
    title: "Locations",
    description:
      "Explore Vice City and every confirmed region across Leonida with maps, screenshots and details.",
    href: "/locations",
    stat: "6 Regions",
    icon: MapPin,
    gradient: "from-cyan-500/20 to-blue-500/5",
  },
];

export default function FeaturedDatabaseV2() {
  return (
    <section className="relative mx-auto max-w-[1700px] px-8 py-32">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.06),transparent_72%)]" />

      <div className="mb-20 text-center">

        <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
          FEATURED DATABASES
        </div>

        <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
          Explore GTA VI
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-zinc-400">
          Every database is carefully curated using official Rockstar Games
          information and presented in a clean, searchable experience.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/30 hover:shadow-[0_45px_120px_rgba(236,72,153,.18)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative p-10">

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <Icon className="text-pink-400" size={30} />
                  </div>

                  <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                    {item.stat}
                  </div>

                </div>

                <h3 className="mt-10 text-4xl font-black text-white transition group-hover:text-pink-400">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                  <span className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-pink-400">
                    Open Database
                  </span>

                  <ArrowRight
                    size={22}
                    className="text-pink-400 transition duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}