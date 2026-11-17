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
    <section className="relative mb-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#09090B] to-black px-6 py-12 sm:rounded-[42px] sm:px-10 sm:py-16 lg:px-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-pink-500/15 blur-[140px]" />

      <div className="relative z-10">

        <div className="inline-flex max-w-full break-words rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-pink-400 sm:px-6 sm:py-3 sm:tracking-[0.45em]">
          {badge}
        </div>

        <h1 className="mt-8 max-w-5xl break-words text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl sm:leading-[0.9] lg:text-8xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-300">
          {description}
        </p>

      </div>

    </section>
  );
}