import Link from "next/link";

import PageContainer from "@/components/shared/PageContainer";
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
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
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
  const name = href ? (
    <a
      href={href}
      target="_blank"
      rel={partnerRel(partner.rel)}
      className="text-xl font-black tracking-[-0.02em] text-white underline-offset-4 hover:text-violet-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
    >
      {partner.name}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <span className="text-xl font-black tracking-[-0.02em]">{partner.name}</span>
  );

  return (
    <article className="flex h-full gap-4 rounded-[28px] border border-violet-400/15 bg-[#120e1c] p-6">
      {partner.logo ? (
        // Partner logos are served as provided. Do not run them through
        // image optimization or the build-time variant pipeline.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          className="h-12 w-12 shrink-0 rounded-2xl bg-white/5 object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-lg font-black text-violet-200"
        >
          {partner.name.slice(0, 1)}
        </span>
      )}
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
          {partner.category}
        </p>
        <h3 className="mt-2">{name}</h3>
        <p className="mt-2 leading-7 text-zinc-400">{partner.description}</p>
      </div>
    </article>
  );
}
