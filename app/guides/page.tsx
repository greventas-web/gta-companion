import Link from "next/link";

import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>GTA 6 Guides</Badge>

          <PageTitle
            title="Learn. Master. Dominate."
            description="From beginner walkthroughs to advanced money-making strategies, GTA Companion will become the ultimate GTA VI knowledge base."
          />

          <SearchBar />

          <div className="mt-8 flex flex-wrap gap-4">
            {["All", "Money", "Beginner", "Completion"].map((category) => (
              <button
                key={category}
                className="rounded-full border border-zinc-700 px-5 py-2 transition hover:border-pink-500 hover:text-pink-400"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
              >
                <Card className="h-full p-8 transition hover:-translate-y-2 hover:border-pink-500">
                  <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                    Guide Cover
                  </div>

                  <h3 className="text-2xl font-bold">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {guide.description}
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