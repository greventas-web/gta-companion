import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BlankSurface } from "@/components/simple/SimpleCard";
import PageContainer from "@/components/shared/PageContainer";
import { resolveCardImage } from "@/lib/simple/cardImage";
import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT, SITE, SOCIAL_PROFILES, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  partnerCategories,
  partnerHref,
  partnerRel,
  partners,
  type Partner,
} from "@/src/data/partners";

const discordInvite =
  SOCIAL_PROFILES.find((profile) => profile.id === "discord")?.href ??
  "https://discord.gg/QBbzqRR3G";

export const metadata = pageMetadata(
  "Community & Partners",
  `Fan sites, creators, and Discords that link with ${SITE.name}. Unofficial fan site for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two.`
);

export default function PartnersPage() {
  const groups = partnerCategories
    .map((category) => ({
      category,
      entries: partners.filter((partner) => partner.category === category),
    }))
    .filter((group) => group.entries.length > 0);

  return (
    <main className="min-h-screen bg-[#07060d] text-white">
      <PageContainer>
        <section className="relative mb-14 overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-[#1a1230] via-[#0d0a16] to-black px-6 py-12 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[110px]" />
          <div className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[100px]" />

          <div className="relative">
            <p className="inline-flex rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-violet-200">
              Unofficial
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-6xl">
              Community & Partners
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Fan sites, creators, and Discords that {SITE.name} links with.{" "}
              {UNOFFICIAL_DISCLAIMER} {IMAGE_CREDIT}.
            </p>
          </div>
        </section>

        {groups.length === 0 ? (
          <section
            aria-labelledby="partners-empty-title"
            className="rounded-[32px] border border-violet-400/20 bg-violet-500/[0.06] px-6 py-10 sm:px-10"
          >
            <h2 id="partners-empty-title" className="text-3xl font-black tracking-[-0.03em]">
              No partners listed yet
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              This page is ready for the fan sites, creators, and Discords we
              link with. Nothing is published here yet. If you run a GTA 6
              site or channel, the note below is for you.
            </p>
          </section>
        ) : (
          <div className="space-y-12">
            {groups.map((group) => {
              const headingId = categoryHeadingId(group.category);

              return (
                <section key={group.category} aria-labelledby={headingId}>
                  <h2
                    id={headingId}
                    className="text-xs font-black uppercase tracking-[0.28em] text-violet-300"
                  >
                    {group.category}
                  </h2>
                  <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                    {group.entries.map((partner) => (
                      <li key={partner.url}>
                        <PartnerCard partner={partner} />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}

        <section
          aria-labelledby="partners-linkup-title"
          className="mt-14 rounded-[32px] border border-white/10 bg-[#100c18] px-6 py-10 sm:px-10"
        >
          <h2 id="partners-linkup-title" className="text-3xl font-black tracking-[-0.03em]">
            Run a GTA 6 site or channel? Let&apos;s link up
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            {SITE.name} is an unofficial fan site. We swap links with other GTA
            6 fan sites, creators, and Discords. Send the name, the URL, a
            short description, and where you will link {SITE.name}. Rockstar
            Games and Take-Two are not part of these swaps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
            >
              Email {SITE.email}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-violet-300/40 px-5 py-3 text-sm font-bold text-violet-100 transition hover:border-violet-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
            >
              Contact page
            </Link>
            <a
              href={discordInvite}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-zinc-100 transition hover:border-violet-300/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
            >
              Discord
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

function categoryHeadingId(category: string) {
  return `partners-${category.toLowerCase().replace(/\s+/g, "-")}`;
}

function PartnerCard({ partner }: { partner: Partner }) {
  const href = partnerHref(partner.url);
  const resolved = resolveCardImage({ title: partner.name, kind: "news" });
  const isArt = resolved.source === "art";
  const rel = partnerRel(partner.rel);

  const body = (
    <article
      data-img-source={resolved.source}
      data-art-key={isArt ? resolved.artKey : undefined}
      className="relative h-full min-h-[184px] overflow-hidden rounded-[24px] border border-white/5 bg-[#08080A] transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40 sm:min-h-[200px]"
    >
      {resolved.src ? (
        <Image
          src={resolved.src}
          alt={isArt ? `${partner.name} artwork` : partner.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <BlankSurface />
      )}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isArt ? "bg-black/25 group-hover:bg-black/10" : "bg-black/55 group-hover:bg-black/35"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-20 flex h-full flex-col justify-end p-5">
        <Newspaper size={22} className="mb-3 text-pink-400" aria-hidden />
        <h3 className="break-words text-2xl font-black leading-none tracking-[-0.03em] text-white">
          {partner.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm font-semibold text-pink-300">{partner.description}</p>
      </div>
    </article>
  );

  return (
    <div className="flex h-full flex-col">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel={rel}
          className="group block rounded-[24px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.99]"
        >
          {body}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <div className="group">{body}</div>
      )}
      <PartnerLinks partner={partner} rel={rel} />
    </div>
  );
}

function PartnerLinks({ partner, rel }: { partner: Partner; rel: string }) {
  const links = (partner.links ?? []).flatMap((link) => {
    const href = partnerHref(link.url);
    return href ? [{ label: link.label, href }] : [];
  });

  if (links.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel={rel}
            className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-pink-400/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
