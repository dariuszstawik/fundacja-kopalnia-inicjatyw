import { client } from "../../../../../../lib/contentful/client";
import ContactSection from "../contact-section";

async function getContentfulContent(locale) {
  const resContact = await client.getEntries({
    content_type: "contact",
    locale: locale,
  });
  return resContact.items[0];
}

export default async function Contact({ locale, socialTitle }) {
  const contactContent = await getContentfulContent(locale);
  return (
    <section className="pt-8">
      <ContactSection
        title={contactContent.fields.title}
        content={contactContent.fields.paragraph}
        address={contactContent.fields.address}
        addressSecondLine={contactContent.fields.addressSecondLine}
        phoneNumber={contactContent.fields.phone}
        email={contactContent.fields.email}
        img={contactContent.fields.image}
        socialTitle={socialTitle}
      ></ContactSection>
    </section>
  );
}
