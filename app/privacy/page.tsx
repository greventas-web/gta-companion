import type { Metadata } from "next";
import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import { Badge, Card, Container, Section } from "@/components/ui";
import { SITE } from "@/src/data/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for GTA Companion. How the fan site uses accounts, Google AdSense cookies, third-party ads, and analytics.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Legal</Badge>

          <PageTitle
            title="Privacy Policy"
            description="This policy explains what GTA Companion collects, how Google AdSense uses cookies for third-party ads, and how analytics are used. Last updated November 10, 2026."
          />

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-12">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black">Who we are</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  GTA Companion is an unofficial fan site. {SITE.disclaimer}{" "}
                  Questions about this policy can be sent to{" "}
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="text-pink-400 hover:text-pink-300"
                  >
                    {SITE.contactEmail}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">Information we collect</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  If you create an account, we store the name, email, and
                  saved items needed for favorites and settings. If you join
                  the newsletter, we store that email so we can send GTA
                  Companion updates. We do not sell personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Google AdSense and third-party ads
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We use Google AdSense to show third-party ads. Google and
                  its advertising partners may use cookies and similar
                  technologies, including the DoubleClick cookie, to serve
                  those ads, measure them, and show ads based on your visits
                  to this site and other sites. Those cookies can be set by
                  Google or by other ad vendors Google works with.
                </p>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  You can control personalized ads in{" "}
                  <a
                    href="https://adssettings.google.com"
                    className="text-pink-400 hover:text-pink-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>{" "}
                  and read how Google uses information from sites that use its
                  services in{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    className="text-pink-400 hover:text-pink-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&apos;s advertising policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">Analytics</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We use Vercel Web Analytics to count page views and Vercel
                  Speed Insights to measure how fast pages load. These tools
                  tell us which pages are used and whether the site is slow.
                  They are separate from Google AdSense. We do not sell
                  analytics data, and we do not use it to build an advertising
                  profile.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">How your data is used</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Account and newsletter details are used to run those
                  features. Advertising cookies are used by Google and its
                  partners as described above. Analytics are used to operate
                  and improve the site. We do not sell personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">Cookies</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  The{" "}
                  <Link href="/cookies" className="text-pink-400 hover:text-pink-300">
                    Cookie Policy
                  </Link>{" "}
                  explains the cookies and similar technologies used on this
                  site, including advertising cookies from Google AdSense. You
                  can also control cookies in your browser.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">Updates</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This policy will be updated when the site adds features or
                  when the advertising and analytics tools change. The date at
                  the top of this page is the latest revision.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
