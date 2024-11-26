"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { LoginModal } from "./LoginModal";
import MobileMenuSvg from "@/shared/svgs/MobileMenuSvg";
import LanguageDropdown from "./LanguageSelector";
import WorldIcon from "@/shared/svgs/WorldIcon";

type MenuItem = {
  title: string;
  link: string;
  image?: string;
  description?: string;
};

type Category = {
  title: string;
  description?: string;
  link: string;
  image?: string;
  items: MenuItem[];
};

type Props = {
  categories: Category[];
  activeCategory: number;
  setActiveCategory: (index: number) => void;
};

export default function MobileMenu({
  categories = [],
  activeCategory,
  setActiveCategory,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (activeCategory !== -1) {
      setActiveCategory(-1);
    }
  };

  const handleLinkClick = (link: string) => {
    setIsOpen(false);
    setActiveCategory(-1);
    router.push(link);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setActiveCategory(-1);
    };

    handleRouteChange();

    return () => {
      // Limpieza si es necesaria
    };
  }, [router, setActiveCategory]);

  return (
    <div className="md:hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-[#1A1A1A]">
        <div className="flex items-center space-x-2">
          <MobileMenuSvg />
          <LanguageDropdown />
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="/login"
            className="px-4 py-2 text-sm text-[#1C1B1F] bg-[#E3F8FF] hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
          >
            <WorldIcon color="#1C1B1F" />
            Ingresar
          </a>
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-16"
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                {/* Tienda with Nuevo badge */}
                <button
                  onClick={() => handleLinkClick("/tienda")}
                  className="flex items-center justify-between w-full px-4 py-3 border-b border-[#1A1A1A] text-left"
                >
                  <span className="text-white">Tienda</span>
                  <span className="px-2 py-0.5 text-xs text-white bg-[#1A1A1A] rounded-full">
                    Nuevo
                  </span>
                </button>

                {/* Navigation Items */}
                {categories.map((category, index) => (
                  <div
                    key={category.title}
                    className="border-b border-[#1A1A1A]"
                  >
                    <button
                      onClick={() =>
                        setActiveCategory(activeCategory === index ? -1 : index)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-white"
                      aria-expanded={activeCategory === index}
                    >
                      <span>{category.title}</span>
                      <motion.div
                        animate={{ rotate: activeCategory === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeCategory === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="bg-[#111111] overflow-hidden"
                        >
                          {category.items.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => handleLinkClick(item.link)}
                              className="block w-full px-6 py-2 text-left text-gray-300 hover:text-white"
                            >
                              {item.title}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="px-4 py-6 border-t border-[#1A1A1A]">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-3 text-center text-white bg-white/10 rounded-md mb-4"
                >
                  Ingresar
                </button>
                <div className="text-center text-sm">
                  <span className="text-gray-400">¿Viste algo mal </span>
                  <button
                    onClick={() => handleLinkClick("/sugerencia")}
                    className="text-white underline"
                  >
                    envíanos una sugerencia aquí
                  </button>
                  <span className="text-gray-400">?</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
