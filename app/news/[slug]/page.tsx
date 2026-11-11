import Image from "@/components/SafeImage";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Calendar,
  Newspaper,
  Building2,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import NewsCard from "@/components/NewsCard";
import ShareButtons from "@/components/news/ShareButtons";

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

  const article = news.find((n) => n.slug === slug);

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
    <main className="min-h-screen bg-[#040404] text-white">
      <section className="mx-auto max-w-[1700px] px-8 pb-20 pt-44">
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

        <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
            <div className="relative aspect-[16/10]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">
              {article.category}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-[-0.03em]">
              {article.title}
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
              {article.summary}
            </p>

            <div className="mt-10">
              <ShareButtons title={article.title} />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <Info
                icon={<Newspaper size={18} />}
                label="Category"
                value={article.category}
              />

              <Info
                icon={<Calendar size={18} />}
                label="Published"
                value={article.date}
              />

              <Info
                icon={<Building2 size={18} />}
                label="Source"
                value="Rockstar Games"
              />

              <Info
                icon={<BadgeCheck size={18} />}
                label="Status"
                value="Official"
              />
            </div>
          </div>
        </div>

        <section className="mt-24 rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-10 md:p-14">
          <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
            Article
          </div>

          <div className="prose prose-invert mt-8 max-w-none">
            <p className="text-xl leading-9 text-zinc-300">
              {article.summary}
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              Rockstar Games officially announced this update as part of its
              ongoing coverage of Grand Theft Auto VI. GTA Companion tracks
              every official announcement, trailer, screenshot and Newswire
              post to provide players with an organized reference library.
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              As Rockstar releases additional information, this article will be
              expanded with new details, media and related content to keep it
              accurate and up to date.
            </p>
          </div>
        </section>

        <section className="mt-28">
          <div className="mb-12">
            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              Related Content
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Related News
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              More official Rockstar announcements from the same category.
            </p>
          </div>

          {relatedNews.length === 0 ? (
            <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-20 text-center">
              <h3 className="text-4xl font-black">
                No Related Articles
              </h3>

              <p className="mt-5 text-zinc-400">
                More Rockstar news will appear here as it becomes available.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedNews.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
      <div className="flex items-center gap-3 text-pink-400">
        {icon}

        <span className="text-xs font-bold uppercase tracking-[0.25em]">
          {label}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-black text-white">
        {value}
      </h3>
    </div>
  );
}