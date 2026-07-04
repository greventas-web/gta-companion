import SearchBar from "@/components/SearchBar";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          GTA 6 News
        </span>

        <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
          Stay
          <span className="text-pink-400"> Updated.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          The latest Rockstar announcements, GTA 6 updates, patch notes,
          trailers, community discoveries and official news.
        </p>

        <SearchBar placeholder="Search news..." />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {[
            "Rockstar Newswire",
            "GTA 6 Updates",
            "Community Highlights",
            "Patch Notes",
            "Upcoming Features",
            "Weekly Roundup",
          ].map((article) => (

            <article
              key={article}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-2 hover:border-pink-500"
            >

              <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                News Image
              </div>

              <h2 className="text-2xl font-bold">
                {article}
              </h2>

              <p className="mt-4 text-zinc-400">
                Read the latest GTA Companion coverage with beautiful layouts,
                screenshots and easy-to-read summaries.
              </p>

              <button className="mt-6 rounded-xl bg-pink-500 px-5 py-3 font-semibold transition hover:bg-pink-400">
                Read Article
              </button>

            </article>

          ))}

        </div>

      </section>
    </main>
  );
}