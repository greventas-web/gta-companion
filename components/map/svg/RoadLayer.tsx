export default function RoadLayer() {
  return (
    <>
      {/* ============================= */}
      {/* Primary Highways */}
      {/* ============================= */}

      <g
        fill="none"
        stroke="#FFE3A1"
        strokeOpacity=".18"
        strokeWidth="6"
        strokeLinecap="round"
      >
        {/* North ↔ South Highway */}

        <path
          d="
          M330 140
          C430 190 520 250 610 360
          C700 470 760 575 840 705
          "
        />

        {/* West ↔ East Highway */}

        <path
          d="
          M185 430
          C330 395 470 410 620 465
          C760 520 900 565 1045 615
          "
        />

        {/* Coastal Highway */}

        <path
          d="
          M760 245
          C865 295 930 370 980 470
          C1010 535 1028 615 1025 705
          "
        />
      </g>

      {/* ============================= */}
      {/* Secondary Roads */}
      {/* ============================= */}

      <g
        fill="none"
        stroke="#FFF3D0"
        strokeOpacity=".12"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M430 235 C470 285 510 345 540 415" />

        <path d="M560 505 C525 575 500 640 485 735" />

        <path d="M700 350 C735 420 770 470 830 535" />

        <path d="M350 585 C420 600 490 625 575 670" />

        <path d="M600 245 C650 260 710 295 765 340" />

        <path d="M820 610 C760 650 700 690 630 730" />
      </g>

      {/* ============================= */}
      {/* City Streets */}
      {/* ============================= */}

      <g
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity=".05"
        strokeWidth="1.5"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={`street-a-${i}`}
            d={`
              M760 ${500 + i * 18}
              L940 ${500 + i * 18}
            `}
          />
        ))}

        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={`street-b-${i}`}
            d={`
              M${770 + i * 18} 490
              L${770 + i * 18} 690
            `}
          />
        ))}
      </g>

      {/* ============================= */}
      {/* Road Glow */}
      {/* ============================= */}

      <g
        fill="none"
        stroke="#FF4FD8"
        strokeOpacity=".06"
        strokeWidth="14"
        strokeLinecap="round"
      >
        <path
          d="
          M330 140
          C430 190 520 250 610 360
          C700 470 760 575 840 705
          "
        />

        <path
          d="
          M185 430
          C330 395 470 410 620 465
          C760 520 900 565 1045 615
          "
        />
      </g>
    </>
  );
}