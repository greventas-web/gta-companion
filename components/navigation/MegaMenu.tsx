import Link from "next/link";
import {
  Car,
  MapPinned,
  Users,
  Building2,
  Shield,
  PawPrint,
  Trophy,
  Newspaper,
  Store,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const sections = [
  {
    title: "Database",
    links: [
      {
        title: "Vehicles",
        description: "Cars, bikes, aircraft & more",
        href: "/vehicles",
        icon: Car,
      },
      {
        title: "Characters",
        description: "Meet every major character",
        href: "/characters",
        icon: Users,
      },
      {
        title: "Locations",
        description: "Cities, districts and landmarks",
        href: "/locations",
        icon: MapPinned,
      },
      {
        title: "Businesses",
        description: "Shops, companies and services",
        href: "/businesses",
        icon: Building2,
      },
      {
        title: "Manufacturers",
        description: "Vehicle brands and history",
        href: "/manufacturers",
        icon: Wrench,
      },
    ],
  },
  {
    title: "World",
    links: [
      {
        title: "Weapons",
        description: "Every weapon and equipment",
        href: "/weapons",
        icon: Shield,
      },
      {
        title: "Animals",
        description: "Wildlife across Leonida",
        href: "/animals",
        icon: PawPrint,
      },
      {
        title: "Activities",
        description: "Things to do around the world",
        href: "/activities",
        icon: Trophy,
      },
      {
        title: "Brands",
        description: "Fictional GTA companies",
        href: "/brands",
        icon: Store,
      },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        title: "Interactive Map",
        description: "Coming soon",
        href: "#",
        icon: MapPinned,
      },
      {
        title: "Guides",
        description: "Walkthroughs and tutorials",
        href: "/guides",
        icon: ArrowUpRight,
      },
      {
        title: "News",
        description: "Latest Rockstar updates",
        href: "/news",
        icon: Newspaper,
      },
      {
        title: "Profile",
        description: "Your GTA Companion account",
        href: "/profile",
        icon: Users,
      },
    ],
  },
];

export default function MegaMenu() {
  return (
    <div className="w-[980px] overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-zinc-900/95 via-zinc-950/95 to-black/95 shadow-[0_35px_120px_rgba(0,0,0,.65),0_0_80px_rgba(236,72,153,.12)] backdrop-blur-3xl">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative grid grid-cols-3 gap-10 p-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-pink-400">
              {section.title}
            </h3>

            <div className="space-y-2">
              {section.links.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-pink-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 transition-all duration-300 group-hover:bg-pink-500/20 group-hover:shadow-[0_0_30px_rgba(236,72,153,.2)]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white transition-colors group-hover:text-pink-300">
                        {link.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}