import Button from "@/shared/components/Button";
import Image from "next/image";
import React from "react";
import QR from "../../../../../public/images/fastdeliverypage/QR.png";
import AppleSvg from "@/svgs/AppleSvg";
import PlayStoreSvg from "@/svgs/PlayStoreSvg";
import DescargarApkSvg from "@/svgs/DownloadApkSvg";

const QRBanner = () => {
  return (
    <div className="flex mt-16 mb-16 justify-center">
      <div className="bg-cyan-gradient w-full h-[490px] py-5 md:h-[330px] rounded-2xl flex flex-col md:flex-row justify-center items-center overflow-hidden relative p-6">
        <div className="flex flex-col gap-y-3 items-center text-center md:items-start md:text-left">
          <h1 className="text-black font-bold text-2xl w-6/12 ">
            Descarga la App para iOS & Android y compra ahora tu sim
          </h1>
          <div className="flex gap-x-4 mt-2">
            <AppleSvg />
            <PlayStoreSvg />
          </div>
          <h1 className="font-semibold mt-4">
            O Escanea el código QR con tu cámara
          </h1>
        </div>

        <Image
          width={220}
          height={220}
          quality={100}
          title="Image"
          src={QR}
          alt="Image"
          className="mt-6 md:mt-0 md:translate-y-[50px]"
        />
      </div>
    </div>
  );
};

export default QRBanner;
