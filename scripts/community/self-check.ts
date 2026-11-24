import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareImage, sniffImage } from "../../lib/community/image";
import { listPublicPosts } from "../../lib/community/present";
import {
  addPost,
  addReport,
  deletePost,
  readImage,
  setPostStatus,
  type CommunityPost,
} from "../../lib/community/store";
import { parsePostFields } from "../../lib/community/validate";

const dir = mkdtempSync(path.join(os.tmpdir(), "community-"));
process.env.COMMUNITY_LOCAL_DIR = dir;
delete process.env.VERCEL;
process.env.PRO_GRANT_UIDS = "pro-player";

const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);

function post(partial: Pick<CommunityPost, "id" | "authorUid" | "authorName" | "category" | "title"> & Partial<CommunityPost>): CommunityPost {
  return {
    status: "pending",
    body: "A useful note for other players.",
    createdAt: new Date().toISOString(),
    reports: [],
    ...partial,
  };
}

async function main() {
  assert.equal(sniffImage(png), "image/png");
  assert.equal(sniffImage(Buffer.from("GIF89a-not-an-image")), null);
  assert.equal((await prepareImage(Buffer.alloc(3 * 1024 * 1024 + 1))).ok, false);
  const prepared = await prepareImage(png);
  assert.equal(prepared.ok, true);
  if (!prepared.ok) throw new Error("image");
  assert.equal(sniffImage(prepared.bytes), "image/webp");

  const denied = parsePostFields({
    category: "screenshot",
    title: "Skyline",
    body: "Looking across the bay at night.",
    credit: "no",
    hasImage: true,
  });
  assert.equal(denied.ok, false);

  const wrongSlot = parsePostFields({
    category: "tip",
    title: "A tip",
    body: "Hold the button a little longer.",
    credit: false,
    hasImage: true,
  });
  assert.equal(wrongSlot.ok, false);

  const allowed = parsePostFields({
    category: "screenshot",
    title: "Skyline",
    body: "Looking across the bay at night.",
    credit: "yes",
    hasImage: true,
  });
  assert.equal(allowed.ok, true);

  const author = "player-one";
  for (const id of ["1", "2", "3"]) {
    const result = await addPost(
      post({
        id: `00000000-0000-4000-8000-00000000000${id}`,
        authorUid: author,
        authorName: "Player One",
        category: "tip",
        title: `Tip ${id}`,
      })
    );
    assert.equal(result, "ok", `post ${id}`);
  }
  assert.equal(
    await addPost(
      post({
        id: "00000000-0000-4000-8000-000000000004",
        authorUid: author,
        authorName: "Player One",
        category: "tip",
        title: "Tip 4",
      })
    ),
    "too-many-pending"
  );

  for (const id of ["1", "2", "3"]) {
    const updated = await setPostStatus(`00000000-0000-4000-8000-00000000000${id}`, "approved");
    assert.ok(updated);
  }

  assert.equal(
    await addPost(
      post({
        id: "00000000-0000-4000-8000-000000000005",
        authorUid: author,
        authorName: "Player One",
        category: "update",
        title: "Update five",
      })
    ),
    "ok"
  );
  assert.equal(
    await addPost(
      post({
        id: "00000000-0000-4000-8000-000000000006",
        authorUid: author,
        authorName: "Player One",
        category: "feedback",
        title: "Idea six",
      })
    ),
    "ok"
  );
  assert.equal(
    await addPost(
      post({
        id: "00000000-0000-4000-8000-000000000007",
        authorUid: author,
        authorName: "Player One",
        category: "tip",
        title: "Tip seven",
      })
    ),
    "limited"
  );

  const shotId = "00000000-0000-4000-8000-000000000010";
  assert.equal(
    await addPost(
      post({
        id: shotId,
        authorUid: "pro-player",
        authorName: "Lucia Fan",
        category: "screenshot",
        title: "Night colors",
        body: "The bay lights up after the rain.",
        imageContentType: "image/webp",
        imageBytes: prepared.bytes.byteLength,
        imageConsent: true,
      }),
      { bytes: prepared.bytes, contentType: "image/webp" }
    ),
    "ok"
  );

  assert.equal((await listPublicPosts()).some((item) => item.id === shotId), false);
  assert.equal(await addReport(shotId, "someone", "spoilers"), "not-public");

  await setPostStatus(shotId, "approved");
  const image = await readImage(shotId);
  assert.ok(image);
  assert.equal(image?.contentType, "image/webp");

  const board = await listPublicPosts();
  const shot = board.find((item) => item.id === shotId);
  assert.ok(shot);
  assert.equal(shot?.pro, true);
  assert.equal(shot?.imageUrl, `/api/community/images/${shotId}`);
  assert.equal("authorUid" in (shot ?? {}), false);

  const plain = board.find((item) => item.title === "Tip 1");
  assert.equal(plain?.pro, false);

  assert.equal(await addReport(shotId, "pro-player", "mine"), "own");
  assert.equal(await addReport(shotId, "reporter", "Looks like an ad"), "ok");
  assert.equal(await addReport(shotId, "reporter", "again"), "duplicate");

  await setPostStatus("00000000-0000-4000-8000-000000000005", "rejected");
  assert.equal((await listPublicPosts()).some((item) => item.id.endsWith("5")), false);

  assert.equal(await deletePost(shotId), true);
  assert.equal(await readImage(shotId), null);
  assert.equal((await listPublicPosts()).some((item) => item.id === shotId), false);

  console.log("community checks passed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    rmSync(dir, { recursive: true, force: true });
  });
