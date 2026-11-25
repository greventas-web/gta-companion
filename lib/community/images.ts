import sharp from "sharp";
import { MAX_IMAGE_BYTES, MAX_IMAGE_EDGE, MAX_INPUT_PIXELS, type StoredImageType, type UploadImageType } from "@/lib/community/types";

export class ImageRejected extends Error {
  constructor(readonly reason: "size" | "type" | "pixels") {
    super("Image rejected.");
    this.name = "ImageRejected";
  }
}

export function detectImageType(bytes: Uint8Array): UploadImageType | null {
  if (bytes.length < 12 || bytes.length > MAX_IMAGE_BYTES) return null;
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
 * Decode a JPEG, PNG, or WebP and store only a re-encoded WebP.
 * Metadata, including EXIF and GPS, is dropped. The caller's filename is never used.
 */
export async function prepareCommunityImage(
  input: Buffer,
  options: { maxPixels?: number; maxEdge?: number } = {}
): Promise<{ data: Buffer; contentType: StoredImageType }> {
  if (input.length > MAX_IMAGE_BYTES) throw new ImageRejected("size");
  if (!detectImageType(input)) throw new ImageRejected("type");

  const maxPixels = options.maxPixels ?? MAX_INPUT_PIXELS;
  const maxEdge = options.maxEdge ?? MAX_IMAGE_EDGE;

  try {
    const pipeline = sharp(input, {
      limitInputPixels: maxPixels,
      sequentialRead: true,
      animated: false,
      failOn: "error",
    });
    const meta = await pipeline.metadata();
    if (!meta.width || !meta.height) throw new ImageRejected("type");
    if (meta.width * meta.height > maxPixels) throw new ImageRejected("pixels");

    const data = await pipeline
      .rotate()
      .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toBuffer();

    if (detectImageType(data) !== "image/webp" || data.length > MAX_IMAGE_BYTES) {
      throw new ImageRejected("type");
    }
    return { data, contentType: "image/webp" };
  } catch (error) {
    if (error instanceof ImageRejected) throw error;
    const message = error instanceof Error ? error.message.toLowerCase() : "";
    if (message.includes("pixel") || message.includes("limit")) throw new ImageRejected("pixels");
    throw new ImageRejected("type");
  }
}

export function imageDisposition(contentType: StoredImageType): string {
  const ext = contentType === "image/jpeg" ? "jpg" : "webp";
  return `inline; filename="image.${ext}"`;
}
