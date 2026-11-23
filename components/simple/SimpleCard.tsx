import {
  Activity,
  Award,
  BookOpen,
  Briefcase,
  Car,
  Crosshair,
  DollarSign,
  Flag,
  Gamepad2,
  Gem,
  Home,
  type LucideIcon,
  MapPin,
  Newspaper,
  PawPrint,
  PenTool,
  Radio as RadioIcon,
  Scissors,
  Shirt,
  Smartphone,
  Store,
  Tag,
  Target,
  Trophy,
  User,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { mapPinHref } from "@/components/map/MapPinLink";
import { kindFromHref, resolveCardImage, resolveRealImage } from "@/lib/simple/cardImage";
import type { CatalogMark } from "@/lib/simple/marks";
import { imageForPath } from "@/lib/simple/placeImages";
import { oneLine } from "@/lib/simple/text";

import Silhouette from "./Silhouette";
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
  /** Short meta, e.g. the maker or the area. Shown in pink under the title. */
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
  /** Item kind, used for the icon and a fitting photo. Read from href when left out. */
  kind?: string;
  /** Small pink pill in the top-left corner, e.g. a news category. */
  tag?: string;
  /** Class line-drawing used when this item has no real photo. */
  mark?: CatalogMark;
  /** Maker name drawn large on the line-drawing. */
  markLabel?: string;
  /** Fixed 16:10 frame so list cards share one shape. */
  frame?: boolean;
};

const ICONS: Record<string, LucideIcon> = {
  guide: BookOpen,
  challenge: Award,
  weapon: Crosshair,
  gunstore: Crosshair,
  range: Target,
  vehicle: Car,
  salon: Scissors,
  tattoo: PenTool,
  clothing: Shirt,
  clothingstore: Shirt,
  mod: Wrench,
  garage: Warehouse,
  property: Home,
  animal: PawPrint,
  activity: Activity,
  money: DollarSign,
  brand: Tag,
  business: Briefcase,
  character: User,
  phone: Smartphone,
  radio: RadioIcon,
  cheat: Gamepad2,
  mission: Flag,
  trophy: Trophy,
  collectible: Gem,
  news: Newspaper,
  location: MapPin,
  store: Store,
};

/** Plain dark card surface with a faint brand tint, used when an item has no confirmed photo yet. */
export function BlankSurface() {
  return (
    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.12] via-[#0B0B10] to-[#060608]" />
  );
}

function KindIcon({ kind, small }: { kind?: string; small: boolean }) {
  const props = { size: small ? 18 : 22, className: `${small ? "mb-2" : "mb-3"} text-pink-400`, "aria-hidden": true } as const;
  const Icon = (kind && ICONS[kind]) || MapPin;
  return <Icon {...props} />;
}

/** Joins chip values into one short line, e.g. "Unlock: 100 workouts". */
function chipLine(chips?: readonly Chip[]) {
  return (chips ?? [])
    .filter((chip) => chip.value && !/^code$/i.test(chip.label ?? ""))
    .map((chip) => (chip.label ? `${chip.label} ${chip.value}` : chip.value))
    .join(" · ");
}

/**
 * The one card style used across the site. Same look as the homepage Browse
 * cards: full-bleed official photo, dark gradient, pink icon, big bold title
 * at the bottom left and a short pink meta line.
 */
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
  kind: kindProp,
  tag,
  mark,
  markLabel,
  frame = false,
}: SimpleCardProps) {
  const kind = kindProp ?? kindFromHref(href);
  const shortLine = oneLine(line);
  const place = href ? imageForPath(href.split("#")[0]) : undefined;
  const real = resolveRealImage({ image: image ?? place?.src, title });
  const showMark = !real.src && Boolean(mark);
  const resolved = showMark ? { src: undefined, source: "none" as const, isArtwork: false, artKey: undefined } : resolveCardImage({ image: image ?? place?.src, title, kind });
  const isArt = resolved.source === "art";
  const meta = [showMark && markLabel && eyebrow === markLabel ? "" : eyebrow, shortLine].filter(Boolean).join(" · ");
  const code = (chips ?? []).find((chip) => /^code$/i.test(chip.label ?? ""))?.value;
  const extra = chipLine(chips);
  const mapHref = mapLink ?? (mapPin ? mapPinHref(mapPin) : null);

  const body = (
    <article
      data-img-source={showMark ? "mark" : resolved.source}
      data-art-key={isArt ? resolved.artKey : undefined}
      data-artwork={resolved.isArtwork ? "painted" : undefined}
      className={`relative h-full overflow-hidden rounded-[24px] border border-white/5 bg-[#08080A] transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40 ${
        frame ? "aspect-[16/10]" : small ? "min-h-[148px]" : "min-h-[184px] sm:min-h-[200px]"
      }`}
    >
      {showMark && mark ? (
        <Silhouette mark={mark} label={markLabel} compact />
      ) : resolved.src ? (
        <Image
          src={resolved.src}
          alt={isArt ? `Artwork: ${title}` : imageAlt || place?.alt || title}
          fill
          sizes={small ? "(max-width: 640px) 50vw, 300px" : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <BlankSurface />
      )}
      {showMark ? (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07070b] via-[#07070b]/80 to-transparent" />
      ) : (
        <>
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isArt ? "bg-black/25 group-hover:bg-black/10" : "bg-black/55 group-hover:bg-black/35"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </>
      )}
      {price ? <PriceChip price={price} className="absolute right-3 top-3 z-[2] backdrop-blur" /> : null}
      {resolved.isArtwork && !price ? <ArtworkTag className="absolute right-3 top-3 z-[2]" /> : null}
      {tag && !trackId ? (
        <span className="absolute left-4 top-4 z-[2] max-w-[calc(100%-2rem)] truncate rounded-full border border-pink-500/30 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-pink-300 backdrop-blur">
          {tag}
        </span>
      ) : null}
      <div className={`relative z-20 flex h-full flex-col justify-end ${frame || small ? "p-4" : "p-5"} ${trackId ? "pt-14" : price || tag ? "pt-12" : ""}`}>
        {frame || showMark ? null : <KindIcon kind={kind} small={small} />}
        <h3
          className={`break-words font-black leading-none tracking-[-0.03em] text-white ${
            frame ? "line-clamp-2 text-sm leading-snug sm:text-base" : small ? "text-lg leading-tight sm:text-xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        {code ? (
          <p className="mt-2 font-mono text-base font-black tracking-[0.12em] text-white sm:text-lg">{code}</p>
        ) : null}
        {meta ? (
          <p className={`line-clamp-2 font-semibold text-pink-300 ${frame ? "mt-1 text-xs" : "mt-2 text-sm"} ${mapHref ? "pr-24" : ""}`}>{meta}</p>
        ) : null}
        {extra ? (
          <p className={`mt-1 line-clamp-2 text-xs font-semibold text-zinc-300 ${mapHref ? "pr-24" : ""}`}>{extra}</p>
        ) : null}
      </div>
    </article>
  );

  const extras =
    trackId || mapHref ? (
      <>
        {trackId ? <TrackButton id={trackId} label={title} /> : null}
        {mapHref ? (
          <Link
            href={mapHref}
            className="absolute bottom-3 right-3 z-[30] rounded-full border border-pink-300/40 bg-pink-600/90 px-3 py-1 text-xs font-bold text-white transition hover:bg-pink-500 active:scale-95"
          >
            See on map
          </Link>
        ) : null}
      </>
    ) : null;

  const inner = !href ? (
    <div className="group h-full">{body}</div>
  ) : (
    <Link
      href={href}
      className="group block h-full rounded-[24px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.99]"
    >
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

/** Small label on painted artwork so it is never mistaken for a game screenshot. */
export function ArtworkTag({ className = "" }: { className?: string }) {
  return (
    <span
      title="GTA Companion artwork, not a game screenshot"
      className={`pointer-events-none rounded-full border border-white/15 bg-black/55 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/75 backdrop-blur ${className}`}
    >
      Artwork
    </span>
  );
}

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

/** Page title, with an optional big photo (Browse card look). No intro text. */
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
  const resolvedHero = image ? resolveRealImage({ image, title }) : null;
  const photo = resolvedHero?.src ? { src: resolvedHero.src } : null;
  return (
    <header className="relative overflow-hidden rounded-[28px] border border-white/5 bg-[#08080A]">
      {photo ? (
        <>
          <Image src={photo.src} alt={imageAlt || title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
        </>
      ) : null}
      <div
        className={`relative z-20 flex flex-wrap items-end justify-between gap-3 p-6 sm:p-8 ${
          photo ? "min-h-[220px] sm:min-h-[300px]" : ""
        }`}
      >
        <h1 className="break-words text-3xl font-black leading-none tracking-[-0.03em] text-white sm:text-5xl">{title}</h1>
        {children}
      </div>
    </header>
  );
}
