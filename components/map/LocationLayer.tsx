"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

type Location = {
  id: number;
  slug: string;
  name: string;
  region: string;
  type: string;
  x?: number;
  y?: number;
};

type Props = {
  locations: Location[];
};

const fallbackPositions = [
  { x: 72, y: 28 },
  { x: 54, y: 42 },
  { x: 78, y: 55 },
  { x: 42, y: 62 },
  { x: 64, y: 73 },
];

export default function LocationLayer({
  locations,
}: Props) {
  return (
    <div className="absolute inset-0">
      {locations.map((location, index) => {
        const fallback =
          fallbackPositions[index % fallbackPositions.length];

        const x = location.x ?? fallback.x;
        const y = location.y ?? fallback.y;

        return (
          <Link
            key={location.id}
            href={`/locations/${location.slug}`}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-pink-500/30" />

              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_25px_rgba(236,72,153,.55)] transition duration-300 group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(236,72,153,.8)]">
                <MapPin
                  size={16}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-11 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 shadow-xl backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                {location.name}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}