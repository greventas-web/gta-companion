import type { Metadata } from "next";
import { Suspense } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import ProPanel, { type SectionTotals } from "@/components/pro/ProPanel";
import { pageMetadata } from "@/lib/launch";
import { PRO_NAME, PRO_PRICE_LABEL } from "@/lib/pro/config";
import { collectibleItemPages } from "@/src/data/launch/collectible-guides";
import { courseTrackId, shootingRanges } from "@/src/data/launch/shooting-ranges";
import { missions } from "@/src/data/missions";
import { trophies } from "@/src/data/trophies";

const title = `${PRO_NAME} – 100% Completion Tracker`;
const description = `Unofficial GTA 6 completion tracker. Cloud sync, progress %, a what's-left-near-me map filter, unlimited marks and no ads for ${PRO_PRICE_LABEL} one-time. Not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  alternates: { canonical: "/pro" },
};

/** Same ids the tap-to-track buttons use on each section. */
function sectionIds(): SectionTotals {
  return {
    missions: missions.map((mission) => `mission:${mission.slug}`),
    collectibles: collectibleItemPages().map(({ guide, item }) => `${guide.slug}:${item.slug}`),
    trophies: trophies.map((trophy) => `trophy:${trophy.slug}`),
    ranges: shootingRanges.flatMap((range) => range.courses.map((course) => courseTrackId(range.slug, course.name))),
  };
}

export default function ProPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pro" }]} />
      <div className="mt-6">
        <Suspense fallback={<div className="h-[420px] animate-pulse rounded-[28px] border border-white/5 bg-[#08080A]" />}>
          <ProPanel sections={sectionIds()} />
        </Suspense>
      </div>
    </PageShell>
  );
}
