import Link from "next/link";

export default function FeaturedMedia() {
  return (
    <section className="mx-auto max-w-[1700px] px-8 py-24">

      <div className="mb-12 flex items-end justify-between">

        <div>

          <div className="text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            OFFICIAL MEDIA
          </div>

          <h2 className="mt-4 text-5xl font-black">
            Rockstar Gallery
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Browse every official trailer, screenshot, artwork and media
            released by Rockstar Games for Grand Theft Auto VI.
          </p>

        </div>

        <Link
          href="/media"
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 font-semibold text-pink-300 transition hover:bg-pink-500 hover:text-white"
        >
          View Media Library
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        <Link
          href="/media"
          className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition hover:border-pink-500"
        >

          <img
            src="/images/media/trailer-2.jpg"
            alt="Trailer 2"
            className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="p-8">

            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              Trailer
            </div>

            <h3 className="mt-4 text-3xl font-black">
              Trailer 2
            </h3>

          </div>

        </Link>

        <Link
          href="/media"
          className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition hover:border-pink-500"
        >

          <img
            src="/images/media/trailer-1.jpg"
            alt="Trailer 1"
            className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="p-8">

            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              Trailer
            </div>

            <h3 className="mt-4 text-3xl font-black">
              Trailer 1
            </h3>

          </div>

        </Link>

        <Link
          href="/media"
          className="group flex items-center justify-center rounded-[36px] border border-dashed border-pink-500/30 bg-pink-500/5 p-12 text-center transition hover:border-pink-500 hover:bg-pink-500/10"
        >

          <div>

            <div className="text-5xl font-black">
              60+
            </div>

            <p className="mt-4 text-lg text-zinc-400">
              Official screenshots, artwork and wallpapers available.
            </p>

          </div>

        </Link>

      </div>

    </section>
  );
}