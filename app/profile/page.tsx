import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Player Profile</Badge>

          <PageTitle
            title="Your GTA Companion Account"
            description="Create your account to sync progress, save favorites, build collections and unlock premium features across web and mobile."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Saved Vehicles"
              value="0"
            />

            <StatsCard
              label="Completed Guides"
              value="0"
            />

            <StatsCard
              label="Favorites"
              value="0"
            />

          </div>

          <Card className="mt-16 rounded-[36px] border-zinc-800 bg-zinc-900 p-10">

            <h2 className="text-4xl font-black">
              Accounts Coming Soon
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              GTA Companion accounts are currently in development.
              Once available, you'll be able to save your progress,
              bookmark vehicles and locations, create collections,
              sync across devices and access premium features.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Join Waiting List
              </Button>

              <Link
                href="/"
                className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-pink-500 hover:text-pink-400"
              >
                Return Home
              </Link>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}