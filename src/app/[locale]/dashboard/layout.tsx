"use client";
import {
  Home,
  ShoppingCart,
  Settings,
  Activity,
  CreditCard,
  UserCheck,
} from "lucide-react";

import ProfileSvg from "@/shared/svgs/ProfileSvg";
import { ReactNode, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

import { useLocale } from "next-intl";

interface MenuItem {
  icon: ReactNode;
  label: string;
  link: { [key: string]: string }; // Cambiado para tener links por idioma
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const language = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname(); // Obtener la ruta actual

  const pathFormat = pathName.replace(/^\/[a-z]{2}/, "");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathName]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const t = useTranslations("DashboardPage");

  const menuItems: MenuItem[] = [
    {
      icon: <Home size={20} />,
      label: t("menuDashboard.items.mySimConsume"),
      link: {
        es: "/dashboard/uso-datos",
        en: "/dashboard/data-usage",
        fr: "/dashboard/utilisation-des-donnees",
        it: "/dashboard/uso-dei-datis",
        pt: "/dashboard/uso-de-dados",
      },
    },
    {
      icon: <Activity size={20} />,
      label: t("menuDashboard.items.myActivities"),
      link: {
        es: "/dashboard/mi-actividad",
        en: "/dashboard/my-activity",
        fr: "/dashboard/mon-activite",
        it: "/dashboard/la-mia-attivita",
        pt: "/dashboard/minha-atividade",
      },
    },
    {
      icon: <ShoppingCart size={20} />,
      label: t("menuDashboard.items.store"),
      link: {
        es: "/dashboard/tienda",
        en: "/dashboard/store",
        fr: "/dashboard/boutique",
        it: "/dashboard/negozio",
        pt: "/dashboard/loja",
      },
    },
    {
      icon: <CreditCard size={20} />,
      label: t("menuDashboard.items.myPurchases"),
      link: {
        es: "/dashboard/mis-compras",
        en: "/dashboard/my-purchases",
        fr: "/dashboard/mes-achats",
        it: "/dashboard/i-miei-acquisti",
        pt: "/dashboard/minhas-compras",
      },
    },
    {
      icon: <Settings size={20} />,
      label: t("menuDashboard.items.accountAdmin"),
      link: {
        en: "/dashboard/admin-account",
        es: "/dashboard/cuenta-admin",
        fr: "/dashboard/compte-admin",
        it: "/dashboard/account-admin",
        pt: "/dashboard/conta-admin",
      },
    },
    {
      icon: <UserCheck />,
      label: t("menuDashboard.items.userConfig"),
      link: {
        en: "/dashboard/config-account",
        es: "/dashboard/configuracion-cuenta",
        fr: "/dashboard/configuration-compte",
        it: "/dashboard/configurazione-account",
        pt: "/dashboard/configuracao-conta",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main content area */}
      <div className="flex flex-grow relative">
        {/* Sidebar con animación */}
        <aside
          ref={menuRef}
          className={`md:relative fixed top-0 left-0 h-full md:h-auto w-80 bg-[#1C1C1C] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-10`}
        >
          <div className="flex justify-end font-bold py-4 mr-4">
            <button
              className="md:hidden px-2 bg-[#0D0D0D] rounded hover:bg-gray-800"
              onClick={toggleMenu}
            >
              X
            </button>
          </div>
          <div className="flex justify-center gap-x-2 py-5 w-full items-center">
            <div className="bg-[#BCEFFF] rounded-full p-2">
              <ProfileSvg width={20} height={20} color="#0F587E" />
            </div>

            <h2 className="text-xs text-[#828282] ">
              {t("menuDashboard.header.limitedAccount")}
              <br />
              <span className="text-white">4291 - 4118 - **** - ****</span>
            </h2>
          </div>

          <nav>
            <ul className="space-y-2 text-sm md:text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    prefetch
                    href={item.link[language]} // Usar el link correspondiente al idioma actual
                    className={`flex items-center p-4 w-full pl-14 hover:bg-[#353535] rounded ${
                      pathFormat === item.link[language] ? "bg-[#353535]" : ""
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-grow text-sm md:text-base bg-[#EEF5F9] relative z-0 ">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
