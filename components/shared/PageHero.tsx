type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHero({
  badge,
  title,
  description,
}: Props) {
  return (
    <section className="relative mb-24 overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#09090B] to-black px-10 py-16 lg:px-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-pink-500/15 blur-[140px]" />

      <div className="relative z-10">

        <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
          {badge}
        </div>

        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white lg:text-8xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-300">
          {description}
        </p>

      </div>

    </section>
  );
}