import type { Metadata } from "next";
import Link from "next/link";

import { ConfirmedEntries, LaunchPage } from "@/components/launch/LaunchBoard";
import {
  fastestCarTopics,
  fastestCars,
  fastestCarsSection,
} from "@/src/data/launch/cars";

export const metadata: Metadata = {
  title: fastestCarsSection.seoTitle,
  description: fastestCarsSection.seoDescription,
};

export default function FastestCarsPage() {
  return (
    <LaunchPage
      title={fastestCarsSection.title}
      description={fastestCarsSection.heroDescription}
      topics={fastestCarTopics}
    >
      <ConfirmedEntries
        entries={fastestCars.map((car) => ({
          id: car.id,
          title: car.topSpeed ? `${car.name}: ${car.topSpeed}` : car.name,
          status: car.status,
          detail: car.note,
          href: car.href,
        }))}
        empty="No confirmed top speeds yet. A car is added here only after its speed is checked."
      />

      <p className="mt-8 leading-8 text-zinc-400">
        <Link href="/vehicles" className="font-semibold text-pink-400 hover:text-pink-300">
          Browse the vehicle database
        </Link>{" "}
        for cars already shown. Those pages are not a fastest ranking.
      </p>
    </LaunchPage>
  );
}
