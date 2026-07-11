import CharacterCard from "@/components/CharacterCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

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
            title="Character Database"
            description="Browse every officially confirmed Grand Theft Auto VI character including protagonists, supporting characters and future additions as Rockstar reveals more information."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Characters"
              value={characters.length}
            />

            <StatsCard
              label="Protagonists"
              value={
                characters.filter(
                  (c) =>
                    c.role.toLowerCase().includes("protagonist")
                ).length
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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