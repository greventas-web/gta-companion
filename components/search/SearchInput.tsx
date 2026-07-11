"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <Search
        size={22}
        className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-pink-400 transition-colors duration-300"
      />

      <input
        autoFocus
        type="text"
        value={value}
        placeholder="Search vehicles, characters, locations, businesses, weapons..."
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        className="h-16 w-full rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] pl-16 pr-28 text-lg font-medium text-white outline-none backdrop-blur-2xl transition-all duration-300 placeholder:font-normal placeholder:text-zinc-500 focus:border-pink-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_50px_rgba(236,72,153,.18)]"
      />

      <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-zinc-400 backdrop-blur-xl">
        ESC
      </div>
    </div>
  );
}