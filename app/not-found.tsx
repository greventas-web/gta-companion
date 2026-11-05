import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040404] px-8 text-white">

      <div className="max-w-2xl text-center">

        <div className="text-[140px] font-black leading-none text-pink-500">
          404
        </div>

        <h1 className="mt-6 text-5xl font-black">
          Page Not Found
        </h1>

        <p className="mt-6 text-xl leading-9 text-zinc-400">
          This page doesn't exist yet or Rockstar Games hasn't officially
          revealed enough information.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 font-bold text-white"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}