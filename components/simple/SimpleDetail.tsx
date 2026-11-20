import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import ItemImage from "@/components/ItemImage";
import { kindFromHref, resolveCardImage } from "@/lib/simple/cardImage";
import { mapPinHref } from "@/components/map/MapPinLink";
import { shortText } from "@/lib/simple/text";
import { IMAGE_CREDIT } from "@/lib/site";

import SimpleCard, { ArtworkTag, CardGrid, PriceChip, type SimpleCardProps } from "./SimpleCard";
import { TrackButton } from "./Track";
import AdSlot from "@/components/ads/AdSlot";

export type Fact = { label: string; value: string };

export type SimpleDetailProps = {
  crumbs: { label: string; href?: string }[];
  title: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  /** 1 to 3 short plain sentences. */
  summary?: string;
  price?: string;
  /** Short labeled facts: "Where", "Unlocks", "Counts for". */
  facts?: readonly Fact[];
  /** Optional stat bars (0 to 10). */
  bars?: readonly { label: string; value: number }[];
  mapPin?: string;
  /** Ready-made map link, used when there is no pin id. */
  mapHref?: string | null;
  mapLabel?: string;
  links?: readonly { href: string; label: string }[];
  related?: readonly (SimpleCardProps & { key?: string })[];
  /** Tap-to-check id for this item. */
  trackId?: string;
  relatedHeading?: string;
  /** Item kind for the designed artwork. Read from the breadcrumb link when left out. */
  kind?: string;
  children?: React.ReactNode;
};

/** Shared detail page: picture, name, price, a few labeled facts. */
export default function SimpleDetail({
  crumbs,
  title,
  eyebrow,
  image,
  imageAlt,
  summary,
  price,
  facts,
  bars,
  mapPin,
  mapHref: mapLink,
  mapLabel = "See on map",
  links,
  related,
  relatedHeading = "More like this",
  children,
  trackId,
  kind: kindProp,
}: SimpleDetailProps) {
  const mapHref = mapLink ?? (mapPin ? mapPinHref(mapPin) : null);
  const text = shortText(summary, 2);
  const crumbHref = [...crumbs].reverse().find((crumb) => crumb.href && crumb.href !== "/")?.href;
  const kind = kindProp ?? kindFromHref(crumbHref);
  const resolved = resolveCardImage({ image, title, kind });
  const hasImage = Boolean(resolved.src);
  const isArt = resolved.source === "art";
  const factList = (facts ?? []).filter((fact) => fact.value && !/^\s*not (yet )?(published|shown|announced)/i.test(fact.value));

  return (
    <section className="mx-auto max-w-[1400px]">
      <Breadcrumb items={crumbs} />

      <div className={hasImage ? "mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12" : "mt-6 max-w-3xl"}>
        {hasImage ? (
          <div className="self-start overflow-hidden rounded-[28px] border border-white/10 bg-black">
            <div className="relative aspect-[16/10]">
              <ItemImage src={image} alt={isArt ? `Artwork: ${title}` : imageAlt || title} name={title} kind={kind} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              {resolved.isArtwork ? <ArtworkTag className="absolute right-3 top-3 z-[2]" /> : null}
              {trackId ? <TrackButton id={trackId} label={title} /> : null}
            </div>
            <p className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              {resolved.isArtwork ? "GTA Companion artwork, not a game screenshot" : isArt ? "GTA Companion artwork" : IMAGE_CREDIT}
            </p>
          </div>
        ) : null}

        <div>
          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-300">{eyebrow}</p>
          ) : null}
          <div className="flex items-start gap-3">
            <h1 className="mt-3 break-words text-4xl font-black tracking-[-0.03em] sm:text-5xl">{title}</h1>
            {trackId && !hasImage ? (
              <div className="relative mt-3 h-9 w-9 shrink-0 [&>button]:left-0 [&>button]:top-0">
                <TrackButton id={trackId} label={title} />
              </div>
            ) : null}
          </div>
          {price ? <PriceChip price={price} className="mt-5 px-4 py-1.5 text-lg" /> : null}
          {text ? <p className="mt-5 text-lg leading-8 text-zinc-300">{text}</p> : null}

          {factList.length > 0 ? (
            <dl className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]">
              {factList.map((fact) => (
                <div key={fact.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-3">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{fact.label}</dt>
                  <dd className="text-right font-semibold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {bars && bars.length > 0 ? (
            <div className="mt-6 grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
              {bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                    <span>{bar.label}</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                      style={{ width: `${Math.max(0, Math.min(100, bar.value * 10))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {mapHref || (links && links.length > 0) ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {mapHref ? (
                <Link
                  href={mapHref}
                  className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500 active:scale-95"
                >
                  {mapLabel}
                </Link>
              ) : null}
              {links?.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {children}

      <AdSlot name="detail" />

      {related && related.length > 0 ? (
        <CardGrid heading={relatedHeading}>
          {related.map((card) => (
            <SimpleCard key={card.key ?? card.href ?? card.title} {...card} />
          ))}
        </CardGrid>
      ) : null}
    </section>
  );
}
