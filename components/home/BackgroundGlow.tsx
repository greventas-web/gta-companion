export default function BackgroundGlow() {
  return (
    <>
      {/* Hero Glow */}

      <div className="pointer-events-none absolute left-[-360px] top-[-320px] h-[1000px] w-[1000px] rounded-full bg-pink-500/12 blur-[260px]" />

      <div className="pointer-events-none absolute right-[-320px] top-[-120px] h-[950px] w-[950px] rounded-full bg-fuchsia-500/10 blur-[260px]" />

      {/* Center Glow */}

      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-pink-500/6 blur-[260px]" />

      {/* Mid Right */}

      <div className="pointer-events-none absolute right-[-180px] top-[55%] h-[650px] w-[650px] rounded-full bg-violet-500/7 blur-[220px]" />

      {/* Bottom */}

      <div className="pointer-events-none absolute bottom-[-420px] left-1/2 h-[1050px] w-[1050px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[300px]" />

      {/* Radial Lighting */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(236,72,153,.10),transparent_34%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(168,85,247,.08),transparent_38%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(236,72,153,.05),transparent_45%)]" />

      {/* Vertical Blend */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/25" />

      {/* Film Grain */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cg fill='white' fill-opacity='.35'%3E%3Ccircle cx='6' cy='6' r='1'/%3E%3Ccircle cx='80' cy='35' r='1'/%3E%3Ccircle cx='145' cy='62' r='1'/%3E%3Ccircle cx='42' cy='126' r='1'/%3E%3Ccircle cx='168' cy='158' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}