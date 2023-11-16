"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Link from "next/link";
import Button from "../button";

export default function ParagraphWithImageOnTheLeft({
  title,
  children,
  img,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div className={`w-full py-16 flex flex-col lg:flex-row`}>
      <Slide
        direction="left"
        delay={600}
        triggerOnce
        className="w-1/2 h-full flex justify-center items-start"
      >
        <div
          className=""
          style={{
            clipPath:
              "polygon(66% 0, 88% 21%, 100% 65%, 81% 100%, 20% 100%, 0 64%, 22% 14% )",
            width: "600px",
            height: "440px",
          }}
        >
          <img
            src={img?.fields.file.url ? img.fields.file.url : ""}
            alt={
              img?.fields.file.description ? img.fields.file.description : ""
            }
            className="rounded-md"
          />
        </div>
      </Slide>
      <div className="w-1/2 ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        {buttonTitle && (
          <Button className="mr-auto mt-6">
            <Link href="/">{buttonTitle}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
