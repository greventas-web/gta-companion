import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import BusinessDetailsPage from "@/components/business/BusinessDetailsPage";

import { businesses } from "@/data/businesses";
import { detailMetadata, sectionTitle } from "@/lib/pages";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function findBusiness(slug: string) {
  return businesses.find(
    (business) =>
      business.slug === slug ||
      (slug === "brians-boat-works" && business.slug === "brian-boat-works")
  );
}

export function generateStaticParams() {
  return [
    ...businesses.map((business) => ({ slug: business.slug })),
    { slug: "brians-boat-works" },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const business = findBusiness(slug);

  if (!business) {
    return {};
  }

  return detailMetadata(
    sectionTitle(business.name, "Business"),
    business.description
  );
}

export default async function BusinessPage({
  params,
}: Props) {
  const { slug } = await params;

  const business = findBusiness(slug);

  if (!business) {
    notFound();
  }

  const relatedBusinesses = businesses
    .filter(
      (b) =>
        b.slug !== business.slug &&
        (
          b.category === business.category ||
          b.location === business.location
        )
    )
    .slice(0, 3);

  return (
    <PageShell>
      <BusinessDetailsPage
        business={business}
        relatedBusinesses={relatedBusinesses}
      />
    </PageShell>
  );
}