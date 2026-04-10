const TopoLines = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="topo-lines" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
        {/* Contour rings */}
        <ellipse cx="150" cy="150" rx="120" ry="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
        <ellipse cx="150" cy="150" rx="90" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
        <ellipse cx="150" cy="150" rx="55" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
        {/* Offset contour set */}
        <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.04" />
        <ellipse cx="50" cy="50" rx="25" ry="15" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.03" />
        <ellipse cx="270" cy="260" rx="40" ry="28" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo-lines)" />
  </svg>
);

export default TopoLines;
