import Link from "next/link";
import {
  Film,
  ImageIcon,
  Palette,
  Download,
  ArrowRight,
} from "lucide-react";

import FeaturedTrailer from "./FeaturedTrailer";
import TrailerCard from "./TrailerCard";

import { trailers } from "../../src/data/media/trailers";

export default function MediaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-240px] top-[-150px] h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[220px]" />

      <div className="absolute right-[-240px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[220px]" />

      <div className="relative mx-auto max-w-[1700px] px-8 pb-32 pt-36">

        <div className="mb-20">

          <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            <Film size={14} />
            Official Rockstar Media
          </div>

          <h1 className="mt-8 text-7xl font-black tracking-[-0.05em]">
            GTA VI Media Library
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Every official trailer, screenshot, artwork and logo released by
            Rockstar Games collected in one premium media library.
          </p>

        </div>

        <FeaturedTrailer
          title={trailers[1].title}
          youtubeId={trailers[1].youtubeId}
          releaseDate={trailers[1].releaseDate}
        />

        {/* Quick Navigation */}

        <section className="mt-16">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <Link
              href="/media"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition hover:border-pink-500/40 hover:-translate-y-1"
            >
              <Film className="text-pink-400" size={34} />

              <h3 className="mt-6 text-2xl font-black">
                Trailers
              </h3>

              <p className="mt-3 text-zinc-400">
                Watch every official GTA VI trailer.
              </p>

            </Link>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

              <ImageIcon className="text-pink-400" size={34} />

              <h3 className="mt-6 text-2xl font-black">
                Screenshots
              </h3>

              <p className="mt-3 text-zinc-400">
                Official screenshots coming soon.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

              <Palette className="text-pink-400" size={34} />

              <h3 className="mt-6 text-2xl font-black">
                Artwork
              </h3>

              <p className="mt-3 text-zinc-400">
                Official Rockstar artwork gallery.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

              <Download className="text-pink-400" size={34} />

              <h3 className="mt-6 text-2xl font-black">
                Downloads
              </h3>

              <p className="mt-3 text-zinc-400">
                Logos, wallpapers and promotional assets.
              </p>

            </div>

          </div>

        </section>

        {/* Trailers */}

        <section className="mt-28">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
                Official Videos
              </div>

              <h2 className="mt-4 text-5xl font-black">
                Rockstar Trailers
              </h2>

            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-300">
              {trailers.length} Videos
            </div>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {trailers.map((trailer) => (
              <TrailerCard
                key={trailer.id}
                title={trailer.title}
                youtubeId={trailer.youtubeId}
                releaseDate={trailer.releaseDate}
              />
            ))}

          </div>

        </section>

        {/* Bottom CTA */}

        <section className="mt-32 rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-transparent to-violet-500/10 p-14 text-center">

          <h2 className="text-5xl font-black">
            More Official Media Coming Soon
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
            As Rockstar Games releases new screenshots, artwork and promotional
            assets, GTA Companion will automatically expand its official media
            library.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-5 font-bold transition hover:scale-[1.02]"
          >
            Join Free
            <ArrowRight size={18} />
          </Link>

        </section>

      </div>

    </main>
  );
}