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

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Dashboard</Badge>

          <PageTitle
            title="Welcome to GTA Companion"
            description="Your personal hub for everything GTA VI. Track your progress, manage favorites and stay up to date with the latest discoveries."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <StatsCard
              label="Favorites"
              value="0"
            />

            <StatsCard
              label="Saved Guides"
              value="0"
            />

            <StatsCard
              label="Completed"
              value="0%"
            />

            <StatsCard
              label="Account"
              value="Guest"
            />

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1fr]">

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-10">

              <h2 className="text-4xl font-black">
                Accounts Are Coming
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Soon you'll be able to create your own GTA Companion account,
                synchronize your progress across every device, save vehicles,
                bookmark guides, build collections and unlock premium tools.
              </p>

              <div className="mt-10">

                <Button>
                  Join Early Access
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
                  href="/map"
                  className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-pink-500 hover:text-pink-400"
                >
                  🗺️ Interactive Map
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

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h3 className="text-2xl font-black">
                Recently Added
              </h3>

              <p className="mt-4 text-zinc-400">
                New vehicles, characters and locations will appear here.
              </p>

            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h3 className="text-2xl font-black">
                Latest Rockstar News
              </h3>

              <p className="mt-4 text-zinc-400">
                Stay informed with official GTA VI announcements.
              </p>

            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h3 className="text-2xl font-black">
                Coming Soon
              </h3>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>✓ Saved Favorites</li>
                <li>✓ Progress Tracking</li>
                <li>✓ Interactive Map</li>
                <li>✓ Premium Membership</li>
                <li>✓ Mobile App Sync</li>
              </ul>

            </Card>

          </div>

        </Container>

      </Section>

    </main>
  );
}