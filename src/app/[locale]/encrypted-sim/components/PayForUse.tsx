import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PayForUse = () => {
  const Man = "/images/encrypted-sim/Encrypted_man_cellphone.png";

  const t = useTranslations("EncryptedSimPage");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-y-8 ">
      <div className="relative w-full h-[500px]  rounded-3xl shadow-md overflow-hidden">
        {/* Degradado en los lados */}
        <div className="absolute inset-0 z-10">
          <div className="w-full h-full bg-gradient-to-l from-transparent to-[#DDF7FF]"></div>
          <div className="w-full h-full bg-gradient-to-r  absolute inset-0"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src={Man}
            alt="Descripción de la imagen"
            layout="fill"
            className="-scale-x-100 translate-y-24 object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col rounded-3xl z-20">
          <div className="bg-gradient-to-b from-[#DDF7FF] to-transparent  shadow-2xl shadow-[#DDF7FF] h-full p-4">
            <h2 className="text-black font-semibold text-3xl mb-2 p-2">
              {t("payOnlyForWhatYouUseTitle")}
            </h2>
            <p className="text-black text-2xl p-2">
              {t("payOnlyForWhatYouUseDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] border border-gray-300 rounded-3xl flex items-center justify-center bg-[#6ADDFF] shadow-md md:ml-5">
        <p className="text-black font-bold text-3xl text-center">
          {t("payOnlySecondCard")}
        </p>
      </div>
    </div>
  );
};

export default PayForUse;
