import ActivityDatabase from "@/components/ActivityDatabase";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="relative overflow-hidden">

        <div className="absolute left-[-220px] top-[-140px] h-[620px] w-[620px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[1700px] px-4 pb-10 pt-36 sm:px-8 sm:pt-44">

          <div className="inline-flex max-w-full rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-pink-400 sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.28em]">
            Unofficial fan database
          </div>

          <h1 className="mt-8 break-words text-5xl font-black tracking-[-0.03em] sm:text-7xl">
            Activities
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Activities Rockstar has shown or described, including ones from the Extended Look and from the Rob Nelson interviews.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
            Sources:{" "}
            <a
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-200"
            >
              Rockstar Games — Grand Theft Auto VI
            </a>
            ;{" "}
            <a
              href="https://www.youtube.com/watch?v=tJbzMqJGH4k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-200"
            >
              Extended Look
            </a>
            ;{" "}
            <a
              href="https://www.famitsu.com/article/202608/85753"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-200"
            >
              Famitsu — Rob Nelson
            </a>
            .
          </p>

          <ActivityDatabase />

        </div>

      </section>

    </main>
  );
}