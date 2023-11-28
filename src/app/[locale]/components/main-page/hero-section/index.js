import { useTranslations } from "next-intl";
import Button from "../../global-components/button";
import Link from "next/link";

export default function HeroSection({ locale }) {
  const t = useTranslations("Hero section");
  return (
    <section className="xl:h-screen relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-darkGray before:opacity-70">
      <video
        autoPlay
        muted
        loop
        className="min-h-[600px] xl:h-screen object-cover"
      >
        <source src="hero-video5.webm" type="video/webm" />
      </video>
      <div className="absolute bottom-20 left-0 w-full z-20 flex flex-col justify-center items-center">
        <h1
          className="text-center text-white tracking-[.03em] leading-relaxed lg:leading-relaxed xl:leading-relaxed text-3xl lg:text-4xl xl:text-5xl"
          style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          {t("title")}
          <span className="block">
            {t("subtitle")}{" "}
            <span className="">{t("subtitle-highlighted")}</span>
          </span>
          <div className="my-2 w-1/2 xl:w-[600px] h-2 mx-auto xl:mr-0 xl:ml-auto rounded-sm -rotate-1 bg-primaryBlue" />
        </h1>
        <Button className="text-2xl mt-8">
          <Link href={`/${locale}/o-nas`}> {t("button")} </Link>
        </Button>
      </div>
    </section>
  );
}
