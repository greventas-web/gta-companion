import CharacterCard from "@/components/CharacterCard";

import { characters } from "@/data/characters";

export default function CharactersPage() {
  const protagonists = characters.filter((character) =>
    character.role.toLowerCase().includes("protagonist")
  ).length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040404] text-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-[-240px] top-[-160px] -z-10 h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[220px]" />

      <div className="pointer-events-none absolute right-[-240px] bottom-[-180px] -z-10 h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[220px]" />

      <section className="relative z-10 mx-auto max-w-[1700px] px-8 pt-36 pb-32">

        {/* Hero */}

        <div className="mb-20">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Official Rockstar Characters
          </div>

          <h1 className="mt-8 text-7xl font-black tracking-[-0.05em]">
            Character Database
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Meet every officially revealed GTA VI character including
            protagonists, supporting characters and future additions as
            Rockstar Games releases more information.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              {characters.length}
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Confirmed Characters
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              {protagonists}
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Playable Protagonists
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black text-pink-400">
              100%
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Official Rockstar Sources
            </p>

          </div>

        </div>

        {/* Characters */}

        <section className="mt-20">

          <div className="mb-10">

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              Official Cast
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Confirmed Characters
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {characters.map((character) => (

              <CharacterCard
                key={character.id}
                character={character}
              />

            ))}

          </div>

        </section>

        {/* Bottom CTA */}

        <section className="mt-28 rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-transparent to-violet-500/10 p-14 text-center">

          <h2 className="text-5xl font-black">
            More Characters Coming Soon
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
            GTA Companion only includes officially revealed Rockstar
            characters. As Rockstar reveals more people throughout
            Leonida, this database will continue to grow.
          </p>

        </section>

      </section>

    </main>
  );
}