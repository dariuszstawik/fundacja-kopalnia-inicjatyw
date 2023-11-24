import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../../../lib/contentful/client";
import ParagraphWithImageOnTheLeft from "../components/global-components/paragraph-with-image-on-the-left";
import ParagraphWithImageOnTheRight from "../components/global-components/paragraph-with-image-on-the-right";
import PageHeader from "../components/global-components/page-header";
import { FormalInformation } from "../components/o-nas-page/formal-information";

async function getContentfulContent(locale) {
  const resAbout = await client.getEntries({
    content_type: "about",
    locale: locale,
  });

  return resAbout.items;
}

export default async function oNas({ params: { locale } }) {
  const about = (await getContentfulContent(locale))[0].fields;
  return (
    <div>
      <PageHeader>O nas</PageHeader>
      {about.firstParagraphContent && (
        <ParagraphWithImageOnTheLeft
          title={about.firstParagraphTitle}
          img={about.firstParagraphImage}
        >
          {documentToReactComponents(about.firstParagraphContent)}
        </ParagraphWithImageOnTheLeft>
      )}
      {about.secondParagraphContent && (
        <div className="bg-gray-200">
          <ParagraphWithImageOnTheRight
            title={about.secondParagraphTitle}
            img={about.secondParagraphImage}
          >
            {" "}
            {documentToReactComponents(about.secondParagraphContent)}
          </ParagraphWithImageOnTheRight>
        </div>
      )}
      {about.thridParagraphContent && (
        <ParagraphWithImageOnTheLeft
          title={about.firstParagraphTitle}
          img={about.firstParagraphImage}
        >
          {documentToReactComponents(about.thridParagraphContent)}
        </ParagraphWithImageOnTheLeft>
      )}

      <FormalInformation content={about} />
    </div>
  );
}
