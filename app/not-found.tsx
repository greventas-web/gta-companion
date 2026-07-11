import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-white">

      <div className="max-w-3xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.45em] text-pink-400">
          Error 404
        </p>

        <h1 className="mt-6 text-7xl font-black tracking-tight">
          Page Not Found
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
          The page you're looking for doesn't exist or may have been moved.
          Continue exploring GTA Companion using one of the links below.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="rounded-2xl bg-pink-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-pink-400"
          >
            Back Home
          </Link>

          <Link
            href="/vehicles"
            className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-bold transition hover:border-pink-500 hover:text-pink-400"
          >
            Vehicle Database
          </Link>

        </div>

      </div>

    </main>
  );
}