import Image from "next/image";
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
      <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">

        <div className="relative aspect-[3/4] bg-black">

          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <div className="p-6">

          <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400">
            {character.role}
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            {character.name}
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            {character.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">

            <span className="text-sm text-zinc-500">
              {character.status}
            </span>

            <span className="font-semibold text-pink-400 transition group-hover:translate-x-1">
              View →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}