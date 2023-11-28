"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react";
import SectionTitle from "../../global-components/section-title";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const FormalInformation = ({ content }) => {
  const {
    formalInformationTitle,
    formalInformationTitle1,
    formalInformationTitle2,
    formalInformationTitle3,
    formalInformationContent1,
    formalInformationContent2,
    formalInformationContent3,
  } = content;

  return (
    <div className="py-6 mx-auto max-w-3xl px-10">
      <SectionTitle>{formalInformationTitle}</SectionTitle>
      <div className="max-w-2xl sm:mx-auto lg:max-w-full">
        <div className="space-y-4">
          {formalInformationTitle1 && (
            <Item title={formalInformationTitle1}>
              {documentToReactComponents(formalInformationContent1)}
            </Item>
          )}
        </div>
        <div className="space-y-4">
          {formalInformationTitle2 && (
            <Item title={formalInformationTitle2}>
              {documentToReactComponents(formalInformationContent2)}
            </Item>
          )}
        </div>
        <div className="space-y-4">
          {formalInformationTitle3 && (
            <Item title={formalInformationTitle3}>
              {documentToReactComponents(formalInformationContent3)}
            </Item>
          )}
        </div>
      </div>
    </div>
  );
};
