import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { cheatCard, cheatImage } from "@/components/cheats/cheatCards";
import { launchMetadata } from "@/lib/launch";
import { arrowCode, cheatPages, cheatsIn, findCheat } from "@/src/data/launch/cheats";

type Props = { params: Promise<{ slug: string; cheat: string }> };

export function generateStaticParams() {
  return cheatPages().map((entry) => ({ slug: entry.group.slug, cheat: entry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, cheat } = await params;
  const entry = findCheat(slug, cheat);
  if (!entry) return {};
  const code = entry.cheat.code ? ` Code: ${entry.cheat.code.join(", ")}.` : "";
  return launchMetadata(
    `GTA 6 ${entry.cheat.name} Cheat: Code and Unlock`,
    `${entry.cheat.effect} Unlock: ${entry.cheat.unlock}${code} Unofficial fan site.`
  );
}

export default async function CheatPage({ params }: Props) {
  const { slug, cheat: cheatSlugParam } = await params;
  const entry = findCheat(slug, cheatSlugParam);
  if (!entry) notFound();
  const { cheat, group } = entry;
  const image = cheatImage(cheat);

  const others = cheatsIn(group.category)
    .filter((other) => other.name !== cheat.name)
    .slice(0, 8)
    .map(cheatCard);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Cheats", href: "/cheats" },
          { label: group.label, href: `/cheats/${group.slug}` },
          { label: cheat.name },
        ]}
        eyebrow={group.label}
        title={cheat.name}
        image={image.src}
        imageAlt={image.alt}
        summary={`${cheat.effect} Works after the story.`}
        facts={[
          { label: "How to unlock", value: cheat.unlock.replace(/\.$/, "") },
          { label: "Code", value: arrowCode(cheat.code) },
          { label: "Note", value: cheat.codeNote ?? cheat.unlockNote ?? "" },
        ]}
        links={[
          ...(cheat.link ? [{ href: cheat.link, label: "See what you get" }] : []),
          { href: `/cheats/${group.slug}`, label: `All ${group.label.toLowerCase()}` },
        ]}
        related={others}
        relatedHeading={`More ${group.label.toLowerCase()}`}
      />
    </PageShell>
  );
}
