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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>About GTA Companion</Badge>

          <PageTitle
            title="Built By Players, For Players."
            description="GTA Companion exists to become the world's most complete companion platform for Grand Theft Auto VI and future Rockstar Games."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <StatsCard
              label="Database"
              value="Growing"
            />

            <StatsCard
              label="Updates"
              value="Daily"
            />

            <StatsCard
              label="Platform"
              value="Web + App"
            />

            <StatsCard
              label="Status"
              value="Beta"
            />

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1fr]">

            <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-10">

              <h2 className="text-4xl font-black">
                Our Mission
              </h2>

              <p className="mt-8 text-lg leading-9 text-zinc-400">
                GTA Companion is being built to become the ultimate place
                for Grand Theft Auto players. Instead of searching across
                dozens of different websites, players will find everything
                they need in one premium experience.
              </p>

              <p className="mt-6 text-lg leading-9 text-zinc-400">
                We're building a platform that grows alongside GTA VI with
                constantly updated databases, interactive tools, guides,
                maps, collections, news and powerful player features.
              </p>

            </Card>

            <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-8">

              <h3 className="text-2xl font-black">
                Our Goals
              </h3>

              <ul className="mt-8 space-y-4 text-zinc-400">

                <li>✓ Premium design</li>

                <li>✓ Fast performance</li>

                <li>✓ Accurate information</li>

                <li>✓ Daily updates</li>

                <li>✓ Interactive tools</li>

                <li>✓ Mobile application</li>

              </ul>

            </Card>

          </div>

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-12 text-center">

            <h2 className="text-5xl font-black">
              This Is Only The Beginning
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
              GTA Companion will continue to evolve with every Rockstar
              announcement and every GTA VI update. Our vision is to build
              a platform players rely on every single day.
            </p>

            <div className="mt-12">

              <Link href="/guides">

                <Button>
                  Start Exploring
                </Button>

              </Link>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}