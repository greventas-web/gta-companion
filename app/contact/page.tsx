import {
  Badge,
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
            description="Questions, partnership opportunities, bug reports or general feedback? We'd love to hear from you."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <Card className="rounded-[40px] border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
              <h2 className="text-3xl font-black">
                Contact Us
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                If you have questions, business enquiries, partnership
                opportunities, bug reports or feedback, please email us at:
              </p>

              <a
                href="mailto:contact@gtacompanion.com"
                className="mt-8 inline-block text-2xl font-bold text-pink-400 hover:text-pink-300"
              >
                contact@gtacompanion.com
              </a>

              <p className="mt-8 text-zinc-500">
                We aim to respond as quickly as possible.
              </p>
            </Card>

            <div className="space-y-8">
              <Card className="rounded-[36px] border-white/10 bg-gradient-to-br from-[#121216] to-black p-8 transition hover:border-pink-500/30">
                <h2 className="text-2xl font-black">
                  Partnerships
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                  Interested in collaborating with GTA Companion or becoming a
                  launch partner? We'd love to hear from you.
                </p>
              </Card>

              <Card className="rounded-[36px] border-white/10 bg-gradient-to-br from-[#121216] to-black p-8 transition hover:border-pink-500/30">
                <h2 className="text-2xl font-black">
                  Bug Reports
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                  Found an issue? Let us know so we can continue improving the
                  experience for everyone.
                </p>
              </Card>

              <Card className="rounded-[36px] border-white/10 bg-gradient-to-br from-[#121216] to-black p-8 transition hover:border-pink-500/30">
                <h2 className="text-2xl font-black">
                  Community
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                  GTA Companion will continue to grow with new official content,
                  guides and tools as Rockstar reveals more about GTA VI.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}