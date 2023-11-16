import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ title, slug, img, locale }) => {
  return (
    <div className="max-w-xl mx-auto transition duration-300 transform bg-primaryGray border rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center flex">
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
      <div className="w-1/2 flex flex-col justify-between items-start px-6 py-8 bg-gray-200 rounded-b sm:px-8">
        <div className="flex flex-col justify-start items-start">
          <h5 className="mb-2 text-xl text-left leading-none sm:text-2xl">
            {title}
          </h5>
        </div>
        {/* <button className="relative text-primaryBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
          {" "}
          <Link href={`/${locale}/news/${slug}`}>
            read more
            <ArrowLong />
          </Link>
        </button> */}
      </div>
    </div>
  );
};

export default NewsCard;
