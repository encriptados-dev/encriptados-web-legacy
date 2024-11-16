import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations();

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "450px" }}
    >
      <Image
        src="/images/where-to-find-us/backgroundbanner.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={450}
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex h-full min-h-[300px] max-w-7xl flex-col items-center justify-between px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex flex-col text-center lg:text-left lg:max-w-[60%] mt-20">
          <p className="text-base text-white sm:text-lg md:text-xl mb-4 lg:mb-7">
            {t("WhereToFindUs.banner.titleEasyToBuyLicense")}
          </p>
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t("WhereToFindUs.banner.moreThanTitle")}
            <p className="font-extrabold text-[#35CDFB] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
              36.732
            </p>{" "}
            {t("WhereToFindUs.banner.pointsOfPay")}
          </h1>

          <h2 className="text-2xl font-bold text-[#04FFB2] sm:text-3xl md:text-4xl lg:text-5xl mt-4">
            {t("WhereToFindUs.banner.forYou")}
          </h2>
        </div>

        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/where-to-find-us/man.png"
            alt="Representative"
            width={400}
            height={400}
            className="h-auto w-auto object-contain max-h-[300px] lg:max-h-[400px] translate-y-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}
