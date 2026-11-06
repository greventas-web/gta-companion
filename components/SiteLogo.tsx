function MarkSymbol({ large = false }: { large?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_8px_24px_rgba(217,70,239,0.35)] ${
        large ? "h-12 w-12" : "h-10 w-10"
      }`}
    >
      <svg
        viewBox="0 0 64 64"
        className={large ? "h-8 w-8" : "h-7 w-7"}
        fill="none"
      >
        <path
          d="M43 20.2a14.5 14.5 0 1 0 .2 23.6"
          stroke="white"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <circle cx="48" cy="32" r="3.7" fill="white" />
      </svg>
    </span>
  );
}

export default function SiteLogo({
  large = false,
}: {
  large?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <MarkSymbol large={large} />
      <span className="min-w-0 leading-none">
        <span
          className={`block truncate font-black tracking-[-0.04em] ${
            large ? "text-3xl sm:text-4xl" : "text-xl sm:text-[28px]"
          }`}
        >
          <span className="hidden text-white sm:inline">GTA </span>
          <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
            Companion
          </span>
        </span>
      </span>
    </span>
  );
}
