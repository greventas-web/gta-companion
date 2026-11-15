export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040404]">

      <div className="flex flex-col items-center">

        <div className="h-20 w-20 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />

        <div className="mt-8 text-2xl font-black text-white">
          Loading GTA Companion...
        </div>

      </div>

    </main>
  );
}