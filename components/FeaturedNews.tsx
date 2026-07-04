import HomeSection from "@/components/HomeSection";
import HomeSectionButton from "@/components/HomeSectionButton";
import SectionGrid from "@/components/SectionGrid";

import { Card, Text } from "@/components/ui";
import { featuredNews } from "@/data/home";

export default function FeaturedNews() {
  return (
    <HomeSection
      title="Latest News"
      description="Stay up to date with the latest GTA VI news."
    >
      <SectionGrid>

        {featuredNews.map((article) => (
          <Card
            key={article.id}
            className="p-8"
          >
            <h3 className="text-2xl font-bold">
              {article.title}
            </h3>

            <Text
              variant="muted"
              className="mt-4"
            >
              {article.description}
            </Text>

          </Card>
        ))}

      </SectionGrid>

      <HomeSectionButton href="/news">
        View All News
      </HomeSectionButton>

    </HomeSection>
  );
}