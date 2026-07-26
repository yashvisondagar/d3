/**
 * Decorative but geographically grounded Mumbai peninsula.
 * North ↑ · Arabian Sea ← · Harbour / creek → · Colaba tip ↓
 * viewBox: 0 0 100 100 so pin % coords map 1:1.
 */
export function MumbaiMapSvg() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="seaWest" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(110,140,155,0.16)" />
          <stop offset="70%" stopColor="rgba(110,140,155,0.03)" />
          <stop offset="100%" stopColor="rgba(110,140,155,0)" />
        </linearGradient>
        <linearGradient id="harbourEast" x1="1" y1="0.2" x2="0" y2="0.8">
          <stop offset="0%" stopColor="rgba(110,140,155,0.14)" />
          <stop offset="100%" stopColor="rgba(110,140,155,0)" />
        </linearGradient>
        <linearGradient id="landFill" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="rgba(180,140,72,0.16)" />
          <stop offset="55%" stopColor="rgba(180,140,72,0.08)" />
          <stop offset="100%" stopColor="rgba(180,140,72,0.04)" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Arabian Sea (west) */}
      <rect x="0" y="0" width="28" height="100" fill="url(#seaWest)" />
      {/* Harbour / eastern water */}
      <path
        d="M72 18 C88 28 96 48 94 68 C92 82 80 92 68 96 L100 100 L100 0 Z"
        fill="url(#harbourEast)"
      />

      {/*
        Mumbai island/peninsula outline — simplified from real coastline:
        - Northern width (Borivali–Malad belt)
        - Western bulge at Bandra
        - Mahim creek notch
        - Worli / Prabhadevi shoulder
        - Narrowing toward Colaba tip
        - Eastern harbour curve (Sewri–Mazgaon side)
      */}
      <path
        d="
          M 34 6
          C 40 3.5, 48 4, 54 8
          C 58 6.5, 63 9, 66 14
          C 69 18, 71 24, 72 30
          C 73.5 38, 74 46, 72.5 54
          C 71 62, 68 68, 66 72
          C 70 76, 71 82, 68 88
          C 64 94, 56 97, 48 97.5
          C 42 98, 38 95, 36 90
          C 34 84, 35 78, 37 74
          C 33 70, 30 64, 29 58
          C 27.5 52, 26 48, 27 44
          C 24 40, 22 35, 23 30
          C 24 24, 26 18, 28 14
          C 29.5 10, 31.5 7.5, 34 6
          Z
        "
        fill="url(#landFill)"
        stroke="rgba(180,140,72,0.7)"
        strokeWidth="0.35"
        filter="url(#softGlow)"
      />

      {/* Mahim creek indent hint (west coast between Bandra & Worli) */}
      <path
        d="M 27 48 C 29.5 50, 30.5 53, 29.5 56"
        fill="none"
        stroke="rgba(110,140,155,0.35)"
        strokeWidth="0.45"
      />

      {/* Western Express / arterial suggestion (N–S) */}
      <path
        d="M 42 10 C 43 25, 44 40, 43 55 C 42 68, 41 80, 44 92"
        fill="none"
        stroke="rgba(180,140,72,0.28)"
        strokeWidth="0.22"
        strokeDasharray="0.8 1.2"
      />
      {/* Harbour line suggestion */}
      <path
        d="M 58 20 C 62 35, 64 50, 60 65 C 57 75, 52 85, 48 93"
        fill="none"
        stroke="rgba(180,140,72,0.18)"
        strokeWidth="0.2"
        strokeDasharray="0.6 1.4"
      />

      {/* Region labels — always visible for accuracy */}
      <g
        fill="rgba(42,38,31,0.38)"
        style={{ fontSize: "1.65px", letterSpacing: "0.06em" }}
        fontFamily="var(--font-sans), Lato, sans-serif"
      >
        <text x="8" y="48" transform="rotate(-90 8 48)">
          ARABIAN SEA
        </text>
        <text x="86" y="58" transform="rotate(72 86 58)">
          HARBOUR
        </text>
      </g>
      <text
        x="50"
        y="4.2"
        textAnchor="middle"
        fill="rgba(29,29,27,0.32)"
        style={{ fontSize: "2.2px", letterSpacing: "0.42em" }}
        fontFamily="var(--font-serif), Georgia, serif"
      >
        MUMBAI
      </text>
      <text
        x="46"
        y="96.5"
        textAnchor="middle"
        fill="rgba(29,29,27,0.28)"
        style={{ fontSize: "1.5px", letterSpacing: "0.12em" }}
        fontFamily="var(--font-sans), Lato, sans-serif"
      >
        COLABA TIP
      </text>

      {/* Soft district callouts (non-interactive) */}
      <g
        fill="rgba(180,140,72,0.55)"
        style={{ fontSize: "1.45px", letterSpacing: "0.04em" }}
        fontFamily="var(--font-serif), Georgia, serif"
      >
        <text x="48" y="15.5">N. suburbs</text>
        <text x="48" y="32">W. suburbs</text>
        <text x="48" y="52">Bandra–Khar</text>
        <text x="55" y="72">Island city</text>
      </g>
    </svg>
  );
}
