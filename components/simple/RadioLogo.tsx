import Image from "next/image";

import { RADIO_LOGO_HEIGHT, RADIO_LOGO_WIDTH } from "@/lib/simple/radio";

type LogoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  /** Related cards are shorter, so the plate is drawn below native size. */
  compact?: boolean;
  /** Soft shadow so the plate sits off the blurred station colors. */
  shadow?: boolean;
};

/**
 * In-game station plate. The file is 256×160. Draw it at that size or smaller,
 * centered, so the logo stays sharp. `unoptimized` keeps the browser from
 * treating a same-file srcset as a denser image and shrinking the plate.
 */
export default function RadioLogo({
  src,
  alt,
  priority = false,
  compact = false,
  shadow = false,
}: LogoProps) {
  const maxWidth = compact ? 200 : RADIO_LOGO_WIDTH;
  return (
    <Image
      src={src}
      alt={alt}
      width={RADIO_LOGO_WIDTH}
      height={RADIO_LOGO_HEIGHT}
      priority={priority}
      unoptimized
      style={{
        width: `min(100%, ${maxWidth}px)`,
        height: "auto",
        maxHeight: compact ? 128 : RADIO_LOGO_HEIGHT,
      }}
      className={`object-contain ${shadow ? "drop-shadow-[0_10px_16px_rgba(0,0,0,0.45)]" : ""}`}
    />
  );
}

/** Station page plate: the native logo over a blurred, darkened copy of itself. */
export function RadioLogoPanel({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] min-h-[240px] max-h-[320px] w-full overflow-hidden bg-[#07070c] lg:aspect-auto lg:h-[300px] lg:max-h-none lg:min-h-0">
      {/* Inline filter: the phone crash guard hides Tailwind blur classes below 1024px. */}
      <Image
        src={src}
        alt=""
        fill
        unoptimized
        priority={priority}
        aria-hidden
        sizes="(max-width: 1024px) 100vw, 60vw"
        style={{ transform: "scale(1.4)", filter: "blur(40px) brightness(0.45)" }}
        className="pointer-events-none object-cover"
      />
      <div className="relative flex h-full items-center justify-center px-6">
        <RadioLogo src={src} alt={alt} priority={priority} shadow />
      </div>
    </div>
  );
}
