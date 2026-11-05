import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Legal</Badge>

          <PageTitle
            title="Terms of Service"
            description="The terms and conditions governing the use of GTA Companion."
          />

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-12">

            <div className="space-y-10">

              <div>

                <h2 className="text-3xl font-black">
                  Acceptance of Terms
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  By using GTA Companion you agree to comply with these terms
                  and all applicable laws.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Content
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  GTA Companion provides information, guides and community
                  features intended to enhance the player experience.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Accounts
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Users are responsible for maintaining the security of
                  their accounts once authentication becomes available.
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  Disclaimer
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  GTA Companion is an independent fan project and is not
                  affiliated with or endorsed by Rockstar Games or
                  Take-Two Interactive.
                </p>

              </div>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}