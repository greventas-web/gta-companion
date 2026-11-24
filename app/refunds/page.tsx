import PageTitle from "@/components/PageTitle";
import SellerDetails from "@/components/pro/SellerDetails";
import { pageMetadata } from "@/lib/launch";
import { PRO_NAME, PRO_SELLER } from "@/lib/pro/config";
import { Badge, Card, Container, Section } from "@/components/ui";

export const metadata = pageMetadata(
  "Refunds",
  `Refunds and withdrawal terms for ${PRO_NAME}. Seller: ${PRO_SELLER.name}, ${PRO_SELLER.address}. Orders and refunds: ${PRO_SELLER.ordersEmail}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`
);

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Legal</Badge>

          <PageTitle
            title="Refunds"
            description="Withdrawal terms for GTA Companion Pro, sold by GL Transportation, MB."
          />

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-6 sm:p-12">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-black sm:text-3xl">Seller</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  {PRO_NAME} is sold by {PRO_SELLER.name} ({PRO_SELLER.quotedName}), a company in {PRO_SELLER.country}.
                  Orders and refunds go to the email below. GTA Companion is an unofficial fan site, not affiliated
                  with Rockstar Games or Take-Two.
                </p>
                <SellerDetails className="mt-6" />
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">What the payment is for</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Pro is a one-time payment for digital tools on your GTA Companion account: no ads, cloud sync,
                  progress percentages, a what&apos;s-left-near-me map filter, and unlimited marks. It is not a
                  subscription. The price is the one shown on the Pro page in the currency you select (€4.99, $4.99, or
                  £4.49). Guides, pins, and checklists stay available whether or not you buy Pro.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">14-day withdrawal</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  If you are a consumer in the European Union, a distance contract for digital content normally gives
                  you 14 days to withdraw, without giving a reason. To withdraw before delivery has started, email{" "}
                  <a href={`mailto:${PRO_SELLER.ordersEmail}`} className="text-pink-400 hover:text-pink-300">
                    {PRO_SELLER.ordersEmail}
                  </a>{" "}
                  with the account email and the date of the payment. We will refund the payment through Stripe to the
                  original payment method.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">Immediate delivery</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Pro is supplied immediately after Stripe confirms the payment. It is digital content, not supplied on
                  a tangible medium. Under the EU Consumer Rights Directive, the 14-day withdrawal right does not apply
                  once performance has begun if you gave prior express consent to immediate delivery and acknowledged
                  that you lose the withdrawal right once delivery starts.
                </p>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Checkout therefore includes a checkbox: you request immediate delivery of {PRO_NAME} and acknowledge
                  that you lose the 14-day right of withdrawal once delivery starts. Checkout does not continue until
                  that box is ticked. If you do not want to give that consent, do not tick the box and do not pay.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">If something is wrong</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  The withdrawal waiver does not remove statutory rights where the digital content is faulty or not as
                  described. Email{" "}
                  <a href={`mailto:${PRO_SELLER.ordersEmail}`} className="text-pink-400 hover:text-pink-300">
                    {PRO_SELLER.ordersEmail}
                  </a>{" "}
                  and we will look at a repair, a replacement of access, or a refund. A full refund through Stripe also
                  removes Pro from the account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">Checkout status</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Checkout opening soon. Until it opens, {PRO_NAME} cannot be bought on this site and these terms do
                  not apply to a payment we have not taken. See also the{" "}
                  <a href="/terms" className="text-pink-400 hover:text-pink-300">
                    Terms of Use
                  </a>{" "}
                  and the{" "}
                  <a href="/privacy" className="text-pink-400 hover:text-pink-300">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
