import AppStoreFooter from "@/shared/FooterEncrypted/icon/AppStoreFooter";
import DownloadApkSvg from "@/shared/svgs/DownloadApkSvg";
import PlayStoreSvg from "@/shared/svgs/PlayStoreSvg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BannerOurProducts = () => {
  const TwoCellphones = "/images/our-products/two-cellphones.png";

  const t = useTranslations("OurProductsPage.banner");
  return (
    <div className="bg-our-products-gradient flex flex-col lg:flex-row xl:flex justify-around items-center overflow-hidden p-6">
      <div className="max-w-[380px] text-center md:text-left mb-6 md:mb-0 mt-12">
        <h1 className="text-3xl md:text-4xl mb-4">
          {t("title")}
          <span className="font-bold"> {t("subtitle")}</span>
        </h1>
        <div className="flex flex-col lg-custom:flex-row justify-center items-center md:items-start md:justify-start gap-x-2 mt-10">
          <div className="w-[200px] mb-2 lg-custom:mb-0 cursor-pointer">
            <PlayStoreSvg />
          </div>
          <div className="w-[200px] mb-2 lg-custom:mb-0 cursor-pointer">
            <AppStoreFooter />
          </div>
          <div className="w-[200px] mb-2 lg-custom:mb-0  cursor-pointer">
            <DownloadApkSvg />
          </div>
        </div>
      </div>

      <section className="relative flex justify-center w-full md:w-auto">
        <div className="absolute bg-cyan-gradient-light rounded-3xl w-[500px] h-[280px] md:w-[465px] md:h-[300px] mt-12 md:mt-24 md:ml-[-30px]"></div>
        <Image
          width={400}
          height={400}
          className="translate-y-6 md:translate-y-11 z-10"
          src={TwoCellphones}
          alt="Two cellphones"
        />
      </section>
    </div>
  );
};

export default BannerOurProducts;
