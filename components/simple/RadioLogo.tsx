import Image from "next/image";

import { RADIO_LOGO_HEIGHT, RADIO_LOGO_WIDTH } from "@/lib/simple/radio";

/**
 * In-game station plate. The file is 256×160. Draw it at that size or smaller,
 * centered, so the logo stays sharp.
 */
export default function RadioLogo({
  src,
  alt,
  priority = false,
  compact = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  /** Related cards are shorter, so the plate is drawn below native size. */
  compact?: boolean;
}) {
  // Explicit CSS size. next/image srcset widths do not match this 256px file,
  // and the browser would otherwise draw the plate far below native size.
  const maxWidth = compact ? 200 : RADIO_LOGO_WIDTH;
  return (
    <Image
      src={src}
      alt={alt}
      width={RADIO_LOGO_WIDTH}
      height={RADIO_LOGO_HEIGHT}
      priority={priority}
      style={{
        width: `min(100%, ${maxWidth}px)`,
        height: "auto",
        maxHeight: compact ? 128 : RADIO_LOGO_HEIGHT,
      }}
      className="object-contain"
    />
  );
}
