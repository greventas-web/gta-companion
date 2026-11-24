import ProfileView from "@/components/community/ProfileView";
import PageShell from "@/components/PageShell";
import { loadProfile } from "@/lib/community/present";
import { isUid } from "@/lib/community/store";
import { pageMetadata } from "@/lib/launch";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  if (!isUid(uid)) return pageMetadata("Member", "Community member on GTA Companion.");
  const profile = await loadProfile(uid, null).catch(() => null);
  return pageMetadata(profile?.name ?? "Member", "Posts and points on GTA Companion.");
}

export default async function CommunityProfilePage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  if (!isUid(uid)) notFound();
  const profile = await loadProfile(uid, null).catch(() => null);
  if (!profile) notFound();
  return (
    <PageShell>
      <ProfileView uid={profile.uid} name={profile.name} pro={profile.pro} points={profile.points} banned={profile.banned} initialPosts={profile.posts} />
    </PageShell>
  );
}
