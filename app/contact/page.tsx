import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

import PageTitle from "@/components/PageTitle";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Contact</Badge>

          <PageTitle
            title="Get In Touch"
            description="Questions, feedback, partnership opportunities or bug reports? We'd love to hear from you."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

            <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-10">

              <div className="space-y-8">

                <div>

                  <label className="mb-3 block font-semibold">
                    Name
                  </label>

                  <input
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                    placeholder="Your name"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                    placeholder="Your email"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                    placeholder="Write your message..."
                  />

                </div>

                <Button>
                  Send Message
                </Button>

              </div>

            </Card>

            <div className="space-y-8">

              <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-2xl font-black">
                  Partnerships
                </h2>

                <p className="mt-4 text-zinc-400">
                  Interested in working with GTA Companion?
                </p>

              </Card>

              <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-2xl font-black">
                  Report Bugs
                </h2>

                <p className="mt-4 text-zinc-400">
                  Help us improve the platform by reporting issues.
                </p>

              </Card>

              <Card className="rounded-[40px] border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-2xl font-black">
                  Community
                </h2>

                <p className="mt-4 text-zinc-400">
                  More community features are coming soon.
                </p>

              </Card>

            </div>

          </div>

        </Container>

      </Section>

    </main>
  );
}