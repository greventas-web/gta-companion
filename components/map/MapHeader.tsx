"use client";

import { Compass, Layers3 } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function MapHeader({
  title = "Leonida World Map",
  subtitle = "Explore the world of GTA VI",
}: Props) {
  return (
    <div className="pointer-events-none absolute left-6 top-6 z-30">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
          <Compass
            size={18}
            className="text-pink-400"
          />
        </div>

        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
            GTA Companion
          </div>

          <div className="mt-1 flex items-center gap-2 text-sm font-black text-white">
            <Layers3 size={14} className="text-zinc-500" />
            {title}
          </div>

          <div className="mt-1 text-xs text-zinc-500">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}