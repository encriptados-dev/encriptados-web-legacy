"use client";
import {
  Menu,
  Home,
  ShoppingCart,
  Settings,
  Activity,
  CreditCard,
  UserCheck,
} from "lucide-react";
import Button from "@/shared/components/Button";
import EncryptedLogoSvg from "@/shared/svgs/EncryptedLogoSvg";
import ProfileSvg from "@/shared/svgs/ProfileSvg";
import { ReactNode, useState, useEffect, useRef } from "react";
import Banner from "./components/Banner";
import Link from "next/link";
import ChatSupport from "@/shared/svgs/ChatSupport";

interface MenuItem {
  icon: ReactNode;
  label: string;
  link: string;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Actualizamos el estado usando el valor anterior
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

  const menuItems: MenuItem[] = [
    {
      icon: <Home size={20} />,
      label: "Mi consumo de SIMs",
      link: "/dashboard/data-usage",
    },
    {
      icon: <Activity size={20} />,
      label: "Mis actividades",
      link: "/dashboard/my-activity",
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Tienda",
      link: "/dashboard/store",
    },
    {
      icon: <CreditCard size={20} />,
      label: "Mis compras",
      link: "/dashboard/my-purchases",
    },
    {
      icon: <Settings size={20} />,
      label: "Administrar Cuentas",
      link: "/dashboard/admin-account",
    },

    {
      icon: <UserCheck />,
      label: "Administrar Cuentas",
      link: "/dashboard/config-account",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="w-full bg-[#0D0D0D] p-4 flex justify-between items-center">
        <button
          className="md:hidden p-2 bg-[#0D0D0D] rounded hover:bg-gray-800"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        {/* Logo, oculto en pantallas pequeñas */}
        <div className="hidden md:block w-48 md:w-64 ">
          <EncryptedLogoSvg width={220} />
        </div>

        <div className="flex gap-x-2">
          <div>
            <Button
              iconPosition="left"
              icon={
                <div className="hidden lg:block ">
                  <ChatSupport />
                </div>
              }
              customStyles="border-[#70DEFF] text-cyan-500 font-light"
              intent="ghost"
            >
              Chat soporte
            </Button>
          </div>
          <Button iconPosition="right" icon={<ProfileSvg />} intent="profile">
            Mi cuenta
          </Button>
          <Button
            intent="dangerMetal"
            customStyles="bg-[#2D0505] text-[#FF6C6C] font-light"
          >
            Cerrar sesión
          </Button>
        </div>
      </header>

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
              CUENTA DE TIEMPO ILIMITADO <br />
              <span className="text-white">4291 - 4118 - **** - ****</span>
            </h2>
          </div>

          <nav>
            <ul className="space-y-2 text-sm md:text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center p-4 w-full pl-14 hover:bg-[#353535] rounded"
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
          <div className="hidden 2xl:block lg:block">
            <Banner />
          </div>

          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
