import Image from "next/image";

import { radioLogoSize } from "@/lib/simple/radio";

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
 * Trimmed station badge. Draw it at its native pixel size or smaller so the
 * mark stays sharp. `unoptimized` keeps the browser from shrinking it.
 * Rounded corners and the shadow are for the station page only.
 */
export default function RadioLogo({
  src,
  alt,
  priority = false,
  compact = false,
  shadow = false,
}: LogoProps) {
  const size = radioLogoSize(src);
  const maxWidth = compact ? Math.min(size.width, 96) : size.width;
  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      priority={priority}
      unoptimized
      style={{
        width: `min(100%, ${maxWidth}px)`,
        height: "auto",
      }}
      className={`object-contain ${shadow ? "rounded-[8px] drop-shadow-[0_10px_16px_rgba(0,0,0,0.45)]" : ""}`}
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
