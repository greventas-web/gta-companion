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

import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Guides</Badge>

          <PageTitle
            title="Guide Database"
            description="Master GTA VI with premium walkthroughs, money guides, collectibles, missions and completion strategies."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Guides"
              value={guides.length}
            />

            <StatsCard
              label="Categories"
              value="4+"
            />

            <StatsCard
              label="Updated"
              value="Live"
            />

          </div>

          <div className="mt-12">

            <SearchBar />

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            {["All", "Money", "Beginner", "Completion"].map((category) => (

              <button
                key={category}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
              >
                {category}
              </button>

            ))}

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {guides.map((guide) => (

              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                className="group"
              >

                <Card className="h-full overflow-hidden rounded-[36px] border-zinc-800 bg-zinc-900 p-0 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

                  <div className="flex h-56 items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-zinc-500">

                    Guide Cover

                  </div>

                  <div className="p-8">

                    <span className="text-sm uppercase tracking-[0.35em] text-pink-400">
                      Guide
                    </span>

                    <h2 className="mt-4 text-3xl font-black transition group-hover:text-pink-400">
                      {guide.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-400">
                      {guide.description}
                    </p>

                    <div className="mt-8 border-t border-zinc-800 pt-6">

                      <span className="font-bold text-pink-400 transition group-hover:translate-x-2">
                        Read Guide →
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