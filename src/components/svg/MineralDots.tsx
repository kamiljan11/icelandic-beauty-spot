const MineralDots = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="mineral-dots" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="30" r="1.2" fill="currentColor" opacity="0.07" />
        <circle cx="80" cy="15" r="0.8" fill="currentColor" opacity="0.05" />
        <circle cx="140" cy="45" r="1" fill="currentColor" opacity="0.06" />
        <circle cx="50" cy="80" r="1.5" fill="currentColor" opacity="0.04" />
        <circle cx="120" cy="90" r="0.7" fill="currentColor" opacity="0.06" />
        <circle cx="160" cy="120" r="1.3" fill="currentColor" opacity="0.05" />
        <circle cx="30" cy="140" r="0.9" fill="currentColor" opacity="0.07" />
        <circle cx="90" cy="155" r="1.1" fill="currentColor" opacity="0.04" />
        <circle cx="170" cy="170" r="0.6" fill="currentColor" opacity="0.06" />
        <circle cx="10" cy="100" r="0.8" fill="currentColor" opacity="0.03" />
        <circle cx="110" cy="60" r="1.4" fill="currentColor" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mineral-dots)" />
  </svg>
);

export default MineralDots;
