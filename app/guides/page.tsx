import GuideDatabase from "@/components/GuideDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { guides } from "@/data/guides";

export default function GuidesPage() {
  const categories = new Set(
    guides.map((guide) => guide.category)
  ).size;

  return (
    <PageShell>

      <PageHero
        badge="Unofficial fan database"
        title="Guides"
        description="Browse official GTA VI guides, walkthroughs, tips, strategies and gameplay information to help you explore every part of Leonida."
      />

      <PageStats
        stats={[
          {
            value: guides.length,
            label: "Published Guides",
          },
          {
            value: categories,
            label: "Guide Categories",
          },
          {
            value: "Official",
            label: "Verified Content",
            accent: true,
          },
        ]}
      />

      <GuideDatabase />

      <PageCTA
        title="More Guides Are On The Way"
        description="Every official GTA VI reveal will be transformed into detailed walkthroughs, strategy guides, collectible locations and gameplay tips as Rockstar releases more information."
      />

    </PageShell>
  );
}