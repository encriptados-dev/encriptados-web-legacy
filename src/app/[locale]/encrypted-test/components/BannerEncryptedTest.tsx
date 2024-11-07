import React from "react";
import Image from "next/image";
import WorldIconTest from "../icons/WorldIconTest";
import { useTranslations } from "next-intl";
import ButtonGradientClasic from "@/shared/components/ButtonGradientClasic";

const BannerEncryptedTest = () => {
  const EncryptedTest = "/images/encrypted-test/banner-test.png";

  const t = useTranslations("EncryptedTestPage");

  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src={EncryptedTest}
        alt="Encrypted Test Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-7  z-10">
        <ButtonGradientClasic title={t("banner.securityTestTitle")} />
        <WorldIconTest />
        <h1 className="text-white text-3xl font-bold w-[450px] text-center">
          {t("banner.securityTestDescription")}
        </h1>
      </div>
    </div>
  );
};

export default BannerEncryptedTest;
