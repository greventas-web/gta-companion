import Image from "next/image";
import Link from "next/link";

export default function CharactersSection() {
  return (
    <section className="relative py-32 bg-[#040404]">

      <div className="mx-auto max-w-[1700px] px-8">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              Official Characters
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
              Jason & Lucia
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
              Discover everything officially revealed by Rockstar Games about
              the two protagonists of Grand Theft Auto VI.
            </p>

          </div>

          <Link
            href="/characters"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-pink-500/30 lg:block"
          >
            View Characters
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <Link
            href="/characters/jason"
            className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B]"
          >

            <div className="relative h-[700px]">

              <Image
                src="/images/characters/jason.jpg"
                alt="Jason"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10">

                <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                  PROTAGONIST
                </div>

                <h3 className="mt-4 text-6xl font-black text-white">
                  Jason
                </h3>

              </div>

            </div>

          </Link>

          <Link
            href="/characters/lucia"
            className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B]"
          >

            <div className="relative h-[700px]">

              <Image
                src="/images/characters/lucia.jpg"
                alt="Lucia"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10">

                <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                  PROTAGONIST
                </div>

                <h3 className="mt-4 text-6xl font-black text-white">
                  Lucia
                </h3>

              </div>

            </div>

          </Link>

        </div>

      </div>

    </section>
  );
}