import AnimalDatabase from "@/components/AnimalDatabase";
import CitedNotes from "@/components/CitedNotes";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";
import { SourceList } from "@/components/SourceLink";
import { animals } from "@/data/animals";
import { pageMetadata } from "@/lib/launch";
import { gameInformerAnimals } from "@/src/data/gameplay/confirmed";
import { animalPrintNotes, guardianPrintIntro } from "@/src/data/gameplay/guardian";

export const metadata = pageMetadata(
  "GTA 6 animals",
  "Animals Rockstar has shown or named for Leonida, including the species in Game Informer's cover story. Unofficial fan site."
);

export default function AnimalsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Animal Database"
        description="Rockstar told Game Informer that Leonida has over 170 animal species across land, air, and sea. Some can be tracked as Rare, Discoverable, or Legendary. Animals below are tied to a Rockstar statement, caption, screenshot, or trailer."
      >
        <SourceList sources={[gameInformerAnimals]} />
      </PageHero>

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
            value: "170+",
            label: "Species in Leonida",
            accent: true,
          },
        ]}
      />

      <CitedNotes
        eyebrow="Saturday magazine"
        title="From the Guardian print"
        intro={guardianPrintIntro}
        notes={animalPrintNotes}
      />

      <AnimalDatabase />

      <PageCTA
        title="More Wildlife Coming Soon"
        description="This list grows when Rockstar names or shows an animal. Each entry stays tied to a statement, caption, screenshot, or trailer."
      />
    </PageShell>
  );
}