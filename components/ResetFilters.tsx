"use client";

import { RotateCcw } from "lucide-react";

type ResetFiltersProps = {
  onReset: () => void;
};

export default function ResetFilters({
  onReset,
}: ResetFiltersProps) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="group inline-flex items-center gap-3 rounded-2xl border border-pink-500/25 bg-gradient-to-r from-pink-500/10 to-violet-500/10 px-6 py-3 font-semibold text-pink-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:from-pink-500 hover:to-violet-500 hover:text-white hover:shadow-[0_18px_40px_rgba(236,72,153,.28)] active:translate-y-0"
    >
      <RotateCcw
        size={18}
        className="transition-transform duration-500 group-hover:-rotate-180"
      />

      <span>Reset Filters</span>
    </button>
  );
}