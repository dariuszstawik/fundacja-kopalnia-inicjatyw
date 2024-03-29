import { useTranslations } from "next-intl";
import ProjectCard from "../../global-components/project-card";
import SectionTitle from "../../global-components/section-title";

export default function HomepageProjectsSection({ projects, locale, isDark }) {
  const t = useTranslations("Projects section");

  return (
    <section className={`${isDark ? "bg-darkGray" : "bg-gray-200"} pb-28`}>
      <SectionTitle isWhite={isDark}>{t("title")}</SectionTitle>
      <div className="mt-16 flex justify-center">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12 list-none">
          {projects.slice(0, 3).map((project) => (
            <li key={project.sys.id}>
              <ProjectCard
                projectTitle={project.fields.title}
                img={project.fields.firstParagraphImage}
                slug={project.fields.slug}
                locale={locale}
                isWhite={isDark}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
