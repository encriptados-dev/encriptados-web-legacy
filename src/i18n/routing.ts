import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "it", "pt"],
  defaultLocale: "es",
  pathnames: {
    "/": "/",

    "/fast-delivery": {
      en: "/fast-delivery",
      es: "/entrega-rapida",
      fr: "/livraison-rapide",
      it: "/consegna-rapida",
      pt: "/entrega-rapida",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
