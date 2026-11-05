export default function GlowLayer() {
  return (
    <>
      <defs>

        <radialGradient
          id="mapGlow"
          cx="50%"
          cy="50%"
          r="70%"
        >
          <stop
            offset="0%"
            stopColor="#FF4FD8"
            stopOpacity=".20"
          />

          <stop
            offset="100%"
            stopColor="#FF4FD8"
            stopOpacity="0"
          />
        </radialGradient>

      </defs>

      <circle
        cx="820"
        cy="620"
        r="170"
        fill="url(#mapGlow)"
      />

      <circle
        cx="650"
        cy="470"
        r="120"
        fill="url(#mapGlow)"
        opacity=".35"
      />
    </>
  );
}