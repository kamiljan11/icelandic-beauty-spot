const HotSpring = ({ className = "" }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Steam wisps */}
    <path d="M10 14C10 12 12 11 12 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    <path d="M16 12C16 10 18 9 18 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <path d="M22 14C22 12 20 11 20 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    {/* Pool */}
    <ellipse cx="16" cy="22" rx="10" ry="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <ellipse cx="16" cy="22" rx="6" ry="2.5" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
  </svg>
);

export default HotSpring;
