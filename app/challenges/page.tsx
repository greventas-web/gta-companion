import type { Metadata } from "next";

import { faqPageJsonLd } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero, TrackProgress } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import {
  challengeCategories,
  challengeFaqs,
  challengeQuick,
  challenges,
  challengeTrackId,
} from "@/src/data/launch/challenges";

const title = "GTA 6 Challenges List – All 80 Challenges";
const description =
  "All 80 GTA 6 challenges in 8 groups, with what each one asks. Tick them off as you go. 50 unlock One Last Thing, 70 count for 100%. Unofficial.";

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  keywords: ["GTA 6 challenges", "GTA 6 challenges list", "GTA 6 One Last Thing", "GTA 6 all challenges", "GTA VI challenges"],
};

export default function ChallengesPage() {
  const allIds = challenges.map((challenge) => challengeTrackId(challenge.slug));

  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 challenges",
          "/challenges",
          challenges.map((challenge) => ({ name: challenge.name, url: `/challenges/${challenge.slug}` }))
        )}
      />
      <JsonLd data={faqPageJsonLd(challengeFaqs)} />
      <SimpleHero title="Challenges">
        <TrackProgress ids={allIds} />
      </SimpleHero>

      <QuickFacts facts={challengeQuick} />

      {challengeCategories.map((category) => {
        const list = challenges.filter((challenge) => challenge.category === category.slug);
        return (
          <CardGrid
            key={category.slug}
            id={category.slug}
            heading={category.name}
            dense
            trackIds={list.map((challenge) => challengeTrackId(challenge.slug))}
          >
            {list.map((challenge) => (
              <SimpleCard
                key={challenge.slug}
                href={`/challenges/${challenge.slug}`}
                title={challenge.name}
                small
                trackId={challengeTrackId(challenge.slug)}
              />
            ))}
          </CardGrid>
        );
      })}
    </PageShell>
  );
}
