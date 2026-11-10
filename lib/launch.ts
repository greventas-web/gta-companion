import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SITE } from "@/lib/site";
import type { LaunchEntry } from "@/src/data/launch/types";

const socialImage = {
  url: "/logo/og-logo.jpg",
  width: 1200,
  height: 630,
  alt: SITE.name,
};

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "./",
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export function launchMetadata(title: string, description: string): Metadata {
  return pageMetadata(title, description);
}

export function launchStaticParams(entries: LaunchEntry[]) {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export function findLaunchEntry(entries: LaunchEntry[], slug: string) {
  const entry = entries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return entry;
}
