import Image from "next/image";

export default function SiteLogo({
  large = false,
}: {
  large?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <Image
        src="/logo/wordmark.jpg"
        alt=""
        width={large ? 64 : 44}
        height={large ? 64 : 44}
        priority={!large}
        className={`shrink-0 rounded-full object-cover shadow-[0_0_0_1px_rgba(250,238,222,0.18)] ${
          large ? "h-16 w-16" : "h-11 w-11"
        }`}
      />
      <span className="leading-[0.9]">
        <span
          className={`block font-semibold uppercase text-[#FAEEDE] ${
            large
              ? "text-sm tracking-[0.42em]"
              : "text-[10px] tracking-[0.32em] sm:text-[11px]"
          }`}
        >
          GTA
        </span>
        <span
          className={`mt-1 block whitespace-nowrap font-semibold uppercase text-[#F06E28] ${
            large
              ? "text-[22px] tracking-[0.14em]"
              : "text-[13px] tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]"
          }`}
        >
          Companion
        </span>
        <span
          aria-hidden="true"
          className={`mt-1.5 block h-px bg-[#1E6E78] ${
            large ? "w-24" : "w-14"
          }`}
        />
      </span>
    </span>
  );
}
