"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export type MapMarkerData = {
  id: string | number;
  name: string;
  type: string;
  x: number;
  y: number;
  href?: string;
};

type Props = {
  marker: MapMarkerData;
  selected?: boolean;
  onSelect?: (marker: MapMarkerData) => void;
};

export default function MapMarker({
  marker,
  selected = false,
  onSelect,
}: Props) {
  const content = (
    <>
      <span
        className={`absolute inset-0 rounded-full bg-pink-500/30 ${
          selected ? "animate-ping" : ""
        }`}
      />

      <span
        className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_25px_rgba(236,72,153,.55)] transition duration-300 group-hover:scale-125 ${
          selected
            ? "scale-125 shadow-[0_0_40px_rgba(236,72,153,.8)]"
            : ""
        }`}
      >
        <MapPin
          size={16}
          strokeWidth={2.5}
          className="text-white"
        />
      </span>

      <span className="pointer-events-none absolute left-1/2 top-11 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 shadow-xl backdrop-blur-xl transition duration-200 group-hover:opacity-100">
        {marker.name}
      </span>
    </>
  );

  if (marker.href) {
    return (
      <Link
        href={marker.href}
        className="group absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${marker.x}%`,
          top: `${marker.y}%`,
        }}
        aria-label={marker.name}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect?.(marker)}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${marker.x}%`,
        top: `${marker.y}%`,
      }}
      aria-label={marker.name}
    >
      {content}
    </button>
  );
}