import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";
import { characters } from "@/data/characters";
import { locations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { pageMetadata } from "@/lib/launch";
import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata(
  "Search",
  "Search the GTA Companion databases for vehicles, characters, locations, and the rest of the fan notes. Unofficial fan site."
);


export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Global Search</Badge>

          <PageTitle
            title="Search GTA Companion"
            description="Instantly search vehicles, characters, locations, businesses, weapons, brands, guides, news and much more."
          />

          <div className="mt-12">

            <SearchBar />

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <StatsCard
              label="Vehicles"
              value={String(vehicles.length)}
            />

            <StatsCard
              label="Characters"
              value={String(characters.length)}
            />

            <StatsCard
              label="Locations"
              value={String(locations.length)}
            />

            <StatsCard
              label="Database"
              value="Growing"
            />

          </div>

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-16 text-center">

            <div className="text-8xl">
              🔍
            </div>

            <h2 className="mt-8 text-5xl font-black">
              Powerful Search Coming Soon
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
              Soon you&apos;ll be able to search across the entire GTA Companion
              database with instant results, smart filters, categories,
              suggestions and live search as you type.
            </p>

          </Card>

        </Container>

      </Section>

    </main>
  );
}