import Image from "next/image";
import Link from "next/link";

import { Animal } from "@/types/animal";

type Props = {
  animal: Animal;
};

export default function AnimalCard({
  animal,
}: Props) {
  return (
    <Link
      href={`/animals/${animal.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_130px_rgba(236,72,153,.20)]">

        {/* Ambient Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-300 backdrop-blur-xl">
            {animal.category}
          </div>
        </div>

        {/* Content */}

        <div className="relative p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-zinc-500">
            {animal.habitat}
          </p>

          <h3 className="mt-3 text-[34px] font-black tracking-[-0.04em] text-white transition duration-300 group-hover:text-pink-300">
            {animal.name}
          </h3>

          <p className="mt-4 min-h-[84px] line-clamp-3 text-[17px] leading-7 text-zinc-400">
            {animal.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 backdrop-blur-xl">
              {animal.firstAppearance}
            </span>

            <span className="font-semibold text-pink-400 transition duration-300 group-hover:translate-x-2">
              View Details →
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>
    </Link>
  );
}