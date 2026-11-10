import CharacterCard from "@/components/CharacterCard";
import DatabaseSection from "@/components/DatabaseSection";
import PageCTA from "@/components/PageCTA";
import PageGrid from "@/components/PageGrid";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

import { characters } from "@/data/characters";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 characters",
  "Official Grand Theft Auto VI character profiles for Jason Duval, Lucia Caminos, and the supporting cast Rockstar has named. Unofficial fan site."
);

export default function CharactersPage() {
  return (
    <PageShell>
      <PageHero
        badge="Grand Theft Auto Characters"
        title="Character Database"
        description="The eight profiles Rockstar has published: Jason, Lucia, and six supporting characters, including Real Dimez. Last updated November 10, 2026."
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