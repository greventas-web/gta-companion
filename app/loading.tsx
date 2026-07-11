export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">

      <div className="flex flex-col items-center">

        <div className="h-20 w-20 animate-spin rounded-full border-4 border-zinc-800 border-t-pink-500" />

        <h2 className="mt-8 text-3xl font-black text-white">
          GTA Companion
        </h2>

        <p className="mt-3 text-zinc-400">
          Loading...
        </p>

      </div>

    </main>
  );
}