import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";
import { pageMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for GTA Companion, covering cookies, Google AdSense, and Vercel Analytics. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`
);

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
                  Who we are
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  GTA Companion is an unofficial fan site, not affiliated
                  with Rockstar Games or Take-Two. Questions about this
                  policy can be sent to{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-pink-400 hover:text-pink-300"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Information we collect
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  If you create an account, we store the name, email, and
                  saved items needed for favorites and settings. If you join
                  the newsletter, we store that email so we can send GTA
                  Companion updates. We do not sell personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Cookies
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Sign-in and saved preferences may use cookies or similar
                  storage in your browser. Google AdSense, which serves
                  third-party ads on this site, and Google&apos;s advertising
                  partners may also set cookies to deliver and measure ads,
                  including ads based on your visits to this site and others.
                  You can turn off personalized ads in{" "}
                  <a
                    href="https://adssettings.google.com"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Google AdSense and third-party ads
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We use Google AdSense to show ads. Those ads are provided
                  by Google and other advertisers, not by Rockstar Games or
                  Take-Two. Google describes how it uses data for advertising
                  in its{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    advertising technologies policy
                  </a>
                  . The publisher line for this site is published at{" "}
                  <a href="/ads.txt" className="text-pink-400 hover:text-pink-300">
                    /ads.txt
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Vercel Analytics
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Vercel Web Analytics counts visits to this site. It does
                  not use cookies and it does not collect your name or email.
                  A page view can include the page address, the referring
                  site, browser, operating system, device type, and country.
                  Vercel Speed Insights records loading and responsiveness
                  measurements in the same way, without cookies. Vercel
                  describes this in its{" "}
                  <a
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Web Analytics privacy policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  How your data is used
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Account and newsletter details are used to run those
                  features. Analytics and advertising data are used to
                  understand visits and to show ads. We do not sell personal
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Updates
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This policy was updated on November 10, 2026. It will
                  change again if the site starts collecting something new.
                </p>
              </div>

            </div>

          </Card>

        </Container>

      </Section>

    </main>
  );
}