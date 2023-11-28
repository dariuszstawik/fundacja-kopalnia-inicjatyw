import { useTranslations } from "next-intl";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Projects from "../components/projekty-page/Projects";

export default function Projekty({ params: { locale } }) {
  const t = useTranslations("Projects");
  return (
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <section className="flex flex-col gap-16">
        <SectionTitle>{t("title")}</SectionTitle>
        <Projects locale={locale} />
      </section>
    </div>
  );
}
