import React from "react";
import Image from "next/image";
import AppStoreFooter from "@/shared/FooterEncrypted/icon/AppStoreFooter";
import DownloadApkSvg from "@/shared/svgs/DownloadApkSvg";
import PlayStoreSvg from "@/shared/svgs/PlayStoreSvg";
import { useProductById } from "../context/ProductByIdContext";

const CardProductBanner = () => {
  const BannerCircle = "/images/our-products/banner-circle.png";

  const { currentProduct } = useProductById();

  return (
    <div className="flex-col flex items-center justify-center h-full">
      <div className="w-full h-full flex flex-col items-center bg-[#222222] rounded-3xl">
        <div className="w-full  rounded-3xl  flex justify-center items-center mb-4">
          <Image
            src={currentProduct?.image || ""}
            alt="Banner Circle"
            objectFit="cover" // Ajusta la imagen para que cubra todo el contenedor
            width={250}
            height={250}
            className="-translate-y-10"
            priority
          />
        </div>
      </div>
      {/* <div className="flex justify-center w-[500px]">
        <AppStoreFooter />
        <PlayStoreSvg />
        <DownloadApkSvg />
      </div> */}
    </div>
  );
};

export default CardProductBanner;
