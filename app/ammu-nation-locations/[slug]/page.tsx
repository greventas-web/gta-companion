import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { pageMetadata } from "@/lib/launch";
import { ammuStores, findAmmuStore } from "@/lib/simple/ammu";
import { expandedStock, shelfStock, storeParagraphs, type StockRow } from "@/lib/simple/ammuStock";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";

function PriceTable({ caption, rows }: { caption: string; rows: StockRow[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="mt-8 overflow-x-auto rounded-[24px] border border-white/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="border-b border-white/10 px-4 py-3 text-left text-base font-black text-white">{caption}</caption>
        <thead className="bg-white/[0.04] text-xs font-black uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th scope="col" className="px-4 py-3">Gun</th>
            <th scope="col" className="px-4 py-3">Price</th>
            <th scope="col" className="px-4 py-3">Unlock</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.slug} className="border-t border-white/10 align-top">
              <th scope="row" className="px-4 py-3 font-bold text-white">
                <Link href={`/weapons/${row.slug}`} className="hover:text-pink-300">
                  {row.name}
                </Link>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{row.category}</span>
              </th>
              <td className="px-4 py-3 font-semibold text-zinc-100">{row.price || "—"}</td>
              <td className="px-4 py-3 text-zinc-300">{row.unlock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ammuStores.map((store) => ({ slug: store.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = findAmmuStore(slug);
  if (!store) return {};
  return pageMetadata(
    `${store.name}: GTA 6 gun store`,
    `${store.name} is a ${store.inventory} Ammu-Nation in ${store.area}, ${store.county}, with the gun prices and unlock notes from our weapons list. Unofficial.`
  );
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
        links={[
          { href: "/weapons", label: "Weapons and prices" },
          { href: "/where-to-find/gun-stores", label: "What each tier sells" },
          ...(store.inventory === "Expanded" ? [{ href: "/guides/rocket-launcher", label: "Rocket launcher" }] : []),
          ...(store.slug === "black-eagle" ? [{ href: "/guides/black-eagle-kalinga", label: "Warehouse safe" }] : []),
        ]}
        related={nearby.map((item) => ({
          href: `/ammu-nation-locations/${item.slug}`,
          title: item.name,
          eyebrow: item.area,
          image: imageForPath(`/ammu-nation-locations/${item.slug}`)?.src,
          chips: [{ value: item.inventory }],
          small: true,
        }))}
        relatedHeading={`More in ${store.county}`}
      >
        <div className="mt-8 max-w-3xl space-y-4">
          {storeParagraphs(store).map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-zinc-200">
              {paragraph}
            </p>
          ))}
        </div>
        {store.inventory === "Expanded" ? (
          <PriceTable caption={`Expanded-only guns at ${store.name}`} rows={expandedStock} />
        ) : null}
        <PriceTable
          caption={store.inventory === "Expanded" ? "Other Ammu-Nation prices" : "Ammu-Nation prices"}
          rows={shelfStock}
        />
      </SimpleDetail>
    </PageShell>
  );
}
