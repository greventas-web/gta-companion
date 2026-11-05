import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Legal</Badge>

          <PageTitle
            title="Privacy Policy"
            description="Your privacy is important to us. This page will continue to evolve as GTA Companion grows."
          />

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-12">

            <div className="space-y-10">

              <div>

                <h2 className="text-3xl font-black">
                  Information We Collect
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  If you create an account, we store the name, email, and
                  saved items needed for favorites and settings. If you join
                  the newsletter, we store that email so we can send official
                  GTA Companion updates. We do not sell personal information.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  How Your Data Is Used
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Your information will only be used to improve your
                  experience within GTA Companion. We will never sell your
                  personal information.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Advertising
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We use Google AdSense to show ads. Google and its partners
                  may use cookies to serve and measure those ads, including
                  ads based on your visits to this and other sites. You can
                  control ad personalization in your Google Ads Settings.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Security
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We plan to use modern authentication, encrypted
                  connections, secure infrastructure and industry best
                  practices to protect user accounts and data.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Updates
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This policy will be updated as new features are introduced
                  and as GTA Companion continues to grow.
                </p>

              </div>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}