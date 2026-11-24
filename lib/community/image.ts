import sharp from "sharp";
import { LIMITS } from "@/lib/community/shared";

const MAX_EDGE = 1600;
const MAX_PIXELS = 24_000_000;
const TYPE_ERROR = "Use a JPEG, PNG, or WebP image up to 3 MB.";

export function sniffImage(bytes: Uint8Array): "image/jpeg" | "image/png" | "image/webp" | null {
  if (bytes.length < 12) return null;
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }
  if (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }
  return null;
}

/**
 * Checks type and size, then re-encodes to WebP so the stored file is a real
 * image with location metadata removed and the long edge capped.
 */
export async function prepareImage(
  input: Uint8Array
): Promise<{ ok: true; bytes: Buffer; contentType: "image/webp" } | { ok: false; error: string }> {
  if (input.byteLength === 0 || input.byteLength > LIMITS.imageBytes) {
    return { ok: false, error: TYPE_ERROR };
  }
  if (!sniffImage(input)) return { ok: false, error: TYPE_ERROR };

  try {
    const bytes = await sharp(input, { limitInputPixels: MAX_PIXELS })
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();
    if (bytes.byteLength === 0 || bytes.byteLength > LIMITS.imageBytes) {
      return { ok: false, error: "That image could not be saved. Try a smaller one." };
    }
    return { ok: true, bytes, contentType: "image/webp" };
  } catch {
    return { ok: false, error: "That file is not a usable image." };
  }
}
