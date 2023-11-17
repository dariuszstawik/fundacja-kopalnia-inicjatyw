import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["pl", "en"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
