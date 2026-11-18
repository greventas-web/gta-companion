import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import { CardGrid } from "@/components/simple/SimpleCard";
import SimpleCard from "@/components/simple/SimpleCard";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { pageMetadata } from "@/lib/launch";
import { courseTrackId, findShootingRange, shootingRanges } from "@/src/data/launch/shooting-ranges";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shootingRanges.map((range) => ({ slug: range.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const range = findShootingRange(slug);
  if (!range) return {};
  return pageMetadata(
    `${range.name} – GTA 6 Shooting Range`,
    `${range.name} in GTA 6: ${range.area}, ${range.courses.length} courses, ${range.goldMedals} gold medals, and a $5 waiver pass. Unofficial.`
  );
}

export default async function ShootingRangePage({ params }: Props) {
  const { slug } = await params;
  const range = findShootingRange(slug);
  if (!range) notFound();

  const other = shootingRanges.filter((item) => item.slug !== range.slug);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Shooting ranges", href: "/shooting-ranges" },
          { label: range.name },
        ]}
        eyebrow="Shooting range"
        title={range.name}
        image={range.image}
        summary={range.summary}
        price="$5 waiver pass"
        facts={[
          { label: "Where", value: range.area },
          { label: "Rent a gun", value: "$10" },
        ]}
        mapPin={range.areaPin}
        related={other.map((item) => ({
          href: `/shooting-ranges/${item.slug}`,
          title: item.name,
          image: item.image,
          eyebrow: item.area,
          line: item.line,
          price: "$5",
        }))}
        relatedHeading="Other range"
      >
        <CardGrid heading="Courses" dense trackIds={range.courses.map((course) => courseTrackId(range.slug, course.name))}>
          {range.courses.map((course) => (
            <SimpleCard
              key={course.name}
              title={course.name}
              eyebrow={range.name}
              chips={[{ value: `${course.goldMedals} golds` }]}
              small
              trackId={courseTrackId(range.slug, course.name)}
            />
          ))}
        </CardGrid>
      </SimpleDetail>
    </PageShell>
  );
}
