import type { ReactNode } from "react";
import Link from "next/link";

import BrandedNameCard from "@/components/BrandedNameCard";
import Breadcrumb from "@/components/Breadcrumb";
import ItemImage, { isNameCard } from "@/components/ItemImage";
import { SourceList } from "@/components/SourceLink";
import { IMAGE_CREDIT, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import type { CatalogLink, SourcedFact } from "@/types/cited";
import type { CitedSource } from "@/src/data/gameplay/confirmed";

type Crumb = { label: string; href?: string };

type Props = {
  breadcrumb: Crumb[];
  eyebrow: string;
  title: string;
  summary: string;
  sources: readonly CitedSource[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  map?: ReactNode;
  facts: SourcedFact[];
  unpublished: string[];
  linksTitle?: string;
  links?: CatalogLink[];
};

export default function CatalogArticle({
  breadcrumb,
  eyebrow,
  title,
  summary,
  sources,
  image,
  imageAlt,
  imageCaption,
  map,
  facts,
  unpublished,
  linksTitle,
  links = [],
}: Props) {
  const showPhoto = Boolean(image) && !isNameCard(image);

  return (
    <article>
      <Breadcrumb items={breadcrumb} />

      <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0D]">
          <div className="relative aspect-[4/3] overflow-hidden">
            {showPhoto ? (
              <ItemImage
                src={image}
                alt={imageAlt || title}
                name={title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 640px"
                className="object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0">
                  <BrandedNameCard name={title} showName={false} />
                </div>
                <p className="absolute inset-0 z-[2] flex items-center justify-center px-8 text-center text-3xl font-black leading-tight text-balance text-white sm:text-4xl">
                  {title}
                </p>
              </>
            )}
          </div>
          {showPhoto ? (
            <div className="space-y-2 px-5 py-4">
              {imageCaption ? (
                <p className="text-sm leading-6 text-zinc-400">{imageCaption}</p>
              ) : null}
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                {IMAGE_CREDIT}
              </p>
            </div>
          ) : (
            <p className="px-5 py-4 text-sm leading-6 text-zinc-500">
              No official still in this image set shows this on its own. A name card is used instead of an unrelated photo.
            </p>
          )}
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-violet-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 break-words text-4xl font-black tracking-[-0.03em] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">{summary}</p>
          <SourceList sources={sources} className="mt-4" />
          {map}
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-black tracking-[-0.03em]">Confirmed</h2>
        <div className="mt-6 grid gap-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">
                {fact.label}
              </p>
              <p className="mt-3 text-lg leading-8 text-zinc-200">{fact.value}</p>
              <SourceList sources={fact.sources} className="mt-4" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-black tracking-[-0.03em]">Not published yet</h2>
        <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
          Left blank on purpose. These rows are ready for confirmed in-game detail after launch on November 19, 2026.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {unpublished.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {links.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            {linksTitle || "Related"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-violet-400/40"
              >
                <p className="text-xl font-black">{link.title}</p>
                <p className="mt-2 leading-7 text-zinc-400">{link.meta}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <p className="mt-12 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
    </article>
  );
}
