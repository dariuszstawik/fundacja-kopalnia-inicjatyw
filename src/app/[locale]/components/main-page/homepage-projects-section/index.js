import ProjectCard from "../../global-components/project-card";
import SectionTitle from "../../global-components/section-title";

export default function HomepageProjectsSection({ projects }) {
  // console.log(projects);
  // console.log(projects[0].fields.title);
  return (
    <section className="bg-gray-200 pb-28">
      <SectionTitle>Ostatnie projekty</SectionTitle>
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
