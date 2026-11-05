"use client";

import {
  Building2,
  CarFront,
  MapPin,
  Users,
} from "lucide-react";

type Props = {
  title: string;
  description?: string;
  locations: number;
  businesses: number;
  vehicles: number;
  characters: number;
};

export default function MapDataPanel({
  title,
  description,
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
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
        Region Data
      </div>

      <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <Icon
                size={16}
                className="text-pink-400"
              />

              <div className="mt-3 text-xl font-black text-white">
                {stat.value}
              </div>

              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}