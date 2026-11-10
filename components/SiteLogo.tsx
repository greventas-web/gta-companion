import Image from "next/image";

export default function SiteLogo({
  large = false,
}: {
  large?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo/logo-night.jpg"
        alt=""
        width={large ? 64 : 44}
        height={large ? 64 : 44}
        priority={!large}
        className={`shrink-0 rounded-full object-cover ring-1 ring-white/15 ${
          large ? "h-16 w-16" : "h-11 w-11"
        }`}
      />
      <span className="leading-[0.9]">
        <span
          className={`block font-semibold uppercase text-white ${
            large
              ? "text-xs tracking-[0.34em]"
              : "text-[10px] tracking-[0.28em]"
          }`}
        >
          GTA
        </span>
        <span
          className={`mt-1 block whitespace-nowrap bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text font-semibold uppercase tracking-[0.08em] text-transparent ${
            large ? "text-xl" : "text-[13px] sm:text-sm"
          }`}
        >
          Companion
        </span>
      </span>
    </span>
  );
}
