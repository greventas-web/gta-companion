import Link from "next/link";

import SimpleCard from "@/components/simple/SimpleCard";
import { news } from "@/data/news";
import { shortDate } from "@/lib/simple/text";

export default function FeaturedNewsV2() {
  const latest = news.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">News</h2>
        <Link
          href="/news"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-bold transition hover:border-pink-500/40 hover:bg-pink-500 hover:text-white"
        >
          All news →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((article) => (
          <SimpleCard
            key={article.slug}
            href={`/news/${article.slug}`}
            title={article.title}
            image={article.image}
            imageAlt={article.imageAlt}
            tag={article.category}
            eyebrow={shortDate(article.date)}
            kind="news"
          />
        ))}
      </div>
    </section>
  );
}
