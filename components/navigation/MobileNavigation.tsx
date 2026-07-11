"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import NavLink from "@/components/NavLink";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.05] xl:hidden"
      >
        <Menu size={20} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg xl:hidden"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-[320px] flex-col border-l border-white/10 bg-zinc-950/95 backdrop-blur-2xl xl:hidden">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h2 className="text-lg font-bold text-white">
                GTA Companion
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-pink-500 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 p-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/vehicles">Vehicles</NavLink>
              <NavLink href="/characters">Characters</NavLink>
              <NavLink href="/locations">Locations</NavLink>
              <NavLink href="/businesses">Businesses</NavLink>
              <NavLink href="/weapons">Weapons</NavLink>
              <NavLink href="/animals">Animals</NavLink>
              <NavLink href="/activities">Activities</NavLink>
              <NavLink href="/brands">Brands</NavLink>
              <NavLink href="/guides">Guides</NavLink>
              <NavLink href="/news">News</NavLink>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}