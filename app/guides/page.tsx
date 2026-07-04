import SearchBar from "@/components/SearchBar";

import {
  Badge,
  Container,
  PageHeader,
  Section,
  Card,
} from "@/components/ui";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>GTA 6 Guides</Badge>

          <PageHeader
            title="Learn. Master. Dominate."
            description="From beginner walkthroughs to advanced money-making strategies, GTA Companion will become the ultimate GTA 6 knowledge base."
          />

          <SearchBar placeholder="Search guides..." />

          <div className="mt-8 flex flex-wrap gap-4">

            {[
              "All",
              "Money",
              "Missions",
              "Collectibles",
              "Businesses",
              "Vehicles",
              "Weapons",
            ].map((category) => (
              <button
                key={category}
                className="rounded-full border border-zinc-700 px-5 py-2 transition hover:border-pink-500 hover:text-pink-400"
              >
                {category}
              </button>
            ))}

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              "Best Ways to Make Money",
              "Beginner's Guide",
              "100% Completion Guide",
              "Business Guide",
              "Collectibles Guide",
              "Weapon Guide",
            ].map((guide) => (

              <Card
                key={guide}
                className="p-8 transition hover:-translate-y-2 hover:border-pink-500"
              >

                <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                  Guide Cover
                </div>

                <h3 className="text-2xl font-bold">
                  {guide}
                </h3>

                <p className="mt-3 text-zinc-400">
                  Complete step-by-step guide with screenshots, tips and interactive tools.
                </p>

              </Card>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}