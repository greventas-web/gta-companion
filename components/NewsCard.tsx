import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Newspaper,
} from "lucide-react";

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
      <article className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_120px_rgba(236,72,153,.20)]">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-pink-500/30 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-300 backdrop-blur-xl">
            {article.category}
          </div>

        </div>

        <div className="relative p-8">

          <div className="flex items-center gap-2 text-sm text-zinc-400">

            <Calendar
              size={16}
              className="text-pink-400"
            />

            <span>{article.date}</span>

          </div>

          <h3 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white transition duration-300 group-hover:text-pink-300">
            {article.title}
          </h3>

          <p className="mt-5 line-clamp-3 text-lg leading-8 text-zinc-400">
            {article.summary}
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

            <div className="flex items-center gap-3">

              <Newspaper
                size={18}
                className="text-pink-400"
              />

              <div>

                <div className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Category
                </div>

                <div className="mt-1 text-base font-semibold text-white">
                  {article.category}
                </div>

              </div>

            </div>

          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Rockstar News
            </span>

            <div className="flex items-center gap-2 font-semibold text-pink-400 transition duration-300 group-hover:translate-x-2">

              Read Article

              <ArrowRight size={18} />

            </div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>
    </Link>
  );
}