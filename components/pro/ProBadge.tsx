"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";

/**
 * Brand mark for GTA Companion Pro.
 *
 * `proBrandFill` is the pink-to-violet accent with white text. The stops are
 * dark enough for that white text on the site's black background.
 * `proBrandEdge` is the same family as a border, for the header pill.
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
  /** sm is 14px beside a name. md is 16px. */
  size?: "sm" | "md";
};

const STAR =
  "M12 1.7l2.55 5.55 6.05.7-4.5 4.15 1.25 6.05L12 15.35 6.65 18.15l1.25-6.05L3.4 7.95l6.05-.7L12 1.7z";

export default function ProBadge({ className = "", size = "sm" }: Props) {
  const px = size === "md" ? 16 : 14;
  const gradientId = useId().replace(/:/g, "");

  return (
    <span
      role="img"
      aria-label="GTA Companion Pro member"
      title="GTA Companion Pro member"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
    >
      <svg width={px} height={px} viewBox="0 0 24 24" aria-hidden="true" className="block">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="48%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path d={STAR} fill={`url(#${gradientId})`} />
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
    <span className={`inline-flex min-w-0 items-center gap-1.5 ${className}`}>
      <span className="truncate">{name}</span>
      {pro ? <ProBadge /> : null}
    </span>
  );
}
