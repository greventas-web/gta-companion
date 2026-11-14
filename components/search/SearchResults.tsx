import SearchResultCard from "./SearchResultCard";

type Result = {
  title: string;
  category: string;
  href: string;
  description?: string;
  image?: string;
};

type Props = {
  query: string;
  results: Result[];
};

export default function SearchResults({ query, results }: Props) {
  if (!query.trim()) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
        <h3 className="text-2xl font-bold text-white">
          Search GTA Companion
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-400">
          Look up a vehicle, character, location, business, weapon, or official news article.
        </p>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-8 py-20 text-center backdrop-blur-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/10 shadow-[0_0_50px_rgba(236,72,153,0.2)]">
          <span className="text-4xl">🔍</span>
        </div>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
          No results found
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-400">
          We couldn&apos;t find anything matching your search. Try searching for a
          vehicle, character, location, business, weapon, or official news article.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {results.map((result) => (
        <SearchResultCard
          key={result.href}
          {...result}
        />
      ))}
    </div>
  );
}