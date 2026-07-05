type ResetFiltersProps = {
  onReset: () => void;
};

export default function ResetFilters({
  onReset,
}: ResetFiltersProps) {
  return (
    <button
      onClick={onReset}
      className="rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-pink-500 hover:text-pink-400"
    >
      Reset Filters
    </button>
  );
}