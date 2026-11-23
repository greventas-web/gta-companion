import Link from "next/link";

import AdSlot from "@/components/ads/AdSlot";
import Breadcrumb from "@/components/Breadcrumb";
import ItemImage from "@/components/ItemImage";
import { mapPinHref } from "@/components/map/MapPinLink";
import { kindFromHref, resolveCardImage, resolveRealImage } from "@/lib/simple/cardImage";
import type { CatalogMark } from "@/lib/simple/marks";
import { isRadioLogoSrc } from "@/lib/simple/radio";
import { shortText } from "@/lib/simple/text";
import { IMAGE_CREDIT } from "@/lib/site";

import RadioLogo from "./RadioLogo";
import Silhouette from "./Silhouette";
import SimpleCard, { ArtworkTag, CardGrid, PriceChip, type SimpleCardProps } from "./SimpleCard";
import { TrackButton } from "./Track";

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
  /** Replaces the photo. Used for the mission number plate. */
  visual?: React.ReactNode;
  /** Credit under `visual`, when that plate includes a Rockstar still. */
  visualCredit?: string;
  /** Class line-drawing when there is no real photo. */
  mark?: CatalogMark;
  markLabel?: string;
  /** Full-width line under the hero. */
  where?: string;
  /** Short timing note, only when the catalog already has one. */
  tip?: string;
  /** Previous and next items. */
  nav?: {
    prev?: { href: string; label: string };
    next?: { href: string; label: string };
  };
  /** Non-money reward, shown as a pill beside the price. */
  badge?: string;
  /** Mission plate: size to its content instead of a 16:10 photo frame. */
  compactVisual?: boolean;
  children?: React.ReactNode;
};

const UNKNOWN_VALUE =
  /^\s*(?:[-–—]+|unknown|n\/a|na|tba|tbd|not named|not shown|none|not (?:yet )?(?:published|shown|announced|confirmed))\b/i;

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
  visual,
  visualCredit,
  mark,
  markLabel,
  where,
  tip,
  nav,
  badge,
  compactVisual = false,
}: SimpleDetailProps) {
  const mapHref = mapLink ?? (mapPin ? mapPinHref(mapPin) : null);
  const text = shortText(summary, 3);
  const crumbHref = [...crumbs].reverse().find((crumb) => crumb.href && crumb.href !== "/")?.href;
  const kind = kindProp ?? kindFromHref(crumbHref);
  const real = resolveRealImage({ image, title });
  const logo = isRadioLogoSrc(real.src);
  const showMark = !real.src && !visual && Boolean(mark);
  const resolved = real.src || visual || showMark ? real : resolveCardImage({ image, title, kind });
  const hasImage = Boolean(visual) || Boolean(real.src) || showMark || Boolean(resolved.src);
  const isArt = !real.src && !visual && !showMark && resolved.source === "art";
  const factList = (facts ?? []).filter((fact) => fact.value && !UNKNOWN_VALUE.test(fact.value.trim()));
  const barList = (bars ?? []).filter((bar) => typeof bar.value === "number" && Number.isFinite(bar.value));
  const stepClass =
    "rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-violet-400/40";
  const credit = real.src
    ? IMAGE_CREDIT
    : visual && visualCredit
      ? visualCredit
      : isArt
        ? resolved.isArtwork
          ? "GTA Companion artwork, not a game screenshot"
          : "GTA Companion artwork"
        : "";

  return (
    <section className="mx-auto max-w-[1400px]">
      <Breadcrumb items={crumbs} />

      <div className={hasImage ? `mt-8 grid gap-8 lg:gap-12 ${compactVisual ? "lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"}` : "mt-6 max-w-3xl"}>
        {hasImage ? (
          <div className={`self-start overflow-hidden rounded-[28px] border border-white/10 bg-black ${compactVisual ? "lg:max-w-md" : ""}`}>
            <div className={compactVisual ? "relative" : "relative aspect-[16/10]"}>
              {visual ? (
                visual
              ) : showMark && mark ? (
                <Silhouette mark={mark} label={markLabel} />
              ) : logo && real.src ? (
                <div className="absolute inset-0 flex items-center justify-center bg-[#07070c] px-6">
                  <RadioLogo src={real.src} alt={imageAlt || title} priority />
                </div>
              ) : (
                <ItemImage src={image} alt={isArt ? `Artwork: ${title}` : imageAlt || title} name={title} kind={kind} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              )}
              {isArt && resolved.isArtwork ? <ArtworkTag className="absolute right-3 top-3 z-[2]" /> : null}
              {trackId && !compactVisual ? <TrackButton id={trackId} label={title} /> : null}
            </div>
            {credit ? (
              <p className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">{credit}</p>
            ) : null}
          </div>
        ) : null}

        <div>
          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-300">{eyebrow}</p>
          ) : null}
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="mt-3 break-words text-4xl font-black tracking-[-0.03em] sm:text-5xl">{title}</h1>
            {trackId && (!hasImage || compactVisual) ? (
              <div className="mt-3">
                <TrackButton id={trackId} label={title} labeled />
              </div>
            ) : null}
          </div>
          {price || badge ? (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {price ? <PriceChip price={price} className="px-4 py-1.5 text-lg" /> : null}
              {badge ? (
                <span className="inline-flex items-center rounded-full border border-violet-300/30 bg-violet-500/15 px-4 py-1.5 text-lg font-black text-violet-100">
                  {badge}
                </span>
              ) : null}
            </div>
          ) : null}
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

          {barList.length > 0 ? (
            <div className="mt-6 grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
              {barList.map((bar) => (
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

      {where ? (
        <p className="mt-6 max-w-3xl text-zinc-300">
          <span className="font-semibold text-white">Where to find it: </span>
          {where}
        </p>
      ) : null}
      {tip ? (
        <p className="mt-6 max-w-3xl rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-300">
          <span className="font-semibold text-white">Before you start. </span>
          {tip}
        </p>
      ) : null}
      {nav?.prev || nav?.next ? (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {nav.prev ? (
            <Link href={nav.prev.href} className={stepClass}>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">Previous</span>
              <span className="mt-1 block font-black text-white">{nav.prev.label}</span>
            </Link>
          ) : null}
          {nav.next ? (
            <Link href={nav.next.href} className={`${stepClass} sm:text-right ${nav.prev ? "" : "sm:col-start-2"}`}>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">Next</span>
              <span className="mt-1 block font-black text-white">{nav.next.label}</span>
            </Link>
          ) : null}
        </div>
      ) : null}

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
