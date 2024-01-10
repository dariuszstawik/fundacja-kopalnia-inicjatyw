import Link from "next/link";
import Logo from "../Logo-dark";
import { useTranslations } from "next-intl";
import LogoDark from "../Logo-dark";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div>
      <section className="relative bg-darkGray mt-32 text-white h-auto mb-0">
        <div className="pb-12 pt-0">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap mb-6 lg:mb-10">
              <div className="mb-auto w-full lg:w-1/5">
                <LogoDark className="mt-4 w-64" />
              </div>
              <div className="mb-5 w-full lg:w-1/5">
                <h4 className="mb-2">Fundacja Kopalnia Inicjatyw</h4>
                <p>{t("about")}</p>
                <div className="flex gap-8 mt-6">
                  <a href="https://www.facebook.com/kopalnia" target="_blank">
                    <img src="/facebook.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.youtube.com/@fundacjakopalniainicjatyw5380"
                    target="_blank"
                  >
                    <img src="/youtube.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.flickr.com/photos/153333342@N06/"
                    target="_blank"
                  >
                    <img src="/flickr.png" className="w-8" />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
                <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                  <h5 className="mb-4 font-bold">{t("office")}</h5>
                  <p className="leading-loose my-0">ul. 15 Grudnia 3/26</p>
                  <p className="leading-loose my-0">42-500 Będzin</p>
                </div>
                <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                  <h5 className="mb-4 font-bold">{t("contact")}</h5>
                  <p className="leading-loose my-0">info.kopalnia@gmail.com</p>
                  <p className="leading-loose my-0">tel. 660 461 849</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen flex-col justify-center items-center bg-gray-200 mt-1 py-8">
        <p className="text-sm mx-auto text-center mb-2">
          © 2023. Fundacja Kopalnia Inicjatyw. All rights reserved.
        </p>

        <p className="text-sm mx-auto text-center mb-2">
          <Link href="/">polityka prywatności</Link>
        </p>

        <p className="text-sm mx-auto text-center">
          Created by{" "}
          <a
            href="https://stronyjaksiepatrzy.pl"
            target="_blank"
            className="text-primaryBlue"
          >
            Strony jak się patrzy
          </a>
        </p>
      </div>
    </div>
  );
}
