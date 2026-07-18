export default function PageBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-260px] top-[-180px] h-[760px] w-[760px] rounded-full bg-pink-500/15 blur-[240px]" />

        <div className="absolute right-[-260px] top-[10%] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[230px]" />

        <div className="absolute bottom-[-240px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.02),transparent_70%)]" />

      </div>
    </>
  );
}