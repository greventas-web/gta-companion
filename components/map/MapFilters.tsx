"use client";

import {
  Building2,
  CarFront,
  MapPin,
  Users,
} from "lucide-react";

export type MapFilterType =
  | "locations"
  | "businesses"
  | "vehicles"
  | "characters";

type Props = {
  activeFilters?: MapFilterType[];
  onToggle?: (filter: MapFilterType) => void;
};

const filters: {
  id: MapFilterType;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "locations",
    label: "Locations",
    icon: <MapPin size={15} />,
  },
  {
    id: "businesses",
    label: "Businesses",
    icon: <Building2 size={15} />,
  },
  {
    id: "vehicles",
    label: "Vehicles",
    icon: <CarFront size={15} />,
  },
  {
    id: "characters",
    label: "Characters",
    icon: <Users size={15} />,
  },
];

export default function MapFilters({
  activeFilters = ["locations", "businesses", "vehicles", "characters"],
  onToggle = () => {},
}: Props) {
  return (
    <div className="absolute left-6 top-6 z-30 flex max-w-[calc(100%-3rem)] flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/75 p-2 shadow-[0_15px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl">
      {filters.map((filter) => {
        const active = activeFilters.includes(filter.id);

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onToggle(filter.id)}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 ${
              active
                ? "border border-pink-500/30 bg-pink-500/15 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,.12)]"
                : "border border-transparent text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
            }`}
          >
            {filter.icon}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}