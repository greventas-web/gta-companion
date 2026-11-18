import { vehicles } from "@/data/vehicles";
import { weapons } from "@/data/weapons";
import type { SimpleCardProps } from "@/components/simple/SimpleCard";
import type { Cheat } from "@/src/data/launch/cheat-list";
import { arrowCode, cheatSlug, groupForCheat } from "@/src/data/launch/cheats";

/** Photo of the vehicle or weapon a cheat gives, when we have one. */
export function cheatImage(cheat: Cheat): { src?: string; alt?: string } {
  const link = cheat.link ?? "";
  if (link.startsWith("/vehicles/")) {
    const slug = link.slice("/vehicles/".length);
    const vehicle = vehicles.find((item) => item.slug === slug);
    return { src: vehicle?.image, alt: vehicle?.name };
  }
  if (link.startsWith("/weapons/")) {
    const slug = link.slice("/weapons/".length);
    const weapon = weapons.find((item) => item.slug === slug);
    return { src: weapon?.image, alt: weapon?.imageAlt ?? weapon?.name };
  }
  return {};
}

export function cheatHref(cheat: Cheat) {
  return `/cheats/${groupForCheat(cheat.category).slug}/${cheatSlug(cheat.name)}`;
}

export function cheatCard(cheat: Cheat): SimpleCardProps {
  const image = cheatImage(cheat);
  return {
    href: cheatHref(cheat),
    title: cheat.name,
    image: image.src,
    imageAlt: image.alt,
    line: cheat.effect,
    kind: cheat.category === "combat" ? "weapon" : cheat.category === "vehicle" ? "vehicle" : "cheat",
    chips: [
      { label: "Unlock", value: cheat.unlock.replace(/\.$/, "") },
      ...(cheat.code ? [{ label: "Code", value: arrowCode(cheat.code) }] : []),
    ],
  };
}
