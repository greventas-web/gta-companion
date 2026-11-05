import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_25px_80px_rgba(236,72,153,.18)]">

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

      <div className="relative p-8 lg:p-10">

        {children}

      </div>

    </div>
  );
}