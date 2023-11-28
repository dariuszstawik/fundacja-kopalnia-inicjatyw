import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../../../../../lib/contentful/client";
import ParagraphWithImageOnTheLeft from "../../global-components/paragraph-with-image-on-the-left";
import ParagraphWithImageOnTheRight from "../../global-components/paragraph-with-image-on-the-right";
import { FormalInformation } from "../formal-information";

async function getContentfulContent(locale) {
  const resAbout = await client.getEntries({
    content_type: "about",
    locale: locale,
  });

  return resAbout.items;
}

export default async function About({ locale }) {
  const about = (await getContentfulContent(locale))[0].fields;
  return (
    <div>
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
