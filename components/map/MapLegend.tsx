"use client";

import {
  Building2,
  CarFront,
  MapPin,
  Users,
} from "lucide-react";

export default function MapLegend() {
  return (
    <div className="absolute right-6 top-6 z-30 rounded-2xl border border-white/10 bg-black/75 p-4 shadow-[0_15px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl">
      <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
        Map Legend
      </div>

      <div className="space-y-3">
        <LegendItem
          icon={<MapPin size={14} />}
          label="Locations"
          className="text-pink-400"
        />

        <LegendItem
          icon={<Building2 size={14} />}
          label="Businesses"
          className="text-violet-400"
        />

        <LegendItem
          icon={<CarFront size={14} />}
          label="Vehicles"
          className="text-cyan-400"
        />

        <LegendItem
          icon={<Users size={14} />}
          label="Characters"
          className="text-amber-400"
        />
      </div>
    </div>
  );
}

function LegendItem({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={className}>{icon}</span>

      <span className="text-xs font-semibold text-zinc-400">
        {label}
      </span>
    </div>
  );
}