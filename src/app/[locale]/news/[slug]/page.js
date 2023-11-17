import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../../../../lib/contentful/client";
import SingleArticle from "../../components/global-components/single-article";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "news" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

async function getContentfulNewsPosts(slug, locale) {
  const resNewsPosts = await client.getEntries({
    content_type: "news",
    "fields.slug": slug,
    locale: locale,
  });

  return resNewsPosts.items[0];
}

export default async function NewsPost({ params }) {
  const { slug, locale } = params;

  const newsPost = await getContentfulNewsPosts(slug, locale);

  return (
    <>
      <div>
        <SingleArticle
          title={newsPost.fields.title}
          lead={newsPost.fields.lead}
          content={documentToReactComponents(newsPost.fields.content)}
          img={newsPost.fields.image ? newsPost.fields.image : ""}
        ></SingleArticle>
      </div>
    </>
  );
}
