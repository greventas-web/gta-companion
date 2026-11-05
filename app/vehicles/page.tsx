import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function VehiclesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Vehicle Database"
        description="Browse supercars, muscle cars, aircraft, and boats in this fan database. The pictures are original illustrations made for GTA Companion."
      />

      <VehicleDatabase />

      <PageCTA
        title="The Database Continues to Grow"
        description="New fan notes and original illustrations are added when there is solid public information to write about."
      />
    </PageShell>
  );
}