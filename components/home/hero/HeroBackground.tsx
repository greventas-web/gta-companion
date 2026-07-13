import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[-15%] top-[-20%] h-[950px] w-[950px] rounded-full bg-pink-500/20 blur-[240px]" />
      <div className="absolute right-[-10%] top-[-10%] h-[850px] w-[850px] rounded-full bg-fuchsia-500/15 blur-[220px]" />
      <div className="absolute bottom-[-35%] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[260px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,80,170,.20),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(168,85,247,.16),transparent_38%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#040404]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040404]/70 via-transparent to-transparent" />
    </div>
  );
}
