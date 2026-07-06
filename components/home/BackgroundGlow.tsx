export default function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-250px] top-[-200px] h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[500px] h-[700px] w-[700px] rounded-full bg-violet-500/10 blur-[220px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/5 blur-[200px]" />
    </>
  );
}