"use client";

import { useId } from "react";

import type { CatalogMark } from "@/lib/simple/marks";

/**
 * Hand-drawn class icon for a weapon or vehicle with no real photo.
 * Pink and purple line work on the site gradient. Not a screenshot.
 */
export default function Silhouette({
  mark,
  label,
  compact = false,
  className = "",
}: {
  mark: CatalogMark;
  /** Maker, in large type. Omitted when the catalog has no maker. */
  label?: string;
  /** Smaller maker line for grid cards. */
  compact?: boolean;
  className?: string;
}) {
  const raw = useId();
  const grad = `mark-${raw.replace(/:/g, "")}`;

  return (
    <div
      data-img-source="mark"
      data-mark={mark}
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-[#241432] via-[#100c18] to-[#07070b] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.16),transparent_62%)]" />
      <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke={`url(#${grad})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {draw(mark)}
        </g>
      </svg>
      {label ? (
        <p
          className={
            compact
              ? "absolute left-3 right-16 top-3 line-clamp-2 text-left text-sm font-black leading-tight tracking-[-0.03em] text-white"
              : "absolute inset-x-8 top-[12%] text-center text-[clamp(1.7rem,4vw,2.75rem)] font-black leading-none tracking-[-0.04em] text-white"
          }
        >
          {label}
        </p>
      ) : null}
    </div>
  );
}

function draw(mark: CatalogMark) {
  switch (mark) {
    case "pistol":
      return (
        <>
          <path d="M78 88h132v10h-22v6h-18l-10 34h-22l8-34H78z" />
          <path d="M210 91h42v6h-42" />
          <path d="M148 104v16h20v-16" />
          <path d="M78 82v10" />
        </>
      );
    case "smg":
      return (
        <>
          <path d="M78 92h150v14H78z" />
          <path d="M96 106v16h28v14" />
          <path d="M118 106v12h12" />
          <path d="M70 96v8h8" />
          <path d="M214 92v-10h16v10" />
        </>
      );
    case "rifle":
      return (
        <>
          <path d="M62 98h196v10H62z" />
          <path d="M86 108v14h22l10 16h14" />
          <path d="M108 108v10h16" />
          <path d="M168 98v-12h46v12" />
          <path d="M58 102v6" />
        </>
      );
    case "shotgun":
      return (
        <>
          <path d="M70 100h168" />
          <path d="M70 108h120" />
          <path d="M118 100v8" />
          <path d="M86 108v12l16 18h16" />
          <path d="M148 100v12h22" />
        </>
      );
    case "sniper":
      return (
        <>
          <path d="M48 104h224" />
          <path d="M48 112h150" />
          <path d="M132 96h36v20h-36z" />
          <path d="M90 112v12l18 16h14" />
          <path d="M210 104v-14h8" />
        </>
      );
    case "heavy":
      return (
        <>
          <path d="M78 92h150v22H78z" />
          <path d="M108 114v16h18v12" />
          <path d="M150 92v-12h28v12" />
          <path d="M214 98h22" />
        </>
      );
    case "melee":
      return (
        <>
          <path d="M150 48l18 78" />
          <path d="M140 48h20" />
          <path d="M146 126h28v22h-28z" />
          <path d="M146 136h28" />
        </>
      );
    case "throwable":
      return (
        <>
          <path d="M148 78c-18 6-28 24-24 42 4 16 20 26 36 24 18-2 32-18 30-36-2-20-22-34-42-30z" />
          <path d="M164 78c8-10 22-12 28-6" />
          <path d="M186 70c6 2 8 8 4 12" />
        </>
      );
    case "sedan":
      return vehicle({
        shell: "M62 108h40l16-30h84l18 30h42",
        glass: "M118 108l16-30h56l16 30",
        rocker: "M96 118h36M188 118h40",
        front: 108,
        rear: 214,
      });
    case "sports":
      return vehicle({
        shell: "M52 112c16 0 28-14 46-18l36-20h40l28 20c18 4 32 14 48 18",
        glass: "M134 94l22-20h28l16 20",
        rocker: "M88 120h28M196 120h36",
        front: 104,
        rear: 220,
      });
    case "muscle":
      return vehicle({
        shell: "M50 112c18 0 32-12 52-14h62l22-22h28l16 22h28c14 2 26 10 36 14",
        glass: "M164 98l18-22h22l12 22",
        rocker: "M86 120h32M200 120h40",
        front: 102,
        rear: 226,
      });
    case "suv":
      return vehicle({
        shell: "M64 112V84h36V66h108v18h40v28",
        glass: "M100 84V66h108v18",
        rocker: "M98 120h32M196 120h36",
        front: 112,
        rear: 218,
      });
    case "truck":
      return vehicle({
        shell: "M48 114V86h52l16-22h40v22h96v28",
        glass: "M116 86V64h40v22",
        rocker: "M78 122h28M168 122h28M228 122h24",
        front: 92,
        rear: 196,
        extra: <circle cx="248" cy="126" r="14" />,
      });
    case "van":
      return vehicle({
        shell: "M58 114V78h48l18-16h130v52",
        glass: "M106 78V62h28v16",
        rocker: "M92 122h32M196 122h36",
        front: 108,
        rear: 220,
      });
    case "motorcycle":
      return (
        <>
          <circle cx="108" cy="118" r="18" />
          <circle cx="214" cy="118" r="18" />
          <path d="M108 118l28-36h48l22 22" />
          <path d="M150 82l-16 36" />
          <path d="M176 82v18" />
        </>
      );
    case "boat":
      return (
        <>
          <path d="M64 112h176l-18 22H96z" />
          <path d="M126 112V86h52v26" />
          <path d="M152 86V70" />
        </>
      );
    case "aircraft":
      return (
        <>
          <path d="M48 104h168l28-8v12l-28 8H48l16-6z" />
          <path d="M118 100l-36-28M118 112l-28 26" />
          <path d="M196 96l22-16M196 116l18 16" />
        </>
      );
    default:
      return null;
  }
}

function vehicle({
  shell,
  glass,
  rocker,
  front,
  rear,
  extra,
}: {
  shell: string;
  glass: string;
  rocker: string;
  front: number;
  rear: number;
  extra?: React.ReactNode;
}) {
  return (
    <>
      <path d={shell} />
      <path d={glass} />
      <path d={rocker} />
      <circle cx={front} cy="126" r="16" />
      <circle cx={front} cy="126" r="6" />
      <circle cx={rear} cy="126" r="16" />
      <circle cx={rear} cy="126" r="6" />
      {extra}
    </>
  );
}
