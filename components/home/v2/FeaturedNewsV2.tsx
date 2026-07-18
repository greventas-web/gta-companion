import Image from "next/image";
import Link from "next/link";

import { news } from "@/data/news";

export default function FeaturedNewsV2() {
  const latest = news.slice(0, 3);

  return (
    <section className="relative mx-auto max-w-[1700px] px-8 py-32">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,.08),transparent_70%)]" />

      <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
            ROCKSTAR NEWS
          </div>

          <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
            Latest Official Updates
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Every trailer, screenshot, announcement and Rockstar Games update
            collected in one place.
          </p>

        </div>

        <Link
          href="/news"
          className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500 hover:text-white"
        >
          View All News →
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {latest.map((article) => (

          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/30 hover:shadow-[0_45px_120px_rgba(236,72,153,.20)]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/60 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400 backdrop-blur-xl">
                {article.category}
              </div>

            </div>

            <div className="p-8">

              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                {article.date}
              </div>

              <h3 className="mt-5 text-4xl font-black leading-tight text-white transition group-hover:text-pink-400">
                {article.title}
              </h3>

              <p className="mt-6 line-clamp-3 text-lg leading-8 text-zinc-400">
                {article.summary}
              </p>

              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                <span className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-pink-400">
                  Official Rockstar
                </span>

                <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-2">
                  Read →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}