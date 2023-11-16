export default function SectionTitle({ children, isWhite, isAlignedLeft }) {
  return (
    <div
      className={`my-6 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      {/* <p className={`${isWhite ? "text-white" : "text-darkGray"} text-lg my-0`}>
        Green Leaf Power
      </p> */}
      <h2
        className={`${isAlignedLeft ? "text-left" : "text-center"} ${
          isWhite && "text-white"
        }`}
      >
        {" "}
        {children}
      </h2>
      <div
        className={`mt-2 w-28 h-1 rounded-sm -rotate-3 ${
          isWhite ? "bg-primaryBlue" : "bg-primaryBlue"
        }`}
      />
    </div>
  );
}
