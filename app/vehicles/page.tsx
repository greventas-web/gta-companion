import CitedNotes from "@/components/CitedNotes";
import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { vehicleCounts } from "@/src/data/launch/launch-facts";

export const metadata = pageMetadata(
  "GTA 6 vehicles",
  "Vehicles Rockstar has named for Grand Theft Auto VI, plus earlier Grand Theft Auto names kept in a separate unconfirmed section. Unofficial fan site."
);

export default function VehiclesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Vehicle Database"
        description="Seven vehicles Rockstar has named, shown first. Earlier Grand Theft Auto names sit below as expected and unconfirmed. Last updated November 10, 2026."
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