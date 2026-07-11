"use client";

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
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => {

        const active = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              active
                ? "border-pink-500 bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,.25)]"
                : "border-white/10 bg-white/5 text-zinc-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
            }`}
          >
            {category}
          </button>
        );

      })}

    </div>
  );
}