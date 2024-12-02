import { useTranslations } from "next-intl";

// Hook para obtener categorías de productos traducidas
export function useTranslatedProductsCategories(): any {
  const t = useTranslations("productsCategories");

  return [
    {
      title: t("sims.title", { defaultValue: "SIMS" }),
      description: t("sims.description", {
        defaultValue: "Conoce nuestras eSIM/SIM",
      }),
      link: "/sim-encriptada",
      image: "/images/mega-menu/virtual-sim.jpeg",
      items: [
        {
          title: t("sims.items.encryptedSim.title", {
            defaultValue: "SIM Encriptada",
          }),
          link: "/sim-encriptada",
          image: "/images/mega-menu/virtual-sim.jpeg",
          description: t("sims.items.encryptedSim.description", {
            defaultValue: "Conoce cómo funciona la SIM Encriptada",
          }),
        },
        {
          title: t("sims.items.iraSim.title", { defaultValue: "SIM IRA" }),
          link: "/bne-sim",
          image: "/images/mega-menu/virtual-sim.jpeg",
          description: t("sims.items.iraSim.description", {
            defaultValue: "Conoce cómo funciona la SIM IRA",
          }),
        },
        {
          title: t("sims.items.timSim.title", { defaultValue: "SIM TIM" }),
          link: "/datos-maya",
          image: "/images/mega-menu/virtual-sim.jpeg",
          description: t("sims.items.timSim.description", {
            defaultValue: "Conoce cómo funciona la SIM TIM",
          }),
        },
      ],
    },
    {
      title: t("apps.title", { defaultValue: "Aplicaciones" }),
      description: t("apps.description", {
        defaultValue:
          "Productos increíbles, aplicaciones y sistemas con encriptación de inicio a fin",
      }),
      link: "/aplicaciones",
      image: "/images/mega-menu/aplicaciones.jpeg",
      items: [
        {
          title: t("apps.items.silentCircle.title", {
            defaultValue: "Silent Circle",
          }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app1",
          description: t("apps.items.silentCircle.description", {
            defaultValue:
              "Silent Circle es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.armadillo.title", { defaultValue: "Armadillo" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app2",
          description: t("apps.items.armadillo.description", {
            defaultValue: "Armadillo es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.vaultChat.title", { defaultValue: "VaultChat" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app3",
          description: t("apps.items.vaultChat.description", {
            defaultValue: "VaultChat es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.nordVpn.title", { defaultValue: "NORD VPN" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app4",
          description: t("apps.items.nordVpn.description", {
            defaultValue: "NORD VPN es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.salt.title", { defaultValue: "Salt" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app5",
          description: t("apps.items.salt.description", {
            defaultValue: "Salt es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.vnclagoon.title", { defaultValue: "VNClagoon" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app6",
          description: t("apps.items.vnclagoon.description", {
            defaultValue: "VNClagoon es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.threemaWork.title", {
            defaultValue: "ThreemaWork",
          }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app7",
          description: t("apps.items.threemaWork.description", {
            defaultValue: "ThreemaWork es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.threema.title", { defaultValue: "Threema" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app8",
          description: t("apps.items.threema.description", {
            defaultValue: "Threema es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.secureCrypt.title", {
            defaultValue: "SecureCrypt",
          }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app9",
          description: t("apps.items.secureCrypt.description", {
            defaultValue: "SecureCrypt es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("apps.items.elyon.title", { defaultValue: "Elyon" }),
          image: "/images/mega-menu/aplicaciones.jpeg",
          link: "/app10",
          description: t("apps.items.elyon.description", {
            defaultValue: "Elyon es una aplicación de mensajería segura.",
          }),
        },
      ],
    },
    {
      title: t("systems.title", { defaultValue: "Sistemas" }),
      description: t("systems.description", {
        defaultValue: "Sistemas de encriptación de datos",
      }),
      link: "/sistemas",
      image: "/images/mega-menu/sistemas.jpeg",
      items: [
        {
          title: t("systems.items.secureMdmIphone.title", {
            defaultValue: "Secure MDM iPhone",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system1",
          description: t("systems.items.secureMdmIphone.description", {
            defaultValue:
              "Secure MDM iPhone es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.secureMdmAndroid.title", {
            defaultValue: "Secure MDM Android",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system2",
          description: t("systems.items.secureMdmAndroid.description", {
            defaultValue:
              "Secure MDM Android es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.cryptcom.title", {
            defaultValue: "Cryptcom",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system3",
          description: t("systems.items.cryptcom.description", {
            defaultValue: "Cryptcom es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.renati.title", { defaultValue: "Renati" }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system4",
          description: t("systems.items.renati.description", {
            defaultValue: "Renati es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.ultraX.title", { defaultValue: "Ultra X" }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system5",
          description: t("systems.items.ultraX.description", {
            defaultValue: "Ultra X es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.chatMail.title", {
            defaultValue: "ChatMail",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system6",
          description: t("systems.items.chatMail.description", {
            defaultValue: "ChatMail es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.decSecure.title", {
            defaultValue: "DEC Secure",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system7",
          description: t("systems.items.decSecure.description", {
            defaultValue: "DEC Secure es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.totalSec.title", {
            defaultValue: "Total Sec",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system8",
          description: t("systems.items.totalSec.description", {
            defaultValue: "Total Sec es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.armadillo.title", {
            defaultValue: "Armadillo",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system9",
          description: t("systems.items.armadillo.description", {
            defaultValue: "Armadillo es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.vaultChat.title", {
            defaultValue: "VaultChat",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system10",
          description: t("systems.items.vaultChat.description", {
            defaultValue: "VaultChat es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.t2Communicator.title", {
            defaultValue: "T2 Communicator",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system11",
          description: t("systems.items.t2Communicator.description", {
            defaultValue:
              "T2 Communicator es una aplicación de mensajería segura.",
          }),
        },
        {
          title: t("systems.items.intactPhone.title", {
            defaultValue: "Intact Phone",
          }),
          image: "/images/mega-menu/sistemas.jpeg",
          link: "/system12",
          description: t("systems.items.intactPhone.description", {
            defaultValue:
              "Intact Phone es una aplicación de mensajería segura.",
          }),
        },
      ],
    },
  ];
}

// Hook para obtener otras categorías traducidas
export function useTranslatedOthersCategories(): any[] {
  const t2 = useTranslations("othersCategories");

  return [
    {
      title: t2("distributors.title", { defaultValue: "Distribuidores" }),
      description: t2("distributors.description", {
        defaultValue: "Conviértete en distribuidor de nuestros productos",
      }),
      image: "/images/mega-menu/distribuidores.jpeg",
      link: "/distributors",
      items: [],
    },
    {
      title: t2("blog.title", { defaultValue: "Blog" }),
      description: t2("blog.description", {
        defaultValue: "Últimas noticias y actualizaciones",
      }),
      link: "/blog",
      image: "/images/mega-menu/blog.jpeg",
      items: [],
    },
    {
      title: t2("securityTest.title", { defaultValue: "Test de seguridad" }),
      description: t2("securityTest.description", {
        defaultValue: "¿Qué tan seguro son tus dispositivos?",
      }),
      link: "/encrypted-test",
      image: "/images/mega-menu/seguridad.jpeg",
      items: [],
    },
    {
      title: t2("offers.title", { defaultValue: "Ofertas" }),
      description: t2("offers.description", {
        defaultValue: "Descubre nuestras ofertas",
      }),
      link: "/offers",
      image: "/images/mega-menu/ofertas.jpeg",
      items: [],
    },
  ];
}
