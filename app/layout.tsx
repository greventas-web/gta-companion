import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { SearchProvider } from "@/components/search/SearchProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gta-companion.com"),

  title: {
    default: "GTA Companion",
    template: "%s | GTA Companion",
  },

  description:
    "Unofficial fan-made database for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two Interactive.",

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
    title: "GTA Companion",

    description:
      "Unofficial fan-made database for Grand Theft Auto VI.",

    url: "https://gta-companion.com",

    siteName: "GTA Companion",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo/og-logo.png",
        width: 1200,
        height: 630,
        alt: "GTA Companion",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GTA Companion",

    description:
      "Unofficial fan-made database for Grand Theft Auto VI.",

    images: ["/logo/og-logo.png"],
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-[#040404] text-white antialiased">
        <AuthProvider>
          <SearchProvider>
            <Navbar />

            {children}

            <Footer />
          </SearchProvider>
        </AuthProvider>
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1639723880207640"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}