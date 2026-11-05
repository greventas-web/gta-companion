import Link from "next/link";

import HomeContainer from "@/components/home/HomeContainer";
import Section from "@/components/home/Section";
import SectionHeader from "@/components/home/SectionHeader";

import NewsCard from "./NewsCard";

import { news } from "@/data/news";

export default function LatestNews() {
  const latest = news.slice(0, 3);

  return (
    <Section className="relative py-40">
      <HomeContainer>
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge="Latest Updates"
            title="Latest GTA VI News"
            description="Stay up to date with official Rockstar announcements, trailers, screenshots and community discoveries."
          />

          <Link
            href="/news"
            className="group inline-flex w-fit items-center rounded-2xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 px-8 py-4 font-semibold text-pink-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500 hover:text-white hover:shadow-[0_20px_60px_rgba(236,72,153,.35)]"
          >
            View All News

            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {latest.map((article) => (
            <NewsCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>
      </HomeContainer>
    </Section>
  );
}