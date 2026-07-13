import FeaturedTrailer from "./FeaturedTrailer";
import TrailerCard from "./TrailerCard";

import { trailers } from "../../src/data/media/trailers";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <div className="mx-auto max-w-[1700px] px-8 pt-40 pb-32">

        <div className="mb-16">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Official Rockstar Media
          </div>

          <h1 className="mt-8 text-6xl font-black tracking-[-0.05em]">
            GTA VI Media
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
            Browse every official trailer, screenshot, artwork and logo released by Rockstar Games.
          </p>

        </div>

        <FeaturedTrailer
          title={trailers[1].title}
          youtubeId={trailers[1].youtubeId}
          releaseDate={trailers[1].releaseDate}
        />

        <section className="mt-24">

          <div className="mb-10 flex items-center justify-between">

            <h2 className="text-4xl font-black">
              Official Trailers
            </h2>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-400">
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

      </div>

    </main>
  );
}