// import createMiddleware from "next-intl/middleware";
// import { locales } from "./navigation";

// export default createMiddleware({
//   defaultLocale: "pl",
//   locales,
// });

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["pl", "en"],

  defaultLocale: "pl",
});

export const config = {
  matcher: ["/", "/(en|pl)/:path*"],
};
