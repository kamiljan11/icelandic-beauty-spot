const LeafAccent = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    width="24"
    height="40"
    viewBox="0 0 24 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    <path
      d="M12 2C12 2 4 10 4 22C4 30 8 36 12 38C16 36 20 30 20 22C20 10 12 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M12 8V34"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.2"
    />
    <path
      d="M12 14C9 16 7 19 6.5 22"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.15"
    />
    <path
      d="M12 18C15 20 17 23 17.5 26"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.15"
    />
  </svg>
);

export default LeafAccent;
