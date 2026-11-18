import ItemImage, { isNameCard } from "@/components/ItemImage";
import { SourceLink } from "@/components/SourceLink";
import RepresentativeMark from "@/components/RepresentativeMark";
import { IMAGE_CREDIT } from "@/lib/site";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import ViewOnMap from "@/components/map/ViewOnMap";

import FaqSection, { type FaqItem } from "@/components/intent/FaqSection";
import { SourceList } from "@/components/SourceLink";
import { Weapon } from "@/types/weapon";

function weaponFaqs(weapon: Weapon): FaqItem[] {
  if (!weapon.sources || weapon.sources.length === 0) return [];
  const faqs: FaqItem[] = [];
  if (weapon.howToGet) {
    faqs.push({
      question: `Where do you get the ${weapon.name} in GTA 6?`,
      answer: weapon.howToGet,
      sources: weapon.sources,
    });
  }
  if (weapon.price) {
    faqs.push({
      question: `How much does the ${weapon.name} cost in GTA 6?`,
      answer: `Launch-day guides list the ${weapon.name} at ${weapon.price} at Ammu-Nation.`,
      sources: weapon.sources,
    });
  }
  if (weapon.stats) {
    faqs.push({
      question: `What are the ${weapon.name} stats in GTA 6?`,
      answer: `The in-game stat card shows damage ${weapon.stats.damage.toFixed(1)}, accuracy ${weapon.stats.accuracy.toFixed(1)}, handling ${weapon.stats.handling.toFixed(1)}, and range ${weapon.stats.range.toFixed(1)}, each out of 10.${weapon.magazine ? ` Magazine: ${weapon.magazine}.` : ""}${weapon.caliber ? ` Caliber: ${weapon.caliber}.` : ""}${weapon.fireMode ? ` Fire mode: ${weapon.fireMode.toLowerCase()}.` : ""}`,
      sources: weapon.sources,
    });
  }
  return faqs;
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-bold text-zinc-300">
        <span>{label}</span>
        <span>{value.toFixed(1)} / 10</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
          style={{ width: `${Math.max(0, Math.min(100, value * 10))}%` }}
        />
      </div>
    </div>
  );
}

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
              alt={weapon.imageAlt || weapon.name}
              name={weapon.name}
              fill
              priority
              sizes="(max-width: 480px) 80vw, (max-width: 1280px) 100vw, 58vw"
              className="object-cover"
            />

            {isNameCard(weapon.image) ? null : (
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            )}
            <RepresentativeMark show={weapon.imageRepresentative} />

          </div>
          {isNameCard(weapon.image) ? null : (
            <p className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              {IMAGE_CREDIT}
            </p>
          )}

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

          <ViewOnMap entityType="weapon" entitySlug={weapon.slug} />

          {weapon.source && !weapon.sources ? (
            <p className="mt-4">
              <SourceLink label={weapon.sourceLabel ?? "Rockstar Games"} href={weapon.source} />
            </p>
          ) : null}

          {weapon.stats ? (
            <div className="mt-10 grid gap-5 rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-7">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                In-game stats
              </p>
              <StatBar label="Damage" value={weapon.stats.damage} />
              <StatBar label="Accuracy" value={weapon.stats.accuracy} />
              <StatBar label="Handling" value={weapon.stats.handling} />
              <StatBar label="Range" value={weapon.stats.range} />
            </div>
          ) : null}

          {weapon.howToGet ? (
            <div className="mt-10 rounded-[28px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-900 to-black p-7">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                Where to get it
              </p>
              <p className="mt-5 leading-8 text-zinc-300">{weapon.howToGet}</p>
              {weapon.getLinks && weapon.getLinks.length > 0 ? (
                <p className="mt-4 text-sm text-zinc-400">
                  {weapon.getLinks.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? " · " : null}
                      <Link
                        href={link.href}
                        className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
                      >
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-900 to-black p-7">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                GTA Companion Notes
              </p>
              <p className="mt-5 leading-8 text-zinc-400">
                This is a pre-launch placeholder. Named GTA 6 weapons with in-game stats are listed in the weapon database.
              </p>
            </div>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Info
              label="Manufacturer"
              value={weapon.manufacturer}
            />

            <Info
              label="Category"
              value={weapon.type ? `${weapon.category} · ${weapon.type}` : weapon.category}
            />

            <Info
              label="Status"
              value={weapon.status}
            />

            <Info
              label="Caliber"
              value={weapon.caliber ?? weapon.ammunition}
            />

            {weapon.magazine ? (
              <Info label="Magazine" value={`${weapon.magazine}`} />
            ) : (
              <Info label="First Appearance" value={weapon.firstAppearance} />
            )}

            {weapon.price ? (
              <Info label="Price" value={weapon.price} />
            ) : (
              <Info label="Fire mode" value={weapon.fireMode ?? "Not published"} />
            )}

          </div>

          {weapon.sources && weapon.sources.length > 0 ? (
            <SourceList className="mt-6" sources={weapon.sources} />
          ) : null}

        </div>

      </div>

      {weaponFaqs(weapon).length > 0 ? (
        <FaqSection faqs={weaponFaqs(weapon)} heading={`${weapon.name}: questions`} />
      ) : null}

      {/* Related Weapons */}

      {relatedWeapons.length > 0 ? (
      <section className="mt-28">

        <h2 className="break-words text-4xl font-black sm:text-5xl">

          Related Weapons

        </h2>

        <p className="mt-3 text-zinc-400">

          More GTA 6 weapons from the same class or maker.

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

                {isNameCard(related.image) ? null : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                )}

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