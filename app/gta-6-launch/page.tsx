import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { pageMetadata } from "@/lib/launch";
import { pickHubs } from "@/lib/simple/hubs";
import { gta6Launch } from "@/src/data/launch/gta6-launch";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

// Re-render every 5 minutes so the launch-state copy flips on its own.
export const revalidate = 300;

const base = pageMetadata(gta6Launch.title, gta6Launch.description);

export const metadata: Metadata = {
  ...base,
  keywords: [...gta6Launch.keywords],
  alternates: {
    canonical: gta6Launch.path,
  },
  openGraph: {
    ...base.openGraph,
    url: gta6Launch.path,
  },
};

const next: { href: string; title: string; image?: string; line?: string; kind?: string }[] = [
  ...pickHubs(["map", "missions", "money", "weapons"]),
  { href: "/launch", title: "Editions", image: "/images/official/editions/ultimate_edition_01.webp" },
  { href: "/news/gta-vi-the-festival", title: "The Festival, Nov 21", image: "/images/official/gta-vi-the-festival.webp" },
];

export default function Gta6LaunchPage() {
  return (
    <PageShell>
      <SimpleHero title="GTA 6 is out" image="/images/official/locations/leonida-keys.webp" />
      <CardGrid heading="Start here">
        {next.map((item) => (
          <SimpleCard key={item.href} href={item.href} title={item.title} image={item.image} line={item.line} kind={item.kind} />
        ))}
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["platforms", "file-size", "physical-copy", "performance-mode", "ps5-pro", "where-is-it-based", "how-many-chapters", "ultimate-edition"])} />
    </PageShell>
  );
}
