import ItemImage from "@/components/ItemImage";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";

import { Weapon } from "@/types/weapon";

type Props = {
  weapon: Weapon;
  relatedWeapons: Weapon[];
};

export default function WeaponDetailsPage({
  weapon,
  relatedWeapons,
}: Props) {
  return (
    <section className="mx-auto max-w-[1700px]">

      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Weapons",
            href: "/weapons",
          },
          {
            label: weapon.name,
          },
        ]}
      />

      <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">

        {/* Hero Image */}

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

          <div className="relative aspect-[16/10]">

            <ItemImage
              src={weapon.image}
              alt={weapon.name}
              name={weapon.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          </div>

        </div>

        {/* Information */}

        <div>

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-pink-400">

            {weapon.category}

          </span>

          <h1 className="mt-8 text-6xl font-black tracking-[-0.03em]">

            {weapon.name}

          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-400">

            {weapon.description}

          </p>

          <div className="mt-10 rounded-[28px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-900 to-black p-7">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">

              GTA Companion Notes

            </p>

            <p className="mt-5 leading-8 text-zinc-400">

              Weapons listed in GTA Companion are sourced from official Rockstar Games material whenever possible. Specifications, manufacturers, variants and additional information will continue to expand as Rockstar reveals more content for Grand Theft Auto VI.

            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Info
              label="Manufacturer"
              value={weapon.manufacturer}
            />

            <Info
              label="Category"
              value={weapon.category}
            />

            <Info
              label="Status"
              value={weapon.status}
            />

            <Info
              label="Ammunition"
              value={weapon.ammunition}
            />

            <Info
              label="First Appearance"
              value={weapon.firstAppearance}
            />

            <Info
              label="Gallery"
              value={`${weapon.gallery.length} Images`}
            />

          </div>

        </div>

      </div>

      {/* Related Weapons */}

      {relatedWeapons.length > 0 ? (
      <section className="mt-28">

        <h2 className="break-words text-4xl font-black sm:text-5xl">

          Related Weapons

        </h2>

        <p className="mt-3 text-zinc-400">

          Discover more officially confirmed weapons from the GTA universe.

        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedWeapons.map((related) => (

            <Link
              key={related.id}
              href={`/weapons/${related.slug}`}
              className="group rounded-[30px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-7 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_100px_rgba(236,72,153,.18)]"
            >

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">

                <ItemImage
                  src={related.image}
                  alt={related.name}
                  name={related.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">

                {related.category}

              </p>

              <h3 className="mt-3 text-3xl font-black transition group-hover:text-pink-300">

                {related.name}

              </h3>

              <p className="mt-3 line-clamp-2 leading-7 text-zinc-400">

                {related.description}

              </p>

            </Link>

          ))}

        </div>

      </section>
      ) : null}

    </section>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">

        {label}

      </p>

      <h3 className="mt-3 text-2xl font-black text-white break-words">

        {value}

      </h3>

    </div>
  );
}