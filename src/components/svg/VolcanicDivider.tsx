const VolcanicDivider = ({ className = "" }: { className?: string }) => (
  <svg
    width="200"
    height="16"
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <line x1="0" y1="8" x2="85" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="92" cy="8" r="1.5" fill="currentColor" opacity="0.25" />
    <circle cx="100" cy="8" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="108" cy="8" r="1.5" fill="currentColor" opacity="0.25" />
    <line x1="115" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

export default VolcanicDivider;
