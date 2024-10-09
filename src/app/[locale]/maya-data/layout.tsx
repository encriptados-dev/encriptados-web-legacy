import { ReactNode } from "react";
import BannerMaya from "./components/BannerMaya";
import { BenefitsForYou } from "./components/BenefitsForYou";
import HowItWorks from "./components/HowItWorks";
import BannerCoverage from "@/shared/BannerCoverage";
import QRBanner from "../fast-delivery/components/QRBanner";
import { useTranslations } from "next-intl";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const t = useTranslations("DeliveryPage");
  return (
    <>
      <BannerMaya />
      {children}
      <BenefitsForYou />
      <HowItWorks />
      <BannerCoverage />
      <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
        <QRBanner title={t("downloadApp")} />
      </div>
    </>
  );
}
