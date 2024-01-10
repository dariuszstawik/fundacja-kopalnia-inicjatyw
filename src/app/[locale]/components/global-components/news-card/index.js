"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowLong from "../arrow-long";
import { Fade } from "react-awesome-reveal";
import Button from "../button";

const NewsCard = ({ title, slug, img, locale, readMore, isDark }) => {
  return (
    <Fade bottom triggerOnce>
      <div className="max-w-xl mx-auto transition duration-300 transform bg-primaryGray rounded shadow-sm hover:-rotate-1 hover:shadow md:text-center flex">
        <div className=" relative w-1/2">
          <Image
            className="object-cover h-48 rounded-l lg:h-48 xl:h-56"
            src={img ? `https:${img.fields.file.url}` : ""}
            width={img?.fields?.file?.details?.image?.width}
            height={img?.fields?.file?.details?.image?.height}
            alt={img?.fields?.description ? img.fields.description : ""}
          />
          {/* <div className=" h-6 bg-darkGray" /> */}
        </div>
        <div
          className={`w-1/2 flex flex-col justify-between items-start px-6 py-8 ${
            isDark ? "bg-darkGray" : "bg-gray-200"
          }  rounded-r sm:px-8`}
        >
          <div className="flex flex-col justify-start items-start">
            <Link href={`/${locale}/news/${slug}`}>
              <h5 className={`mb-2 text-left ${isDark && "text-white"} `}>
                {title}
              </h5>
            </Link>
          </div>
          <button
            className={`relative  ${
              isDark ? "text-white" : "text-primaryBlue"
            } text-sm md:text-base before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left ${
              isDark ? "before:scale-x-100" : "before:scale-x-0"
            } before:bg-primaryBlue before:transition hover:before:scale-100`}
          >
            <Link
              href={`/${locale}/news/${slug}`}
              // className={`${isBlue ? "text-primaryBlue" : ""}`}
            >
              {readMore}
              <ArrowLong />
            </Link>
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default NewsCard;
