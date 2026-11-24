import type { Metadata } from "next";
import CommunityBoard from "@/components/community/CommunityBoard";
import PageShell from "@/components/PageShell";
import { listPublicPosts } from "@/lib/community/present";
import { communityStorageConfigured } from "@/lib/community/store";
import { pageMetadata } from "@/lib/launch";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata(
  "Community",
  "Unofficial GTA Companion community. Share updates, tips, screenshots, and ideas for the site. Posts stay hidden until a moderator approves them. Not affiliated with Rockstar Games."
);

export default async function CommunityPage() {
  let posts: Awaited<ReturnType<typeof listPublicPosts>> = [];
  try {
    posts = await listPublicPosts();
  } catch {
    posts = [];
  }

  return (
    <PageShell>
      <CommunityBoard initialPosts={posts} storageReady={communityStorageConfigured()} />
    </PageShell>
  );
}
