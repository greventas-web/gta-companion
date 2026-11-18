import type { Metadata } from "next";
import Link from "next/link";

import FaqSection from "@/components/intent/FaqSection";
import { LaunchIndex } from "@/components/launch/LaunchSection";
import { SourceList } from "@/components/SourceLink";
import { vehicles } from "@/data/vehicles";
import { launchMetadata } from "@/lib/launch";
import { batch1Sources as src } from "@/src/data/launch/batch1-sources";
import { fastestCars } from "@/src/data/launch/fastest-cars";

const title = "Fastest Cars in GTA 6: Confirmed Supercars (Speeds Not Tested Yet)";
const description =
  "Which fast cars are confirmed in GTA 6, how many supercars and sports cars the game has, and why no honest top-speed ranking exists yet. Unofficial fan site.";

export const metadata: Metadata = launchMetadata(title, description);

const PERFORMANCE_SLUGS = [
  "progen-emerus",
  "truffade-thrax",
  "pegassi-zorrusso",
];

const faqs = [
  {
    question: "What is the fastest car in GTA 6?",
    answer:
      "Nobody has published a tested answer yet. No launch-day guide has measured GTA 6 top speeds, and lists that name a winner use GTA 5 numbers or guesses. This page will rank cars only after real in-game tests.",
    sources: [src.proGameGuidesFastest],
  },
  {
    question: "How many supercars are in GTA 6?",
    answer:
      "The in-game Progress database lists 9 supercars and 13 sports cars, among 557 vehicles in total (277 base models and 280 Standout vehicles).",
    sources: [src.powerpyxProgress],
  },
  {
    question: "Which supercars are confirmed in GTA 6?",
    answer:
      "The Progen Emerus and Truffade Thrax can be spawned with cheats after the story, and in Chapter 3 you steal a Pegassi Zorrusso for Randy. Randy's wish list then adds 18 high-end sports cars to find around Vice City.",
    sources: [src.powerpyxCheats, src.gamesradarCheats, src.powerpyxMoney],
  },
];

export default function FastestCarsPage() {
  const cars = PERFORMANCE_SLUGS.map((slug) => vehicles.find((vehicle) => vehicle.slug === slug)).filter(
    (vehicle): vehicle is NonNullable<typeof vehicle> => Boolean(vehicle)
  );

  return (
    <LaunchIndex
      badge="Unofficial · no guessed speeds"
      title="Fastest cars in GTA 6"
      description="The fast cars confirmed in the release so far. No top speeds yet: no launch-day guide has tested them, and we will not copy GTA 5 numbers. Updated November 18, 2026."
      basePath="/fastest-cars"
      entries={fastestCars}
      emptyBody="No car is ranked yet. A ranking appears here only after top speeds are tested in GTA 6. Below are the supercars confirmed so far."
    >
      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-[-0.03em]">Confirmed supercars</h2>
        <p className="mt-3 text-zinc-400">
          The game has 9 supercars and 13 sports cars in its Progress database. These supercars are confirmed by name so far:
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cars.map((car) => (
            <Link
              key={car.slug}
              href={`/vehicles/${car.slug}`}
              className="rounded-[24px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-violet-500/40"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300">
                {car.manufacturer}
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">{car.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">Top speed: not tested yet</p>
            </Link>
          ))}
        </div>
        <SourceList
          className="mt-4"
          sources={[src.powerpyxProgress, src.powerpyxCheats, src.gamesradarCheats, src.powerpyxMoney, src.proGameGuidesFastest]}
        />
        <p className="mt-6 text-zinc-400">
          <Link href="/cheats/vehicle-cheats" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            Vehicle spawn cheats
          </Link>
          {" · "}
          <Link href="/money-methods/randy-wish-list" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            Randy&apos;s wish list
          </Link>
          {" · "}
          <Link href="/where-to-find/mod-shops" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            Mod shops
          </Link>
          {" · "}
          <Link href="/vehicles" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            All vehicles
          </Link>
        </p>
      </section>
      <FaqSection faqs={faqs} heading="Fastest cars: questions" />
    </LaunchIndex>
  );
}
