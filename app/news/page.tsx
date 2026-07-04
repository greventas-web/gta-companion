import SearchBar from "@/components/SearchBar";

import {
  Badge,
  Card,
  Container,
  PageHeader,
  Section,
  Button,
} from "@/components/ui";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>GTA 6 News</Badge>

          <PageHeader
            title="Stay Updated."
            description="The latest Rockstar announcements, GTA 6 updates, patch notes, trailers, community discoveries and official news."
          />

          <SearchBar placeholder="Search news..." />

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              "Rockstar Newswire",
              "GTA 6 Updates",
              "Community Highlights",
              "Patch Notes",
              "Upcoming Features",
              "Weekly Roundup",
            ].map((article) => (

              <Card
                key={article}
                className="p-8 transition hover:-translate-y-2 hover:border-pink-500"
              >

                <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                  News Image
                </div>

                <h2 className="text-2xl font-bold">
                  {article}
                </h2>

                <p className="mt-4 text-zinc-400">
                  Read the latest GTA Companion coverage with beautiful layouts,
                  screenshots and easy-to-read summaries.
                </p>

                <div className="mt-6">
                  <Button>
                    Read Article
                  </Button>
                </div>

              </Card>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}