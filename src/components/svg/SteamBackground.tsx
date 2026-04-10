const SteamBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="steam-bg" x="0" y="0" width="400" height="200" patternUnits="userSpaceOnUse">
        {/* Gentle wave lines */}
        <path
          d="M0 40 C50 30, 100 50, 150 40 S250 30, 300 40 S400 50, 400 40"
          fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06"
        />
        <path
          d="M0 100 C60 90, 120 110, 180 100 S280 90, 340 100 S400 110, 400 100"
          fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04"
        />
        <path
          d="M0 160 C40 150, 80 170, 140 160 S220 150, 280 160 S360 170, 400 160"
          fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05"
        />
        {/* Tiny steam dots */}
        <circle cx="70" cy="70" r="1" fill="currentColor" opacity="0.04" />
        <circle cx="200" cy="130" r="0.8" fill="currentColor" opacity="0.03" />
        <circle cx="330" cy="50" r="1.2" fill="currentColor" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#steam-bg)" />
  </svg>
);

export default SteamBackground;
