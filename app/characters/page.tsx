import CharacterCard from "@/components/CharacterCard";
import DatabaseSection from "@/components/DatabaseSection";
import PageCTA from "@/components/PageCTA";
import PageGrid from "@/components/PageGrid";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

import { characters } from "@/data/characters";

export default function CharactersPage() {
  return (
    <PageShell>
      <PageHero
        badge="Grand Theft Auto Characters"
        title="Character Database"
        description="Explore protagonists, allies, criminals, business owners and other notable characters from across the Grand Theft Auto universe. GTA Companion clearly identifies officially confirmed GTA VI characters while preserving the legacy of the series."
      />

      <DatabaseSection
        eyebrow="Character Database"
        title={`${characters.length} Characters`}
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
        title="The Character Database Continues to Grow"
        description="As Rockstar Games introduces new characters and expands the world of Grand Theft Auto VI, GTA Companion will continue adding verified profiles, artwork and detailed character information."
      />
    </PageShell>
  );
}