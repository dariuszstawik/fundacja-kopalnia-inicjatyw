import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  return (
    <>
      <div>
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}
