export const partnerCategories = ["Fan site", "Creator", "Discord"] as const;

export type PartnerCategory = (typeof partnerCategories)[number];

export type Partner = {
  name: string;
  url: string;
  logo?: string;
  description: string;
  category: PartnerCategory;
  /**
   * Rel tokens for the partner link. "noopener" is always applied.
   * Do not use "nofollow" — partner links are followed.
   */
  rel: readonly string[];
};

/**
 * Live link-swap partners. Add one object to publish a partner.
 *
 * {
 *   name: "Example Fan Site",
 *   url: "https://example.com",
 *   logo: "https://example.com/logo.png",
 *   description: "Short description of the site or channel.",
 *   category: "Fan site",
 *   rel: ["noopener"],
 * }
 */
export const partners: readonly Partner[] = [];

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
