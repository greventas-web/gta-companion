import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
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

const facts = [
  { label: "Out", value: "Nov 19, 2026, midnight local" },
  { label: "Consoles", value: "PS5 and Xbox Series X|S" },
  { label: "Cloud (Xbox)", value: "From 1:00 a.m. ET, Nov 19" },
  { label: "File size", value: "Up to 212 GB" },
  { label: "Frame rate", value: "30 fps" },
  { label: "PS5 Pro", value: "Ray-traced shadows, PSSR" },
  { label: "Boxed copy", value: "Download code, no disc" },
  { label: "PC", value: "No date yet" },
];

const next: { href: string; title: string; image?: string; line?: string; kind?: string }[] = [
  ...pickHubs(["map", "missions", "money", "weapons"]),
  { href: "/launch", title: "Editions", image: "/images/official/editions/ultimate_edition_01.webp" },
  { href: "/news/gta-vi-the-festival", title: "The Festival, Nov 21", image: "/images/official/gta-vi-the-festival.webp" },
];

export default function Gta6LaunchPage() {
  return (
    <PageShell>
      <SimpleHero title="GTA 6 is out" image="/images/official/locations/leonida-keys.webp" />
      <QuickFacts facts={facts} />
      <CardGrid heading="Start here">
        {next.map((item) => (
          <SimpleCard key={item.href} href={item.href} title={item.title} image={item.image} line={item.line} kind={item.kind} />
        ))}
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["platforms", "file-size", "physical-copy", "performance-mode", "ps5-pro", "where-is-it-based", "how-many-chapters", "ultimate-edition"])} />
    </PageShell>
  );
}
