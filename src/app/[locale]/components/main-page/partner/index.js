// "use client";

export default function Partner({ logo, logoLink }) {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
      <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md ">
        <a href={logoLink ? logoLink : ""} target="_blank">
          <img
            className="mx-auto"
            src={`https://${logo.fields.file.url}`}
            alt={logo.fields.description}
            width={logo.fields.file.details.image.width}
            height={logo.fields.file.details.image.height}
          />
        </a>
      </div>
    </div>
  );
}
