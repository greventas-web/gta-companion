"use client";

export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040404] px-8 text-white">

      <div className="max-w-xl text-center">

        <h1 className="text-5xl font-black">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          An unexpected error occurred. Please refresh the page and try again.
        </p>

      </div>

    </main>
  );
}