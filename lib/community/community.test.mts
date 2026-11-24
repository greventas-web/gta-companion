import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import { imageIsPublic, toPublicPost } from "./feed";
import {
  addPost,
  addReport,
  communityRateKey,
  deletePost,
  listPosts,
  readImageBytes,
  setPostStatus,
  type CommunityPost,
} from "./store";
import { detectImageType, parsePostFields, parseReportReason, publicName } from "./validate";

process.env.COMMUNITY_LOCAL_DIR = await mkdtemp(path.join(tmpdir(), "gta-community-"));
delete process.env.MAP_READ_WRITE_TOKEN;
delete process.env.VERCEL;

const jpeg = Buffer.alloc(32, 0);
jpeg[0] = 0xff;
jpeg[1] = 0xd8;
jpeg[2] = 0xff;

const png = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x00,
]);

function post(overrides: Partial<CommunityPost> = {}): CommunityPost {
  return {
    id: crypto.randomUUID(),
    type: "screenshot",
    status: "pending",
    title: "Night drive",
    body: "The shoreline looks different after the storm.",
    authorUid: "seed-pro-mira",
    authorName: "Mira",
    image: null,
    reports: [],
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

after(async () => {
  const dir = process.env.COMMUNITY_LOCAL_DIR;
  if (dir) await rm(dir, { recursive: true, force: true });
});

test("titles, bodies, names, and reasons are bounded", () => {
  assert.equal(parsePostFields({ type: "nope", title: "Hello there", body: "long enough body" }).ok, false);
  const short = parsePostFields({ type: "tip", title: "Hi", body: "long enough body" });
  assert.equal(short.ok, false);
  const ok = parsePostFields({
    type: "feedback",
    title: "  Map pin feels off  ",
    body: "The pin for the marina sits a block north.\n\n\nThanks.",
  });
  assert.equal(ok.ok, true);
  if (ok.ok) {
    assert.equal(ok.value.title, "Map pin feels off");
    assert.equal(ok.value.body.includes("\n\n\n"), false);
  }
  assert.equal(publicName("  Mira Voss  "), "Mira Voss");
  assert.equal(publicName("mira@example.com"), "mira");
  assert.equal(publicName("   "), "Player");
  assert.equal(parseReportReason("ok"), null);
  assert.equal(parseReportReason("Spam post"), "Spam post");
});

test("images are accepted only for jpeg, png, and webp within the size cap", () => {
  assert.equal(detectImageType(jpeg), "image/jpeg");
  assert.equal(detectImageType(png), "image/png");
  const webp = Buffer.alloc(16, 0);
  webp.set(Buffer.from("RIFF"), 0);
  webp.set(Buffer.from("WEBP"), 8);
  assert.equal(detectImageType(webp), "image/webp");
  assert.equal(detectImageType(Buffer.from("<svg></svg><pad>")), null);
  assert.equal(detectImageType(Buffer.alloc(3, 0xff)), null);
  const huge = Buffer.alloc(4 * 1024 * 1024 + 1, 0);
  huge[0] = 0xff;
  huge[1] = 0xd8;
  huge[2] = 0xff;
  assert.equal(detectImageType(huge), null);
});

test("pending posts and images stay hidden until approval", async () => {
  assert.equal(imageIsPublic("pending"), false);
  assert.equal(imageIsPublic("rejected"), false);
  assert.equal(imageIsPublic("approved"), true);

  const imageId = crypto.randomUUID();
  const hidden = post({
    image: { id: imageId, contentType: "image/jpeg", bytes: jpeg.length },
  });
  assert.equal(toPublicPost(hidden, true), null);
  assert.equal(await addPost(hidden, communityRateKey("post", hidden.authorUid), jpeg), "ok");
  assert.equal((await listPosts()).some((item) => item.id === hidden.id && item.status === "pending"), true);
  assert.ok(await readImageBytes(imageId));

  assert.equal(await addReport(hidden.id, {
    id: crypto.randomUUID(),
    reason: "Spam post",
    createdAt: new Date().toISOString(),
    reporterKey: "reporter",
  }, communityRateKey("report", "203.0.113.5")), "missing");

  const approved = await setPostStatus(hidden.id, "approved");
  assert.equal(approved?.status, "approved");
  const visible = toPublicPost(approved!, true);
  assert.ok(visible);
  assert.equal(visible?.credit, "Screenshot by Mira");
  assert.equal(visible?.pro, true);
  assert.equal(visible?.imageUrl, `/api/community/images/${imageId}`);
  assert.equal(toPublicPost({ ...approved!, type: "tip" }, false)?.credit, null);

  assert.equal(await deletePost(hidden.id), true);
  assert.equal(await readImageBytes(imageId), null);
  assert.equal((await listPosts()).some((item) => item.id === hidden.id), false);
});

test("the same network cannot report one post twice", async () => {
  const live = post({ type: "tip", image: null, authorName: "Jason" });
  assert.equal(await addPost(live, communityRateKey("post", "jason"), null), "ok");
  await setPostStatus(live.id, "approved");
  const report = {
    id: crypto.randomUUID(),
    reason: "Spoiler past Chapter 3",
    createdAt: new Date().toISOString(),
    reporterKey: communityRateKey("report", "198.51.100.8"),
  };
  const key = communityRateKey("report", "198.51.100.8");
  assert.equal(await addReport(live.id, report, key), "ok");
  assert.equal(
    await addReport(live.id, { ...report, id: crypto.randomUUID() }, key),
    "duplicate"
  );
});
