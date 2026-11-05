"use client";

import {
  LocateFixed,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";

type Props = {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onLocate?: () => void;
  onFullscreen?: () => void;
};

export default function MapToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  onLocate,
  onFullscreen,
}: Props) {
  return (
    <div className="absolute bottom-6 left-6 z-30 flex items-center gap-1 rounded-2xl border border-white/10 bg-black/75 p-2 shadow-[0_15px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl">
      <button
        type="button"
        onClick={onZoomOut}
        aria-label="Zoom out"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
      >
        <Minus size={18} />
      </button>

      <div className="flex h-10 min-w-[58px] items-center justify-center px-2 text-xs font-black text-zinc-400">
        {Math.round(zoom * 100)}%
      </div>

      <button
        type="button"
        onClick={onZoomIn}
        aria-label="Zoom in"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
      >
        <Plus size={18} />
      </button>

      <div className="mx-1 h-6 w-px bg-white/10" />

      <button
        type="button"
        onClick={onReset}
        aria-label="Reset map"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
      >
        <RotateCcw size={17} />
      </button>

      {onLocate && (
        <button
          type="button"
          onClick={onLocate}
          aria-label="Locate selected region"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          <LocateFixed size={17} />
        </button>
      )}

      {onFullscreen && (
        <button
          type="button"
          onClick={onFullscreen}
          aria-label="Fullscreen map"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          <Maximize2 size={17} />
        </button>
      )}
    </div>
  );
}