import Image from "next/image";
import Link from "next/link";
import { Play, Images } from "lucide-react";

export default function MediaSection() {
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
              OFFICIAL MEDIA
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white lg:text-7xl">
              Trailers & Screenshots
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
              Every official trailer, screenshot and artwork released by
              Rockstar Games in one beautiful gallery.
            </p>

          </div>

          <Link
            href="/media"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-pink-500/40 hover:bg-white/10 lg:block"
          >
            Open Media
          </Link>

        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          <Link
            href="/media"
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]"
          >

            <div className="relative h-[680px]">

              <Image
                src="/images/news/trailer2.jpg"
                alt="Trailer 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-12">

                <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-300">

                  <Play size={14} />

                  Trailer 2

                </div>

                <h3 className="mt-7 text-6xl font-black tracking-[-0.03em] text-white">
                  Watch Every Official Reveal
                </h3>

                <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
                  Experience every trailer, screenshot and promotional artwork
                  released for Grand Theft Auto VI.
                </p>

              </div>

            </div>

          </Link>

          <div className="rounded-[36px] border border-white/10 bg-[#09090B] p-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

              <Images size={34} />

            </div>

            <h3 className="mt-8 text-4xl font-black text-white">
              Official Gallery
            </h3>

            <p className="mt-6 leading-8 text-zinc-300">
              Browse Rockstar screenshots, logos, key art and promotional
              media in full resolution.
            </p>

            <Link
              href="/media"
              className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 font-bold text-white transition hover:brightness-110"
            >
              Browse Gallery
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}