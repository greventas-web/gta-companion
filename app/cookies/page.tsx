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
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Managing Cookies
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Visitors in the European Economic Area, the United Kingdom,
                  and Switzerland will see a cookie banner with Accept,
                  Reject, and Manage. You can reopen those settings at any
                  time from Cookie settings in the footer. You can also
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