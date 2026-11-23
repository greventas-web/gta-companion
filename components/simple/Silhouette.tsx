"use client";

import { useId, type ReactNode } from "react";

import type { CatalogMark } from "@/lib/simple/marks";

/**
 * Solid side-profile icon for a weapon or vehicle with no real photo.
 * White-to-pink fill on the dark panel, in the style of a weapon-wheel icon.
 * Hand-built paths. Not a screenshot and not painted art.
 */
export default function Silhouette({
  mark,
  label,
  className = "",
}: {
  mark: CatalogMark;
  /** Item name, drawn above the icon on a detail page. */
  label?: string;
  className?: string;
}) {
  const raw = useId();
  const id = `mark-${raw.replace(/:/g, "")}`;

  return (
    <div
      data-img-source="mark"
      data-mark={mark}
      className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-[#2a1840] via-[#140e1c] to-[#07070b] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.22),transparent_68%)]" />
      {label ? (
        <p className="absolute inset-x-6 top-[10%] line-clamp-2 text-center text-[clamp(1.35rem,3.2vw,2.15rem)] font-black leading-tight tracking-[-0.04em] text-white">
          {label}
        </p>
      ) : null}
      <svg
        viewBox="0 0 240 140"
        className={`absolute inset-x-0 w-full ${label ? "bottom-0 h-[68%]" : "top-[6%] h-[62%]"}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="42%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill={`url(#${id})`} filter={`url(#${id}-glow)`}>
          {draw(mark, id)}
        </g>
      </svg>
    </div>
  );
}

function arch(cx: number, cy: number, r: number) {
  return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0`;
}

function car(body: string, window: string | null, wheels: [number, number][], extra?: ReactNode) {
  return (
    <>
      <path fillRule="evenodd" d={`${body} ${wheels.map(([x, y]) => arch(x, y, 19)).join(" ")}`} />
      {window ? <path d={window} className="fill-[#140e1c]" /> : null}
      {extra}
      {wheels.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={15} />
          <circle cx={x} cy={y} r={6.5} className="fill-[#140e1c]" />
        </g>
      ))}
    </>
  );
}

function draw(mark: CatalogMark, id: string) {
  const stroke = {
    fill: "none" as const,
    stroke: `url(#${id})`,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (mark) {
    case "pistol":
      return (
        <path
          fillRule="evenodd"
          d="M46 60c0-8 6-14 16-14h96c6 0 10 2 12 6h22c4 0 8 3 8 8v6c0 4-3 8-8 8h-18v6c2 8 0 16-8 20h-16c-2-8-6-14-10-18h-14c-2 10 2 28-8 40-12 8-28 2-32-12-2-8 2-18 8-24h-16c-6 0-12-4-12-12v-6c0-6 4-8 8-8zm92 22h20c2 6 0 12-4 14h-12c-2-4-4-8-4-14z"
        />
      );
    case "revolver":
      return (
        <>
          <path d="M40 62c0-7 6-12 14-12h52v-8h18v8h70c8 0 14 4 16 10 2 8-2 14-10 16h-62v4c4 6 2 14-4 18H118c-4-6-8-10-10-14H78L64 112H46l16-28H54c-8 0-14-6-14-14v-8z" />
          <circle cx="112" cy="64" r="13" />
          <circle cx="112" cy="64" r="5" className="fill-[#140e1c]" />
        </>
      );
    case "smg":
      return (
        <path
          fillRule="evenodd"
          d="M28 64c0-6 4-10 10-10h18V42h14v12h108c8 0 16 3 18 10v4h16c6 0 10 4 10 10s-4 10-10 10h-22v4c2 10-2 18-12 22H160c-6-6-8-12-8-18H96v24c0 4-4 8-10 8H72c-6 0-10-4-10-8V88H38c-6 0-10-5-10-12v-12zm78 20h16c2 6 0 14-2 18h-12c-2-4-4-10-2-18z"
        />
      );
    case "shotgun":
      return <path d="M18 66h132c4 0 8-2 10-4l8-6h28c6 0 12 2 14 8 2 6-2 10-8 12h-28l-6 6H92v8c8 4 12 14 8 22H84c-2-8-8-12-16-12H40c-8 0-16 2-22 8l-8 8H4V66h14z" />;
    case "rifle":
      return (
        <path
          fillRule="evenodd"
          d="M16 70h150v-8c8-2 20-8 28-8h22c6 0 10 4 10 10v6h10c4 0 6 4 4 8-2 4-6 6-10 6h-8v6H108v14c2 8-2 16-10 18H82c-6-2-10-8-8-16V90H48L30 112H16l16-22H16v-20zm96 18h18v16H112z"
        />
      );
    case "sniper":
      return (
        <>
          <path d="M8 72h132v-6h16V52c6-2 16-2 22 2v12h14v6h18c5 0 8 4 6 8-2 5-6 6-12 6H200v6H100v8c6 6 6 16-2 20H82c-6-2-10-10-6-16v-12H28L12 108H4V72h4z" />
          <rect x="78" y="52" width="36" height="10" rx="5" />
        </>
      );
    case "lmg":
      return (
        <>
          <path d="M20 72h128v-12h46c8 0 16 4 18 12v8h14c4 0 8 4 6 8-2 5-6 6-12 6h-12v8H78v16c2 6-2 12-8 14H54c-6-2-10-8-8-14V94H28L14 112H4V84c0-7 6-12 16-12zm108-20h28c4 0 6 3 4 6H124c-2-4 0-6 4-6z" />
          <path d="M64 96h8v22H56l8-22zm28 4h8v18h-8z" />
        </>
      );
    case "launcher":
      return <path d="M34 70c8-16 28-28 52-28h78c18 0 36 8 42 22 4 10-2 18-12 20H150l-8 8v16c0 6-6 10-12 8l-6-4v-16l-10-8H70L52 112H36l16-24c-10-2-18-8-18-18z" />;
    case "throwable":
      return (
        <>
          <path d="M128 34c8 2 12 10 10 16 16 6 28 22 28 40 0 22-18 40-42 40s-42-18-42-40c0-16 8-30 22-38-2-8 2-18 12-20 4 6 8 6 12 2z" />
          <path d="M118 48c8-10 22-8 28 2" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </>
      );
    case "melee":
      return <path d="M28 66c0-8 10-14 24-14h36v-10h14l108 20-108 20H88V80H52c-14 0-24-6-24-14z" />;
    case "sports":
      return car(
        "M22 96 L26 80 C34 72 52 70 70 68 C90 58 104 42 128 40 C156 38 176 52 190 66 C206 74 218 80 220 90 L220 100 L22 100 Z",
        "M104 66 C118 50 142 48 158 58 C168 66 150 74 118 74 Z",
        [[64, 100], [180, 100]],
      );
    case "muscle":
      return car(
        "M18 100 L18 82 C28 74 70 72 92 70 L108 52 C122 44 146 48 154 64 L196 78 C210 84 222 88 224 98 L224 102 L18 102 Z",
        "M112 66 C124 52 146 54 152 66 L128 74 Z",
        [[58, 102], [186, 102]],
      );
    case "sedan":
      return car(
        "M16 100 L16 78 L34 78 L50 56 L108 52 L128 70 L168 74 L188 86 L222 90 L222 102 L16 102 Z",
        "M58 70 L72 56 L104 54 L122 70 Z",
        [[62, 102], [180, 102]],
      );
    case "suv":
      return car(
        "M28 104 L28 64 L44 64 L54 44 L140 42 L158 62 L176 68 L206 82 L218 92 L218 104 Z",
        "M60 64 L70 48 L132 46 L150 64 Z",
        [[70, 104], [176, 104]],
      );
    case "van":
      return car(
        "M18 104 L18 56 L128 56 L146 72 L214 76 L214 104 Z",
        "M28 68 H112 V56 H28 Z M150 76 L136 64 H168 V76 Z",
        [[64, 104], [176, 104]],
      );
    case "truck":
      return car(
        "M14 104 L14 76 L64 76 L78 52 L136 50 L154 72 L224 76 L224 104 Z",
        "M86 70 L96 54 L128 52 L146 70 Z",
        [[52, 104], [168, 104]],
      );
    case "motorcycle":
      return (
        <>
          <circle cx="68" cy="100" r="24" />
          <circle cx="68" cy="100" r="10" className="fill-[#140e1c]" />
          <circle cx="186" cy="96" r="24" />
          <circle cx="186" cy="96" r="10" className="fill-[#140e1c]" />
          <path d="M68 100 L104 72 L150 78 L186 96 L156 86 L118 92 Z" />
          <path d="M118 74 C132 56 162 58 170 74 L150 80 Z" />
          <path d="M156 78 L176 58 H196" />
          <path d="M96 78 C108 68 122 70 128 78" />
        </>
      );
    case "bicycle":
      return (
        <>
          <circle cx="64" cy="100" r="26" />
          <circle cx="64" cy="100" r="18" className="fill-[#140e1c]" />
          <circle cx="184" cy="100" r="26" />
          <circle cx="184" cy="100" r="18" className="fill-[#140e1c]" />
          <path d="M64 100 L112 100 L132 62 L156 62 L184 100 L132 100 L112 62" {...stroke} strokeWidth="5" />
          <path d="M132 62 L118 48 H142" {...stroke} strokeWidth="5" />
          <path d="M112 70 h10" {...stroke} strokeWidth="6" />
        </>
      );
    case "boat":
      return (
        <>
          <path d="M14 74 H30 L46 110 H150 L188 96 L230 64 L202 72 H42 Z" />
          <path d="M48 74 L68 42 H122 L142 74 Z" />
        </>
      );
    case "helicopter":
      return (
        <>
          <path d="M78 70 C78 58 96 54 118 54 H150 C172 54 186 64 184 78 V92 H86 L72 80 V74 H56 V66 H78 Z" />
          <path d="M78 72 H34 L22 64 V78 L34 76 H78" />
          <path d="M16 50 H228 V57 H16 Z" />
          <path d="M120 54 V44 H128 V54" />
          <path d="M22 66 H10 V78 H18" />
          <path d="M90 96 H168 M100 92 V100 M156 92 V100" {...stroke} strokeWidth="4" />
        </>
      );
    case "plane":
      return (
        <>
          <path d="M28 74 C36 64 64 64 96 66 H186 C208 66 220 70 222 76 C220 84 206 86 186 84 H96 C64 86 36 86 28 76 Z" />
          <path d="M100 74 L62 112 H88 L124 80 Z" />
          <path d="M40 72 L16 40 H36 L58 70 Z" />
          <path d="M150 80 L168 98 H150 L138 82 Z" />
        </>
      );
    case "tank":
      return (
        <>
          <path d="M18 86 H214 V108 C214 118 204 122 192 122 H42 C28 122 18 116 18 106 Z" />
          {[48, 78, 108, 138, 168, 196].map((cx) => (
            <circle key={cx} cx={cx} cy="108" r="7" className="fill-[#140e1c]" />
          ))}
          <path d="M62 86 C70 58 100 50 132 52 H158 C176 56 184 70 180 86 Z" />
          <path d="M146 60 H226 V72 H150 Z" />
        </>
      );
    case "emergency":
      return car(
        "M20 102 L20 74 L40 74 L52 54 L120 52 L140 70 L176 74 L198 86 L220 90 L220 102 Z",
        "M60 72 L72 56 L114 54 L132 72 Z",
        [[64, 102], [178, 102]],
        <path d="M78 46 H132 C138 46 140 50 136 54 H74 C70 50 72 46 78 46 Z" />,
      );
    default:
      return null;
  }
}
