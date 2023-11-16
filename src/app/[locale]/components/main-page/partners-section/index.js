// "use client";

import SectionTitle from "../../global-components/section-title";
import Partner from "../partner";

export default function PartnersSection({ partners }) {
  console.log("-----------");
  console.log(partners);

  return (
    <section>
      <SectionTitle>Współpraca</SectionTitle>
      <div className="flex flex-wrap justify-center -mx-4 my-16">
        {partners.map((item, i) => {
          return (
            <Partner
              key={i}
              logo={item.fields.logo}
              logoLink={item.fields.logoLink ? item.fields.logoLink : ""}
            />
          );
        })}
      </div>
    </section>
  );
}
