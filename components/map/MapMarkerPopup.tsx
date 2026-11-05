"use client";

import Link from "next/link";
import { ExternalLink, MapPin, X } from "lucide-react";

import type { MapMarkerData } from "./MapMarker";

type Props = {
  marker: MapMarkerData;
  onClose: () => void;
};

export default function MapMarkerPopup({
  marker,
  onClose,
}: Props) {
  return (
    <div className="absolute bottom-6 right-6 z-50 w-[min(320px,calc(100%-3rem))] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10]/95 shadow-[0_30px_100px_rgba(0,0,0,.65)] backdrop-blur-3xl">
      <div className="flex items-start justify-between border-b border-white/10 p-5">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-pink-400">
            <MapPin size={13} />
            Map Location
          </div>

          <h3 className="mt-2 text-xl font-black text-white">
            {marker.name}
          </h3>

          <p className="mt-1 text-xs capitalize text-zinc-500">
            {marker.type}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close location"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-white/10 hover:text-white"
        >
          <X size={17} />
        </button>
      </div>

      <div className="p-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            Coordinates
          </div>

          <div className="mt-2 font-mono text-xs text-zinc-400">
            {marker.x.toFixed(2)}% / {marker.y.toFixed(2)}%
          </div>
        </div>

        {marker.href && (
          <Link
            href={marker.href}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(236,72,153,.4)]"
          >
            Open Details
            <ExternalLink size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}