"use client";
import {
  Menu,
  Home,
  ShoppingCart,
  Settings,
  Activity,
  CreditCard,
} from "lucide-react";
import Button from "@/shared/components/Button";
import EncryptedLogoSvg from "@/shared/svgs/EncryptedLogoSvg";
import ProfileSvg from "@/shared/svgs/ProfileSvg";
import { ReactNode, useState, useEffect, useRef } from "react";

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
    setIsMenuOpen(!isMenuOpen);
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

  // Definimos el array de items del menú con iconos
  const menuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: "Mi consumo de SIMs", link: "#" },
    { icon: <Activity size={20} />, label: "Mis actividades", link: "#" },
    { icon: <ShoppingCart size={20} />, label: "Tienda", link: "#" },
    { icon: <CreditCard size={20} />, label: "Mis compras", link: "#" },
    { icon: <Settings size={20} />, label: "Configuración", link: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full bg-[#0D0D0D] p-4 flex justify-between items-center">
        <button
          className="md:hidden p-2 bg-[#0D0D0D] rounded hover:bg-gray-800"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        {/* Logo, oculto en pantallas pequeñas */}
        <div className="hidden md:block w-48 md:w-64">
          <EncryptedLogoSvg width={200} />
        </div>

        <div className="flex gap-x-2">
          <Button
            iconPosition="right"
            icon={<ProfileSvg />}
            intent="secondary"
            customStyles="bg-[#1D1D1D] text-[#F5F5F5] font-light"
          >
            Mi cuenta
          </Button>
          <Button
            intent="secondary"
            customStyles="bg-[#2D0505] text-[#FF6C6C] font-light"
          >
            Cerrar sesión
          </Button>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-grow">
        {/* Sidebar con animación */}
        <aside
          ref={menuRef}
          className={`absolute md:relative top-0 left-0 h-full md:h-auto w-64 bg-[#1C1C1C] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <h2 className="text-lg md:text-base font-semibold mb-4">Menu</h2>
          <nav>
            <ul className="space-y-2 text-sm md:text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="flex items-center p-4 w-full hover:bg-[#353535] rounded"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-grow p-4 md:ml-64 text-sm md:text-base">
          {children}
        </main>
      </div>
    </div>
  );
}
