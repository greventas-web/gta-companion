export type LaunchDetail = {
  label: string;
  value: string;
};

export type LaunchSourceRef = {
  label: string;
  href: string;
};

export type LaunchEntry = {
  slug: string;
  title: string;
  summary: string;
  /** Price tag or payout chip, e.g. "$10,000–$25,000". */
  price?: string;
  image?: string;
  imageAlt?: string;
  details?: LaunchDetail[];
  /** Longer paragraphs for the detail page. */
  body?: string[];
  /** Every source behind the entry. Shown on the detail page. */
  sources?: LaunchSourceRef[];
  /** Internal links shown on the detail page. */
  links?: { href: string; label: string }[];
};
