import { TrendingUp } from "lucide-react";

type Props = {
  value: string | number;
  label: string;
  accent?: boolean;
};

export default function StatCard({
  value,
  label,
  accent = false,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]">

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-500/10 opacity-0 blur-[120px] transition duration-500 group-hover:opacity-100" />

      <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-[120px] transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="mb-6 flex items-center justify-between">

          <span className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500">
            Statistic
          </span>

          <TrendingUp
            size={18}
            className={`transition duration-300 ${
              accent
                ? "text-pink-400"
                : "text-zinc-500 group-hover:text-pink-400"
            }`}
          />

        </div>

        <div
          className={`text-5xl font-black tracking-[-0.04em] transition duration-300 ${
            accent
              ? "text-pink-400"
              : "text-white group-hover:text-pink-300"
          }`}
        >
          {value}
        </div>

        <p className="mt-4 text-lg text-zinc-400">
          {label}
        </p>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

    </div>
  );
}