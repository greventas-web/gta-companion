import assert from "node:assert/strict";
import { crc32 } from "node:zlib";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import sharp from "sharp";
import { ImageRejected, detectImageType, prepareCommunityImage } from "./images";
import { moderateText } from "./moderate";
import { hotRank } from "./rank";
import { COMMUNITY_RULES } from "./types";
import { createPost, readImageBytes, voteOnPost, type CommunityPost } from "./store";

process.env.COMMUNITY_LOCAL_DIR = await mkdtemp(path.join(tmpdir(), "gta-community-"));
delete process.env.MAP_READ_WRITE_TOKEN;
delete process.env.VERCEL;

after(async () => {
  const dir = process.env.COMMUNITY_LOCAL_DIR;
  if (dir) await rm(dir, { recursive: true, force: true });
});

function pngChunk(type: string, data: Buffer): Buffer {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body) >>> 0);
  return Buffer.concat([length, body, crc]);
}

function pngWithSize(width: number, height: number): Buffer {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", ihdr),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

test("community rules do not mention cheats or spoilers", () => {
  const text = COMMUNITY_RULES.join(" ").toLowerCase();
  assert.equal(text.includes("cheat"), false);
  assert.equal(text.includes("spoiler"), false);
  assert.equal(text.includes("piracy"), false);
  assert.match(text, /respectful/);
  assert.match(text, /gta/);
});

test("language filter masks swears and blocks slurs", () => {
  const masked = moderateText("this is shit");
  assert.equal(masked.ok, true);
  if (masked.ok) assert.equal(masked.text.includes("shit"), false);
  const blocked = moderateText("you nigger");
  assert.equal(blocked.ok, false);
});

test("spoofed uploads are rejected from their bytes, not a filename", () => {
  assert.equal(detectImageType(Buffer.from("<svg xmlns='http://www.w3.org/2000/svg'></svg>")), null);
  assert.equal(detectImageType(Buffer.from("<!doctype html><html></html>")), null);
  assert.equal(detectImageType(Buffer.from("MZ\x90\x00 executable")), null);
  assert.equal(detectImageType(Buffer.concat([Buffer.from("GIF89a"), Buffer.alloc(10)])), null);
  assert.equal(detectImageType(Buffer.concat([Buffer.from("ftypheic"), Buffer.alloc(16)])), null);
});

test("re-encode strips trailing metadata and caps wide images", async () => {
  const png = await sharp({ create: { width: 32, height: 16, channels: 3, background: { r: 200, g: 20, b: 80 } } }).png().toBuffer();
  const tagged = Buffer.concat([png, Buffer.from("GPSLatitudeSECRET")]);
  const prepared = await prepareCommunityImage(tagged);
  assert.equal(prepared.contentType, "image/webp");
  assert.equal(prepared.data.includes(Buffer.from("GPSLatitudeSECRET")), false);
  assert.equal(detectImageType(prepared.data), "image/webp");

  const wide = await sharp({ create: { width: 2600, height: 8, channels: 3, background: "navy" } }).png().toBuffer();
  const resized = await prepareCommunityImage(wide);
  const meta = await sharp(resized.data).metadata();
  assert.ok((meta.width ?? 0) <= 2560);
  assert.ok((meta.height ?? 0) <= 2560);
});

test("pixel bombs are rejected", async () => {
  const bomb = pngWithSize(20000, 20000);
  await assert.rejects(() => prepareCommunityImage(bomb), ImageRejected);
  const real = await sharp({ create: { width: 80, height: 80, channels: 3, background: "blue" } }).png().toBuffer();
  await assert.rejects(() => prepareCommunityImage(real, { maxPixels: 100 }), ImageRejected);
});

test("hot ranking prefers a fresh high score", () => {
  const now = Date.parse("2026-11-24T12:00:00.000Z");
  const fresh = hotRank(5, "2026-11-24T11:00:00.000Z", now);
  const old = hotRank(5, "2026-11-01T11:00:00.000Z", now);
  assert.ok(fresh > old);
});

test("a stored image is the re-encoded file, not the upload", async () => {
  const original = await sharp({ create: { width: 12, height: 12, channels: 3, background: "red" } }).png().toBuffer();
  const prepared = await prepareCommunityImage(Buffer.concat([original, Buffer.from("ORIGINAL-BYTES")]));
  const post: CommunityPost = {
    id: crypto.randomUUID(),
    kind: "image",
    flair: "screenshots",
    title: "Night drive",
    body: "From the balcony.",
    linkUrl: null,
    authorUid: "seed-user",
    authorName: "Mira",
    createdAt: new Date().toISOString(),
    score: 1,
    votes: { "seed-user": 1 },
    image: { id: crypto.randomUUID(), contentType: prepared.contentType, bytes: prepared.data.length },
    reports: [],
  };
  assert.equal(await createPost(post, [], prepared.data), "ok");
  const stored = await readImageBytes(post.image!.id);
  assert.ok(stored);
  assert.equal(stored!.equals(prepared.data), true);
  assert.equal(stored!.includes(Buffer.from("ORIGINAL-BYTES")), false);
  assert.equal(await voteOnPost(post.id, "other-user", 1), "ok");
});
