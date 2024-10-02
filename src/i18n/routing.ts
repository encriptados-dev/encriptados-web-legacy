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

    "/encrypted-phones-distributors": {
      en: "/encrypted-phones-distributors",
      es: "/celulares-encriptados-distribuidores",
      fr: "/distributeurs-telephones-cryptees",
      it: "/distributori-telefoni-crittografati",
      pt: "/distribuidores-de-telefones-encriptados",
    },

    "/maya-data": {
      en: "/maya-data",
      es: "/datos-maya",
      fr: "/donnees-maya",
      it: "/dati-maya",
      pt: "/dados-maya",
    },

    "/where-to-find-encrypted": {
      en: "/where-to-find-encrypted",
      es: "/donde-encontrar-encriptados",
      fr: "/ou-trouver-cryptees",
      it: "/dove-trovare-crittografati",
      pt: "/onde-encontrar-encriptados",
    },

    "/about-us": {
      en: "/about-us",
      es: "/nosotros",
      fr: "/a-propos-de-nous",
      it: "/chi-siamo",
      pt: "/sobre-nos",
    },

    "/news": {
      en: "/news",
      es: "/noticias",
      fr: "/nouvelles",
      it: "/notizie",
      pt: "/noticias",
    },

    "/offers": {
      en: "/offers",
      es: "/ofertas",
      fr: "/offres",
      it: "/offerte",
      pt: "/ofertas",
    },

    "/become-encrypted-partner": {
      en: "/become-encrypted-partner",
      es: "/se-socio-de-encriptados",
      fr: "/devenir-partenaire-crypte",
      it: "/diventa-partner-crittografato",
      pt: "/seja-socio-de-encriptados",
    },

    "/encrypted-sim": {
      en: "/encrypted-sim",
      es: "/sim-encriptada",
      fr: "/sim-cryptee",
      it: "/sim-crittografata",
      pt: "/sim-encriptada",
    },

    "/security-test": {
      en: "/security-test",
      es: "/test-de-seguridad",
      fr: "/test-de-securite",
      it: "/test-di-sicurezza",
      pt: "/teste-de-seguranca",
    },

    "/identity-verification": {
      en: "/identity-verification",
      es: "/verificacion-de-identidad",
      fr: "/verification-didentite",
      it: "/verifica-dellidentita",
      pt: "/verificacao-de-identidade",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
