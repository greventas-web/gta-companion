import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

import PageTitle from "@/components/PageTitle";
import { pageMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  `Contact GTA Companion at ${SITE.email}. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`
);

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

          <div className="mt-16 grid gap-6">
            <Card className="rounded-[40px] border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
              <h2 className="text-3xl font-black">
                Contact Us
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                GTA Companion is an unofficial fan site, not affiliated with
                Rockstar Games or Take-Two. For questions, corrections, or
                feedback, email:
              </p>

              <a
                href="mailto:contact@gta-companion.com"
                className="mt-8 inline-block text-2xl font-bold text-pink-400 hover:text-pink-300"
              >
                contact@gta-companion.com
              </a>

              <p className="mt-8 text-zinc-500">
                We read every message and usually reply within a few days.
              </p>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-[36px] border-white/10 bg-gradient-to-br from-[#121216] to-black p-8 transition hover:border-pink-500/30">
                <h2 className="text-2xl font-black">
                  Partnerships
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                  Interested in working with GTA Companion? Email us with what
                  you have in mind.
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
                  Questions about a guide, a map pin or a price? Tell us the page
                  and what you saw in the game. Confirmed fixes are added to the
                  site and listed on the Updates page.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}