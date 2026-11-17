"use client";

// Last-resort page if the root layout itself fails. Keeps a branded, plain
// page up instead of a blank screen during a traffic spike.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#07060c", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ maxWidth: 560, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <p style={{ color: "#c4b5fd", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            GTA Companion · Unofficial
          </p>
          <h1 style={{ fontSize: 32, margin: "16px 0" }}>Something went wrong</h1>
          <p style={{ color: "#a1a1aa", lineHeight: 1.6 }}>
            The site is busy right now. Try again in a moment. Grand Theft Auto VI is by Rockstar Games.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{ background: "#7c3aed", color: "#fff", border: 0, borderRadius: 999, padding: "12px 20px", fontWeight: 700, cursor: "pointer" }}
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" style={{ color: "#fff", border: "1px solid #3f3f46", borderRadius: 999, padding: "12px 20px", textDecoration: "none", fontWeight: 700 }}>
              Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
