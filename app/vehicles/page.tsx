import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Vehicles"
        title="Vehicle Database"
        description="Browse every officially revealed GTA VI vehicle, including manufacturers, vehicle categories, performance information and detailed specifications sourced from Rockstar Games."
      />

      <PageStats
        stats={[
          {
            value: vehicles.length,
            label: "Confirmed Vehicles",
          },
          {
            value: "Official",
            label: "Rockstar Data",
          },
          {
            value: "100%",
            label: "Verified Information",
            accent: true,
          },
        ]}
      />

      <VehicleDatabase />

      <PageCTA
        title="More Vehicles Coming Soon"
        description="As Rockstar Games officially reveals additional cars, motorcycles, boats, aircraft and special vehicles, GTA Companion will continue expanding the database with specifications, screenshots and detailed information."
      />
    </PageShell>
  );
}