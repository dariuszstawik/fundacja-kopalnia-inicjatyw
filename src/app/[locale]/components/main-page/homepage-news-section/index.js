import { useTranslations } from "next-intl";
import NewsCard from "../../global-components/news-card";
import SectionTitle from "../../global-components/section-title";

export default function HomepageNewsSection({
  newsPosts,
  locale,
  isGray,
  isDark,
}) {
  const t = useTranslations("News section");
  const newsList = (newsAmount) => {
    return (
      newsPosts &&
      newsPosts.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              title={item.fields.title}
              slug={item.fields.slug}
              img={item.fields.image ? item.fields.image : ""}
              locale={locale}
              readMore={t("read more")}
              isDark={isDark}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <section className={`${isGray ? "bg-gray-200" : ""}`}>
      <SectionTitle>{t("title")} </SectionTitle>
      <ul className="grid grid-cols-1 gap-8 xl:grid-cols-2 mx-auto px-10 xl:px-28 mt-16 list-none">
        {newsList(4)}
      </ul>
    </section>
  );
}
