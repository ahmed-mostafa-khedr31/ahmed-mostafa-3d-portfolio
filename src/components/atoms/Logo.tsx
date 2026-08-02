type LogoProps = {
  className?: string;
};

const Logo = ({ className = "h-9 w-9" }: LogoProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logoGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#915EFF" />
        <stop offset="1" stopColor="#00cea8" />
      </linearGradient>
      <linearGradient id="logoFaceTop" x1="33" y1="5" x2="43" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c4a5ff" />
        <stop offset="1" stopColor="#915EFF" />
      </linearGradient>
      <linearGradient id="logoFaceLeft" x1="29" y1="8" x2="36" y2="15" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7348e8" />
        <stop offset="1" stopColor="#5a32c4" />
      </linearGradient>
      <linearGradient id="logoFaceRight" x1="36" y1="8" x2="43" y2="15" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00cea8" />
        <stop offset="1" stopColor="#009e82" />
      </linearGradient>
    </defs>

    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="13"
      fill="#110e1b"
      stroke="url(#logoGrad)"
      strokeWidth="1.5"
    />

    {/* Small 3D cube — top-right accent */}
    <g opacity="0.9">
      <path d="M33 6 L41 9.5 L41 13.5 L33 10 Z" fill="url(#logoFaceTop)" />
      <path d="M26 9.5 L33 13 L33 17 L26 13.5 Z" fill="url(#logoFaceLeft)" />
      <path d="M33 13 L41 16.5 L41 20.5 L33 17 Z" fill="url(#logoFaceRight)" />
    </g>

    {/* AM — bold & spaced for readability */}
    <text
      x="24"
      y="34.5"
      textAnchor="middle"
      fill="url(#logoGrad)"
      fontSize="17"
      fontWeight="800"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      letterSpacing="2"
    >
      AM
    </text>
  </svg>
);

export default Logo;
