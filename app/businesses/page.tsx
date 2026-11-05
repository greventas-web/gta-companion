import BusinessDatabase from "@/components/BusinessDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function BusinessesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Businesses"
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