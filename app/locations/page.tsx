import LocationCard from "@/components/LocationCard";
import DatabaseSection from "@/components/DatabaseSection";
import PageCTA from "@/components/PageCTA";
import PageGrid from "@/components/PageGrid";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { locations } from "@/data/locations";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 locations",
  "Vice City, Leonida, and the other regions Rockstar has shown for Grand Theft Auto VI. Unofficial fan site."
);

export default function LocationsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Grand Theft Auto Locations"
        title="Location Database"
        description="Explore cities, towns, regions, landmarks and iconic destinations from across the Grand Theft Auto universe. GTA Companion clearly identifies officially confirmed GTA VI locations while preserving the history of the series."
      />

      <DatabaseSection
        eyebrow="Location Database"
        title={`${locations.length} Locations`}
      >
        <PageGrid>
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
            />
          ))}
        </PageGrid>
      </DatabaseSection>

      <PageCTA
        title="The World Continues to Expand"
        description="As Rockstar Games reveals new cities, districts, landmarks and regions, GTA Companion will continue expanding the location database with verified information, screenshots and detailed location pages."
      />
    </PageShell>
  );
}