"use client";

import { useMemo, useState } from "react";

import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

export default function NewsDatabase() {
  const [query, setQuery] = useState("");

  const filteredNews = useMemo(() => {
    const search = query.toLowerCase();

    return news.filter(
      (article) =>
        article.title.toLowerCase().includes(search) ||
        article.category.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <section className="mt-20">

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10">

        <div className="mb-8">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Search News
          </div>

          <h2 className="mt-4 text-4xl font-black">
            Browse News
          </h2>

        </div>

        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-7 py-5 text-lg outline-none focus:border-pink-500"
        />

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredNews.map((article) => (

          <NewsCard
            key={article.id}
            article={article}
          />

        ))}

      </div>

    </section>
  );
}