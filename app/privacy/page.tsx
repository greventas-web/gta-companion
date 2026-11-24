import PageTitle from "@/components/PageTitle";
import SellerDetails from "@/components/pro/SellerDetails";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";
import { pageMetadata } from "@/lib/launch";
import { SITE, SUPPORT_URL } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for GTA Companion, covering cookies, Google AdSense, Vercel Analytics, and Stripe when Pro checkout opens. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`
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

          <Card className="mt-16 rounded-[40px] border-zinc-800 bg-zinc-900 p-6 sm:p-12">

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
                  Companion updates. If you ask to be notified when Pro opens,
                  we store that email on a private server list and use it
                  only to email you about the Pro launch. You can unsubscribe
                  any time by writing to {SITE.email}. We do not sell personal
                  information.
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
                  Google Analytics (GA4) may set cookies to measure how the
                  site is used. You can turn off personalized ads in{" "}
                  <a
                    href="https://adssettings.google.com"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google Ads Settings
                  </a>
                  . A more detailed list is on the{" "}
                  <a href="/cookies" className="text-pink-400 hover:text-pink-300">
                    Cookie Policy
                  </a>{" "}
                  page.
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
                  . Google explains how it uses data from sites that use its
                  services at{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://policies.google.com/technologies/partner-sites
                  </a>
                  . You can opt out at{" "}
                  <a
                    href="https://adssettings.google.com"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://adssettings.google.com
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.aboutads.info/choices"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://www.aboutads.info/choices
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Google Analytics
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We use Google Analytics 4 to understand visits to this
                  unofficial fan site, such as which pages are opened and
                  where traffic comes from. Google may set cookies for this
                  measurement. Google describes this in its{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Cookie choices
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Visitors in the European Economic Area, the United Kingdom
                  and Switzerland are asked before analytics or advertising
                  cookies are used. This is done through Google&apos;s consent
                  message or our own cookie banner. You can change your choice
                  at any time from Cookie settings in the footer.
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
                  Installed app and offline pages
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  If you install GTA Companion, or use a browser that saves
                  pages for offline reading, a copy of pages you open and the
                  app icon can be stored on your device. That copy stays on
                  the device so those pages can open without a connection. It
                  is not uploaded as a separate archive. Choosing Not now on
                  the install reminder stores that choice in local storage on
                  your device. Map submissions and admin tools are not saved
                  for offline use. You can remove the saved pages by clearing
                  this site&apos;s data in your browser, or by removing the
                  app from your home screen.
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
                  Payments and Stripe
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  Payments for GTA Companion Pro are taken by Stripe for the seller below.
                  Stripe receives
                  the email on your account, the amount, the currency, and
                  the card details, and emails the receipt. We store whether
                  Pro is active on the account, the amount, and the currency.
                  We do not receive or store your card number. Stripe
                  describes its handling of payment data in the{" "}
                  <a
                    href="https://stripe.com/privacy"
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Stripe privacy policy
                  </a>
                  . If Pro is active, marks you choose to track can be stored
                  so they sync across devices signed in to that account.
                </p>
                <SellerDetails className="mt-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Support and affiliate links
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  The Support us links open our Ko-fi page (
                  <a
                    href={SUPPORT_URL}
                    className="text-pink-400 hover:text-pink-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {SUPPORT_URL}
                  </a>
                  ). Ko-fi and its payment providers handle any payment there
                  under their own privacy policies. We do not receive your
                  card details.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Updates
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  This policy was updated on November 24, 2026. It will
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