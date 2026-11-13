import { ReactNode } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

type Props = {
  badge: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({
  badge,
  title,
  description,
  children,
  image,
  imageAlt = "",
}: Props) {
  return (
    <section className={`relative mb-10 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black px-6 py-8 shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:px-10 sm:py-10 ${image ? "min-h-[240px] sm:min-h-[320px]" : ""}`}>

      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.08),transparent_55%)]" />
      )}

      <div className={`relative ${image ? "flex min-h-[200px] flex-col justify-end sm:min-h-[260px]" : ""}`}>

        <div className="flex w-fit max-w-full items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-pink-400 backdrop-blur-xl">

          <Sparkles className="shrink-0" size={14} />

          <span className="min-w-0 break-words text-[10px] font-black uppercase leading-5 tracking-[0.12em] sm:text-[11px] sm:tracking-[0.2em]">
            {badge}
          </span>

        </div>

        <h1 className="mt-5 max-w-5xl break-words text-4xl font-black leading-tight tracking-[-0.03em] text-white lg:text-5xl">
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