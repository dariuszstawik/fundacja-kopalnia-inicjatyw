import { useTranslations } from "next-intl";
import NewsCard from "../../global-components/news-card";
import SectionTitle from "../../global-components/section-title";

export default function ProjectNewsList({ newsPosts, locale, category }) {
  const t = useTranslations("News section");
  const filteredNewsPosts = newsPosts.filter(
    (item) => item.fields.category === category
  );
  const newsList = (newsAmount) => {
    return (
      filteredNewsPosts &&
      filteredNewsPosts.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              isBlue
              title={item.fields.title}
              slug={item.fields.slug}
              img={item.fields.image ? item.fields.image : ""}
              locale={locale}
              readMore={t("read more")}
              isDark
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <>
      {filteredNewsPosts.length && (
        <section className="bg-gray-200 pb-20">
          <SectionTitle>{t("title")} </SectionTitle>
          <ul className="grid grid-cols-1 gap-8 xl:grid-cols-2 mx-auto px-10 xl:px-28 mt-16 list-none">
            {newsList(6)}
          </ul>
        </section>
      )}
    </>
  );
}
