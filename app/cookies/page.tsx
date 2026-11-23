import PageTitle from "@/components/PageTitle";
import { pageMetadata } from "@/lib/launch";
import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata(
  "Cookie policy",
  "How GTA Companion uses cookies. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);


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
                  GTA Companion is an unofficial fan site, not affiliated
                  with Rockstar Games or Take-Two. It may store cookies or
                  similar data so sign-in and preferences can persist.
                  Choosing Not now on the install reminder is saved in local
                  storage on your device. A first-party cookie stores your
                  analytics and advertising cookie choice. Google Analytics
                  4 may set cookies to measure how the site is used. Google
                  AdSense may set cookies to show and measure third-party
                  ads. Vercel Web Analytics and Speed Insights do not use
                  cookies; they record page views and performance
                  measurements such as the page, browser, and country.
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-zinc-400">
                  <li>
                    Our cookies: gta_consent (your analytics/ads choice, 180
                    days) and gta_geo (region check so the right consent
                    message shows).
                  </li>
                  <li>
                    Google Analytics 4: _ga and _ga_GH40PJPZT4 (tell visits
                    apart, up to 2 years). Set only after consent in the EEA,
                    UK and Switzerland.
                  </li>
                  <li>
                    Google AdSense: __gads, __gpi, __eoi (ad delivery,
                    frequency and measurement), and cookies on Google&apos;s
                    ad domains such as IDE (doubleclick.net). Set only after
                    consent in the EEA, UK and Switzerland. Elsewhere, ads
                    may be personalized unless you opt out.
                  </li>
                  <li>
                    Google&apos;s consent message: FCCDCF, FCNCA (store your
                    consent choice when the Google consent message is shown).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Managing Cookies
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Visitors in the European Economic Area, the United Kingdom
                  and Switzerland are asked before analytics or advertising
                  cookies are used. This is done through Google&apos;s consent
                  message or our own cookie banner. You can change your choice
                  at any time from Cookie settings in the footer. You can also
                  control ad personalization in{" "}
                  <a
                    href="https://adssettings.google.com"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google Ads Settings
                  </a>
                  . Most browsers let you control or disable cookies through
                  their settings. Disabling cookies may affect certain
                  website features. The{" "}
                  <a href="/privacy" className="text-pink-400 hover:text-pink-300">
                    Privacy Policy
                  </a>{" "}
                  explains this in more detail.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Updates
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This policy was updated on November 23, 2026. It may change
                  again as GTA Companion evolves or when legal requirements
                  change.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}