import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { detailMetadata } from "@/lib/pages";
import { ammuStores, findAmmuStore } from "@/lib/simple/ammu";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ammuStores.map((store) => ({ slug: store.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = findAmmuStore(slug);
  if (!store) return {};
  return detailMetadata(`${store.name}: GTA 6 gun store`, `${store.name} is a ${store.inventory} gun store in ${store.area}, ${store.county}.`);
}

export default async function AmmuStorePage({ params }: Props) {
  const { slug } = await params;
  const store = findAmmuStore(slug);
  if (!store) notFound();
  const nearby = ammuStores.filter((item) => item.county === store.county && item.slug !== store.slug).slice(0, 4);

  const photo = imageForPath(`/ammu-nation-locations/${store.slug}`);
  const pinPhoto = store.exactPin ? imageForPin(store.pin) : undefined;

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "Ammu-Nation", href: "/ammu-nation-locations" }, { label: store.name }]}
        eyebrow="Gun store"
        title={store.name}
        image={photo?.src ?? pinPhoto?.src}
        imageAlt={photo?.alt ?? pinPhoto?.alt}
        summary={`In ${store.area}.`}
        facts={[
          { label: "Stock", value: store.inventory },
          { label: "Area", value: store.area },
          { label: "County", value: store.county },
        ]}
        mapPin={store.pin}
        mapLabel={store.exactPin ? "Find on map" : "Find the area on map"}
        related={nearby.map((item) => ({
          href: `/ammu-nation-locations/${item.slug}`,
          title: item.name,
          eyebrow: item.area,
          image: imageForPath(`/ammu-nation-locations/${item.slug}`)?.src,
          chips: [{ value: item.inventory }],
          small: true,
        }))}
        relatedHeading={`More in ${store.county}`}
      />
    </PageShell>
  );
}
