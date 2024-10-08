import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BannerSecure = () => {
  const FloatSimCard = "/images/encrypted-sim/Encryped_manwithphone.png";

  const t = useTranslations("EncryptedSimPage");

  return (
    <div className="flex flex-col md:flex-row">
      {" "}
      {/* Cambia aquí para ser responsive */}
      <div className="w-full md:w-[650px] h-[500px] relative rounded-3xl overflow-hidden">
        <Image
          quality={100}
          title="Image"
          src={FloatSimCard}
          alt="Image"
          loading="eager"
          layout="fill"
          className="-scale-x-100"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-3 p-10 items-center w-full md:w-[450px]">
        <div className="bg-[#6ADBFF] w-full md:w-[450px] h-[150px] flex justify-center items-center rounded-2xl md:-translate-x-20">
          <h1 className="text-lg font-bold">{t("secureAndEasyToUse")}</h1>
        </div>
        <div className="bg-[#DDF7FF] w-full md:w-[450px] p-10 h-[150px] flex justify-center items-center rounded-2xl md:-translate-x-20">
          <h1 className="text-lg">{t("secureAndEasyToUseDescription")}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerSecure;
