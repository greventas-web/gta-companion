"use client";

import { useMemo, useState } from "react";

export type MapEngineMarker = {
  id: string | number;
  name: string;
  type: string;
  x: number;
  y: number;
  href?: string;
};

type Props = {
  markers?: MapEngineMarker[];
};

export default function MapEngine({ markers = [] }: Props) {
  const [zoom, setZoom] = useState(1);
  const [selectedMarker, setSelectedMarker] =
    useState<MapEngineMarker | null>(null);

  const visibleMarkers = useMemo(() => {
    return markers.filter(
      (marker) =>
        marker.x >= 0 &&
        marker.x <= 100 &&
        marker.y >= 0 &&
        marker.y <= 100
    );
  }, [markers]);

  function zoomIn() {
    setZoom((current) => Math.min(current + 0.15, 1.75));
  }

  function zoomOut() {
    setZoom((current) => Math.max(current - 0.15, 0.75));
  }

  function resetZoom() {
    setZoom(1);
  }

  return (
    <div className="relative h-full min-h-[650px] w-full overflow-hidden rounded-[34px] bg-[#071214]">
      <div
        className="absolute inset-0 origin-center transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${zoom})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(236,72,153,.08),transparent_45%)]" />

        <div className="absolute inset-[4%] rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#12373A] via-[#092327] to-[#061517]" />

        <div
          className="absolute inset-[4%] opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-[8%]">
          <div className="absolute left-[8%] top-[8%] h-[42%] w-[38%] rounded-[45%] bg-[#193128]" />

          <div className="absolute left-[30%] top-[38%] h-[46%] w-[42%] rounded-[48%] bg-[#1A3429]" />

          <div className="absolute right-[7%] top-[13%] h-[55%] w-[27%] rounded-[45%] bg-[#152D26]" />

          <div className="absolute bottom-[2%] left-[48%] h-[30%] w-[31%] rounded-[50%] bg-[#17372B]" />
        </div>

        <div className="absolute inset-[4%]">
          <div className="absolute left-[2%] top-[42%] h-[16%] w-[72%] rotate-[18deg] rounded-[50%] border border-cyan-300/10 bg-cyan-300/[0.025]" />

          <div className="absolute right-[8%] top-[7%] h-[82%] w-[18%] rotate-[8deg] rounded-[50%] border border-cyan-300/10" />

          <div className="absolute bottom-[-8%] left-[38%] h-[35%] w-[45%] rounded-[50%] border border-cyan-300/10" />
        </div>

        <div className="absolute inset-[4%]">
          {visibleMarkers.map((marker) => (
            <button
              key={marker.id}
              type="button"
              onClick={() => setSelectedMarker(marker)}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
              }}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-pink-500/25" />

              <span className="relative block h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_25px_rgba(236,72,153,.55)] transition duration-300 group-hover:scale-125" />

              <span className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
                {marker.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-1 rounded-2xl border border-white/10 bg-black/75 p-2 backdrop-blur-xl">
        <button
          type="button"
          onClick={zoomOut}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Zoom out"
        >
          −
        </button>

        <div className="min-w-[58px] text-center text-xs font-black text-zinc-400">
          {Math.round(zoom * 100)}%
        </div>

        <button
          type="button"
          onClick={zoomIn}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Zoom in"
        >
          +
        </button>

        <button
          type="button"
          onClick={resetZoom}
          className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Reset zoom"
        >
          1×
        </button>
      </div>

      {selectedMarker && (
        <div className="absolute bottom-6 right-6 z-30 w-64 rounded-2xl border border-white/10 bg-black/85 p-5 shadow-2xl backdrop-blur-2xl">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400">
            Selected
          </div>

          <div className="mt-2 text-xl font-black text-white">
            {selectedMarker.name}
          </div>

          <div className="mt-1 text-sm capitalize text-zinc-500">
            {selectedMarker.type}
          </div>

          <button
            type="button"
            onClick={() => setSelectedMarker(null)}
            className="mt-4 rounded-xl border border-white/10 px-3 py-2 text-xs font-bold text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>
      )}

      <div className="pointer-events-none absolute left-6 top-6 z-20">
        <div className="text-[10px] font-black uppercase tracking-[0.35em] text-pink-400">
          GTA Companion
        </div>

        <div className="mt-1 text-sm font-bold text-white">
          Leonida World Map
        </div>
      </div>
    </div>
  );
}