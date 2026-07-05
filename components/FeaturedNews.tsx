import Image from "next/image";
import Link from "next/link";

import HomeSection from "@/components/HomeSection";
import HomeSectionButton from "@/components/HomeSectionButton";
import SectionGrid from "@/components/SectionGrid";

import { Card, Text } from "@/components/ui";
import { news } from "@/data/news";

export default function FeaturedNews() {
  const featuredNews = news.slice(0, 3);

  return (
    <HomeSection
      title="Latest News"
      description="Stay up to date with official Rockstar announcements and GTA VI news."
    >
      <SectionGrid>

        {featuredNews.map((article) => (

          <Link
            key={article.id}
            href={`/news/${article.slug}`}
          >
            <Card className="h-full overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10">

              <div className="relative h-52">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-400">
                    {article.category}
                  </span>

                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
                    {article.readingTime}
                  </span>

                </div>

                <h3 className="text-2xl font-bold">
                  {article.title}
                </h3>

                <Text
                  variant="muted"
                  className="mt-4"
                >
                  {article.description}
                </Text>

              </div>

            </Card>
          </Link>

        ))}

      </SectionGrid>

      <HomeSectionButton href="/news">
        View All News
      </HomeSectionButton>

    </HomeSection>
  );
}