"use client";

export default function MapLoading() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#070708]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border border-pink-500/20" />

          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-pink-400 border-r-violet-500" />

          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 opacity-20 blur-md" />
        </div>

        <div className="mt-6 text-[10px] font-black uppercase tracking-[0.35em] text-pink-400">
          GTA Companion
        </div>

        <div className="mt-2 text-sm font-bold text-white">
          Loading Leonida
        </div>

        <div className="mt-2 text-xs text-zinc-600">
          Preparing interactive map...
        </div>
      </div>
    </div>
  );
}