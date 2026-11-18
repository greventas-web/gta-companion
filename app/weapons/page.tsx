import Link from "next/link";

import WeaponDatabase from "@/components/WeaponDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import FaqSection, { type FaqItem } from "@/components/intent/FaqSection";
import { SourceList } from "@/components/SourceLink";
import WeaponListTable from "@/components/weapon/WeaponListTable";
import { weapons } from "@/data/weapons";
import { pageMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { batch1Sources as src } from "@/src/data/launch/batch1-sources";

export const metadata = pageMetadata(
  "GTA 6 Weapons List: All Guns, Stats, and Prices",
  "Every named GTA 6 gun with its in-game stat card, caliber, magazine, and Ammu-Nation price where published, plus where to buy snipers, LMGs, and launchers. Unofficial fan site."
);

const namedCount = weapons.filter((weapon) => weapon.sources && weapon.sources.length > 0).length;

const faqs: FaqItem[] = [
  {
    question: "How many weapons are in GTA 6?",
    answer:
      "The in-game Progress database lists 196 weapon entries: 53 guns, 9 melee weapons, 4 explosives, and 130 weapon variants. Each Ammu-Nation also sells a unique weapon variant.",
    sources: [src.powerpyxProgress, src.powerpyxAmmuNation],
  },
  {
    question: "Where do you buy weapons in GTA 6?",
    answer:
      "At the 24 Ammu-Nation gun stores. Each store has a stock tier (Limited, Standard, Hunting, or Expanded) shown on its map icon. Only the six Expanded stores carry LMGs, sniper rifles, grenade launchers, and rocket launchers: Big Shots, Woodhatch, Phil's Ammu-Nation, Black Eagle, Iron & Oak, and Prestige Firearms.",
    sources: [src.powerpyxAmmuNation, src.powerpyxSniper],
  },
  {
    question: "What is the first gun you can buy in GTA 6?",
    answer:
      "In the Chapter 1 mission Gear Up, Jason buys a longarm at Chuck's Tackle & Shot in Key Lento: the Fortune & Son Moreland 850 shotgun for $350 or the Hawk & Little Mediator tactical rifle for $450.",
    sources: [src.beebomGearUp, src.powerpyxGearUp],
  },
  {
    question: "How do you get a sniper rifle in GTA 6?",
    answer:
      "Buy one at an Expanded Ammu-Nation. Prices: Fortune & Son Laird 350 $950, Shrewsbury SM-69 $1,850, Fairview FF-SR $2,950, Fairview FF-50 $3,975. The Shrewsbury SMS-01 ($2,150) unlocks after Bret Vogel's 9th hunting quest.",
    sources: [src.powerpyxSniper],
  },
  {
    question: "How do you get a rocket launcher in GTA 6?",
    answer:
      "The Hauners H-AT costs $16,000 at an Expanded Ammu-Nation. The two grenade launchers are the Hillinger Boomer ($12,000) and the Deever Tech GLR40 ($15,500).",
    sources: [src.powerpyxLaunchers],
  },
  {
    question: "Do you lose your guns in GTA 6?",
    answer:
      "Guns you buy at Ammu-Nation are owned weapons that both Jason and Lucia can use. If you drop one, you can get it back from your owned car's trunk or from a weapon locker, for example at any Ammu-Nation.",
    sources: [src.insiderWeapons],
  },
];

export default function WeaponsPage() {
  return (
    <PageShell>

      <PageHero
        badge="Unofficial · launch-day data"
        title="GTA 6 Weapons"
        description={`${namedCount} named guns from the release, with in-game stat cards (out of 10), caliber, magazine size, and Ammu-Nation prices where a guide published them. Updated November 18, 2026.`}
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
        Stats come from the in-game stat cards. Damage, accuracy, handling, and range are each out of 10. Melee weapons and explosives are not listed by name yet. Where to buy:{" "}
        <Link href="/where-to-find/gun-stores" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          all 24 Ammu-Nation gun stores
        </Link>
        . After the story, some weapons can also come from{" "}
        <Link href="/cheats/combat-cheats" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          combat cheats
        </Link>
        .
      </p>
      <SourceList className="mt-3" sources={[src.dayOneWeapons, src.powerpyxSniper, src.powerpyxLaunchers, src.beebomGearUp]} />

      <WeaponListTable weapons={weapons} />

      <FaqSection faqs={faqs} heading="GTA 6 weapons: questions" />

      <h2 className="mt-16 text-3xl font-black tracking-[-0.03em]">Browse all weapons</h2>
      <WeaponDatabase />

      <PageCTA
        title="No invented numbers"
        description="Every stat and price here comes from a launch-day guide. If a number has not been published, this page says so."
      />

    </PageShell>
  );
}
