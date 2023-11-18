const ArrowLong = ({ isLarge }) => {
  return (
    <svg
      className={`ml-3 inline-block ${isLarge ? "w-6 h-8" : "w-5 h-6"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      ></path>
    </svg>
  );
};

export default ArrowLong;
