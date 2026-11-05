import GuideDatabase from "@/components/GuideDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { guides } from "@/data/guides";

export default function GuidesPage() {
  const visibleGuides = guides.filter((guide) => guide.listed !== false);
  const categories = new Set(
    visibleGuides.map((guide) => guide.category)
  ).size;

  return (
    <PageShell>

      <PageHero
        badge="Unofficial fan database"
        title="Guides"
        description="Pre-launch notes about what Rockstar has shown. Full walkthroughs will be written after the game is out."
      />

      <PageStats
        stats={[
          {
            value: visibleGuides.length,
            label: "Published Guides",
          },
          {
            value: categories,
            label: "Guide Categories",
          },
          {
            value: "After launch",
            label: "Full walkthroughs",
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