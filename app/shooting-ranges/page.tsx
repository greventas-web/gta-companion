import type { Metadata } from "next";

import FaqSection, { RelatedLinks } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import MapPinLink from "@/components/map/MapPinLink";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  shootingRangeFaqs,
  shootingRangeNotes,
  shootingRanges,
} from "@/src/data/launch/shooting-ranges";

const title = "GTA 6 Shooting Ranges – Griffin and Rodgers Ranch";
const description =
  "GTA 6 shooting ranges: Griffin in north-west Vice City and Rodgers Ranch in north-east Port Gellhorn, the 12 course names, how the Waiver Pass works, and The Shootist trophy. Unofficial.";

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
  const ids = shootingRanges.map((range) => range.areaPin);
  const missing = ids.filter((id) => !known.has(id));
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
          shootingRanges.flatMap((range) => [
            { name: range.name, url: "/shooting-ranges" },
            ...range.courses.map((course) => ({ name: `${range.name}: ${course.name}` })),
          ])
        )}
      />
      <PageHero
        badge="Unofficial · confirmed at launch"
        title="GTA 6 shooting ranges"
        description="Two ranges and 12 named courses. A launch-day guide counts 42 gold medals for The Shootist and the 100% list."
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">How the ranges work</h2>
        <ul className="mt-4 grid gap-3 text-zinc-300">
          {shootingRangeNotes.map((note) => (
            <li key={note}>• {note}</li>
          ))}
        </ul>
      </section>

      {shootingRanges.map((range) => (
        <section key={range.slug} className="mt-12">
          <h2 className="text-3xl font-black tracking-[-0.03em]">{range.name}</h2>
          <p className="mt-3 max-w-3xl leading-8 text-zinc-400">
            {range.area}. {range.format} PowerPyx counts {range.goldMedals} gold medals here.
          </p>
          <div className="mt-4">
            <MapPinLink mapPinId={range.areaPin} />
          </div>
          <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                <tr>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Gold medals</th>
                </tr>
              </thead>
              <tbody>
                {range.courses.map((course) => (
                  <tr key={course.name} className="border-t border-white/10 text-zinc-300">
                    <td className="px-4 py-3 font-semibold text-white">{course.name}</td>
                    <td className="px-4 py-3">{course.goldMedals} (PowerPyx)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <FaqSection faqs={shootingRangeFaqs} heading="GTA 6 shooting ranges: questions" />

      <RelatedLinks
        links={[
          { href: "/activities/shooting-range", label: "Shooting range activity" },
          { href: "/weapons", label: "Weapons" },
          { href: "/ammu-nation-locations", label: "Ammu-Nation locations" },
          { href: "/cheats/combat-cheats", label: "Combat cheats" },
          { href: "/trophies", label: "Trophies" },
          { href: "/collectibles", label: "Collectibles" },
        ]}
      />
    </PageShell>
  );
}
