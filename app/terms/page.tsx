import PageTitle from "@/components/PageTitle";
import { pageMetadata } from "@/lib/launch";
import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata(
  "Terms of use",
  "Terms for using GTA Companion. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);


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

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-6 sm:p-12">

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
                  GTA Companion Pro and payments
                </h2>

                <div className="mt-4 space-y-4 text-lg leading-8 text-zinc-400">
                  <p>
                    GTA Companion Pro is an optional one-time purchase of
                    tools on this unofficial fan site: no ads, cloud sync,
                    progress percentages, a what&apos;s-left-near-me map
                    filter, and unlimited marks. Guides, pins, and checklists
                    stay available to everyone. Pro is not a subscription and
                    it is not a Rockstar Games or Take-Two product.
                  </p>
                  <p>
                    The price is shown on the Pro page before you pay: €4.99,
                    $4.99, or £4.49, depending on the currency you select.
                    Seller details are available on request at{" "}
                    <a href="mailto:contact@gta-companion.com" className="text-pink-400 hover:text-pink-300">
                      contact@gta-companion.com
                    </a>
                    .
                  </p>
                  <p>
                    Checkout is not open yet. When it opens, you sign in,
                    confirm that you want immediate delivery, and pay once
                    through Stripe Checkout. Stripe processes the payment and
                    emails the receipt. We do not receive or store your card
                    number. Pro unlocks on the signed-in account when Stripe
                    confirms the payment.
                  </p>
                  <p>
                    Pro is digital content delivered immediately after
                    payment. Before paying, you must tick the box requesting
                    that delivery and acknowledging that you lose the 14-day
                    right of withdrawal once delivery starts. The draft
                    withdrawal terms are on the{" "}
                    <a href="/refunds" className="text-pink-400 hover:text-pink-300">
                      Refunds
                    </a>{" "}
                    page.
                  </p>
                </div>

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