import { ReactNode } from "react";

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
    <section className="relative mb-24 overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.08),transparent_60%)]" />

      <div className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
        {badge}
      </div>

      <h1 className="mt-8 max-w-5xl text-7xl font-black tracking-[-0.05em] leading-[0.9] text-white">
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

    </section>
  );
}