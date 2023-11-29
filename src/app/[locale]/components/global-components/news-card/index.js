"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowLong from "../arrow-long";
import { Fade } from "react-awesome-reveal";

const NewsCard = ({ title, slug, img, locale, readMore, isBlue }) => {
  return (
    <Fade bottom triggerOnce>
      <div className="max-w-xl mx-auto transition duration-300 transform bg-primaryGray border rounded shadow-sm hover:-rotate-1 hover:shadow md:text-center flex">
        <div className=" relative w-1/2">
          <Image
            className="object-cover h-48 rounded-t lg:h-48 xl:h-56"
            src={img ? `https:${img.fields.file.url}` : ""}
            width={img?.fields?.file?.details?.image?.width}
            height={img?.fields?.file?.details?.image?.height}
            alt={img?.fields?.description ? img.fields.description : ""}
          />
          <div className=" h-6 bg-primaryBlue" />
        </div>
        <div
          className={`w-1/2 flex flex-col justify-between items-start px-6 py-8 ${
            isBlue ? "bg-primaryBlue" : "bg-gray-200"
          }  rounded-b sm:px-8`}
        >
          <div className="flex flex-col justify-start items-start">
            <Link href={`/${locale}/news/${slug}`}>
              <h4 className={`mb-2 text-left ${isBlue && "text-white"} `}>
                {title}
              </h4>
            </Link>
          </div>
          <button
            className={`relative  ${
              isBlue ? "text-white" : "text-primaryBlue"
            } text-sm md:text-base before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primaryBlue before:transition hover:before:scale-100`}
          >
            <Link href={`/${locale}/news/${slug}`}>
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
