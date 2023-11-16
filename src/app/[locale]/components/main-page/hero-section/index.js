import Button from "../../global-components/button";

export default function HeroSection() {
  return (
    <section className="heroSection h-screen relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-darkGray before:opacity-70">
      <video autoPlay muted loop className="w-screen object-cover">
        <source src="hero-video5.webm" type="video/webm" />
      </video>
      <div className="absolute bottom-20 left-0 w-full z-20 flex flex-col justify-center items-center">
        <h1
          // className="pl-28 py-4 w-1/3 border-white border-4 border-l-0"
          className="text-center  text-white tracking-[.03em] text-5xl leading-relaxed"
          style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          Organizujemy{" "}
          <span className="block">
            międzynarodowe <span className="">wymiany młodzieżowe</span>
          </span>
          <div className="mt-2 w-96 h-2 ml-auto rounded-sm -rotate-3 bg-primaryBlue" />
        </h1>
        <Button className="text-2xl mt-8">Poznaj nas</Button>
      </div>
    </section>
  );
}
