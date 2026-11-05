import LeonidaMap from "@/components/map/LeonidaMap";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function MapPage() {
  return (
    <PageShell>

      <PageHero
        badge="Interactive Leonida Map"
        title="Explore Leonida"
        description="Navigate the State of Leonida through GTA Companion's interactive map. Browse regions, discover locations, businesses, characters and vehicles officially revealed by Rockstar Games."
      />

      <LeonidaMap />

      <PageCTA
        title="The Map Will Continue To Expand"
        description="The interactive Leonida map will continue growing as Rockstar Games reveals new regions, cities, landmarks, businesses and points of interest throughout Grand Theft Auto VI."
        buttonText="Browse Locations"
        buttonHref="/locations"
      />

    </PageShell>
  );
}