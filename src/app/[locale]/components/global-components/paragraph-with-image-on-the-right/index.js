"use client";

import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ParagraphWithImageOnTheRight({
  title,
  children,
  img,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div
      className={`w-full px-10 lg:px-20 py-16 flex flex-col lg:flex-row-reverse`}
    >
      <Slide
        direction="right"
        delay={600}
        triggerOnce
        className="flex justify-center items-start"
      >
        <div
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
            style={{ width: "600px", height: "440px", objectFit: "cover" }}
          />
        </div>
      </Slide>
      <div className="mx-10 lg:ml-24 lg:mr-32 flex flex-col gap-2 text-lg">
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
