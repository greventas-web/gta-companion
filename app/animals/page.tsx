import AnimalCard from "@/components/AnimalCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { animals } from "@/data/animals";

export default function AnimalsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Animal Database"
            description="Browse every officially confirmed animal and wildlife species discovered across Leonida."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Animals"
              value={animals.length}
            />

            <StatsCard
              label="Habitats"
              value={
                new Set(
                  animals.map((animal) => animal.habitat)
                ).size
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {animals.map((animal) => (

              <AnimalCard
                key={animal.id}
                animal={animal}
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}