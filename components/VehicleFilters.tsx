type VehicleFiltersProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function VehicleFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: VehicleFiltersProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 transition ${
            selectedCategory === category
              ? "bg-pink-500 text-white"
              : "border border-zinc-700 hover:border-pink-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}