"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

import MegaMenu from "./MegaMenu";

export default function ExploreButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`group flex h-12 items-center gap-3 rounded-2xl border px-5 transition-all duration-300 ${
          open
            ? "border-pink-500/40 bg-pink-500/10 shadow-[0_10px_35px_rgba(236,72,153,.18)]"
            : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"
        }`}
      >
        <Sparkles
          size={16}
          className={`transition ${
            open ? "text-pink-400" : "text-zinc-500 group-hover:text-pink-400"
          }`}
        />

        <span
          className={`text-sm font-semibold transition ${
            open ? "text-white" : "text-zinc-300 group-hover:text-white"
          }`}
        >
          Explore
        </span>

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            open
              ? "rotate-180 text-pink-400"
              : "text-zinc-500 group-hover:text-pink-400"
          }`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 mt-5 -translate-x-1/2 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <MegaMenu />
      </div>
    </div>
  );
}