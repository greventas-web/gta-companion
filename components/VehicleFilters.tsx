"use client";

import { RotateCcw } from "lucide-react";

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function VehicleFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="space-y-6">

      <div className="flex flex-wrap items-center gap-3">

        <button
          onClick={() => onCategoryChange("All")}
          className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            selectedCategory === "All"
              ? "border-pink-500 bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-[0_0_30px_rgba(236,72,153,.25)]"
              : "border-white/10 bg-white/5 text-zinc-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
          }`}
        >
          All
        </button>

        {categories.map((category) => {

          const active = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-pink-500 bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-[0_0_30px_rgba(236,72,153,.25)]"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
              }`}
            >
              {category}
            </button>
          );

        })}

        <button
          onClick={() => onCategoryChange("All")}
          className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-400 transition-all duration-300 hover:border-pink-500/40 hover:text-pink-400"
        >
          <RotateCcw size={16} />
          Reset
        </button>

      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </div>
  );
}