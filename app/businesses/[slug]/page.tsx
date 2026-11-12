import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import BusinessDetailsPage from "@/components/business/BusinessDetailsPage";

import { businesses } from "@/data/businesses";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({
  params,
}: Props) {
  const { slug } = await params;

  const business = businesses.find(
    (b) =>
      b.slug === slug ||
      (slug === "brians-boat-works" && b.slug === "brian-boat-works")
  );

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