import Link from "next/link";

import { whereToFindTopics } from "@/src/data/launch/where-to-find";

type Props = {
  /** Topic slug to leave out, e.g. the page this block sits on. */
  exclude?: string;
  title?: string;
  className?: string;
};

/** Small internal-link block for the "where to find" pages. No images. */
export default function WhereToFindLinks({
  exclude,
  title = "Where to find it in GTA 6",
  className = "",
}: Props) {
  const topics = whereToFindTopics.filter((topic) => topic.slug !== exclude);

  return (
    <section className={`rounded-[24px] border border-violet-400/20 bg-violet-500/[0.06] p-5 sm:p-6 ${className}`}>
      <h2 className="text-lg font-black">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`/where-to-find/${topic.slug}`}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40 hover:text-violet-100"
            >
              {topic.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/where-to-find"
            className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
          >
            All locations
          </Link>
        </li>
      </ul>
    </section>
  );
}
