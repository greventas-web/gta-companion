import Image from "next/image";
import Link from "next/link";

import HomeSection from "@/components/HomeSection";
import HomeSectionButton from "@/components/HomeSectionButton";
import SectionGrid from "@/components/SectionGrid";

import { Card, Text } from "@/components/ui";
import { guides } from "@/data/guides";

export default function FeaturedGuides() {
  const featuredGuides = guides.slice(0, 3);

  return (
    <HomeSection
      title="Featured Guides"
      description="Learn everything from getting started to mastering GTA VI."
    >
      <SectionGrid>

        {featuredGuides.map((guide) => (

          <Link
            key={guide.id}
            href={`/guides/${guide.slug}`}
          >
            <Card className="h-full overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10">

              <div className="relative h-52">

                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-400">
                    {guide.category}
                  </span>

                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
                    {guide.readingTime}
                  </span>

                </div>

                <h3 className="text-2xl font-bold">
                  {guide.title}
                </h3>

                <Text
                  variant="muted"
                  className="mt-4"
                >
                  {guide.description}
                </Text>

              </div>

            </Card>
          </Link>

        ))}

      </SectionGrid>

      <HomeSectionButton href="/guides">
        View All Guides
      </HomeSectionButton>

    </HomeSection>
  );
}