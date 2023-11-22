import { useTranslations } from "next-intl";
import ProjectCard from "../../global-components/project-card";
import SectionTitle from "../../global-components/section-title";
import { Fade } from "react-awesome-reveal";

export default function HomepageProjectsSection({ projects }) {
  const t = useTranslations("Projects section");

  return (
    <section className="bg-gray-200 pb-28">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="mt-16 flex justify-center">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <li key={project.sys.id}>
              <ProjectCard
                projectTitle={project.fields.title}
                img={project.fields.firstParagraphImage}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
