import { client } from "../../../../../../lib/contentful/client";
import NewsList from "../news-list";

async function getContentfulContent(locale) {
  const resNews = await client.getEntries({
    content_type: "news",
    locale: locale,
  });

  return resNews.items;
}

export default async function News({ locale, more, readMore }) {
  const newsPosts = await getContentfulContent(locale);
  return (
    <div>
      <NewsList
        newsPosts={newsPosts}
        locale={locale}
        more={more}
        readMore={readMore}
      />
    </div>
  );
}
