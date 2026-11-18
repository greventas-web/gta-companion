import SearchBar from "@/components/SearchBar";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";
import { characters } from "@/data/characters";
import { locations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { pageMetadata } from "@/lib/launch";
import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

export const metadata = {
  ...pageMetadata(
    "Search",
    "Search the GTA Companion databases for vehicles, characters, locations, and the rest of the fan notes. Unofficial fan site."
  ),
  robots: { index: false, follow: true },
};


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

        </Container>

      </Section>

    </main>
  );
}