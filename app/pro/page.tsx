import type { Metadata } from "next";
import { Suspense } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import ProPanel from "@/components/pro/ProPanel";
import { pageMetadata } from "@/lib/launch";
import { PRO_NAME, PRO_PRICE_LABEL } from "@/lib/pro/config";

const title = `${PRO_NAME} – Back the site. Wear the star.`;
const description = `Unofficial ${PRO_NAME}. Back the site. Wear the star. Pro is coming. Join the list to hear first. Planned one-time price ${PRO_PRICE_LABEL} (USD and GBP on the page). Not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  alternates: { canonical: "/pro" },
};

export default function ProPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pro" }]} />
      <div className="mt-6">
        <Suspense fallback={<div className="h-[420px] animate-pulse rounded-[28px] border border-white/5 bg-[#08080A]" />}>
          <ProPanel />
        </Suspense>
      </div>
    </PageShell>
  );
}
