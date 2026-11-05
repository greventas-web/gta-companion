import Link from "next/link";

import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function FeaturedCharacters() {
  return (
    <section className="mx-auto max-w-[1700px] px-8 py-24">

      <div className="mb-12 flex items-end justify-between">

        <div>

          <div className="text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            FEATURED CHARACTERS
          </div>

          <h2 className="mt-4 text-5xl font-black">
            Meet The Cast
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Browse every officially confirmed GTA VI character revealed by Rockstar Games.
          </p>

        </div>

        <Link
          href="/characters"
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 font-semibold text-pink-300 transition hover:bg-pink-500 hover:text-white"
        >
          View All Characters
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-4">

        {characters.slice(0, 4).map((character) => (

          <CharacterCard
            key={character.id}
            character={character}
          />

        ))}

      </div>

    </section>
  );
}