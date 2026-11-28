import Link from "next/link";

import { fenceIntro, fenceSections } from "@/src/data/launch/fence-guide";
import { findWhereTopic, wherePlaces } from "@/src/data/launch/where-to-find";

const moneyLinks = [
  { href: "/money-methods", label: "All money methods" },
  { href: "/money-methods/jewelry-store-robberies", label: "Jewelry robberies" },
  { href: "/money-methods/gang-operations", label: "Gang operations" },
  { href: "/money-methods/store-robberies", label: "Store robberies" },
  { href: "/money-methods/sell-cars-to-moses", label: "Sell cars to Moses" },
  { href: "/money-methods/randy-wish-list", label: "Randy's wish list" },
  { href: "/money-methods/sell-cars-at-pay-n-spray", label: "Pay 'n' Spray car sales" },
  { href: "/where-to-find/jewelry-stores-and-pawn-shops", label: "Jewelry stores and pawn shops" },
  { href: "/where-to-find/payday-loans", label: "Payday Loans" },
  { href: "/guides/bank-jobs", label: "Bank jobs and marked bills" },
];

/** Long fence guide. Build fails if a section slug is not a real place card. */
export default function FenceGuide() {
  const topic = findWhereTopic("fences");
  if (!topic) throw new Error("where-to-find is missing the fences topic");
  const places = new Set(wherePlaces(topic).map((place) => place.slug));
  const missing = fenceSections.filter((section) => !places.has(section.slug)).map((section) => section.slug);
  if (missing.length > 0) {
    throw new Error(`fence guide points at unknown places: ${missing.join(", ")}`);
  }

  return (
    <article className="mt-8 max-w-3xl">
      <div className="space-y-4">
        {fenceIntro.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-zinc-200">
            {paragraph}
          </p>
        ))}
      </div>

      {fenceSections.map((section) => (
        <section key={section.slug} id={section.slug} className="mt-10">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white">
            <Link href={`/where-to-find/fences/${section.slug}`} className="hover:text-pink-300">
              {section.name}
            </Link>
          </h2>
          <div className="mt-3 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-zinc-200">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <h2 className="mt-10 text-2xl font-black tracking-[-0.03em] text-white">Money methods</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {moneyLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
