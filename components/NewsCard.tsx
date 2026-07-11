import Image from "next/image";
import Link from "next/link";

import { NewsArticle } from "@/types/news";

type Props = {
  article: NewsArticle;
};

export default function NewsCard({
  article,
}: Props) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_40px_120px_rgba(236,72,153,.18)]">

        {/* Ambient */}

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/10 opacity-0 blur-[120px] transition-all duration-500 group-hover:opacity-100" />

        <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-fuchsia-500/10 opacity-0 blur-[120px] transition-all duration-500 group-hover:opacity-100" />

        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

          <div className="absolute inset-0 bg-pink-500/0 transition-all duration-500 group-hover:bg-pink-500/5" />

          <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-pink-300 backdrop-blur-2xl">

            {article.category}

          </div>

        </div>

        {/* Content */}

        <div className="relative p-8">

          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-zinc-500">

            {article.publishedAt}

          </p>

          <h3 className="mt-3 text-[32px] font-black tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-pink-300">

            {article.title}

          </h3>

          <p className="mt-4 line-clamp-3 text-[17px] leading-7 text-zinc-400">

            {article.description}

          </p>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 backdrop-blur-xl">

              {article.readingTime}

            </span>

            <span className="font-semibold text-pink-400 transition-all duration-300 group-hover:translate-x-1.5">

              Read Article →

            </span>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>
    </Link>
  );
}