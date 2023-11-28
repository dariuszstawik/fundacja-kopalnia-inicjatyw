"use client";
import { useState } from "react";
import SectionTitle from "../../global-components/section-title";
import ProjectCard from "../../global-components/project-card";
import Button from "../../global-components/button";

export default function ProjectsList({ projects, locale }) {
  const [maxAmount, setMaxAmount] = useState(6);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 6);
  };

  const projectsList = (projectsAmount) => {
    return (
      <>
        {projects &&
          projects.projects.slice(0, projectsAmount).map((item, i) => {
            return (
              <li key={i} className="mx-auto">
                <ProjectCard
                  projectTitle={item.fields.title}
                  slug={item.fields.slug}
                  img={
                    item.fields.firstParagraphImage
                      ? item.fields.firstParagraphImage
                      : ""
                  }
                  locale={locale}
                />
              </li>
            );
          })}
      </>
    );
  };

  return (
    <div className="">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12 list-none">
        {projectsList(maxAmount)}
      </ul>
      <div className="flex justify-center m-16">
        {maxAmount < projects.projects.length && (
          <Button onClick={increaseMaxAmount}>Załaduj więcej</Button>
        )}
      </div>
    </div>
  );
}
