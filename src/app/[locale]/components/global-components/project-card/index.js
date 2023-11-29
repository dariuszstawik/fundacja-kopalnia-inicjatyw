"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ArrowLong from "../arrow-long";

export default function ProjectCard({ projectTitle, img, slug, locale }) {
  return (
    <Fade direction="bottom" delay="50" triggerOnce>
      <Link href={`/${locale}/projekty/${slug}`}>
        <div className="flex flex-col gap-8 transition duration-300 hover:-rotate-1">
          <img
            src={img?.fields.file.url ? img.fields.file.url : ""}
            alt={
              img?.fields.file.description ? img.fields.file.description : ""
            }
            className="rounded-md"
            style={{
              clipPath:
                "polygon(66% 0, 88% 21%, 100% 65%, 81% 100%, 20% 100%, 0 64%, 22% 14%)",
              width: "400px",
              height: "300px",
              objectFit: "cover",
              borderBottom: "16px solid #09888f",
            }}
          />
          <h4 className="text-center">
            {projectTitle}
            <div className="mt-2 w-28 h-1 mx-auto rounded-sm -rotate-3 bg-primaryBlue" />
          </h4>
        </div>
      </Link>
    </Fade>
  );
}
