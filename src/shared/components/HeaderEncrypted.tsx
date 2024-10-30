"use client";
import { useState, useEffect } from "react";
import EncryptedLogoSvg from "../svgs/EncryptedLogoSvg";
import WorldIcon from "../svgs/WorldIcon";
import useLanguageSwitcher, {
  LocaleLanguages,
} from "../hooks/useLanguageSwitcher";
import { useTranslations } from "next-intl";

type MenuItem = {
  title: string;
  isNew?: boolean;
  sections: string[];
};

type Language = {
  code: string;
  name: string;
};

export default function HeaderEncrypted() {
  const t = useTranslations("HeaderMenu.languages");
  const tmenu = useTranslations("HeaderMenu.menuItems");

  const menuItems: MenuItem[] = [
    {
      title: tmenu("simShop"),
      isNew: true,
      sections: [],
    },
    {
      title: tmenu("products.title"),
      sections: [
        tmenu("products.sims"),
        tmenu("products.aplications"),
        tmenu("products.phones"),
      ],
    },
    {
      title: tmenu("others.title"),
      sections: [
        tmenu("others.distributors"),
        tmenu("others.blog"),
        tmenu("others.securityTest"),
        tmenu("others.offers"),
      ],
    },
    {
      title: "Nosotros",
      sections: [],
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] =
    useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale || "es"
  );

  useEffect(() => {
    setSelectedLanguage(currentLocale || "es");
  }, [currentLocale]);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageSelect = (code: LocaleLanguages) => {
    setSelectedLanguage(code);
    setLanguageDropdownOpen(false);
    changeLanguage(code);
  };

  return (
    <header className="bg-[#141414] text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <EncryptedLogoSvg width={350} height={25} />
          <div className="relative hidden sm:flex items-center space-x-1 text-sm">
            <WorldIcon height={18} width={20} />
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center"
            >
              <span>
                {languages.find((lang) => lang.code === selectedLanguage)?.name}
              </span>
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {languageDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white z-20 text-black rounded shadow-lg">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() =>
                      handleLanguageSelect(language.code as LocaleLanguages)
                    }
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button className="flex items-center justify-between px-4 py-2">
                <span>{item.title}</span>
                {item.isNew && (
                  <span className="bg-[#06546C] rounded-full text-xs ml-4 px-2 py-0.5 text-[#44D3FF]">
                    Nuevo
                  </span>
                )}
                {/* Mostrar icono de flecha hacia abajo si hay secciones */}
                {item.sections.length > 0 && (
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {item.sections.length > 0 && (
                <div className="invisible absolute z-50 flex flex-col bg-gray-100 rounded-xl py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  {item.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className="my-2 block border-b cursor-pointer border-gray-100 py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      {section}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-[#E3F8FF] text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
            Ingresar
          </button>
        </nav>
      </div>
    </header>
  );
}
