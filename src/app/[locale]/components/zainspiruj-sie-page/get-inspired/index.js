import SectionTitle from "../../global-components/section-title";
import VideoPlayer from "../../global-components/video-player";

export default function GetInspired({ video, eBooks }) {
  return (
    <section className="flex flex-col gap-16">
      <SectionTitle>{video}</SectionTitle>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-16">
        <VideoPlayer link="https://youtu.be/zWAYrac70vI?si=sf-23GQo2iBoKa9e" />
        <VideoPlayer link="https://youtu.be/aJLF8d7q39A?si=43IXCkUnqtqQ4iPs" />
        <VideoPlayer link="https://youtu.be/ARJvbfE0Uf0?si=jtCyQq5ODdOgYyMN" />
        <VideoPlayer link="https://youtu.be/Y4rprLeYxAE?si=dYQ9rUe7KIHAvGZg" />
      </div>
    </section>
  );
}
