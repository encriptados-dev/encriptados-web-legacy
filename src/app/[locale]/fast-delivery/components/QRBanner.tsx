import Button from "@/shared/components/Button";
import Image from "next/image";
import React from "react";
import QR from "../../../../../public/images/fastdeliverypage/QR.png";

const QRBanner = () => {
  return (
    <div className="flex mt-16 mb-16 justify-center">
      <div className="bg-cyan-gradient w-full h-[450px] md:h-[330px] rounded-2xl flex flex-col md:flex-row md:justify-evenly items-center overflow-hidden relative p-6">
        <div className="flex flex-col gap-y-3    md:justify-normal lg:justify-normal">
          <h1 className="text-black font-bold text-2xl w-5/12">
            Descarga la App para iOS & Android y compra ahora tu sim
          </h1>
          <div className="flex gap-x-2 justify-center md:justify-normal lg:justify-normal">
            <h1 className="text-white text-xl">$650.00</h1>
            <h1 className="text-red-500 text-xl line-through">$750.00</h1>
          </div>
          <div className="w-full flex justify-center md:justify-normal lg:justify-normal ">
            <Button
              rounded="full"
              customStyles="bg-black"
              size="medium"
              intent="solid"
            >
              Comprar Ahora
            </Button>
          </div>
        </div>
        <Image
          width={220}
          height={220}
          quality={100}
          title="Image"
          src={QR}
          alt="Image"
          className="mt-4 translate-y-[0px] md:mt-0 xl:translate-y-[50px] md:translate-y-[50px]"
        />
      </div>
    </div>
  );
};

export default QRBanner;
