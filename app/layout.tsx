import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GTA Companion",
    template: "%s | GTA Companion",
  },
  description:
    "The ultimate companion platform for GTA VI. Explore vehicles, manufacturers, guides, maps, news and much more.",
  keywords: [
    "GTA VI",
    "GTA 6",
    "GTA Companion",
    "GTA Vehicles",
    "Vice City",
    "Rockstar Games",
  ],
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
      <body className="bg-background text-white antialiased">

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}