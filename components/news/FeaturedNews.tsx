"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";

import { NewsArticle } from "@/types/news";

type Props = {
  article: NewsArticle;
};

export default function FeaturedNews({
  article,
}: Props) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_60px_160px_rgba(236,72,153,.22)]">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="relative aspect-[21/9] overflow-hidden">

          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        </div>

        <div className="absolute inset-0 flex items-end">

          <div className="relative max-w-5xl p-10 md:p-14 lg:p-16">

            <div className="flex flex-wrap items-center gap-4">

              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400 backdrop-blur-xl">

                <Sparkles size={14} />

                Featured Story

              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 text-xs font-semibold text-zinc-300 backdrop-blur-xl">

                <Calendar size={14} />

                {article.date}

              </div>

            </div>

            <h2 className="mt-8 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {article.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-300">
              {article.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">
                {article.category}
              </span>

              <div className="flex items-center gap-2 font-semibold text-pink-400 transition duration-300 group-hover:translate-x-2">

                Read Article

                <ArrowRight size={18} />

              </div>

            </div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>
    </Link>
  );
}