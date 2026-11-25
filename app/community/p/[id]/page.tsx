import { notFound } from "next/navigation";
import ThreadView from "@/components/community/ThreadView";
import PageShell from "@/components/PageShell";
import { loadThread } from "@/lib/community/present";
import { pageMetadata } from "@/lib/launch";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const thread = await loadThread(id, null).catch(() => null);
  if (!thread) return pageMetadata("Post", "Community post on GTA Companion.");
  return pageMetadata(thread.post.title, thread.post.body.slice(0, 160) || thread.post.title);
}

export default async function CommunityPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const thread = await loadThread(id, null).catch(() => null);
  if (!thread) notFound();
  return (
    <PageShell>
      <ThreadView initialPost={thread.post} initialComments={thread.comments} />
    </PageShell>
  );
}
