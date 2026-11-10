import type { Metadata } from "next";

import GuideDatabase from "@/components/GuideDatabase";
import { LaunchPage } from "@/components/launch/LaunchBoard";
import PageCTA from "@/components/PageCTA";
import PageStats from "@/components/PageStats";
import { guides } from "@/data/guides";
import { guideTopics, guidesSection } from "@/src/data/launch/guides";

export const metadata: Metadata = {
  title: guidesSection.seoTitle,
  description: guidesSection.seoDescription,
};

export default function GuidesPage() {
  const visibleGuides = guides.filter((guide) => guide.listed !== false);
  const categories = new Set(visibleGuides.map((guide) => guide.category)).size;

  return (
    <LaunchPage
      title={guidesSection.title}
      description={guidesSection.heroDescription}
      topics={guideTopics}
    >
      <div className="mt-16">
        <PageStats
          stats={[
            {
              value: visibleGuides.length,
              label: "Notes on the site",
            },
            {
              value: categories,
              label: "Note categories",
            },
            {
              value: "After launch",
              label: "Full walkthroughs",
              accent: true,
            },
          ]}
        />

        <GuideDatabase />
      </div>

      <PageCTA
        title="Full guides come after launch"
        description="Walkthroughs and tips will be added once they can be checked in the game. This page will not publish steps that have not been confirmed."
      />
    </LaunchPage>
  );
}
