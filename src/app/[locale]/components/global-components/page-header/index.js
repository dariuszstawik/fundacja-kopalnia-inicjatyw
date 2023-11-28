const PageHeader = ({ children }) => {
  return (
    <div
      className="mt-28 relative w-screen px-32 py-40 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-darkGray after:opacity-50"
      style={{
        backgroundImage: 'url("/group22.jpg")',
        backgroundPosition: "top",
      }}
    >
      <h1
        className="tracking-[.03em] leading-relaxed text-4xl lg:text-5xl text-white z-20"
        style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        {children}
      </h1>
    </div>
  );
};

export default PageHeader;
