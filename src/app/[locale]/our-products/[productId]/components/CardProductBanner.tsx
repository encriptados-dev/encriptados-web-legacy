import React from "react";
import Image from "next/image";
import AppStoreFooter from "@/shared/FooterEncrypted/icon/AppStoreFooter";
import DownloadApkSvg from "@/shared/svgs/DownloadApkSvg";
import PlayStoreSvg from "@/shared/svgs/PlayStoreSvg";

const CardProductBanner = () => {
  const BannerCircle = "/images/our-products/banner-circle.png";

  return (
    <div className="flex-grow flex items-center justify-center h-full ">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-auto rounded-3xl bg-[#DA060C] flex justify-center items-center mb-4">
          <Image
            src={BannerCircle}
            alt="Banner Circle"
            objectFit="cover" // Ajusta la imagen para que cubra todo el contenedor
            width={350}
            height={500}
            className="-translate-y-10"
            priority
          />
        </div>
        <div className="flex w-full">
          <AppStoreFooter />
          <DownloadApkSvg />
          <PlayStoreSvg />
        </div>
      </div>
    </div>
  );
};

export default CardProductBanner;
