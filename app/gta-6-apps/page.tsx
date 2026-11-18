import type { Metadata } from "next";
import Link from "next/link";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { findPhoneItem } from "@/data/phone";
import { launchMetadata } from "@/lib/launch";

const scooter = findPhoneItem("scooter-bros");
const buckme = findPhoneItem("banking-app");
const waink = findPhoneItem("waink");

if (!scooter || !buckme || !waink) {
  throw new Error("Expected Scooter Bros, BuckMe, and WAiNK phone apps in data.");
}

const apps = [
  { item: scooter, href: "/phone/scooter-bros", heading: "Scooter Bros", line: "Delivers your car, guns in the trunk." },
  { item: buckme, href: "/phone/banking-app", heading: "BuckMe", line: "Your bank. Deposit cash at any ATM." },
  { item: waink, href: "/phone/waink", heading: "WAiNK", line: "Scan vehicles to log them." },
] as const;

const title = "GTA 6 Scooter Bros, BuckMe, and WAiNK Apps Explained";
const description = "Unofficial GTA 6 phone apps: Scooter Bros delivers your vehicles, BuckMe is the bank, and WAiNK scans vehicles.";

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

export default function Gta6AppsPage() {
  return (
    <PageShell>
      <SimpleHero title="Phone apps" />
      <CardGrid>
        {apps.map(({ item, href, heading, line }) => (
          <SimpleCard key={item.slug} href={href} title={heading} eyebrow={item.kind} line={line} />
        ))}
        <SimpleCard href="/phone" title="All phone apps" />
      </CardGrid>
    </PageShell>
  );
}
