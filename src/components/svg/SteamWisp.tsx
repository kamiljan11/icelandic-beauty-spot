const SteamWisp = ({ className = "" }: { className?: string }) => (
  <svg
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 16C10 16 10 8 20 8C30 8 30 24 40 24C50 24 50 4 60 4C70 4 70 28 80 28C90 28 90 12 100 12C110 12 110 16 120 16"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.15"
      strokeLinecap="round"
    />
  </svg>
);

export default SteamWisp;
