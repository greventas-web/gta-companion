export default function SearchButton() {
  return (
    <button
      className="hidden items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition hover:border-pink-500 hover:text-white lg:flex"
    >
      <span>🔍</span>

      <span>Search</span>

      <span className="rounded border border-zinc-700 px-2 py-0.5 text-xs">
        Ctrl K
      </span>
    </button>
  );
}