import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import NewsCard from "@/components/NewsCard";

import { news } from "@/data/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = news.find(
    (n) => n.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedNews = news
    .filter(
      (n) =>
        n.category === article.category &&
        n.slug !== article.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto max-w-[1700px] px-8 py-20">

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "News",
              href: "/news",
            },
            {
              label: article.title,
            },
          ]}
        />

        <div className="mt-12 grid gap-14 xl:grid-cols-[42%_58%]">

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

            <div className="relative aspect-[16/10]">

              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">
              {article.category}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight">
              {article.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
              {article.summary}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                label="Category"
                value={article.category}
              />

              <Info
                label="Published"
                value={article.date}
              />

              <Info
                label="Source"
                value="Rockstar Games"
              />

              <Info
                label="Status"
                value="Official"
              />

            </div>

          </div>

        </div>

        <section className="mt-28">

          <h2 className="text-5xl font-black">
            Related News
          </h2>

          <p className="mt-3 text-zinc-400">
            More official Rockstar announcements.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedNews.map((article) => (

              <NewsCard
                key={article.id}
                article={article}
              />

            ))}

          </div>

        </section>

      </section>

    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-black">
        {value}
      </h3>

    </div>
  );
}