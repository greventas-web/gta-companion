import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";
import { whereToFindTopics, wherePlaces } from "@/src/data/launch/where-to-find";

const title = "GTA 6 Where to Find – Stores, Garages, Mod Shops (Map)";
const description =
  "Where to find things in GTA 6: clothing stores, gun stores, Pay ’n’ Spray, mod shops, garages, safehouses, and barbers, each linked to our Leonida map. Unofficial.";

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  keywords: ["GTA 6 where to find", "GTA 6 locations", "GTA 6 store locations", "GTA 6 map locations"],
};

const more = [
  { href: "/ammu-nation-locations", label: "Ammu-Nation", image: undefined },
  { href: "/shooting-ranges", label: "Shooting ranges", image: "/images/official/frames/shooting-range.webp" },
  { href: "/collectibles", label: "Collectibles", image: undefined },
  { href: "/properties", label: "Properties", image: undefined },
];

export default function WhereToFindHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 where to find",
          "/where-to-find",
          whereToFindTopics.map((topic) => ({ name: topic.heading, url: `/where-to-find/${topic.slug}` }))
        )}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Where to find" }]} />
      <div className="mt-6">
        <SimpleHero title="Where to find" />
      </div>

      <CardGrid>
        {whereToFindTopics.map((topic) => {
          const places = wherePlaces(topic);
          const image = imageForPath(`/where-to-find/${topic.slug}`) ?? imageForPin(topic.mapPin);
          return (
            <SimpleCard
              key={topic.slug}
              href={`/where-to-find/${topic.slug}`}
              title={topic.label}
              image={image.src}
              imageAlt={image.alt}
              chips={[{ value: `${places.length} places` }]}
            />
          );
        })}
        {more.map((link) => (
          <SimpleCard key={link.href} href={link.href} title={link.label} image={link.image ?? imageForPath(link.href)?.src} />
        ))}
      </CardGrid>
    </PageShell>
  );
}
