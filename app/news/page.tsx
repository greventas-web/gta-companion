import Link from "next/link";

import SearchBar from "@/components/SearchBar";

import {
  Badge,
  Card,
  Container,
  PageHeader,
  Section,
} from "@/components/ui";

import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>GTA 6 News</Badge>

          <PageHeader
            title="Stay Updated."
            description="The latest Rockstar announcements, GTA VI updates, patch notes, trailers, community discoveries and official news."
          />

          <SearchBar />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {news.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
              >
                <Card className="h-full p-8 transition hover:-translate-y-2 hover:border-pink-500">
                  <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                    News Image
                  </div>

                  <h2 className="text-2xl font-bold">
                    {article.title}
                  </h2>

                  <p className="mt-4 text-zinc-400">
                    {article.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}