import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      type="button"
      className="group hidden h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/[0.05] hover:text-white hover:shadow-[0_0_35px_rgba(236,72,153,0.18)] lg:flex"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 transition-all duration-300 group-hover:bg-pink-500/20 group-hover:text-pink-300">
        <Search size={16} />
      </div>

      <span className="min-w-[180px] text-left">
        Search vehicles, characters...
      </span>

      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400 transition-colors duration-300 group-hover:border-pink-500/30 group-hover:text-zinc-200">
        Ctrl K
      </span>
    </button>
  );
}