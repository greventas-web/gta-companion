"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";

/**
 * Brand mark for GTA Companion Pro.
 *
 * `proBrandFill` is the pink-to-violet accent with white text. The stops are
 * dark enough for that white text on the site's black background.
 * The member seal is a scalloped badge in that same gradient.
 */

export const proBrandFill =
  "bg-gradient-to-r from-pink-700 via-fuchsia-700 to-violet-600 text-white";

export function ProPill({
  href,
  className = "",
  children,
  current = false,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  current?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-label="GTA Companion Pro"
      aria-current={current ? "page" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 p-0.5 font-semibold tracking-[-0.01em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 ${className}`}
    >
      <span className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[14px] bg-[#120810] px-3">
        {children}
      </span>
    </Link>
  );
}

type Props = {
  className?: string;
  /** sm is 18px beside a name. md is the larger seal on the Pro page. */
  size?: "sm" | "md";
};

const CORE = 6.9;
const ORBIT = 6.7;
const BUMP = 3.85;
const LOBES = 8;

const SCALLOPS = Array.from({ length: LOBES }, (_, index) => {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / LOBES;
  return {
    cx: 12 + Math.cos(angle) * ORBIT,
    cy: 12 + Math.sin(angle) * ORBIT,
  };
});

const STAR =
  "M12 8.35l1.05 2.15 2.36.28-1.75 1.6.48 2.32L12 13.6l-2.14 1.1.48-2.32-1.75-1.6 2.36-.28L12 8.35z";

function Seal({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      <circle cx="12" cy="12" r={CORE} />
      {SCALLOPS.map((bump) => (
        <circle key={`${bump.cx}-${bump.cy}`} cx={bump.cx} cy={bump.cy} r={BUMP} />
      ))}
    </g>
  );
}

export default function ProBadge({ className = "", size = "sm" }: Props) {
  const px = size === "md" ? 28 : 18;
  const gradientId = useId().replace(/:/g, "");

  return (
    <span
      role="img"
      aria-label="GTA Companion Pro member"
      title="GTA Companion Pro member"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="block drop-shadow-[0_0_2px_rgba(244,114,182,0.9)]"
      >
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="1" y1="1" x2="23" y2="23">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="46%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <g transform="translate(12 12) scale(1.08) translate(-12 -12)">
          <Seal fill="rgba(255,255,255,0.82)" />
        </g>
        <Seal fill={`url(#${gradientId})`} />
        <path d={STAR} fill="#fff" />
      </svg>
    </span>
  );
}

export function ProName({
  name,
  pro,
  className = "",
}: {
  name: string;
  pro: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-1 ${className}`}>
      <span className="truncate">{name}</span>
      {pro ? <ProBadge /> : null}
    </span>
  );
}
