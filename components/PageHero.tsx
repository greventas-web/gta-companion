import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type Props = {
  badge: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({
  badge,
  title,
  description,
  children,
}: Props) {
  return (
    <section className="relative mb-24 overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black px-10 py-20 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[170px]" />

      <div className="absolute -right-40 bottom-[-160px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[170px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.08),transparent_55%)]" />

      <div className="relative">

        <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400 backdrop-blur-xl">

          <Sparkles size={14} />

          {badge}

        </div>

        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white lg:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
          {description}
        </p>

        {children && (
          <div className="mt-12">
            {children}
          </div>
        )}

      </div>

    </section>
  );
}