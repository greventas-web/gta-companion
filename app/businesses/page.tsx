import BusinessDatabase from "@/components/BusinessDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Businesses"
        title="Business Database"
        description="Browse every officially confirmed business, company, nightclub, record label and organization featured by Rockstar Games in Grand Theft Auto VI."
      />

      <PageStats
        stats={[
          {
            value: businesses.length,
            label: "Confirmed Businesses",
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

      <BusinessDatabase />

      <PageCTA
        title="More Businesses Coming Soon"
        description="As Rockstar Games officially reveals more companies, stores, organizations and businesses across Leonida, GTA Companion will continue expanding this database with new information."
      />
    </PageShell>
  );
}