import type { ReactNode } from "react";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import SimpleDetail from "@/components/simple/SimpleDetail";
import type { LaunchEntry } from "@/src/data/launch/types";

type IndexProps = {
  badge: string;
  title: string;
  description: string;
  basePath: string;
  entries: LaunchEntry[];
  emptyBody: string;
  /** Extra content under the list (FAQ, notes, links). */
  children?: ReactNode;
};

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

export function LaunchIndex({ badge, title, description, basePath, entries, emptyBody, children }: IndexProps) {
  return (
    <PageShell>
      <SimpleHero badge={badge} title={title} intro={description} />

      {entries.length === 0 ? (
        <CardGrid>
          <SimpleCard title="Coming soon" line={emptyBody} />
        </CardGrid>
      ) : (
        <CardGrid>
          {entries.map((entry) => (
            <SimpleCard
              key={entry.slug}
              href={`${basePath}/${entry.slug}`}
              title={entry.title}
              image={entry.image}
              imageAlt={entry.imageAlt}
              line={firstSentence(entry.summary)}
              price={entry.price}
              chips={entry.details?.filter((detail) => detail.label === "Unlocks").map((detail) => ({ value: detail.value }))}
            />
          ))}
        </CardGrid>
      )}
      {children}
    </PageShell>
  );
}

type DetailProps = {
  sectionLabel: string;
  sectionHref: string;
  entry: LaunchEntry;
  /** Other entries in the same section, shown as cards. */
  siblings?: LaunchEntry[];
};

export function LaunchDetail({ sectionLabel, sectionHref, entry, siblings = [] }: DetailProps) {
  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: sectionLabel, href: sectionHref }, { label: entry.title }]}
        eyebrow={sectionLabel}
        title={entry.title}
        image={entry.image}
        imageAlt={entry.imageAlt}
        price={entry.price}
        summary={entry.summary}
        facts={entry.details}
        links={entry.links}
        related={siblings
          .filter((other) => other.slug !== entry.slug)
          .slice(0, 4)
          .map((other) => ({
            href: `${sectionHref}/${other.slug}`,
            title: other.title,
            image: other.image,
            line: firstSentence(other.summary),
            price: other.price,
          }))}
      />
    </PageShell>
  );
}
