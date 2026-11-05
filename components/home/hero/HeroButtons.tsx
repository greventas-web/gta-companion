import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Link
        href="/vehicles"
        className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-10 py-5 text-lg font-bold text-white shadow-[0_15px_45px_rgba(236,72,153,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(236,72,153,.45)]"
      >
        Browse Database

        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>

      <Link
        href="/guides"
        className="rounded-2xl border border-white/10 bg-white/[0.05] px-10 py-5 text-lg font-bold text-white backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-white/[0.08]"
      >
        Explore Guides
      </Link>
    </div>
  );
}
