// Builds maskable icons from the night-skyline logo.
// The regular icons (icon-night-192/512 and the Apple touch icon) are that
// same logo. This script only writes the maskable pair: the skyline sits
// inside the center 80% safe zone on the brand purple, so Android's mask
// does not crop the artwork. No "GC" monogram.
//
// Run: node scripts/pwa/icons.mjs
import sharp from "sharp";

const SOURCE = "public/icons/icon-night-512.png";
const BACKGROUND = { r: 26, g: 10, b: 46, alpha: 1 }; // #1a0a2e

async function maskable(size, file) {
  // 76% leaves the skyline inside the 80% maskable safe zone.
  const inner = Math.round(size * 0.76);
  const resized = await sharp(SOURCE)
    .resize(inner, inner, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${inner}" height="${inner}" xmlns="http://www.w3.org/2000/svg"><circle cx="${inner / 2}" cy="${inner / 2}" r="${inner / 2}" fill="#fff"/></svg>`
  );

  const circled = await sharp(resized)
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: BACKGROUND },
  })
    .composite([{ input: circled, gravity: "centre" }])
    .png()
    .toFile(file);
}

await maskable(192, "public/icons/icon-maskable-192.png");
await maskable(512, "public/icons/icon-maskable-512.png");
console.log("Wrote maskable icons from the night-skyline logo.");
