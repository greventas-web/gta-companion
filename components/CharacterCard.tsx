import Link from "next/link";

import { Character } from "@/types/character";

type Props = {
  character: Character;
};

export default function CharacterCard({
  character,
}: Props) {
  return (
    <Link
      href={`/characters/${character.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_120px_rgba(236,72,153,.18)]">

        {/* Image */}

        <div className="relative h-[560px] overflow-hidden bg-red-500">

          <img
            src={character.image}
            alt={character.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/60 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400 backdrop-blur-xl">
            {character.role}
          </div>

        </div>

        {/* Content */}

        <div className="p-8">

          <div className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500">
            {character.status}
          </div>

          <h2 className="mt-4 text-[38px] font-black leading-none tracking-[-0.04em] text-white">
            {character.name}
          </h2>

          <p className="mt-5 line-clamp-3 text-[17px] leading-8 text-zinc-400">
            {character.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
              Official
            </span>

            <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-1.5">
              View Profile →
            </span>

          </div>

          <div className="mt-6 text-sm text-zinc-500">
            First Appearance: {character.firstAppearance}
          </div>

        </div>

      </article>
    </Link>
  );
}