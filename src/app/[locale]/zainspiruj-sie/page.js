import { useTranslations } from "next-intl";
import PageHeader from "../components/global-components/page-header";
import GetInspired from "../components/zainspiruj-sie-page/get-inspired";

export default function ZainspirujSie({ params: { locale } }) {
  const t = useTranslations("Get inspired");

  return (
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <GetInspired video={t("video")} eBooks={t("e-books")} />
    </div>
  );
}
