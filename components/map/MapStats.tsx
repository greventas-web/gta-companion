"use client";

import {
  Building2,
  CarFront,
  MapPin,
  Users,
} from "lucide-react";

type Props = {
  locations: number;
  businesses: number;
  vehicles: number;
  characters: number;
};

export default function MapStats({
  locations,
  businesses,
  vehicles,
  characters,
}: Props) {
  const stats = [
    {
      label: "Locations",
      value: locations,
      icon: MapPin,
    },
    {
      label: "Businesses",
      value: businesses,
      icon: Building2,
    },
    {
      label: "Vehicles",
      value: vehicles,
      icon: CarFront,
    },
    {
      label: "Characters",
      value: characters,
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
          >
            <div className="flex items-center gap-2 text-pink-400">
              <Icon size={16} />

              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                {stat.label}
              </span>
            </div>

            <div className="mt-3 text-2xl font-black text-white">
              {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}