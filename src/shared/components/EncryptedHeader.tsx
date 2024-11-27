"use client";

import { useState, useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./HeaderComponents/Navigation";
import MegaMenu from "./HeaderComponents/MegaMenu";
import MobileMenu from "./HeaderComponents/MobileMenu";
import LanguageDropdown from "./HeaderComponents/LanguageSelector";
import EncryptedLogo from "./HeaderComponents/EncryptedLogo";
import Link from "next/link";
import { useTranslatedProductsCategories, useTranslatedOthersCategories } from './HeaderComponents/data/CategoryMenu';
import WorldIcon from "../svgs/WorldIcon";

export default function EncryptedHeader() {
  const productsCategories = useTranslatedProductsCategories(); // Obtén las categorías traducidas
  const othersCategories = useTranslatedOthersCategories(); // Obtén las otras categorías traducidas

  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<"products" | "others">('products');
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(
    productsCategories[0]?.items[0] || {
      title: 'No disponible',
      link: '#',
      description: 'No hay elementos disponibles',
      image: '/placeholder.svg',
    }
  );

  // Cierra el menú de escritorio
  const closeMegaMenu = () => setIsDesktopMenuOpen(false);

  // Detecta si el viewport es móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Maneja el cambio de menú (productos u otros)
  const handleMenuChange = (menu: "products" | "others") => {
    setCurrentMenu(menu);
    setActiveCategory(0);
    setHoveredItem(
      menu === "products"
        ? productsCategories[0]?.items[0]
        : othersCategories[0]?.items[0]
    );
    setIsDesktopMenuOpen(true);
  };

  // Memoriza las categorías actuales para optimizar renders
  const currentCategories = useMemo(
    () =>
      currentMenu === "products" ? productsCategories : othersCategories,
    [currentMenu]
  );

  // Renderizado para dispositivos móviles
  if (isMobile) {
    return (
      <MobileMenu
        categories={currentCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    );
  }

  // Renderizado para dispositivos de escritorio
  return (
    <header className="relative z-50">
      <div className="bg-[#151515] border-b border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo y selector de idioma */}
            <div className="flex flex-row">
              <EncryptedLogo />
              <LanguageDropdown />
            </div>

            {/* Menú de navegación */}
            <div className="hidden md:flex items-center gap-0">
              {/* Tienda */}
              <Link
                href="/tienda"
                prefetch
                className="px-4 py-2 text-sm text-white hover:bg-[#054d6121] rounded-full transition-colors"
              >
                Tienda
                <span className="ml-2 px-2 py-0.5 text-xs bg-[#06546C] text-[#44D3FF] rounded-full">
                  Nuevo
                </span>
              </Link>

              {/* Navegación de Productos */}
              <Navigation
                isOpen={isDesktopMenuOpen && currentMenu === "products"}
                setIsOpen={() => handleMenuChange("products")}
                label="Productos"
                buttonClassName="px-4 py-2"
              />

              {/* Navegación de Otros */}
              <Navigation
                isOpen={isDesktopMenuOpen && currentMenu === "others"}
                setIsOpen={() => handleMenuChange("others")}
                label="Otros"
                buttonClassName="px-4 py-2"
              />

              {/* Nosotros */}
              <Link
                href="/nosotros"
                prefetch
                className="text-sm ml-4 text-gray-300 hover:text-white transition-colors"
              >
                Nosotros
              </Link>

              {/* Ingresar */}
              <Link
                href="/login"
                prefetch
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
        {isDesktopMenuOpen && (
          <MegaMenu
            categories={currentCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            closeMegaMenu={closeMegaMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
