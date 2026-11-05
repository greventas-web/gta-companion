"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

import { useAuth } from "@/components/auth/AuthProvider";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const { profile, loading: profileLoading } =
    useUserProfile();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || profileLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-white">
        <p className="text-zinc-400">Loading...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  const memberSince = user.metadata.creationTime
    ? new Date(
        user.metadata.creationTime
      ).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      })
    : "Recently";

  const favorites =
    profile?.favorites?.length ?? 0;

  const savedGuides =
    profile?.savedGuides?.length ?? 0;

  const recentViews =
    profile?.recentViews?.length ?? 0;

  const completed =
    profile?.progress?.completed ?? 0;

  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Dashboard</Badge>

          <PageTitle
            title={`Welcome back, ${user.displayName ?? "Player"}`}
            description="Your personal hub for everything GTA VI. Track your progress, manage favorites and stay up to date with the latest discoveries."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            <StatsCard
              label="Favorites"
              value={favorites}
            />

            <StatsCard
              label="Saved Guides"
              value={savedGuides}
            />

            <StatsCard
              label="Completed"
              value={`${completed}%`}
            />

            <StatsCard
              label="Account"
              value={
                user.displayName ?? "Player"
              }
            />
          </div>

          <div className="mt-6 rounded-3xl border border-pink-500/20 bg-pink-500/5 p-6">
            <div className="text-lg font-bold">
              {user.displayName}
            </div>

            <div className="mt-2 text-zinc-400">
              {user.email}
            </div>

            <div className="mt-2 text-sm text-zinc-500">
              Member since {memberSince}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-10">
              <h2 className="text-4xl font-black">
                Your GTA Companion
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Manage your favorite content, saved guides and account activity
                from one place as GTA Companion continues to grow.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/vehicles">
                  Explore Vehicles
                </Button>

                <Button
                  href="/guides"
                  variant="secondary"
                >
                  Browse Guides
                </Button>
              </div>
            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-black">
                Quick Access
              </h3>

              <div className="mt-8 space-y-4">
                <Link
                  href="/vehicles"
                  className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-pink-500 hover:text-pink-400"
                >
                  🚗 Vehicle Database
                </Link>

                <Link
                  href="/characters"
                  className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-pink-500 hover:text-pink-400"
                >
                  👤 Characters
                </Link>

                <Link
                  href="/locations"
                  className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-pink-500 hover:text-pink-400"
                >
                  🗺️ Locations
                </Link>

                <Link
                  href="/guides"
                  className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-pink-500 hover:text-pink-400"
                >
                  📖 Guides
                </Link>
              </div>
            </Card>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-black">
                Recently Viewed
              </h3>

              <p className="mt-4 text-zinc-400">
                {recentViews === 0
                  ? "You haven't viewed anything yet."
                  : `${recentViews} recently viewed item${
                      recentViews === 1 ? "" : "s"
                    }.`}
              </p>
            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-black">
                Dashboard Statistics
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Favorites
                  </span>

                  <span className="font-bold text-white">
                    {favorites}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Saved Guides
                  </span>

                  <span className="font-bold text-white">
                    {savedGuides}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Recently Viewed
                  </span>

                  <span className="font-bold text-white">
                    {recentViews}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Progress
                  </span>

                  <span className="font-bold text-pink-400">
                    {completed}%
                  </span>
                </div>
              </div>
            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-black">
                Coming Soon
              </h3>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>✓ Expanded Databases</li>
                <li>✓ Interactive Features</li>
                <li>✓ Personalized Recommendations</li>
                <li>✓ Community Events</li>
                <li>✓ More Rockstar Content</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}