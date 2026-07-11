import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Application Settings</Badge>

          <PageTitle
            title="Settings"
            description="Customize your GTA Companion experience. Additional settings will become available once player accounts launch."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Theme"
              value="Dark"
            />

            <StatsCard
              label="Language"
              value="English"
            />

            <StatsCard
              label="Account"
              value="Guest"
            />

          </div>

          <div className="mt-16 space-y-8">

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h2 className="text-3xl font-black">
                Appearance
              </h2>

              <p className="mt-4 text-zinc-400">
                Additional appearance options such as themes, accent colors
                and accessibility settings will be available in a future update.
              </p>

            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h2 className="text-3xl font-black">
                Notifications
              </h2>

              <p className="mt-4 text-zinc-400">
                Manage news alerts, Rockstar announcements, database updates
                and account notifications once accounts become available.
              </p>

            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">

              <h2 className="text-3xl font-black">
                Privacy & Security
              </h2>

              <p className="mt-4 text-zinc-400">
                Security settings, two-factor authentication, connected
                accounts and privacy controls will appear here after launch.
              </p>

            </Card>

          </div>

        </Container>

      </Section>

    </main>
  );
}