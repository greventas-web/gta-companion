
import FeaturedTrailer from "./FeaturedTrailer";
import OfficialGallery from "./OfficialGallery";
import TrailerCard from "./TrailerCard";

import { IMAGE_CREDIT } from "@/lib/site";
import { trailers } from "../../src/data/media/trailers";

export default function MediaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-240px] top-[-150px] h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[220px]" />

      <div className="absolute right-[-240px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[220px]" />

      <div className="relative mx-auto max-w-[1700px] px-4 pb-32 pt-36 sm:px-8 sm:pt-44">

        <div className="mb-20">

          <h1 className="break-words text-4xl font-black tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Media
          </h1>

        </div>

        <FeaturedTrailer
          title={trailers[0].title}
          youtubeId={trailers[0].youtubeId}
          releaseDate={trailers[0].releaseDate}
        />

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

            {trailers.slice(1).map((trailer) => (
              <TrailerCard
                key={trailer.id}
                title={trailer.title}
                youtubeId={trailer.youtubeId}
                releaseDate={trailer.releaseDate}
              />
            ))}

          </div>

        </section>

        <OfficialGallery />

        <p className="mt-10 text-xs text-zinc-500">{IMAGE_CREDIT}</p>

      </div>

    </main>
  );
}