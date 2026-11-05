import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function VehiclesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Vehicles"
        title="Vehicle Database"
        description="Browse every officially confirmed GTA VI vehicle, from supercars and muscle cars to aircraft, boats and commercial vehicles. Every entry is sourced from official Rockstar Games media."
      />

      <VehicleDatabase />

      <PageCTA
        title="The Database Continues to Grow"
        description="Every official Rockstar reveal is added to GTA Companion with verified information, screenshots, classifications and detailed vehicle pages. New vehicles will appear here as soon as they are officially announced."
      />
    </PageShell>
  );
}