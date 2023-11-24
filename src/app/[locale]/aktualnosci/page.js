import { client } from "../../../../lib/contentful/client";
import NewsList from "../components/aktualnosci-page/news-list";
import PageHeader from "../components/global-components/page-header";

async function getContentfulContent(locale) {
  const resNews = await client.getEntries({
    content_type: "news",
    locale: locale,
  });

  return resNews.items;
}

export default async function Aktualnosci({ params: { locale } }) {
  const newsPosts = await getContentfulContent(locale);
  return (
    <div>
      <PageHeader>Aktualności</PageHeader>
      <NewsList newsPosts={newsPosts} locale={locale} />
    </div>
  );
}
