import HomeSection from "@/components/HomeSection";
import HomeSectionButton from "@/components/HomeSectionButton";
import SectionGrid from "@/components/SectionGrid";

import { Card, Text } from "@/components/ui";
import { featuredGuides } from "@/data/home";

export default function FeaturedGuides() {
  return (
    <HomeSection
      title="Featured Guides"
      description="Start with our most popular GTA VI guides."
    >
      <SectionGrid>

        {featuredGuides.map((guide) => (
          <Card
            key={guide.id}
            className="p-8"
          >
            <h3 className="text-2xl font-bold">
              {guide.title}
            </h3>

            <Text
              variant="muted"
              className="mt-4"
            >
              {guide.description}
            </Text>

          </Card>
        ))}

      </SectionGrid>

      <HomeSectionButton href="/guides">
        View All Guides
      </HomeSectionButton>

    </HomeSection>
  );
}