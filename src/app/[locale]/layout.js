import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "./components/global-components/navbar";
import Footer from "./components/global-components/footer";

const locales = ["en", "pl"];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  const t = useTranslations("Navbar");

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar
          start={t("start")}
          about={t("about")}
          projects={t("projects")}
          getInspired={t("get inspired")}
          news={t("news")}
          contact={t("contact")}
          locale={locale}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
