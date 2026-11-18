import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CheatTable from "@/components/cheats/CheatTable";
import FaqSection from "@/components/intent/FaqSection";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { cheatSources } from "@/src/data/launch/batch1-sources";
import { cheatBasics, cheatFaqs } from "@/src/data/launch/cheat-faqs";
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
  return launchMetadata(group.title, `${group.intro} Codes and unlock requirements. Unofficial fan site.`);
}

export default async function CheatGroupPage({ params }: Props) {
  const { slug } = await params;
  const group = findGroup(slug);
  if (!group) notFound();

  const list = cheatsIn(group.category);
  const withCode = list.filter((cheat) => cheat.code);
  const faqs = [
    {
      question: `How many ${group.label.toLowerCase()} are in GTA 6?`,
      answer: `${list.length}. ${withCode.length} of their codes have been published so far${
        withCode.length > 0 ? `: ${withCode.map((cheat) => cheat.name).join(", ")}` : ""
      }.`,
      sources: cheatSources,
    },
    cheatFaqs[1],
    cheatFaqs[4],
  ];

  return (
    <PageShell>
      <p className="text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-pink-400">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link href="/cheats" className="transition hover:text-pink-400">
          Cheats
        </Link>
      </p>

      <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {group.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{group.intro}</p>

      <ul className="mt-6 max-w-3xl list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-400">
        {cheatBasics.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <CheatTable cheats={list} />
      <SourceList className="mt-4" sources={cheatSources} />

      <FaqSection faqs={faqs} heading="Questions" />

      <p className="mt-10 text-zinc-400">
        {cheatGroups
          .filter((other) => other.slug !== group.slug)
          .map((other, index) => (
            <span key={other.slug}>
              {index > 0 ? " · " : null}
              <Link
                href={`/cheats/${other.slug}`}
                className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
              >
                {other.label}
              </Link>
            </span>
          ))}
      </p>

      <p className="mt-10 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
    </PageShell>
  );
}
