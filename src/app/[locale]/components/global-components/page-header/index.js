const PageHeader = ({ children }) => {
  return (
    <div
      className="mt-28 relative w-screen px-32 py-40 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-darkGray after:opacity-50"
      style={{
        backgroundImage: 'url("/group22.jpg")',
        backgroundPosition: "top",
      }}
    >
      <h1 className="text-4xl lg:text-5xl text-white z-20">{children}</h1>
    </div>
  );
};

export default PageHeader;

{
  /* <div
      className="mt-28 relative w-screen px-32 py-40 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-darkGray"
      style={{
        backgroundImage: 'url("/group22.jpg")',
        backgroundPosition: "top",
      }}
    ></div> */
}
