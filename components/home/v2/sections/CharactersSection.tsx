import Image from "next/image";
import Link from "next/link";

export default function CharactersSection() {
  return (
    <section className="relative overflow-hidden bg-[#040404] py-40">

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[170px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-[1700px] px-8">

        <div className="mb-16 flex items-end justify-between">

          <div>

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              Official Characters
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white lg:text-7xl">
              Jason & Lucia
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
              Discover everything officially revealed by Rockstar Games about
              the two protagonists of Grand Theft Auto VI.
            </p>

          </div>

          <Link
            href="/characters"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10 lg:block"
          >
            View Characters
          </Link>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <Link
            href="/characters/jason"
            className="group overflow-hidden rounded-[40px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]"
          >

            <div className="relative h-[760px]">

              <Image
                src="/images/characters/jason.jpg"
                alt="Jason"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-12">

                <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                  PROTAGONIST
                </div>

                <h3 className="mt-4 text-7xl font-black tracking-[-0.04em] text-white">
                  Jason
                </h3>

              </div>

            </div>

          </Link>

          <Link
            href="/characters/lucia"
            className="group overflow-hidden rounded-[40px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]"
          >

            <div className="relative h-[760px]">

              <Image
                src="/images/characters/lucia.jpg"
                alt="Lucia"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-12">

                <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                  PROTAGONIST
                </div>

                <h3 className="mt-4 text-7xl font-black tracking-[-0.04em] text-white">
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