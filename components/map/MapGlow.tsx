export default function MapGlow() {
  return (
    <>
      <div className="pointer-events-none absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute -right-56 bottom-[-200px] h-[700px] w-[700px] rounded-full bg-violet-500/10 blur-[200px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />
    </>
  );
}