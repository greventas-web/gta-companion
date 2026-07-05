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
    <div className="mb-10 flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            selectedCategory === category
              ? "bg-pink-500 text-white"
              : "border border-zinc-800 bg-zinc-900 hover:border-pink-500 hover:text-pink-400"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}