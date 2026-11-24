/**
 * Gold PRO mark. Self-contained so a name row (for example on a community
 * board) can drop it in beside a Pro member without pulling in checkout.
 *
 * `proGoldFill` and `proGoldGlow` are the same gold as the header pill.
 */

export const proGoldFill =
  "bg-[linear-gradient(135deg,#fff8e4_0%,#f4e0a4_34%,#e4c15f_70%,#c9962e_100%)] text-[#241c0c]";

export const proGoldGlow = "shadow-[0_0_18px_rgba(214,168,64,0.45)]";

type Props = {
  className?: string;
  /** sm sits on a name. md is a slightly larger mark. */
  size?: "sm" | "md";
};

export default function ProBadge({ className = "", size = "sm" }: Props) {
  const sizing = size === "md" ? "h-7 px-2.5 text-[11px]" : "h-[1.15rem] px-1.5 text-[9px]";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-black tracking-[0.16em] ring-1 ring-[#fff6d8]/70 ${proGoldFill} ${proGoldGlow} ${sizing} ${className}`}
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
