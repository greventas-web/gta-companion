import VehicleDatabase from "@/components/VehicleDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";

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

      <VehicleDatabase />

      <PageCTA
        title="Only named vehicles are marked confirmed"
        description="Speeds, prices, and engines are left blank until Rockstar publishes them."
      />
    </PageShell>
  );
}