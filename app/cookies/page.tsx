import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Legal</Badge>

          <PageTitle
            title="Cookie Policy"
            description="How GTA Companion uses cookies and similar technologies."
          />

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-12">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black">
                  What Are Cookies?
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Cookies are small text files stored on your device that help
                  websites remember preferences, improve performance and provide
                  a better browsing experience.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  How We Use Cookies
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  GTA Companion may use cookies to remember preferences,
                  analyze website traffic and improve overall performance.
                  Additional cookies may be introduced as new features become
                  available.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Managing Cookies
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Most browsers allow you to control or disable cookies through
                  their settings. Disabling cookies may affect certain website
                  features.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Updates
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This Cookie Policy may be updated as GTA Companion evolves or
                  when legal requirements change.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}