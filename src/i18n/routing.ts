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

    "/maya-data/payment-service": {
      en: "/maya-data/payment-service",
      es: "/datos-maya/servicio-de-pago",
      fr: "/donnees-maya/service-de-paiement",
      it: "/dati-maya/servizio-di-pagamento",
      pt: "/dados-maya/servico-de-pagamento",
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

    "/dashboard/data-usage": {
      en: "/dashboard/data-usage",
      es: "/dashboard/uso-datos",
      fr: "/dashboard/utilisation-des-donnees",
      it: "/dashboard/uso-dei-datis",
      pt: "/dashboard/uso-de-dados",
    },

    "/dashboard/my-activity": {
      en: "/dashboard/my-activity",
      es: "/dashboard/mi-actividad",
      fr: "/dashboard/mon-activite",
      it: "/dashboard/la-mia-attivita",
      pt: "/dashboard/minha-atividade",
    },

    "/dashboard/store": {
      en: "/dashboard/store",
      es: "/dashboard/tienda",
      fr: "/dashboard/boutique",
      it: "/dashboard/negozio",
      pt: "/dashboard/loja",
    },

    "/dashboard/my-purchases": {
      en: "/dashboard/my-purchases",
      es: "/dashboard/mis-compras",
      fr: "/dashboard/mes-achats",
      it: "/dashboard/i-miei-acquisti",
      pt: "/dashboard/minhas-compras",
    },
    "/dashboard/admin-account": {
      en: "/dashboard/admin-account",
      es: "/dashboard/cuenta-admin",
      fr: "/dashboard/compte-admin",
      it: "/dashboard/account-admin",
      pt: "/dashboard/conta-admin",
    },
    "/dashboard/config-account": {
      en: "/dashboard/config-account",
      es: "/dashboard/configuracion-cuenta",
      fr: "/dashboard/configuration-compte",
      it: "/dashboard/configurazione-account",
      pt: "/dashboard/configuracao-conta",
    },
    "/distributors": {
      en: "/distributors",
      es: "/distribuidores",
      fr: "/distributeurs",
      it: "/distributori",
      pt: "/distribuidores",
    },
    "/encrypted-test": {
      en: "/encrypted-test",
      es: "/prueba-encriptada",
      fr: "/test-chiffré",
      it: "/test-crittografato",
      pt: "/teste-encriptado",
    },
    "/encrypted-test/[typeOfTest]": {
      en: "/encrypted-test/[typeOfTest]",
      es: "/prueba-encriptada/[typeOfTest]",
      fr: "/test-chiffré/[typeOfTest]",
      it: "/test-crittografato/[typeOfTest]",
      pt: "/teste-encriptado/[typeOfTest]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
