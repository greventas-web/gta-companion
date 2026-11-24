import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import AdsLoader from "@/components/pro/AdsLoader";
import ProRuntime from "@/components/pro/ProRuntime";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/auth/AuthProvider";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister";
import ConsentBanner from "@/components/consent/ConsentBanner";
import { SearchProvider } from "@/components/search/SearchProvider";
import { PWA_THEME_COLOR } from "@/lib/pwa";
import { websiteJsonLd } from "@/lib/seo";
import { SITE, SOCIAL_PROFILES } from "@/lib/site";
import { CONSENT_DEFAULTS_SCRIPT } from "@/lib/consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  slogan: SITE.slogan,
  email: SITE.email,
  description: SITE.description,
  logo: `${SITE.url}/icons/icon-night-512.png`,
  sameAs: SOCIAL_PROFILES.map((profile) => profile.href),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} — ${SITE.slogan}`,
    template: "%s | GTA Companion",
  },

  description: SITE.description,

  alternates: {
    canonical: "./",
  },

  keywords: [
    "GTA VI",
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA Companion",
    "Rockstar Games",
    "Vice City",
    "Leonida",
    "GTA VI Vehicles",
    "GTA VI Characters",
    "GTA VI Map",
    "GTA VI News",
  ],

  publisher: "GTA Companion",

  applicationName: "GTA Companion",

  // Override with NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel if the
  // Search Console code ever changes. The fallback keeps the live tag in place.
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
      "291I1lQDN4nGxm0FmODtq439eooj37COvVvwcsPv-qU",
  },

  appleWebApp: {
    capable: true,
    title: "GTA Companion",
    statusBarStyle: "black",
  },

  other: {
    "google-adsense-account": "ca-pub-1639723880207640",
    "apple-mobile-web-app-capable": "yes",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/icons/favicon-night.ico", sizes: "48x48" },
      { url: "/icons/icon-night-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-night-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon-night.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: `${SITE.name} — ${SITE.slogan}`,

    description: SITE.description,

    url: "./",

    siteName: SITE.name,

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo/og-night.jpg",
        width: 1200,
        height: 630,
        alt: "GTA Companion — Everything you need for GTA 6",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${SITE.name} — ${SITE.slogan}`,

    description: SITE.description,

    images: ["/logo/og-night.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: PWA_THEME_COLOR,
  colorScheme: "dark",
};

// GA4 measurement IDs look like G-XXXXXXXXXX. The tag is omitted until
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set to one, so a missing value adds no script.
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
const googleAnalyticsId = /^G-[A-Z0-9]+$/.test(gaMeasurementId)
  ? gaMeasurementId
  : undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#040404] text-white antialiased">
        <Script id="gta-consent-defaults" strategy="beforeInteractive">
          {CONSENT_DEFAULTS_SCRIPT}
        </Script>
        <Script id="pwa-install-capture" strategy="beforeInteractive">
          {`window.addEventListener("beforeinstallprompt",function(event){event.preventDefault();window.__gtaInstallPrompt=event;window.dispatchEvent(new Event("gta-install-prompt"));});`}
        </Script>
        <Script id="pro-flag" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("gta-companion-pro")==="1")document.documentElement.dataset.pro="1";}catch(e){}`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <AuthProvider>
          <ProRuntime />
          <SearchProvider>
            <Navbar />

            {children}

            <Footer />
            <ConsentBanner />
            <InstallPrompt />
            <ServiceWorkerRegister />
          </SearchProvider>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
        {googleAnalyticsId ? (
          <GoogleAnalytics gaId={googleAnalyticsId} />
        ) : null}
        <AdsLoader />
      </body>
    </html>
  );
}