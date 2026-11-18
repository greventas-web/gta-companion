import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { pageMetadata } from "@/lib/launch";
import {
  categoryOf,
  challengeTrackId,
  challenges,
  findChallenge,
} from "@/src/data/launch/challenges";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return challenges.map((challenge) => ({ slug: challenge.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const challenge = findChallenge(slug);
  if (!challenge) return {};
  const category = categoryOf(challenge);
  return pageMetadata(
    `${challenge.name} – GTA 6 ${category?.name ?? ""} Challenge`,
    `How to do the ${challenge.name} challenge in GTA 6: ${challenge.goal} Unofficial.`
  );
}

export default async function ChallengePage({ params }: Props) {
  const { slug } = await params;
  const challenge = findChallenge(slug);
  if (!challenge) notFound();
  const category = categoryOf(challenge);

  const others = challenges.filter(
    (item) => item.category === challenge.category && item.slug !== challenge.slug
  );

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Challenges", href: "/challenges" },
          { label: challenge.name },
        ]}
        eyebrow={`${category?.name ?? ""} challenge`}
        title={challenge.name}
        summary={challenge.goal}
        facts={[
          { label: "Group", value: category?.name ?? "" },
          { label: "Open from", value: "The start" },
        ]}
        trackId={challengeTrackId(challenge.slug)}
        links={[
          ...(challenge.link ? [challenge.link] : []),
          { href: `/challenges#${challenge.category}`, label: `All ${category?.name ?? ""} challenges` },
          { href: "/trophies/one-last-thing", label: "One Last Thing trophy" },
        ]}
        related={others.map((item) => ({
          href: `/challenges/${item.slug}`,
          title: item.name,
          trackId: challengeTrackId(item.slug),
          small: true,
        }))}
        relatedHeading={`More ${category?.name ?? ""} challenges`}
      />
    </PageShell>
  );
}
