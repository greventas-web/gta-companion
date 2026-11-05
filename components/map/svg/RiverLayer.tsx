export default function RiverLayer() {
  return (
    <>
      {/* Grassrivers Main */}

      <path
        d="
        M615 520
        C635 535 662 555 680 585
        C696 615 692 650 670 680
        C646 710 610 730 565 748
        "
        fill="none"
        stroke="#2AA7FF"
        strokeWidth="10"
        strokeLinecap="round"
        opacity=".40"
      />

      <path
        d="
        M640 470
        C675 485 705 510 728 548
        C748 582 752 620 740 662
        "
        fill="none"
        stroke="#39C3FF"
        strokeWidth="6"
        strokeLinecap="round"
        opacity=".35"
      />

      {/* Vice City Canal */}

      <path
        d="
        M790 575
        C820 590 850 615 868 645
        "
        fill="none"
        stroke="#4FD8FF"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".40"
      />

      {/* Northern River */}

      <path
        d="
        M470 220
        C505 255 540 292 565 330
        C585 362 600 395 608 432
        "
        fill="none"
        stroke="#48B8FF"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".32"
      />

      {/* Interior Stream */}

      <path
        d="
        M390 430
        C430 450 470 472 495 510
        "
        fill="none"
        stroke="#5FD2FF"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".28"
      />

      {/* Lakes */}

      <ellipse
        cx="540"
        cy="295"
        rx="35"
        ry="23"
        fill="#147ED1"
        opacity=".55"
      />

      <ellipse
        cx="648"
        cy="378"
        rx="26"
        ry="17"
        fill="#147ED1"
        opacity=".55"
      />

      <ellipse
        cx="446"
        cy="512"
        rx="30"
        ry="18"
        fill="#147ED1"
        opacity=".55"
      />
    </>
  );
}