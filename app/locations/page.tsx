import LocationCard from "@/components/LocationCard";
import DatabaseSection from "@/components/DatabaseSection";
import PageCTA from "@/components/PageCTA";
import PageGrid from "@/components/PageGrid";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { locations } from "@/data/locations";

export default function LocationsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Locations"
        title="Explore Leonida"
        description="Discover every officially revealed region in Grand Theft Auto VI, from the neon streets of Vice City to the remote wilderness of Mount Kalaga. GTA Companion only includes locations confirmed by Rockstar Games."
      />

      <PageStats
        stats={[
          {
            value: locations.length,
            label: "Confirmed Locations",
          },
          {
            value: "Leonida",
            label: "State Revealed",
          },
          {
            value: "100%",
            label: "Official Rockstar Sources",
            accent: true,
          },
        ]}
      />

      <DatabaseSection
        eyebrow="Official Map"
        title="Confirmed Regions"
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
        title="Leonida Will Continue To Grow"
        description="As Rockstar Games officially reveals more towns, landmarks, neighborhoods and hidden locations, GTA Companion will expand this interactive location database with new information."
      />
    </PageShell>
  );
}