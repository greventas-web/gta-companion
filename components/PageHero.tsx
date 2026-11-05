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
    <section className="relative mb-10 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black px-6 py-8 shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:px-10 sm:py-10">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.08),transparent_55%)]" />

      <div className="relative">

        <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400 backdrop-blur-xl">

          <Sparkles size={14} />

          {badge}

        </div>

        <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-[-0.03em] text-white lg:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
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