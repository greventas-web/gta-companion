import Link from "next/link";

import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI News</Badge>

          <PageTitle
            title="News Database"
            description="Stay up to date with every official Rockstar Games announcement, trailer, screenshot, Newswire post and GTA VI update."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Articles"
              value={news.length}
            />

            <StatsCard
              label="Official"
              value="100%"
            />

            <StatsCard
              label="Updated"
              value="Live"
            />

          </div>

          <div className="mt-12">

            <SearchBar />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {news.map((article) => (

              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group"
              >

                <Card className="h-full overflow-hidden rounded-[36px] border-zinc-800 bg-zinc-900 p-0 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

                  <div className="flex h-56 items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-zinc-500">

                    News Image

                  </div>

                  <div className="p-8">

                    <span className="text-sm uppercase tracking-[0.35em] text-pink-400">
                      Rockstar News
                    </span>

                    <h2 className="mt-4 text-3xl font-black transition group-hover:text-pink-400">
                      {article.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-400">
                      {article.description}
                    </p>

                    <div className="mt-8 border-t border-zinc-800 pt-6">

                      <span className="font-bold text-pink-400 transition group-hover:translate-x-2">
                        Read Article →
                      </span>

                    </div>

                  </div>

                </Card>

              </Link>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}