import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { courseTrackId, rangePrices, shootingRanges } from "@/src/data/launch/shooting-ranges";

const title = "GTA 6 Shooting Ranges – Griffin and Rodgers Ranch";
const description =
  "GTA 6 shooting ranges: Griffin in north-west Vice City and Rodgers Ranch in north-east Port Gellhorn, all 12 courses, the $5 waiver pass, and The Shootist trophy. Unofficial.";

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  keywords: [
    "GTA 6 shooting range",
    "GTA 6 shooting ranges",
    "Griffin Shooting Range",
    "Rodgers Ranch shooting range",
    "GTA 6 The Shootist",
  ],
};

function checkRangePins() {
  const known = new Set(getStaticPins().map((pin) => pin.id));
  const missing = shootingRanges.map((range) => range.areaPin).filter((id) => !known.has(id));
  if (missing.length > 0) {
    throw new Error(`shooting-ranges points at unknown map pins: ${missing.join(", ")}`);
  }
}

export default function ShootingRangesPage() {
  checkRangePins();

  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 shooting ranges",
          "/shooting-ranges",
          shootingRanges.map((range) => ({ name: range.name, url: `/shooting-ranges/${range.slug}` }))
        )}
      />
      <SimpleHero
        title="Shooting ranges"
        image="/images/official/frames/shooting-range.webp"
        imageAlt="Lucia at an outdoor shooting range in the Extended Look"
      />

      <CardGrid heading="The ranges">
        {shootingRanges.map((range) => (
          <SimpleCard
            key={range.slug}
            href={`/shooting-ranges/${range.slug}`}
            title={range.name}
            image={range.image}
            eyebrow={range.area}
            line={range.line}
            price="$5"
            mapPin={range.areaPin}
            chips={[
              { value: `${range.courses.length} courses` },
              { value: `${range.goldMedals} golds` },
            ]}
          />
        ))}
      </CardGrid>

      <QuickFacts heading="Prices" facts={rangePrices} />

      {shootingRanges.map((range) => (
        <CardGrid
          key={range.slug}
          heading={range.name}
          dense
          trackIds={range.courses.map((course) => courseTrackId(range.slug, course.name))}
        >
          {range.courses.map((course) => (
            <SimpleCard
              key={course.name}
              href={`/shooting-ranges/${range.slug}`}
              title={course.name}
              eyebrow={range.name}
              chips={[{ value: `${course.goldMedals} golds` }]}
              small
              trackId={courseTrackId(range.slug, course.name)}
            />
          ))}
        </CardGrid>
      ))}

    </PageShell>
  );
}
