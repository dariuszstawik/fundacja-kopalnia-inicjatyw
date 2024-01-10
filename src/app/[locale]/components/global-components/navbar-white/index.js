"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Logo from "../Logo";
import Hamburger from "../hamburger";
import LocaleSwitcher from "../locale-switcher";

const NavbarWhite = ({
  isActive,
  locale,
  start,
  about,
  projects,
  getInspired,
  news,
  contact,
}) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <div className="text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-16 py-4 bg-gray-200 top-0 left-0 z-50 border-t-8 border-t-darkGray">
      <Logo closeMobileMenu={closeMobileMenu} onClick={handleRefresh} />
      <div className="pl-16 w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? " list-none absolute z-40 w-screen top-full left-0 bg-darkGray py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
              : " list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          <li
            onClick={closeMobileMenu}
            className="text-lg  hover:text-slate-500 cursor-pointer"
          >
            <Link
              href="/"
              className={`${isActive && "text-primaryBlue"}`}
              onClick={handleRefresh}
            >
              {start}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg  hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/o-nas`}
              className={`${isActive && "text-primaryBlue"}`}
            >
              {about}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg  hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/projekty`}
              className={`${isActive && "text-primaryBlue"}`}
            >
              {projects}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg  hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/zainspiruj-sie`}
              className={`${isActive && "text-primaryBlue"}`}
            >
              {getInspired}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg  hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/aktualnosci`}
              className={`${isActive && "text-primaryGreen"}`}
            >
              {news}
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link
              href={`/${locale}/kontakt`}
              className={`${isActive && "text-primaryGreen"}`}
            >
              {contact}
            </Link>
          </li>
        </ul>

        <LocaleSwitcher />

        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default NavbarWhite;
