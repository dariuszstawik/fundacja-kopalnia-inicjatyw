import { client } from "../../../../../../lib/contentful/client";
import SectionTitle from "../../global-components/section-title";
import VideoPlayer from "../../global-components/video-player";

async function getContentfulGetInspired(locale) {
  const resGetInspired = await client.getEntries({
    content_type: "getInspiredYoutube",
    locale: locale,
  });
  return resGetInspired.items;
}

export default async function GetInspired({ video }) {
  const getInspiredContent = await getContentfulGetInspired();
  return (
    <section className="flex flex-col gap-16">
      <SectionTitle>{video}</SectionTitle>
      <ul className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-16 list-none">
        {getInspiredContent.map((item) => (
          <li key={item.fields.youtubeLink}>
            <VideoPlayer link={item.fields.youtubeLink} />
          </li>
        ))}
      </ul>
    </section>
  );
}
