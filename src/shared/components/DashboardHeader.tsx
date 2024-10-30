"use client";
import { Menu } from "lucide-react";
import Button from "@/shared/components/Button";
import EncryptedLogoSvg from "@/shared/svgs/EncryptedLogoSvg";
import ProfileSvg from "@/shared/svgs/ProfileSvg";
import { ReactNode, useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";
import SupportChat from "@/shared/components/SupportChat";
import { useTranslations } from "next-intl";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname(); // Obtener la ruta actual

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

  return (
    <header className="w-full bg-[#0D0D0D] p-4 flex justify-between items-center">
      <button
        className="md:hidden p-2 bg-[#0D0D0D] rounded hover:bg-gray-800"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:block w-48 md:w-64 ">
        <EncryptedLogoSvg width={220} />
      </div>

      <div className="flex gap-x-2">
        <SupportChat />
        <Button iconPosition="right" icon={<ProfileSvg />} intent="profile">
          {t("menuDashboard.header.myAccount")}
        </Button>
        <Button
          intent="dangerMetal"
          customStyles="bg-[#2D0505] text-[#FF6C6C] font-light"
        >
          {t("menuDashboard.header.logOut")}
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
