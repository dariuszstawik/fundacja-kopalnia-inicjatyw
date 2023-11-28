"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";
import AddressIcon from "../address-icon";
import PhoneIcon from "../phone-icon";
import EmailIcon from "../email-icon";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ContactSection({
  title,
  address,
  phoneNumber,
  email,
  content,
  img,
  socialTitle,
}) {
  return (
    <div className="w-full px-10 lg:px-20 flex flex-col lg:flex-row-reverse">
      <Slide
        direction="right"
        delay={200}
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
        <div className="flex flex-col gap-4 my-6">
          <div className="mb-2">{documentToReactComponents(content)}</div>
          <p className="my-0">
            <AddressIcon />
            {address}
          </p>
          <p className="my-0">
            <PhoneIcon />
            {phoneNumber}
          </p>
          <p className="my-0">
            <EmailIcon />
            {email}
          </p>
          <div className="mt-2">
            <p>{socialTitle}</p>
            <div className="flex gap-8 mt-6">
              <a href="https://www.facebook.com/kopalnia">
                <img src="/facebook.svg" className="w-8" />
              </a>
              <a href="https://www.youtube.com/@fundacjakopalniainicjatyw5380">
                <img src="/youtube.svg" className="w-8" />
              </a>
              <a href="https://www.flickr.com/photos/153333342@N06/">
                <img src="/flickr.svg" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
