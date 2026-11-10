import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { SearchProvider } from "@/components/search/SearchProvider";
import { SITE, SOCIAL_PROFILES } from "@/lib/site";

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
  logo: `${SITE.url}/icons/icon-512.png`,
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

  authors: [
    {
      name: "Gabrielius Reventas",
    },
  ],

  creator: "Gabrielius Reventas",

  publisher: "GTA Companion",

  applicationName: "GTA Companion",

  verification: {
    google: "291I1lQDN4nGxm0FmODtq439eooj37COvVvwcsPv-qU",
  },

  other: {
    "google-adsense-account": "ca-pub-1639723880207640",
  },

  robots: {
    index: true,
    follow: true,
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
        url: "/logo/og-logo.jpg",
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

    images: ["/logo/og-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#040404",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AuthProvider>
          <SearchProvider>
            <Navbar />

            {children}

            <Footer />
          </SearchProvider>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1639723880207640"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}