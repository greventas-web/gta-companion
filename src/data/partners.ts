export const partnerCategories = ["Fan site", "Creator", "Discord"] as const;

export type PartnerCategory = (typeof partnerCategories)[number];

export type PartnerLink = {
  label: string;
  url: string;
};

export type Partner = {
  name: string;
  url: string;
  description: string;
  category: PartnerCategory;
  /**
   * Rel tokens for the partner link. "noopener" is always applied.
   * Do not use "nofollow" — partner links are followed.
   */
  rel: readonly string[];
  /** Extra followed links shown under the card. */
  links?: readonly PartnerLink[];
};

/**
 * Live link-swap partners. Add one object to publish a partner.
 * Cards use the site's Browse artwork. Do not hotlink a remote logo.
 *
 * {
 *   name: "Example Fan Site",
 *   url: "https://example.com",
 *   description: "Short description of the site or channel.",
 *   category: "Fan site",
 *   rel: ["noopener"],
 *   links: [{ label: "Guides", url: "https://example.com/guides" }],
 * }
 */
export const partners: readonly Partner[] = [
  {
    name: "GTA6 Times",
    url: "https://gta6times.com",
    description: "Unlock times, prices worldwide and guides for GTA 6.",
    category: "Fan site",
    rel: ["noopener"],
    links: [
      { label: "Unlock times by country", url: "https://gta6times.com/gta-6/release-time" },
      { label: "Price in every country", url: "https://gta6times.com/gta-6/price-worldwide" },
      { label: "All guides", url: "https://gta6times.com/gta-6/guides" },
    ],
  },
  {
    name: "Emilio",
    url: "https://www.youtube.com/@soyemilioooo",
    description: "Spanish-language GTA 6 videos and gameplay.",
    category: "Creator",
    rel: ["noopener"],
  },
  {
    name: "ZoneX",
    url: "https://www.youtube.com/@ZoneXbez",
    description: "GTA 6 videos from ZoneX on YouTube.",
    category: "Creator",
    rel: ["noopener", "noreferrer"],
  },
  {
    name: "MisterCapTV",
    url: "https://www.youtube.com/@MistercapTV",
    description: "Italian GTA 6 videos from MisterCapTV on YouTube.",
    category: "Creator",
    rel: ["noopener", "noreferrer"],
  },
];

export function partnerHref(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    return parsed.href;
  } catch {
    return null;
  }
}

export function partnerRel(rel: readonly string[]): string {
  const tokens = rel.filter((token) => token.length > 0 && token !== "nofollow");

  if (!tokens.includes("noopener")) {
    tokens.unshift("noopener");
  }

  return tokens.join(" ");
}
