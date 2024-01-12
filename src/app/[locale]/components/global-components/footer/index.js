import Link from "next/link";
import Logo from "../Logo-dark";
import { useTranslations } from "next-intl";
import LogoDark from "../Logo-dark";
import { client } from "../../../../../../lib/contentful/client";

async function getContentfulContent(locale) {
  const resContact = await client.getEntries({
    content_type: "contact",
    locale: locale,
  });
  return resContact.items[0];
}

export default async function Footer({ about, office, contact, locale }) {
  // const t = useTranslations("Footer");
  const contactContent = await getContentfulContent(locale);
  return (
    <div>
      <section className="relative bg-darkGray mt-32 text-white h-auto mb-0">
        <div className="pb-12 pt-0">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap mb-6 xl:mb-10">
              <div className="mb-auto mr-4 w-full xl:w-1/4">
                <LogoDark className="mt-4 w-64" />
              </div>
              <div className="mb-5 w-full xl:w-1/5">
                <h4 className="mb-2">Fundacja Kopalnia Inicjatyw</h4>
                <p>{about}</p>
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
              <div className="w-full xl:w-1/2 flex flex-wrap -mx-3 justify-end">
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 xl:mr-6 px-3">
                  <h5 className="mb-4 font-bold">{office}</h5>
                  <p className="leading-loose my-0">
                    {contactContent.fields.address}
                  </p>
                  <p className="leading-loose my-0">
                    {contactContent.fields.addressSecondLine}
                  </p>
                </div>
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 px-3">
                  <h5 className="mb-4 font-bold">{contact}</h5>
                  <p className="leading-loose my-0">
                    {contactContent.fields.email}
                  </p>
                  <p className="leading-loose my-0">
                    {contactContent.fields.phone}
                  </p>
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
