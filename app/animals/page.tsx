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
        badge="Unofficial fan database"
        title="Animal Database"
        description="Animals tied to Rockstar captions. Species names and habitats are included only when a caption supports them. Rockstar has not published a species list."
      />

      <PageStats
        stats={[
          {
            value: animals.length,
            label: "Entries",
          },
          {
            value: "Leonida",
            label: "Wildlife Region",
          },
          {
            value: "None",
            label: "Species named by Rockstar",
            accent: true,
          },
        ]}
      />

      <AnimalDatabase />

      <PageCTA
        title="More Wildlife Coming Soon"
        description="This list grows when Rockstar publishes a caption that names or shows an animal. Species and habitats stay off the page until a caption supports them."
      />
    </PageShell>
  );
}