import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function PageCTA({
  title,
  description,
  buttonText = "Explore Now",
  buttonHref = "/",
}: Props) {
  return (
    <section className="relative mt-32 overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black px-12 py-20 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

      <div className="absolute -left-44 -top-44 h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="absolute -right-44 -bottom-44 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">

        <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400 backdrop-blur-xl">

          <Sparkles size={14} />

          GTA Companion

        </div>

        <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-white lg:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(236,72,153,.35)]"
        >
          {buttonText}

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

    </section>
  );
}