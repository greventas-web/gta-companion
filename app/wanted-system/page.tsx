import type { Metadata } from "next";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  gameplaySources,
  gameplaySystems,
} from "@/src/data/gameplay/confirmed";

const title = "GTA 6 Wanted System: Heat, Heat Area, and Six Stars";
const description = `GTA 6 wanted system, as Rob Nelson described it: a witness-based wanted system with up to six stars, plus Heat and Heat Area (change clothes, ditch a weapon, or leave the area). Unofficial; game © Rockstar Games. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 wanted system",
    "GTA 6 heat",
    "GTA 6 heat area",
    "GTA 6 six stars",
    "GTA VI wanted system",
  ],
};

const wantedLine =
  gameplaySystems.find((line) => line.toLowerCase().includes("wanted system")) ??
  "A witness-based wanted system, up to six stars.";
const heatLine =
  gameplaySystems.find((line) => line.startsWith("Heat and Heat Area")) ??
  "Heat and Heat Area: change clothes, ditch a weapon, or leave the area.";
const profileLine =
  gameplaySystems.find((line) => line.startsWith("Criminal Profile")) ??
  "Criminal Profile: professional versus violent.";
const gunsLine =
  gameplaySystems.find((line) => line.startsWith("Long guns")) ??
  "Long guns cannot be concealed. Ammu-Nation lockers and trunk storage are how Rockstar described keeping them.";
const bankLine =
  gameplaySystems.find((line) => line.toLowerCase().includes("bank account")) ??
  "A bank account. You lose carried cash when Wasted or Busted.";

const faqs: FaqItem[] = [
  {
    question: "How does the GTA 6 wanted system work?",
    answer: `Rob Nelson has described ${wantedLine.replace(/\.$/, "").replace(/^A /, "a ")}. ${heatLine}`,
    sources: gameplaySources,
  },
  {
    question: "What is Heat and Heat Area in GTA 6?",
    answer: heatLine,
    sources: gameplaySources,
  },
  {
    question: "How many wanted stars are in GTA 6?",
    answer:
      "The wanted system goes up to six stars. That cap comes from the same Rockstar interviews that describe the witness-based system.",
    sources: gameplaySources,
  },
  {
    question: "Can you hide a long gun to drop Heat?",
    answer: `${gunsLine} Changing clothes, ditching a weapon, or leaving the Heat Area is how Heat was described.`,
    sources: gameplaySources,
  },
];

export default function WantedSystemPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial · from Rockstar interviews"
        title="GTA 6 wanted system: Heat, Heat Area, and six stars"
        description="What Rockstar has confirmed about wanted level and Heat in Grand Theft Auto VI, from Rob Nelson's interviews. Nothing is added from unsourced play reports."
      />

      <p className="text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is © Rockstar Games.
      </p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">What Rockstar has confirmed</h2>
        <ul className="mt-6 grid gap-4 text-zinc-300">
          <li>• {wantedLine}</li>
          <li>• {heatLine}</li>
          <li>• {profileLine}</li>
          <li>• {gunsLine}</li>
          <li>• {bankLine}</li>
        </ul>
        <p className="mt-6 leading-8 text-zinc-400">
          These lines are from Rob Nelson&apos;s interviews with Famitsu, IGN,
          and Edge. This page stays with that wording and does not fill in
          extra rules from launch streams.
        </p>
        <SourceList className="mt-6" sources={gameplaySources} />
      </section>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">How this ties to the rest of the game</h2>
        <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
          Long guns go in Ammu-Nation lockers or in a vehicle trunk. Scooter Bros
          can deliver your personal vehicle, including weapons stored in the
          trunk. Cash you are carrying is lost when you are Wasted or Busted,
          which is why the BuckMe banking app matters.
        </p>
        <SourceList className="mt-6" sources={gameplaySources} />
      </section>

      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { href: "/ammu-nation-locations", label: "Ammu-Nation locations" },
          { href: "/phone/scooter-bros", label: "Scooter Bros" },
          { href: "/phone/banking-app", label: "BuckMe" },
          { href: "/map", label: "Community map" },
          { href: "/faq", label: "FAQ" },
        ]}
      />
    </PageShell>
  );
}
