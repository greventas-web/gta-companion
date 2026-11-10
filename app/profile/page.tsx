"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AccountPrompt from "@/components/account/AccountPrompt";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const { profile, loading: profileLoading } = useUserProfile();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      return;
    }
  }, [loading, user]);

  if (loading || (user && profileLoading)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-white">
        <p className="text-zinc-400">Loading...</p>
      </main>
    );
  }

  const memberSince = user?.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      })
    : "Recently";

  const displayName =
    profile?.displayName || user?.displayName || "Player";

  const favorites = profile?.favorites?.length ?? 0;
  const savedGuides = profile?.savedGuides?.length ?? 0;
  const recentViews = profile?.recentViews?.length ?? 0;

  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Player Profile</Badge>

          <PageTitle
            title={user ? displayName : "Your GTA Companion Account"}
            description={
              user
                ? "Your saved favorites, guides, and account details live here."
                : "Sign in to save favorites, keep guides, and pick up where you left off."
            }
          />

          {user ? (
            <>
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                <StatsCard label="Favorites" value={favorites} />
                <StatsCard label="Saved Guides" value={savedGuides} />
                <StatsCard label="Recently Viewed" value={recentViews} />
              </div>

              <Card className="mt-16 rounded-[36px] border-zinc-800 bg-zinc-900 p-10">
                <h2 className="text-4xl font-black">Account</h2>

                <p className="mt-6 text-lg text-zinc-300">{user.email}</p>

                <p className="mt-2 text-sm text-zinc-500">
                  Member since {memberSince}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="/favorites">View Favorites</Button>
                  <Button href="/settings" variant="secondary">
                    Settings
                  </Button>
                  <Button href="/dashboard" variant="secondary">
                    Dashboard
                  </Button>
                </div>
              </Card>
            </>
          ) : (
            <AccountPrompt
              title="Sign in to open your profile"
              description="Accounts are live. Create an account to save vehicles, weapons, and manufacturers, then come back to this page to see them."
            />
          )}

          {!user ? null : (
            <p className="mt-8 text-sm text-zinc-500">
              Want to leave?{" "}
              <button
                type="button"
                onClick={() => router.push("/settings")}
                className="text-pink-400 hover:text-pink-300"
              >
                Manage your account in Settings
              </button>
              {" "}or return{" "}
              <Link href="/" className="text-pink-400 hover:text-pink-300">
                home
              </Link>
              .
            </p>
          )}
        </Container>
      </Section>
    </main>
  );
}
