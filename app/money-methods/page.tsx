import type { Metadata } from "next";
import Link from "next/link";

import FaqSection from "@/components/intent/FaqSection";
import { LaunchIndex } from "@/components/launch/LaunchSection";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { batch1Sources as src } from "@/src/data/launch/batch1-sources";
import { moneyMethods, moneyNotes } from "@/src/data/launch/money-methods";

const title = "How to Make Money Fast in GTA 6 (Spoiler-Safe)";
const description =
  "The best GTA 6 money methods by chapter: selling cars to Moses and Pay 'n' Spray, Randy's wish list, jewelry stores, gang operations, and treasure diving. Unofficial fan site.";

export const metadata: Metadata = launchMetadata(title, description);

const faqs = [
  {
    question: "What is the fastest way to make money early in GTA 6?",
    answer:
      "From Chapter 2, sell stolen cars without a tracker to Moses in Port Gellhorn. From Chapter 3, sell cars at any Pay 'n' Spray, rob jewelry stores ($10,000–$25,000 each), and deliver Randy's wish-list cars ($30,000+ in perfect condition).",
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    question: "How much does Moses pay for cars in GTA 6?",
    answer:
      "Sources differ. PowerPyx says cars typically pay $1,000 or more; GameSpot says deliveries often pay upwards of $10,000. Moses only takes cars without a tracker.",
    sources: [src.powerpyxMoney, src.gamespotMoney],
  },
  {
    question: "Is there a money cheat in GTA 6?",
    answer: "Yes, one: $250,000, usable only after you finish the story. Code: Up, Right, Down, Left, Up, Left, Down, Right.",
    sources: [src.powerpyxCheats, src.gamesradarCheats],
  },
];

export default function MoneyMethodsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · spoiler-safe"
      title="How to make money in GTA 6"
      description="The best money methods by chapter, from launch-day guides. Chapter gates only up to Chapter 3, no story spoilers. Updated November 18, 2026."
      basePath="/money-methods"
      entries={moneyMethods}
      emptyBody="No money methods are listed yet."
    >
      <section className="mt-12 rounded-[32px] border border-violet-500/20 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">Good to know</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-300">
          {moneyNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <SourceList className="mt-4" sources={[src.powerpyxMoney, src.powerpyxCheats]} />
        <p className="mt-4 text-zinc-400">
          <Link href="/cheats/player-cheats" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            Money cheat and other player cheats
          </Link>
        </p>
      </section>
      <FaqSection faqs={faqs} heading="Money: questions" />
    </LaunchIndex>
  );
}
