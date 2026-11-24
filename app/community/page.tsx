import CommunityBoard from "@/components/community/CommunityBoard";
import PageShell from "@/components/PageShell";
import { loadFeedForUser } from "@/lib/community/feed";
import { pageMetadata } from "@/lib/launch";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata(
  "Community",
  "Unofficial GTA Companion community for tips, screenshots, and site feedback. Posts and images stay hidden until a moderator approves them. Not affiliated with Rockstar Games."
);

export default async function CommunityPage() {
  const feed = await loadFeedForUser(null);
  return (
    <PageShell>
      <CommunityBoard initialPosts={feed.posts} storageReady={feed.storageReady} />
    </PageShell>
  );
}
