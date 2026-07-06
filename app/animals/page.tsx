import AnimalCard from "@/components/AnimalCard";
import PageTitle from "@/components/PageTitle";

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

          <Badge>Official GTA VI Wildlife</Badge>

          <PageTitle
            title="Animals"
            description="Discover the wildlife officially revealed throughout Leonida in Grand Theft Auto VI."
          />

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