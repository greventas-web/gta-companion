import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_45px_120px_rgba(236,72,153,.22)] ${className}`}
    >
      {/* Pink Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-500/15 blur-[120px] transition duration-500 group-hover:opacity-100" />

      {/* Purple Glow */}

      <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-violet-500/15 blur-[120px]" />

      {/* Shine */}

      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}