import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { collectibleGuides } from "@/src/data/launch/collectible-guides";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 collectibles",
  "GTA 6 collectibles: card sets, Cocaine Flamingos, stunt jumps, WAiNK It scans, meditation spots, styles, and vehicle discovery, with counts and trophies. Unofficial fan site."
);

const otherTypes = [
  {
    href: "/phone/waink",
    title: "WAiNK It scans",
    line: "Scan landmarks with your phone.",
    chips: [{ label: "Trophy", value: "100 scans" }],
  },
  {
    href: "/activities/meditation",
    title: "Meditation spots",
    line: "Meditate at every spot.",
    chips: [{ value: "18 spots" }, { label: "100%", value: "15" }],
  },
  {
    href: "/clothing",
    title: "Styles",
    line: "Hair, makeup, and outfits you find.",
  },
  {
    href: "/vehicles",
    title: "Vehicle discovery",
    line: "Log every new ride you find.",
    chips: [{ label: "Trophy", value: "100 vehicles" }],
  },
];

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd("GTA 6 collectibles", "/collectibles", [
          ...collectibleGuides.map((guide) => ({ name: guide.title, url: `/collectibles/${guide.slug}` })),
          ...otherTypes.map((type) => ({ name: type.title, url: type.href })),
        ])}
      />
      <SimpleHero title="Collectibles" />

      <CardGrid heading="Collectible guides">
        {collectibleGuides.map((guide) => (
          <SimpleCard
            key={guide.slug}
            href={`/collectibles/${guide.slug}`}
            title={guide.title}
            image={guide.image}
            line={guide.line}
            chips={guide.quick.slice(0, 2)}
          />
        ))}
      </CardGrid>

      <CardGrid heading="More to find">
        {otherTypes.map((type) => (
          <SimpleCard key={type.href} {...type} />
        ))}
      </CardGrid>

      <CardGrid heading="More">
        <SimpleCard href="/shooting-ranges" title="Shooting ranges" image="/images/official/frames/shooting-range.webp" chips={[{ value: "42 golds" }]} />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["flamingos", "collectible-cards", "stunt-jumps", "waink-scans", "shooting-ranges"])} />
    </PageShell>
  );
}
