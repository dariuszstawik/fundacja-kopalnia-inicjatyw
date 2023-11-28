import { client } from "../../../../../../lib/contentful/client";
import ProjectsList from "../projects-list";

async function getContentfulContent(locale) {
  const resProjects = await client.getEntries({
    content_type: "project",
    locale: locale,
  });

  return {
    projects: resProjects.items,
  };
}

export default async function Projects({ locale }) {
  const projects = await getContentfulContent(locale);
  return (
    <div className="flex justify-center">
      <ProjectsList projects={projects} locale={locale} />
    </div>
  );
}
