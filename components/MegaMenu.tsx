"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex h-20 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 text-[15px] font-semibold text-zinc-300 transition hover:text-white">
        Explore

        <ChevronDown
          size={17}
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Invisible bridge */}

      <div className="absolute left-1/2 top-full h-8 w-[900px] -translate-x-1/2" />

      {/* Dropdown */}

      <div
        className={`absolute left-1/2 top-full z-50 mt-2 w-[900px] -translate-x-1/2 rounded-[38px] border border-white/10 bg-[#09090B]/95 p-10 backdrop-blur-3xl shadow-[0_50px_130px_rgba(0,0,0,.75)] transition-all duration-300 ${
          open
            ? "translate-y-2 opacity-100 pointer-events-auto"
            : "translate-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-[1.35fr_1fr] gap-12">

          {/* Left */}

          <div>

            <div className="mb-7 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
              EXPLORE
            </div>

            <div className="space-y-4">

              {explore.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-[24px] border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/20 hover:bg-white/[0.04]"
                >
                  <div className="text-xl font-black text-white">
                    {item.title}
                  </div>

                  <div className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </div>

                </Link>
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="mb-7 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
              DATABASES
            </div>

            <div className="grid grid-cols-2 gap-4">

              {database.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex h-[72px] items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.03] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:bg-white/[0.06]"
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