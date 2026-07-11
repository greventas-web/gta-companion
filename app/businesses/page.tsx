import BusinessCard from "@/components/BusinessCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Business Database"
            description="Browse every officially confirmed business, hotel, shop, restaurant, nightclub and company across Leonida."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Businesses"
              value={businesses.length}
            />

            <StatsCard
              label="Categories"
              value={
                new Set(
                  businesses.map(
                    (business) => business.category
                  )
                ).size
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {businesses.map((business) => (

              <BusinessCard
                key={business.id}
                business={business}
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}