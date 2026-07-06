import BrandCard from "@/components/BrandCard";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { brands } from "@/data/brands";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Brands</Badge>

          <PageTitle
            title="Brands"
            description="Explore the fictional companies, products and brands officially appearing throughout Grand Theft Auto VI."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}