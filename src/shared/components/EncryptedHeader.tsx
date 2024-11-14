"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import EncryptedLogoSvg from "../svgs/EncryptedLogoSvg";
import WorldIcon from "../svgs/WorldIcon";
import useLanguageSwitcher, {
  LocaleLanguages,
} from "../hooks/useLanguageSwitcher";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Section = {
  title: string;
  link: string;
};

type MenuItem = {
  title: string;
  isNew?: boolean;
  sections: Section[];
  link?: string;
};
type Language = {
  code: string;
  name: string;
};

export default function HeaderEncrypted() {
  const router = useRouter();
  const t = useTranslations("HeaderMenu.languages");
  const tmenu = useTranslations("HeaderMenu.menuItems");

  const menuItems: MenuItem[] = [
    {
      title: "Entregas",
      isNew: true,
      sections: [],
      link: "/fast-delivery",
    },
    {
      title: tmenu("simShop"),
      isNew: true,
      sections: [],
      link: "/encrypted-sim",
    },
    {
      title: tmenu("products.title"),
      link: "",
      sections: [
        {
          title: tmenu("products.sims"),
          link: "/bne-sim",
        },
        {
          title: "Nuestros productos",
          link: "/our-products",
        },
      ],
    },
    {
      title: tmenu("others.title"),
      link: "",
      sections: [
        {
          title: tmenu("others.distributors"),
          link: "/distributors",
        },
        {
          title: tmenu("others.blog"),
          link: "/blog",
        },
        {
          title: tmenu("others.securityTest"),
          link: "/encrypted-test",
        },
        {
          title: tmenu("others.offers"),
          link: "/offers",
        },
      ],
    },
  ];

  const languages: Language[] = [
    { code: "es", name: t("es") },
    { code: "pt", name: t("pt") },
    { code: "it", name: t("it") },
    { code: "fr", name: t("fr") },
    { code: "en", name: t("en") },
  ];

  const { currentLocale, changeLanguage } = useLanguageSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale || "es"
  );
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setSelectedLanguage(currentLocale || "es");
  }, [currentLocale]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setLanguageDropdownOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    setActiveDropdown(null);
  };

  const handleLanguageSelect = (code: LocaleLanguages) => {
    setSelectedLanguage(code);
    setLanguageDropdownOpen(false);
    changeLanguage(code);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#141414] text-white py-2 md:py-3 lg:py-4 px-4 md:px-6 shadow-lg transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <EncryptedLogoSvg
              width={isSmallScreen ? 150 : isMediumScreen ? 200 : 250}
              height={25}
            />
          </div>
          <div className="relative hidden sm:flex items-center space-x-1 text-xs md:text-sm">
            <WorldIcon height={16} width={16} />
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center"
              aria-haspopup="true"
              aria-expanded={languageDropdownOpen}
            >
              <span className="hidden md:inline">
                {languages.find((lang) => lang.code === selectedLanguage)?.name}
              </span>
              <span className="md:hidden">
                {selectedLanguage.toUpperCase()}
              </span>
              <motion.svg
                className="w-3 h-3 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ rotate: languageDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </button>
            <AnimatePresence>
              {languageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-1 bg-white z-20 text-black rounded shadow-lg text-xs md:text-sm"
                >
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      onClick={() =>
                        handleLanguageSelect(language.code as LocaleLanguages)
                      }
                      className="px-2 py-1 md:px-3 md:py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                    >
                      {language.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button
                className="flex items-center justify-between px-2 xl:px-4 py-1 xl:py-2 text-sm xl:text-base"
                onClick={() => {
                  if (item.link) router.push(item.link);
                  toggleDropdown(index);
                }}
                aria-haspopup={item.sections.length > 0 ? "true" : "false"}
                aria-expanded={activeDropdown === index}
              >
                <span>{item.title}</span>
                {item.isNew && (
                  <span className="bg-[#06546C] rounded-full text-xs ml-1 xl:ml-2 px-1 xl:px-2 py-0.5 text-[#44D3FF]">
                    Nuevo
                  </span>
                )}
                {item.sections.length > 0 && (
                  <motion.svg
                    className="w-3 h-3 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                )}
              </button>
              <AnimatePresence>
                {item.sections.length > 0 && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 flex flex-col bg-gray-100 rounded-xl py-1 px-2 xl:px-4 text-gray-800 shadow-xl text-sm"
                  >
                    {item.sections.map((section, idx) => (
                      <div
                        onClick={() => {
                          router.push(section.link);
                        }}
                        key={idx}
                        className="my-1 xl:my-2 block border-b cursor-pointer border-gray-100 py-1 font-semibold text-gray-500 hover:text-black transition-colors duration-200"
                      >
                        {section.title}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button className="bg-[#E3F8FF] text-black px-3 xl:px-4 py-1 xl:py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[#B3E5FF] transition-colors duration-200">
            Ingresar
          </button>
        </nav>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 md:mt-4"
          >
            {menuItems.map((item, index) => (
              <div key={index} className="py-1 md:py-2">
                <button
                  className="flex items-center justify-between w-full text-left text-sm md:text-base"
                  onClick={() => {
                    if (item.link) router.push(item.link);
                    toggleDropdown(index);
                  }}
                  aria-expanded={activeDropdown === index}
                >
                  <span>{item.title}</span>
                  {item.isNew && (
                    <span className="bg-[#06546C] rounded-full text-xs ml-2 px-2 py-0.5 text-[#44D3FF]">
                      Nuevo
                    </span>
                  )}
                  {item.sections.length > 0 && (
                    <motion.svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </button>
                <AnimatePresence>
                  {item.sections.length > 0 && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 md:mt-2 ml-4 space-y-1 md:space-y-2"
                    >
                      {item.sections.map((section, idx) => (
                        <div
                          onClick={() => {
                            router.push(section.link);
                          }}
                          key={idx}
                          className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {section.title}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="mt-2 md:mt-4 w-full bg-[#E3F8FF] text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[#B3E5FF] transition-colors duration-200">
              Ingresar
            </button>
            <div className="mt-2 md:mt-4 flex items-center space-x-2">
              <WorldIcon height={18} width={20} />
              <select
                value={selectedLanguage}
                onChange={(e) =>
                  handleLanguageSelect(e.target.value as LocaleLanguages)
                }
                className="bg-transparent text-white border-none focus:outline-none text-sm"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
