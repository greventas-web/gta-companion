"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const groups = [
  {
    title: "Database",
    links: [
      { title: "Vehicles", href: "/vehicles" },
      { title: "Manufacturers", href: "/manufacturers" },
      { title: "Characters", href: "/characters" },
      { title: "Locations", href: "/locations" },
      { title: "Businesses", href: "/businesses" },
    ],
  },
  {
    title: "World",
    links: [
      { title: "Weapons", href: "/weapons" },
      { title: "Animals", href: "/animals" },
      { title: "Activities", href: "/activities" },
      { title: "Brands", href: "/brands" },
    ],
  },
  {
    title: "More",
    links: [
      { title: "Editions", href: "/launch" },
      { title: "Radio", href: "/radio" },
      { title: "News", href: "/news" },
      { title: "Media", href: "/media" },
      { title: "Timeline", href: "/timeline" },
    ],
  },
  {
    title: "Launch",
    links: [
      { title: "Guides", href: "/guides" },
      { title: "Money", href: "/money-methods" },
      { title: "Fastest Cars", href: "/fastest-cars" },
      { title: "Map Locations", href: "/map-locations" },
      { title: "Cheats", href: "/cheats" },
    ],
  },
];

export const exploreLinks = groups.flatMap((group) => group.links);

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openedByHover = useRef(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: MouseEvent) {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex h-20 items-center"
      onMouseEnter={() => {
        openedByHover.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        openedByHover.current = false;
        setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => {
          if (openedByHover.current) {
            openedByHover.current = false;
            setOpen(true);
            return;
          }
          setOpen((value) => !value);
        }}
        className="flex items-center gap-2 text-[15px] font-semibold text-zinc-300 transition hover:text-white"
      >
        Explore
        <ChevronDown
          size={17}
          className={`transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-[200] w-[min(980px,calc(100vw-48px))] -translate-x-1/2 pt-3 ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`rounded-[28px] border border-white/10 bg-[#09090B]/98 p-6 shadow-[0_40px_120px_rgba(0,0,0,.75)] backdrop-blur-xl transition duration-200 ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-1 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
                  {group.title}
                </div>

                <div className="space-y-1">
                  {group.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-white transition hover:bg-white/[0.06] hover:text-pink-300"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
