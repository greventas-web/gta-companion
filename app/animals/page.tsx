import AnimalDatabase from "@/components/AnimalDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { animals } from "@/data/animals";

export default function AnimalsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Wildlife"
        title="Animal Database"
        description="Browse every officially confirmed animal and wildlife species discovered across Leonida, including predators, marine life, birds and other native wildlife revealed by Rockstar Games."
      />

      <PageStats
        stats={[
          {
            value: animals.length,
            label: "Confirmed Species",
          },
          {
            value: "Leonida",
            label: "Wildlife Region",
          },
          {
            value: "100%",
            label: "Verified Information",
            accent: true,
          },
        ]}
      />

      <AnimalDatabase />

      <PageCTA
        title="More Wildlife Coming Soon"
        description="As Rockstar Games officially reveals additional wildlife across Leonida, GTA Companion will continue expanding the animal database with detailed information, habitats and official screenshots."
      />
    </PageShell>
  );
}