import Feed from "@/components/community/Feed";
import PageShell from "@/components/PageShell";
import { loadFeed } from "@/lib/community/present";
import { communityStorageConfigured } from "@/lib/community/store";
import { pageMetadata } from "@/lib/launch";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata(
  "Community",
  "Unofficial GTA Companion community. Read in public. Sign in to post. Not affiliated with Rockstar Games."
);

export default async function CommunityPage() {
  let posts: Awaited<ReturnType<typeof loadFeed>> = [];
  let storageReady = communityStorageConfigured();
  if (storageReady) {
    try {
      posts = await loadFeed({ sort: "hot", range: "day", flair: null, uid: null });
    } catch {
      storageReady = false;
    }
  }
  return (
    <PageShell>
      <Feed initialPosts={posts} storageReady={storageReady} />
    </PageShell>
  );
}
