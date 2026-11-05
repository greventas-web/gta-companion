"use client";

import Link from "next/link";

import AccountPrompt from "@/components/account/AccountPrompt";
import PageTitle from "@/components/PageTitle";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";
import { useFavorites } from "@/hooks/useFavorites";
import { resolveFavoriteLink } from "@/lib/favoriteLinks";

export default function FavoritesPage() {
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading: favoritesLoading } = useFavorites();

  if (authLoading || (user && favoritesLoading)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-white">
        <p className="text-zinc-400">Loading...</p>
      </main>
    );
  }

  const saved = Array.isArray(favorites) ? favorites : [];

  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Favorites</Badge>

          <PageTitle
            title={user ? "Your Favorites" : "Your GTA Companion Favorites"}
            description={
              user
                ? "Vehicles, weapons, and manufacturers you saved."
                : "Sign in to see the vehicles, weapons, and manufacturers you save."
            }
          />

          {!user ? (
            <AccountPrompt
              title="Sign in to view your favorites"
              description="Accounts are live. Create a free account to save vehicles, weapons, and manufacturers, then come back to this page to open them."
            />
          ) : saved.length === 0 ? (
            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-10">
              <h2 className="text-4xl font-black">No favorites yet</h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                You have not saved anything yet. Browse the catalogs and tap the heart on a vehicle, weapon, or manufacturer.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/vehicles">Vehicles</Button>
                <Button href="/weapons" variant="secondary">
                  Weapons
                </Button>
                <Button href="/manufacturers" variant="secondary">
                  Manufacturers
                </Button>
              </div>
            </Card>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2">
              {saved.map((favoriteId) => {
                const link = resolveFavoriteLink(favoriteId);

                if (!link) {
                  return (
                    <li key={favoriteId}>
                      <Card className="h-full rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                          Saved
                        </p>

                        <h2 className="mt-4 break-all text-2xl font-black">
                          {favoriteId}
                        </h2>

                        <p className="mt-4 text-zinc-400">
                          This saved item is not in the current catalog.
                        </p>
                      </Card>
                    </li>
                  );
                }

                return (
                  <li key={favoriteId}>
                    <Link href={link.href} className="group block h-full">
                      <Card className="h-full rounded-[36px] border-zinc-800 bg-zinc-900 p-8 transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                          {link.category}
                        </p>

                        <h2 className="mt-4 text-3xl font-black">
                          {link.title}
                        </h2>

                        <p className="mt-6 text-sm font-semibold text-zinc-400 transition group-hover:text-pink-400">
                          Open
                        </p>
                      </Card>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </Section>
    </main>
  );
}
