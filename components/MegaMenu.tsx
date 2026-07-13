"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const explore = [
  {
    title: "Official News",
    description: "Latest Rockstar announcements",
    href: "/news",
  },
  {
    title: "Media Library",
    description: "Trailers, screenshots & artwork",
    href: "/media",
  },
  {
    title: "Timeline",
    description: "Every GTA VI event",
    href: "/timeline",
  },
  {
    title: "About",
    description: "About GTA Companion",
    href: "/about",
  },
];

const database = [
  { title: "Characters", href: "/characters" },
  { title: "Vehicles", href: "/vehicles" },
  { title: "Locations", href: "/locations" },
  { title: "Weapons", href: "/weapons" },
  { title: "Businesses", href: "/businesses" },
  { title: "Brands", href: "/brands" },
];

export default function MegaMenu() {
  return (
    <div className="group relative flex h-20 items-center">
      <button className="flex items-center gap-2 text-[15px] font-semibold text-zinc-300 transition-all duration-300 hover:text-white">
        Explore

        <ChevronDown
          size={17}
          className="transition duration-300 group-hover:rotate-180"
        />
      </button>

      <div className="absolute left-0 top-full h-8 w-full" />

      <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-[860px] -translate-x-1/2 rounded-[34px] border border-white/10 bg-[#09090B]/95 p-9 opacity-0 shadow-[0_40px_120px_rgba(0,0,0,.75)] backdrop-blur-3xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">

        <div className="grid grid-cols-[1.3fr_1fr] gap-10">

          <div>

            <div className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
              EXPLORE
            </div>

            <div className="space-y-3">

              {explore.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-3xl border border-transparent p-5 transition-all duration-300 hover:border-pink-500/20 hover:bg-white/[0.04]"
                >
                  <div className="text-lg font-bold text-white">
                    {item.title}
                  </div>

                  <div className="mt-1 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </div>
                </Link>
              ))}

            </div>

          </div>

          <div>

            <div className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
              DATABASES
            </div>

            <div className="grid grid-cols-2 gap-3">

              {database.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex h-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] font-semibold text-white transition-all duration-300 hover:border-pink-500/30 hover:bg-white/[0.05]"
                >
                  {item.title}
                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}