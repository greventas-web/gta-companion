/**
 * Gold accent for GTA Companion Pro.
 * Import PRO_GOLD_CLASS anywhere Pro should use the same gold treatment.
 */
export const PRO_GOLD_CLASS =
  "border border-amber-200/80 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 text-amber-950 shadow-[0_0_16px_rgba(251,191,36,0.45)]";

type Props = {
  className?: string;
};

export default function ProBadge({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-1.5 py-0.5 text-[10px] font-black leading-none tracking-[0.16em] ${PRO_GOLD_CLASS} ${className}`}
    >
      <span className="sr-only">GTA Companion Pro. </span>
      PRO
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
    <span className={`inline-flex min-w-0 items-center gap-2 ${className}`}>
      <span className="truncate">{name}</span>
      {pro ? <ProBadge /> : null}
    </span>
  );
}
