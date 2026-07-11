type ResetFiltersProps = {
  onReset: () => void;
};

export default function ResetFilters({
  onReset,
}: ResetFiltersProps) {
  return (
    <button
      onClick={onReset}
      className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-6 py-3 font-semibold text-pink-400 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_30px_rgba(236,72,153,.25)]"
    >
      Reset Filters
    </button>
  );
}