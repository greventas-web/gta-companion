import ManufacturerDatabase from "@/components/ManufacturerDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function ManufacturersPage() {
  return (
    <PageShell>

      <PageHero
        badge="Grand Theft Auto Manufacturers"
        title="Manufacturer Database"
        description="Browse automotive manufacturers from across the Grand Theft Auto universe. Discover their history, country of origin, vehicle lineups and officially confirmed GTA VI models."
        image="/images/official/vehicles/vapid-stanier-1955.webp"
        imageAlt="1955 Vapid Stanier"
      />

      <ManufacturerDatabase />

      <PageCTA
        title="The Manufacturer Database Continues to Grow"
        description="As Rockstar Games introduces new automotive brands and officially confirms additional vehicles, GTA Companion will continue expanding this database with manufacturer history, logos, specifications and complete vehicle lineups."
      />

    </PageShell>
  );
}