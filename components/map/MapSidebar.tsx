"use client";

import {
  Building2,
  CarFront,
  Globe2,
  MapPin,
  Users,
} from "lucide-react";

import MapStats from "./MapStats";

type Region = {
  id: number;
  name: string;
  subtitle?: string;
  description?: string;
  locations: number;
  businesses: number;
  characters: number;
  vehicles: number;
};

type Props = {
  region: Region;
};

export default function MapSidebar({ region }: Props) {
  return (
    <aside className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#09090B] to-black p-8 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
          <Globe2
            size={18}
            className="text-pink-400"
          />
        </div>

        <div className="text-xs font-black uppercase tracking-[0.3em] text-pink-400">
          Selected Region
        </div>
      </div>

      <h3 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white">
        {region.name}
      </h3>

      {region.subtitle && (
        <p className="mt-3 text-sm font-semibold text-pink-400">
          {region.subtitle}
        </p>
      )}

      {region.description && (
        <p className="mt-6 text-[15px] leading-7 text-zinc-400">
          {region.description}
        </p>
      )}

      <div className="mt-8">
        <MapStats
          locations={region.locations}
          businesses={region.businesses}
          vehicles={region.vehicles}
          characters={region.characters}
        />
      </div>

      <div className="mt-8 space-y-3">
        <SidebarInfo
          icon={<MapPin size={16} />}
          label="Map Locations"
          value={region.locations}
        />

        <SidebarInfo
          icon={<Building2 size={16} />}
          label="Businesses"
          value={region.businesses}
        />

        <SidebarInfo
          icon={<CarFront size={16} />}
          label="Vehicles"
          value={region.vehicles}
        />

        <SidebarInfo
          icon={<Users size={16} />}
          label="Characters"
          value={region.characters}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-pink-500/10 bg-pink-500/[0.04] p-5">
        <div className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400">
          GTA Companion
        </div>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Select another region on the map to explore its available
          database information.
        </p>
      </div>
    </aside>
  );
}

function SidebarInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="flex items-center gap-3 text-zinc-400">
        <span className="text-pink-400">
          {icon}
        </span>

        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      <span className="font-black text-white">
        {value}
      </span>
    </div>
  );
}