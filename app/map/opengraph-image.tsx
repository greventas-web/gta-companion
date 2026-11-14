import { ImageResponse } from "next/og";

export const alt = "GTA 6 Interactive Map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 70% 60%, #4c1d95 0%, #120b1c 42%, #07060d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#c4b5fd" }}>
          GTA COMPANION
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1 }}>
            GTA 6 Interactive Map
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#ddd6fe" }}>
            Leonida, from official Rockstar footage
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#a1a1aa" }}>
          Unofficial fan site. Positions approximate until launch.
        </div>
      </div>
    ),
    { ...size }
  );
}
