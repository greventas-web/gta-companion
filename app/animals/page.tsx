import AnimalDatabase from "@/components/AnimalDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { animals } from "@/data/animals";
import { gameInformerAnimals } from "@/src/data/gameplay/confirmed";

export default function AnimalsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Animal Database"
        description="Rockstar told Game Informer that Leonida has over 170 animal species across land, air, and sea. Some can be tracked as Rare, Discoverable, or Legendary. Animals below are tied to a Rockstar statement, caption, screenshot, or trailer."
      >
        <p className="max-w-3xl break-words text-sm leading-7 text-zinc-500">
          Source:{" "}
          <a
            href={gameInformerAnimals.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-pink-200"
          >
            {gameInformerAnimals.label}
          </a>
          .
        </p>
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

      <AnimalDatabase />

      <PageCTA
        title="More Wildlife Coming Soon"
        description="This list grows when Rockstar names or shows an animal. Each entry stays tied to a statement, caption, screenshot, or trailer."
      />
    </PageShell>
  );
}