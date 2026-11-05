export default function LabelLayer() {
  return (
    <>
      {/* ========================= */}
      {/* State Name */}
      {/* ========================= */}

      <text
        x="600"
        y="120"
        textAnchor="middle"
        fill="#FFFFFF"
        opacity=".06"
        fontSize="82"
        fontWeight="900"
        letterSpacing="0.28em"
      >
        LEONIDA
      </text>

      {/* ========================= */}
      {/* Regions */}
      {/* ========================= */}

      <Label
        x={845}
        y={700}
        text="VICE CITY"
      />

      <Label
        x={690}
        y={690}
        text="PORT GELLHORN"
      />

      <Label
        x={625}
        y={505}
        text="AMBROSIA"
      />

      <Label
        x={315}
        y={265}
        text="MOUNT KALAGA"
      />

      <Label
        x={480}
        y={790}
        text="LEONIDA KEYS"
      />

      <Label
        x={655}
        y={610}
        text="GRASSRIVERS"
      />

      {/* ========================= */}
      {/* Water */}
      {/* ========================= */}

      <text
        x="1035"
        y="185"
        fill="#6EC8FF"
        opacity=".20"
        fontSize="28"
        fontStyle="italic"
        letterSpacing=".12em"
      >
        Atlantic Ocean
      </text>

      <text
        x="120"
        y="835"
        fill="#6EC8FF"
        opacity=".18"
        fontSize="22"
        fontStyle="italic"
      >
        Gulf Waters
      </text>
    </>
  );
}

function Label({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="#D4D4D8"
      opacity=".72"
      fontSize="15"
      fontWeight="700"
      letterSpacing=".18em"
    >
      {text}
    </text>
  );
}