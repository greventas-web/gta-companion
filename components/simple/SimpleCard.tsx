import Link from "next/link";

import ItemImage, { isNameCard } from "@/components/ItemImage";
import { mapPinHref } from "@/components/map/MapPinLink";
import { oneLine } from "@/lib/simple/text";

import { TrackButton, TrackProgress } from "./Track";

export type Chip = { label?: string; value: string };

/** "$5" style price tag. Renders nothing when there is no price. */
export function PriceChip({ price, className = "" }: { price?: string; className?: string }) {
  if (!price) return null;
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-sm font-black text-emerald-200 ${className}`}
    >
      {price}
    </span>
  );
}

/** Small labeled chips such as "Waiver pass $5". */
export function Chips({ chips, className = "" }: { chips?: readonly Chip[]; className?: string }) {
  const list = (chips ?? []).filter((chip) => chip.value);
  if (list.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {list.map((chip) => (
        <span
          key={`${chip.label ?? ""}${chip.value}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-zinc-200"
        >
          {chip.label ? <span className="text-zinc-500">{chip.label}</span> : null}
          {chip.value}
        </span>
      ))}
    </div>
  );
}

export type SimpleCardProps = {
  href?: string;
  title: string;
  image?: string;
  imageAlt?: string;
  /** Small line above the title, e.g. the maker or the area. */
  eyebrow?: string;
  /** One short plain sentence. */
  line?: string;
  price?: string;
  chips?: readonly Chip[];
  /** Smaller card for long lists of small items. */
  small?: boolean;
  /** Adds a tap-to-check circle saved on this device. */
  trackId?: string;
  /** Map pin id (exact place or area). Adds a small "Map" button. */
  mapPin?: string;
  /** Ready-made map link, used when there is no pin id. */
  mapHref?: string | null;
};

/** The one card style used across list pages: picture, name, one line, price. */
export default function SimpleCard({
  href,
  title,
  image,
  imageAlt,
  eyebrow,
  line,
  price,
  chips,
  small = false,
  trackId,
  mapPin,
  mapHref: mapLink,
}: SimpleCardProps) {
  const shortLine = oneLine(line);
  const body = (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900/95 to-black transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/50 group-hover:shadow-[0_30px_80px_rgba(139,92,246,.18)]">
      <div className={`relative overflow-hidden ${small ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <ItemImage
          src={image}
          alt={imageAlt || title}
          name={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-cover"
        />
        {isNameCard(image) ? null : (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        )}
        {price ? <PriceChip price={price} className="absolute right-3 top-3 z-[2] backdrop-blur" /> : null}
      </div>
      <div className={`flex flex-1 flex-col ${small ? "p-3 sm:p-4" : "p-5"}`}>
        {eyebrow ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">{eyebrow}</p>
        ) : null}
        <h3 className={`mt-1 break-words font-black text-white transition group-hover:text-violet-200 ${small ? "text-base sm:text-lg" : "text-xl"}`}>
          {title}
        </h3>
        {shortLine ? <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">{shortLine}</p> : null}
        <Chips chips={chips} className="mt-3" />
      </div>
    </article>
  );

  const mapHref = mapLink ?? (mapPin ? mapPinHref(mapPin) : null);
  const extras =
    trackId || mapHref ? (
      <>
        {trackId ? <TrackButton id={trackId} label={title} /> : null}
        {mapHref ? (
          <Link
            href={mapHref}
            className="absolute bottom-3 right-3 z-[3] rounded-full border border-violet-300/40 bg-violet-600/90 px-3 py-1 text-xs font-bold text-white transition hover:bg-violet-500 active:scale-95"
          >
            See on map
          </Link>
        ) : null}
      </>
    ) : null;

  const inner = !href ? (
    <div className="group h-full">{body}</div>
  ) : (
    <Link href={href} className="group block h-full rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 active:scale-[0.99] transition">
      {body}
    </Link>
  );
  if (!extras) return inner;
  return (
    <div className="relative h-full">
      {inner}
      {extras}
    </div>
  );
}

export { TrackProgress };

export function CardGrid({
  heading,
  id,
  count,
  children,
  className = "",
  dense = false,
  trackIds,
}: {
  /** Shows a "3/12 done" counter next to the heading. */
  trackIds?: readonly string[];
  heading?: string;
  id?: string;
  count?: number;
  children: React.ReactNode;
  className?: string;
  /** Two cards per row on phones, more on desktop. Pair with small cards. */
  dense?: boolean;
}) {
  return (
    <section id={id} className={`mt-14 scroll-mt-28 ${className}`}>
      {heading ? (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-black tracking-[-0.02em] sm:text-3xl">
            {heading}
            {typeof count === "number" && !trackIds ? <span className="text-zinc-500"> ({count})</span> : null}
          </h2>
          {trackIds ? <TrackProgress ids={trackIds} /> : null}
        </div>
      ) : null}
      <div
        className={`mt-5 grid ${dense ? "grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6" : "gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}
      >
        {children}
      </div>
    </section>
  );
}

/** A row of small label/value tiles, e.g. "Courses 12". */
export function QuickFacts({
  heading,
  facts,
  className = "",
  wide = false,
}: {
  heading?: string;
  facts: readonly Chip[];
  className?: string;
  /** Fewer, wider tiles for short sentences. */
  wide?: boolean;
}) {
  const list = facts.filter((fact) => fact.value);
  if (list.length === 0) return null;
  return (
    <section className={`mt-10 ${className}`}>
      {heading ? <h2 className="text-2xl font-black tracking-[-0.02em] sm:text-3xl">{heading}</h2> : null}
      <div className={`mt-4 grid gap-3 ${wide ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
        {list.map((fact) => (
          <div
            key={`${fact.label ?? ""}${fact.value}`}
            className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            {fact.label ? (
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">{fact.label}</p>
            ) : null}
            <p className={`mt-1 text-white ${wide ? "text-sm font-semibold leading-6" : "font-black"}`}>{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Page title, with an optional big photo. No intro text. */
export function SimpleHero({
  title,
  image,
  imageAlt = "",
  children,
}: {
  title: string;
  image?: string;
  imageAlt?: string;
  /** Small extras next to the title, e.g. a progress counter. */
  children?: React.ReactNode;
  /** Ignored. Pages carry no intro text. */
  intro?: string;
  badge?: string;
}) {
  return (
    <header className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1a0b33] via-[#0B0B0D] to-black">
      {image ? (
        <div className="relative aspect-[16/9] max-h-[380px] w-full sm:aspect-[24/7]">
          <ItemImage src={image} alt={imageAlt || title} name={title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-black/20 to-transparent" />
        </div>
      ) : null}
      <div className={`${image ? "-mt-14 sm:-mt-20" : ""} relative flex flex-wrap items-end justify-between gap-3 p-6 sm:p-8`}>
        <h1 className="break-words text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">{title}</h1>
        {children}
      </div>
    </header>
  );
}
