"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./HeaderComponents/Navigation";
import MegaMenu from "./HeaderComponents/MegaMenu";
import MobileMenu from "./HeaderComponents/MobileMenu";
import LanguageDropdown from "./HeaderComponents/LanguageSelector";
import EncryptedLogo from "./HeaderComponents/EncryptedLogo";
import Link from "next/link";
import {
  productsCategories,
  othersCategories,
} from "../components/HeaderComponents/data/CategoryMenu";
import WorldIcon from "../svgs/WorldIcon";

export default function EncryptedHeader() {
  const [isMobile, setIsMobile] = useState(false); // Detecta si es móvil
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false); // Controla el Mega Menu en escritorio
  const [currentMenu, setCurrentMenu] = useState<"products" | "others">(
    "products"
  ); // Menú activo
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(
    productsCategories[0]?.items[0] || {
      title: "No disponible",
      link: "#",
      description: "No hay elementos disponibles",
      image: "/placeholder.svg",
    }
  );

  const closeMegaMenu = () => {
    setIsDesktopMenuOpen(false); // Ajusta el estado para cerrar el Mega Menu
  };

  // Detecta si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Inicializa el tamaño al cargar
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuChange = (menu: "products" | "others") => {
    setCurrentMenu(menu);
    setActiveCategory(0);
    setHoveredItem(
      menu === "products"
        ? productsCategories[0]?.items[0]
        : othersCategories[0]?.items[0]
    );
    setIsDesktopMenuOpen(true); // Abre el Mega Menu correspondiente
  };

  if (isMobile) {
    // Renderiza el header móvil como un componente separado
    return (
      <MobileMenu
        categories={
          currentMenu === "products" ? productsCategories : othersCategories
        }
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    );
  }

  // Renderiza el header de escritorio si no es móvil
  return (
    <header className="relative z-50">
      <div className="bg-[#151515] border-b border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-row">
              <EncryptedLogo />
              <LanguageDropdown />
            </div>

            {/* Menú de escritorio */}
            <div className="hidden md:flex items-center gap-0">
              <Link
                href="/tienda"
                prefetch={true} // Utiliza prefetch
                className="px-4 py-2 text-sm text-white hover:bg-[#054d6121] rounded-full transition-colors"
              >
                Tienda
                <span className="ml-2 px-2 py-0.5 text-xs bg-[#06546C] text-[#44D3FF] rounded-full">
                  Nuevo
                </span>
              </Link>
              <Navigation
                isOpen={isDesktopMenuOpen && currentMenu === "products"}
                setIsOpen={() => handleMenuChange("products")}
                label="Productos"
                buttonClassName="px-4 py-2"
              />
              <Navigation
                isOpen={isDesktopMenuOpen && currentMenu === "others"}
                setIsOpen={() => handleMenuChange("others")}
                label="Otros"
                buttonClassName="px-4 py-2"
              />
              <Link
                href="/nosotros"
                prefetch={true} // Utiliza prefetch
                className="text-sm ml-4 text-gray-300 hover:text-white transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/login"
                prefetch={true} // Utiliza prefetch
                className="px-4 ml-14 py-2 text-sm text-[#1C1B1F] bg-[#E3F8FF] hover:bg-gray-100 rounded-xl transition-colors flex items-center gap-2"
              >
                <WorldIcon color="#1C1B1F" />
                Ingresar
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {!isMobile && isDesktopMenuOpen && (
          <MegaMenu
            categories={
              currentMenu === "products" ? productsCategories : othersCategories
            }
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            closeMegaMenu={closeMegaMenu} // Pasa la función
          />
        )}
      </AnimatePresence>
    </header>
  );
}
