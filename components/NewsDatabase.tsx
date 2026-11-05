"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import FeaturedNews from "@/components/news/FeaturedNews";
import NewsCard from "@/components/NewsCard";

import { news } from "@/data/news";

export default function NewsDatabase() {
  const [query, setQuery] = useState("");

  const filteredNews = useMemo(() => {
    const search = query.trim().toLowerCase();

    return news.filter(
      (article) =>
        article.title.toLowerCase().includes(search) ||
        article.category.toLowerCase().includes(search)
    );
  }, [query]);

  const featuredArticle = filteredNews[0];
  const remainingArticles = filteredNews.slice(1);

  return (
    <section className="mt-20">

      {featuredArticle && (
        <FeaturedNews article={featuredArticle} />
      )}

      <div className="mt-14 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search News
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
            Browse Articles
          </h2>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Search Rockstar Newswire posts, trailers, screenshots and official GTA VI announcements.
          </p>

        </div>

        <div className="relative">

          <Search
            size={20}
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search Rockstar news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-white/5 py-5 pl-14 pr-7 text-lg text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(236,72,153,.08)]"
          />

        </div>

      </div>

      <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            News Library
          </div>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white">
            {filteredNews.length} Articles
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Showing {filteredNews.length} of {news.length} official Rockstar articles.
          </p>

        </div>

      </div>

      {remainingArticles.length === 0 ? (

        <div className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-20 text-center">

          <h3 className="text-4xl font-black text-white">
            No Articles Found
          </h3>

          <p className="mt-6 text-lg text-zinc-400">
            Try changing your search.
          </p>

        </div>

      ) : (

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {remainingArticles.map((article) => (

            <NewsCard
              key={article.id}
              article={article}
            />

          ))}

        </div>

      )}

    </section>
  );
}