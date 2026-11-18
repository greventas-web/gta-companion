import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { cheatCard } from "@/components/cheats/cheatCards";
import { launchMetadata } from "@/lib/launch";
import { cheatBasics } from "@/src/data/launch/cheat-faqs";
import { cheatGroups, cheatsIn } from "@/src/data/launch/cheats";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cheatGroups.map((group) => ({ slug: group.slug }));
}

export const dynamicParams = false;

function findGroup(slug: string) {
  return cheatGroups.find((group) => group.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = findGroup(slug);
  if (!group) return {};
  return launchMetadata(group.title, `${group.intro} Codes and how to unlock each one. Unofficial fan site.`);
}

export default async function CheatGroupPage({ params }: Props) {
  const { slug } = await params;
  const group = findGroup(slug);
  if (!group) notFound();

  const list = cheatsIn(group.category);
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cheats", href: "/cheats" }, { label: group.label }]} />
      <div className="mt-6">
        <SimpleHero title={group.label} />
      </div>

      <QuickFacts facts={cheatBasics} wide />

      <CardGrid count={list.length} dense>
        {list.map((cheat) => (
          <SimpleCard key={cheat.name} {...cheatCard(cheat)} small />
        ))}
      </CardGrid>

      <CardGrid heading="Other cheats">
        {cheatGroups
          .filter((other) => other.slug !== group.slug)
          .map((other) => (
            <SimpleCard
              key={other.slug}
              href={`/cheats/${other.slug}`}
              title={other.label}
              chips={[{ value: `${cheatsIn(other.category).length} cheats` }]}
            />
          ))}
      </CardGrid>
    </PageShell>
  );
}
