import CharacterCard from "@/components/CharacterCard";
import DatabaseSection from "@/components/DatabaseSection";
import PageCTA from "@/components/PageCTA";
import PageGrid from "@/components/PageGrid";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { characters } from "@/data/characters";

export default function CharactersPage() {
  const protagonists = characters.filter((character) =>
    character.role.toLowerCase().includes("protagonist")
  ).length;

  return (
    <PageShell>
      <PageHero
        badge="Official Rockstar Characters"
        title="Character Database"
        description="Meet every officially revealed GTA VI character including protagonists, supporting characters and future additions as Rockstar Games releases more information."
      />

      <PageStats
        stats={[
          {
            value: characters.length,
            label: "Confirmed Characters",
          },
          {
            value: protagonists,
            label: "Playable Protagonists",
          },
          {
            value: "100%",
            label: "Official Rockstar Sources",
            accent: true,
          },
        ]}
      />

      <DatabaseSection
        eyebrow="Official Cast"
        title="Confirmed Characters"
      >
        <PageGrid>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </PageGrid>
      </DatabaseSection>

      <PageCTA
        title="More Characters Coming Soon"
        description="GTA Companion only includes officially revealed Rockstar characters. As Rockstar reveals more people throughout Leonida, this database will continue to grow."
      />
    </PageShell>
  );
}