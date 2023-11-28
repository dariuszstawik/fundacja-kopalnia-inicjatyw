import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../../../../lib/contentful/client";
import ParagraphWithImageOnTheRight from "../../components/global-components/paragraph-with-image-on-the-right";
import PageHeader from "../../components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "../../components/global-components/paragraph-with-image-on-the-left";
import ProjectNewsList from "../../components/projekty-page/project-news-list";
import ImageGallery from "../../components/global-components/image-gallery";
import SectionTitle from "../../components/global-components/section-title";

async function getContntfulContent(slug, locale) {
  const res = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
    locale: locale,
  });
  return res.items[0];
}

async function getContentfulNewsPosts(locale) {
  const res = await client.getEntries({
    content_type: "news",
    locale: locale,
  });
  return res.items;
}

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "project" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Project({ params }) {
  const { slug, locale } = params;
  const project = await getContntfulContent(slug, locale);
  const newsPosts = await getContentfulNewsPosts(locale);

  return (
    <div>
      <PageHeader>{project.fields.title}</PageHeader>

      {project.fields.firstParagraphContent && (
        <ParagraphWithImageOnTheRight
          title={project.fields.firstParagraphTitle}
          img={project.fields.firstParagraphImage}
        >
          {documentToReactComponents(project.fields.firstParagraphContent)}
        </ParagraphWithImageOnTheRight>
      )}

      {project.fields.secondParagraphContent && (
        <ParagraphWithImageOnTheLeft
          title={project.fields.secondParagraphTitle}
          img={project.fields.secondParagraphImage}
        >
          {documentToReactComponents(project.fields.secondParagraphContent)}
        </ParagraphWithImageOnTheLeft>
      )}

      <ProjectNewsList
        newsPosts={newsPosts}
        locale={locale}
        category={project.fields.category}
      />

      {project.fields.gallery && (
        <section className="px-10 lg:px-40">
          <SectionTitle>{locale === "en" ? "Gallery" : "Galeria"}</SectionTitle>
          <ImageGallery gallery={project.fields.gallery} />
        </section>
      )}
    </div>
  );
}
