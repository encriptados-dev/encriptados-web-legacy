import React from "react";
import Image from "next/image";
import CircleTitle from "@/shared/components/CircleTitle";
import { useTranslations } from "next-intl";

const Women = "/images/encrypted-sim/Encrypted_Women.png";
const Man = "/images/encrypted-sim/Encrypted_Man.png";
const Sim = "/images/encrypted-sim/Encrypted_sim_card.png";

const EncryptedSimBanner = () => {
  const t = useTranslations("EncryptedSimPage");
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center ">
      <div className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] relative  overflow-hidden flex justify-center items-center mb-4 md:mb-0">
        <Image
          className="-scale-x-100 translate-y-9"
          objectFit="cover"
          quality={100}
          title="Image"
          src={Women}
          alt="Image"
          loading="eager"
          layout="fill"
        />
      </div>

      <div className="flex flex-col justify-center gap-y-8 text-center items-center w-full py-2">
        <CircleTitle size="large" rounded="full" intent="secondary">
          {t("encryptedTitleButon")}
        </CircleTitle>
        <Image
          width={400}
          height={400}
          quality={100}
          title="Image"
          src={Sim}
          alt="Image"
          loading="eager"
        />
        <h1 className="sm:text-xl md:text-base lg:text-lg xl:text-4xl font-bold text-[#333333]">
          {t("encryptedTitle")}
        </h1>
        <p className="text-black sm:text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {t("encryptedDescription")}
        </p>
      </div>

      <div className="h-[300px] w-[300px] md:h-[600px] md:w-[600px]  relative  overflow-hidden flex justify-center items-center mt-4 md:mt-0">
        <Image
          objectFit="cover"
          quality={100}
          title="Image"
          src={Man}
          alt="Image"
          loading="eager"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default EncryptedSimBanner;
