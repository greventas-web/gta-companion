import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  User,
} from "lucide-react";

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
      <article className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_120px_rgba(236,72,153,.20)]">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        {/* IMAGE */}

        <div className="relative h-[320px] overflow-hidden">

          <Image
            src={character.image}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/50 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-300 backdrop-blur-xl">
            {character.role}
          </div>

        </div>

        {/* CONTENT */}

        <div className="relative p-6">

          <div className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500">
            {character.status}
          </div>

          <h2 className="mt-3 text-[32px] font-black leading-none tracking-[-0.04em] text-white transition duration-300 group-hover:text-pink-300">
            {character.name}
          </h2>

          <p className="mt-4 min-h-[72px] line-clamp-3 text-[16px] leading-7 text-zinc-400">
            {character.description}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

            <div className="flex items-center gap-3">

              <User
                size={18}
                className="text-pink-400"
              />

              <div>

                <div className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  First Appearance
                </div>

                <div className="mt-1 text-base font-semibold text-white">
                  {character.firstAppearance}
                </div>

              </div>

            </div>

          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">

              <BadgeCheck
                size={14}
                className="text-pink-400"
              />

              Official

            </div>

            <div className="flex items-center gap-2 font-semibold text-pink-400 transition duration-300 group-hover:translate-x-2">

              View Profile

              <ArrowRight size={18} />

            </div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>
    </Link>
  );
}