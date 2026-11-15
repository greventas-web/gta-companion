import BusinessDatabase from "@/components/BusinessDatabase";
import { pageMetadata } from "@/lib/launch";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata = pageMetadata(
  "GTA 6 businesses",
  "Businesses Rockstar has shown in Vice City and Leonida for Grand Theft Auto VI. Unofficial fan site."
);

export default function BusinessesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Business Database"
        description="Explore companies, record labels, clubs, organizations and businesses featured throughout Vice City and the state of Leonida. Every entry is based on official Rockstar Games material."
      />

      <BusinessDatabase />

      <PageCTA
        title="The Database Continues to Grow"
        description="Every officially revealed business, company and organization will be added to GTA Companion as Rockstar Games continues unveiling Grand Theft Auto VI."
      />
    </PageShell>
  );
}