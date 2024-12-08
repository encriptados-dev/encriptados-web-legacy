import React from "react";
import Image from "next/image";

import { useProductById } from "../context/ProductByIdContext";
import SignalLogoById from "./iconbyid/SignalLogoById";
import LogoFiveG from "./iconbyid/LogoFiveG";
import AvailableLogo from "./iconbyid/AvailableLogo";

const CardProductBanner = () => {
  const { currentProduct } = useProductById();

  return (
    <div className="flex-col flex items-center justify-center h-full">
      <div className="w-full h-full flex flex-col items-center bg-[#B0B0B0] rounded-3xl relative pt-[125px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={currentProduct?.image || ""}
            alt="Banner Circle"
            width={250}
            height={250}
            className="rounded-full"
            priority
          />
        </div>
        <div className="mt-auto mb-2 flex gap-x-4">
          <div className="flex flex-col items-center">
            <div className="bg-[#E6F4F9] p-4 rounded-2xl flex justify-center items-center">
              <SignalLogoById />
            </div>
            <h1 className="mt-4 text-center text-xs w-[100px]">
              Datos moviles
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#E6F4F9] p-4 rounded-2xl flex justify-center items-center">
              <LogoFiveG />
            </div>
            <h1 className="mt-4 text-center text-xs w-[100px]">
              Velocidad de 4/5G LTE
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#E6F4F9] p-4 rounded-2xl flex justify-center items-center">
              <AvailableLogo />
            </div>
            <h1 className="mt-4 text-center text-xs w-[100px]">
              App disponible iOS y Android
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductBanner;
