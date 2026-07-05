import CharacterCard from "@/components/CharacterCard";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { characters } from "@/data/characters";

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Characters</Badge>

          <PageTitle
            title="Characters"
            description="Meet the confirmed characters of Grand Theft Auto VI. Browse protagonists and other officially revealed characters as Rockstar releases more information."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}