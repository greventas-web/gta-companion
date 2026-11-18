import type { Metadata } from "next";
import Link from "next/link";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { findPhoneItem } from "@/data/phone";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { launchSources, vehicleCounts } from "@/src/data/launch/launch-facts";

const scooter = findPhoneItem("scooter-bros");
const buckme = findPhoneItem("banking-app");
const waink = findPhoneItem("waink");

if (!scooter || !buckme || !waink) {
  throw new Error("Expected Scooter Bros, BuckMe, and WAiNK phone apps in data.");
}

const apps = [
  { item: scooter, href: "/phone/scooter-bros", heading: "Scooter Bros" },
  { item: buckme, href: "/phone/banking-app", heading: "BuckMe" },
  { item: waink, href: "/phone/waink", heading: "WAiNK" },
] as const;

const title = "GTA 6 Scooter Bros, BuckMe, and WAiNK Apps Explained";
const description = `GTA 6 phone apps explained: Scooter Bros delivers and registers your vehicles, BuckMe is the banking app, and WAiNK scans vehicles and locations. Unofficial; game © Rockstar Games. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 Scooter Bros",
    "GTA 6 BuckMe",
    "GTA 6 WAiNK",
    "GTA 6 WAINK",
    "GTA 6 phone apps",
    "GTA VI phone apps",
  ],
};

const faqs: FaqItem[] = [
  {
    question: "What is Scooter Bros in GTA 6?",
    answer:
      "Scooter Bros is the phone app that delivers your personal vehicle, including weapons stored in the trunk. At launch, you register vehicles to the app. The trophy On the Spot asks you to register 10 vehicles.",
    sources: scooter.sources,
  },
  {
    question: "What is BuckMe in GTA 6?",
    answer:
      "BuckMe is the banking app. Launch coverage names a Chapter 1 story mission called Buck Me, then the tasks Deposit Cash Into BuckMe (at any ATM) and Save for the Future. Rob Nelson told Famitsu you lose the cash you are carrying when Wasted or Busted, so money in the account is safer than cash on hand.",
    sources: buckme.sources,
  },
  {
    question: "What is the WAiNK app in GTA 6?",
    answer: `WAiNK is the phone app used to scan vehicles and log them in the Progress menu. ${vehicleCounts.neededFor100} base-model scans count toward 100% completion. WAiNK It scans also cover landmarks, curiosities, and sculptures. The trophy You WAiNKer! asks for WAiNK It at 100 locations. Interviews also describe a scanner that reports locks, alarms, trackers, Pay 'n' Spray value, registration cost, and the tool you need, and Edge (via Vice) names WAINK for cars that fences want.`,
    sources: waink.sources,
  },
  {
    question: "Are these the only GTA 6 phone apps?",
    answer:
      "No. Rockstar interviews also name Snapmatic and Ryde Me, plus a video app and a fitness app whose in-game names have not been published, and the October 8, 2026 newswire adds on-demand podcasts through the phone. This page covers the three apps people are searching for at launch.",
    sources: [launchSources.beebomApps],
  },
];

export default function Gta6AppsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial · confirmed at launch"
        title="GTA 6 Scooter Bros, BuckMe, and WAiNK apps explained"
        description="Three phone apps confirmed for Grand Theft Auto VI, with what launch coverage and Rockstar interviews say each one does."
      />

      <p className="text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is © Rockstar Games.
      </p>

      {apps.map(({ item, href, heading }) => (
        <section
          key={item.slug}
          className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
            {item.kind}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">
            <Link
              href={href}
              className="transition hover:text-violet-200"
            >
              {heading}
            </Link>
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">{item.description}</p>
          <ul className="mt-6 grid gap-3 text-zinc-300">
            {item.details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>
          <SourceList className="mt-6" sources={item.sources} />
          <Link
            href={href}
            className="mt-6 inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
          >
            Full {heading} page
          </Link>
        </section>
      ))}

      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { href: "/phone", label: "All phone apps" },
          { href: "/vehicles", label: "Vehicle database" },
          { href: "/trophies", label: "Trophy list" },
          { href: "/collectibles", label: "Collectibles" },
          { href: "/money-methods", label: "Money" },
          { href: "/map", label: "Community map" },
        ]}
      />
    </PageShell>
  );
}
