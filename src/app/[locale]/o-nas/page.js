import { useTranslations } from "next-intl";
import PageHeader from "../components/global-components/page-header";
import About from "../components/o-nas-page/about";

export default function oNas({ params: { locale } }) {
  const t = useTranslations("About");

  return (
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <About locale={locale} />
    </div>
  );
}
