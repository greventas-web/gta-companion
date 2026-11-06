function MarkSymbol({ large = false }: { large?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center rounded-lg border border-white/15 bg-[#0B0B0D] ${
        large ? "h-12 w-12" : "h-9 w-9"
      }`}
    >
      <span className="absolute bottom-1.5 left-0 top-1.5 w-0.5 rounded-full bg-gradient-to-b from-pink-400 to-violet-400" />
      <span
        className={`font-semibold tracking-[-0.06em] text-white ${
          large ? "text-sm" : "text-[11px]"
        }`}
      >
        GC
      </span>
    </span>
  );
}

export default function SiteLogo({
  large = false,
}: {
  large?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <MarkSymbol large={large} />
      <span className="min-w-0 leading-none">
        <span
          className={`block font-semibold uppercase text-zinc-400 ${
            large
              ? "text-xs tracking-[0.34em]"
              : "text-[9px] tracking-[0.28em] sm:text-[10px]"
          }`}
        >
          GTA
        </span>
        <span
          className={`mt-1 block truncate font-semibold tracking-[-0.03em] text-white ${
            large ? "text-2xl" : "text-[15px] sm:text-base"
          }`}
        >
          Companion
        </span>
      </span>
    </span>
  );
}
