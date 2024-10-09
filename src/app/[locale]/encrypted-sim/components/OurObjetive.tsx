import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const OurObjetive = () => {
  const FloatSimCard = "/images/encrypted-sim/Encrypted_float_image.png";

  const t = useTranslations("EncryptedSimPage");
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-between gap-x-5 items-center">
        <div className="w-full lg:w-5/12">
          <h1 className="text-3xl font-bold">{t("ourObjetiveTitle")}</h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl">
            {t("ourObjetiveDescription")}
          </p>
        </div>

        <div className="bg-[#6ADCFF] rounded-3xl p-7 flex justify-center items-center mt-5 lg:mt-0">
          <Image alt="SimCard" width={400} height={400} src={FloatSimCard} />
        </div>
      </div>
    </div>
  );
};

export default OurObjetive;
