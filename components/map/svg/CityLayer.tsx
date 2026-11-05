export default function CityLayer() {
  return (
    <>
      {/* ========================= */}
      {/* Vice City */}
      {/* ========================= */}

      <City
        x={845}
        y={620}
        size={12}
        color="#FF4FD8"
        name="Vice City"
      />

      {/* ========================= */}
      {/* Port Gellhorn */}
      {/* ========================= */}

      <City
        x={690}
        y={610}
        size={10}
        color="#9B6DFF"
        name="Port Gellhorn"
      />

      {/* ========================= */}
      {/* Ambrosia */}
      {/* ========================= */}

      <City
        x={635}
        y={440}
        size={9}
        color="#55D4FF"
        name="Ambrosia"
      />

      {/* ========================= */}
      {/* Mount Kalaga */}
      {/* ========================= */}

      <City
        x={330}
        y={175}
        size={9}
        color="#7EF08A"
        name="Mount Kalaga"
      />

      {/* ========================= */}
      {/* Leonida Keys */}
      {/* ========================= */}

      <City
        x={455}
        y={842}
        size={8}
        color="#FFD166"
        name="Leonida Keys"
      />
    </>
  );
}

function City({
  x,
  y,
  size,
  color,
  name,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  name: string;
}) {
  return (
    <g>
      {/* Outer Glow */}

      <circle
        cx={x}
        cy={y}
        r={size * 2.5}
        fill={color}
        opacity=".12"
      />

      {/* Glow */}

      <circle
        cx={x}
        cy={y}
        r={size * 1.6}
        fill={color}
        opacity=".25"
      />

      {/* Main Marker */}

      <circle
        cx={x}
        cy={y}
        r={size}
        fill={color}
        stroke="white"
        strokeWidth="2"
      />

      {/* Center */}

      <circle
        cx={x}
        cy={y}
        r={size / 3}
        fill="white"
      />

      {/* Label */}

      <text
        x={x}
        y={y - size - 14}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="18"
        fontWeight="700"
        style={{
          letterSpacing: "0.04em",
        }}
      >
        {name}
      </text>
    </g>
  );
}