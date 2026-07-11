import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Interactive GTA VI Map</Badge>

          <PageTitle
            title="Explore Leonida"
            description="Discover every collectible, mission, business, property, weapon, easter egg and hidden secret through the world's most complete GTA VI interactive map."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <StatsCard
              label="Collectibles"
              value="500+"
            />

            <StatsCard
              label="Businesses"
              value="150+"
            />

            <StatsCard
              label="Progress"
              value="100%"
            />

            <StatsCard
              label="Updates"
              value="Live"
            />

          </div>

          <Card className="mt-16 overflow-hidden rounded-[40px] border-zinc-800 bg-zinc-900 p-0">

            <div className="flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-16 text-center">

              <div className="mb-8 text-8xl">
                🗺️
              </div>

              <h2 className="text-5xl font-black">
                Interactive Map Coming Soon
              </h2>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
                We're building what we believe will become the most complete
                GTA VI interactive map available. Track collectibles,
                businesses, missions, random events, weapons, vehicles,
                properties, easter eggs and your personal completion progress.
              </p>

              <div className="mt-12">

                <Button>
                  Notify Me When It Launches
                </Button>

              </div>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}