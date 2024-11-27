"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from 'lucide-react';
import { useRouter } from "next/navigation";
import { LoginModal } from "./LoginModal";
import MobileMenuSvg from "@/shared/svgs/MobileMenuSvg";
import LanguageDropdown from "./LanguageSelector";
import WorldIcon from "@/shared/svgs/WorldIcon";
import { productsCategories, othersCategories } from "@/shared/components/HeaderComponents/data/CategoryMenu";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(-1);
  const [activeSubCategory, setActiveSubCategory] = useState(-1);
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveCategory(-1);
    setActiveSubCategory(-1);
  };

  const handleLinkClick = (link: string) => {
    setIsOpen(false);
    setActiveCategory(-1);
    setActiveSubCategory(-1);
    router.push(link);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setActiveCategory(-1);
      setActiveSubCategory(-1);
    };

    handleRouteChange();

    return () => {
      // Cleanup if needed
    };
  }, [router]);

  return (
    <div className="md:hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#151515] ">
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
            className="text-white "
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6 b-red " />
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
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-20 p-6"
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                {/* Tienda with Nuevo badge */}
                <button
                  onClick={() => handleLinkClick("/tienda")}
                  className="flex items-center justify-start gap-4 w-full px-4 py-3 border-b border-[#1A1A1A] text-left"
                >
                  <span className="text-[#ffffff80] text-xl font-extralight">Tienda</span>
                  <span className="px-2 py-0.5 text-xs text-[#44D3FF] bg-[#06546C] rounded-full">
                    Nuevo
                  </span>
                </button>

                {/* Productos Section */}
                <div className="border-b border-[#1A1A1A]">
                  <button
                    onClick={() => setActiveCategory(activeCategory === 0 ? -1 : 0)}
                    className={`flex items-center justify-between w-full px-4 py-3 transition-colors text-xl font-extralight
                      ${activeCategory === 0 ? 'text-[#ffffff] bg-[#0A0A0A] ' : 'text-[#ffffff80]'}`}
                    aria-expanded={activeCategory === 0}
                  >
                    <span>Productos</span>
                    <motion.div
                      animate={{ rotate: activeCategory === 0 ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeCategory === 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="bg-[#0A0A0A] overflow-hidden"
                      >
                        {productsCategories.map((category, index) => (
                          <div key={category.title}>
                            <button
                              onClick={() => setActiveSubCategory(activeSubCategory === index ? -1 : index)}
                              className="flex items-center justify-between w-full px-6 py-2 text-[#FFFFFF] relative text-ls"
                            >
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#35CDFB]"></span>
                              <span className="ml-4">{category.title}</span>
                              <ChevronDown 
                                className={`w-5 h-5 transition-transform ${activeSubCategory === index ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeSubCategory === index && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "auto" }}
                                  exit={{ height: 0 }}
                                  className="overflow-hidden"
                                >
                                  {category.items.map((item) => (
                                    <button
                                      key={item.title}
                                      onClick={() => handleLinkClick(item.link)}
                                      className="w-full px-12 py-2 text-left text-[#FFFFFF] hover:text-white/90 text-sm"
                                    >
                                      {item.title}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Otros Section */}
                <div className="border-b border-[#1A1A1A]">
                  <button
                    onClick={() => setActiveCategory(activeCategory === 1 ? -1 : 1)}
                    className={`flex items-center justify-between w-full px-4 py-3 transition-colors text-xl font-extralight
                      ${activeCategory === 1 ? 'text-[#FFFFFF] bg-[#0A0A0A]' : 'text-[#FFFFFF80]'}`}
                    aria-expanded={activeCategory === 1}
                  >
                    <span>Otros</span>
                    <motion.div
                      animate={{ rotate: activeCategory === 1 ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeCategory === 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="bg-[#0A0A0A] overflow-hidden"
                      >
                        {othersCategories.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => handleLinkClick(item.link)}
                            className="flex w-full px-6 py-2 text-left text-[#FFFFFF] hover:text-white/90 relative text-ls"
                          >
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#35CDFB]"></span>
                            <span className="ml-4">{item.title}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nosotros */}
                <button
                  onClick={() => handleLinkClick("/nosotros")}
                  className="flex items-center justify-between w-full px-4 py-3 text-[#FFFFFF80] hover:text-white/90 text-xl font-extralight"
                >
                  <span>Nosotros</span>
                </button>
              </div>

              {/* Bottom Section */}
              <div className="px-4 py-6 border-t border-[#1A1A1A]">
                <button
                  onClick={() => handleLinkClick("/login")}
                  className="w-full py-3 text-center text-black hover:text-white bg-white rounded-md mb-4 hover:bg-[#1a1a1a] transition-colors"
                >
                  Ingresar
                </button>
                <div className="text-center text-sm">
                  <span className="text-gray-400">¿Viste algo mal </span>
                  <button
                    onClick={() => handleLinkClick("/sugerencia")}
                    className="text-white underline hover:text-gray-200 transition-colors"
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

