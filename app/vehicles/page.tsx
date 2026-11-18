import CitedNotes from "@/components/CitedNotes";
import JsonLd from "@/components/JsonLd";
import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { vehicles } from "@/data/vehicles";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { vehicleCounts } from "@/src/data/launch/launch-facts";

export const metadata = pageMetadata(
  "GTA 6 Cars List",
  `Unofficial GTA 6 cars list: ${vehicleCounts.total} vehicles confirmed at launch (${vehicleCounts.baseModels} base models and ${vehicleCounts.standout} Standout vehicles), plus named entries in the database, with sources.`
);

export default function VehiclesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 vehicles",
          "/vehicles",
          vehicles.map((vehicle) => ({
            name: vehicle.name,
            url: `/vehicles/${vehicle.slug}`,
          }))
        )}
      />
      <PageHero
        badge="Unofficial fan database"
        title="Vehicle Database"
        description={`${vehicleCounts.total} vehicles are confirmed in the game: ${vehicleCounts.baseModels} base models and ${vehicleCounts.standout} Standout vehicles. Named entries in the database are shown below, with sources. Last updated November 18, 2026.`}
      />

      <CitedNotes
        eyebrow="Confirmed at launch"
        title={`${vehicleCounts.total} vehicles in the game`}
        intro="Totals from the in-game Progress menu (Map > Progress > Vehicles), reported by launch-day guides."
        notes={[
          {
            title: `${vehicleCounts.baseModels} base models`,
            body: `Everyday vehicles you find in traffic, split into cars, bikes, watercraft, aircraft, and service vehicles. Scan them with the WAiNK phone app to log them. ${vehicleCounts.neededFor100} base models count toward 100% completion.`,
            source: vehicleCounts.sources[0],
            sources: vehicleCounts.sources,
          },
          {
            title: `${vehicleCounts.standout} Standout vehicles`,
            body: "Unique custom vehicles in fixed places, grouped into styles. One group, Girlypop, has 16 vehicles, and finding all of them unlocks a cheat filter. They do not count toward the 100% base-model goal.",
            source: vehicleCounts.sources[0],
            sources: vehicleCounts.sources,
          },
        ]}
      />

      <VehicleDatabase />

      <PageCTA
        title="Only named vehicles are marked confirmed"
        description="Speeds, prices, and engines are left blank until Rockstar publishes them."
      />
    </PageShell>
  );
}