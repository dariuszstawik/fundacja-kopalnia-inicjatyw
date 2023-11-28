import { useTranslations } from "next-intl";
import PageHeader from "../components/global-components/page-header";
import Contact from "../components/kontakt-page/contact";

export default function Kontakt({ params: { locale } }) {
  const t = useTranslations("Contact");

  return (
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <section className="mx-auto flex justify-center items-center">
        <Contact locale={locale} socialTitle={t("social title")} />
      </section>
    </div>
  );
}
