"use client";

import {
  Map,
  Satellite,
  Sparkles,
} from "lucide-react";

export type MapMode = "standard" | "satellite" | "night";

type Props = {
  mode: MapMode;
  onChange: (mode: MapMode) => void;
};

const modes: {
  id: MapMode;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "standard",
    label: "Standard",
    icon: <Map size={15} />,
  },
  {
    id: "satellite",
    label: "Satellite",
    icon: <Satellite size={15} />,
  },
  {
    id: "night",
    label: "Night",
    icon: <Sparkles size={15} />,
  },
];

export default function MapModeToggle({
  mode,
  onChange,
}: Props) {
  return (
    <div className="absolute bottom-6 right-6 z-40 flex items-center gap-1 rounded-2xl border border-white/10 bg-black/80 p-2 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-2xl">
      {modes.map((item) => {
        const active = mode === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
              active
                ? "bg-pink-500/15 text-pink-300"
                : "text-zinc-500 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.icon}

            <span className="hidden sm:inline">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}