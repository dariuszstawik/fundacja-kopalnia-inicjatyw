import { useTranslations } from "next-intl";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import News from "../components/aktualnosci-page/news";

export default function Aktualnosci({ params: { locale } }) {
  const t = useTranslations("News");
  return (
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <section className="flex flex-col gap-16">
        <SectionTitle>{t("title")}</SectionTitle>
        <News locale={locale} more={t("more")} readMore={t("read more")} />
      </section>
    </div>
  );
}
