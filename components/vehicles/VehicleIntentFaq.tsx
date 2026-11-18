import Link from "next/link";

import FaqSection, { type FaqItem } from "@/components/intent/FaqSection";
import { manufacturerByName } from "@/data/manufacturers";
import type { Vehicle } from "@/types/vehicle";
import { vehicleCounts } from "@/src/data/launch/launch-facts";

const FEATURED_SLUGS = [
  "pegassi-ignus",
  "pegassi-zentorno",
  "karin-intruder",
  "canis-mesa",
  "cheval-fugitive",
] as const;

const relatedBySlug: Record<string, readonly { href: string; label: string }[]> = {
  "pegassi-ignus": [{ href: "/vehicles/pegassi-zentorno", label: "Pegassi Zentorno" }],
  "pegassi-zentorno": [{ href: "/vehicles/pegassi-ignus", label: "Pegassi Ignus" }],
  "karin-intruder": [{ href: "/vehicles/cheval-fugitive", label: "Cheval Fugitive" }],
  "cheval-fugitive": [{ href: "/vehicles/karin-intruder", label: "Karin Intruder" }],
  "canis-mesa": [],
};

export function isFeaturedVehicleSlug(slug: string) {
  return (FEATURED_SLUGS as readonly string[]).includes(slug);
}

function faqsFor(vehicle: Vehicle): FaqItem[] {
  const confirmed = vehicle.status === "Confirmed";
  const first = vehicle.firstAppearance
    ? ` The name is kept from ${vehicle.firstAppearance}.`
    : "";

  return [
    {
      question: `Is the ${vehicle.name} confirmed for GTA 6?`,
      answer: confirmed
        ? `Yes. Rockstar has named the ${vehicle.name} for Grand Theft Auto VI. Speeds, prices, and engines stay blank until Rockstar publishes them.`
        : `No. The ${vehicle.name} is listed here as expected and unconfirmed.${first} Rockstar has not confirmed this name for Grand Theft Auto VI, and no performance figures on this page should be treated as official.`,
    },
    {
      question: `How many cars are in GTA 6?`,
      answer: `Launch-day guides, reading the in-game Progress menu, count ${vehicleCounts.total} vehicles: ${vehicleCounts.baseModels} base models and ${vehicleCounts.standout} Standout vehicles. ${vehicleCounts.neededFor100} base-model scans count toward 100% completion. Named entries in this database are listed separately, and unconfirmed names from earlier games are not part of that ${vehicleCounts.total} count.`,
      sources: vehicleCounts.sources,
    },
    {
      question: "How do you log vehicles in GTA 6?",
      answer:
        "You scan vehicles with the WAiNK phone app to log them in the Progress menu. Standout groups such as Girlypop are tracked separately and do not count toward the base-model 100% goal.",
      sources: vehicleCounts.sources,
    },
  ];
}

export default function VehicleIntentFaq({ vehicle }: { vehicle: Vehicle }) {
  if (!isFeaturedVehicleSlug(vehicle.slug)) {
    return null;
  }

  const maker = manufacturerByName(vehicle.manufacturer);
  const related = relatedBySlug[vehicle.slug] ?? [];

  return (
    <section className="mt-16">
      <FaqSection faqs={faqsFor(vehicle)} heading={`About the ${vehicle.name}`} />
      <p className="mt-8 text-zinc-400">
        <Link
          href="/vehicles"
          className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
        >
          Vehicle database
        </Link>
        {maker ? (
          <>
            {" · "}
            <Link
              href={`/manufacturers/${maker.slug}`}
              className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
            >
              {maker.name} manufacturer page
            </Link>
          </>
        ) : null}
        {" · "}
        <Link
          href="/phone/waink"
          className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
        >
          WAiNK app
        </Link>
        {" · "}
        <Link
          href="/girlypop"
          className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
        >
          Girlypop cheat filter
        </Link>
        {" · "}
        <Link
          href="/gta-6-apps"
          className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
        >
          Phone apps explained
        </Link>
        {related.map((link) => (
          <span key={link.href}>
            {" · "}
            <Link
              href={link.href}
              className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </p>
    </section>
  );
}
