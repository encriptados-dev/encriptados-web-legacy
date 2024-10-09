import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

const PayForUse = () => {
  const Man = "/images/encrypted-sim/Encrypted_man_cellphone.png";

  const t = useTranslations("EncryptedSimPage");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-y-8">
      
      <div className="relative w-full h-[600px] p-10 rounded-3xl shadow-md overflow-hidden bg-[#def7ff]">
        <div className="absolute inset-0 h-[600px] bg-custom-gradient-img z-10"></div>

        <div className="inset-0 z-0">
          <Image
            src={Man}
            alt="Descripción de la imagen"
            layout="fill"
            className="-scale-x-100 translate-y-40 object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col rounded-3xl z-20 p-10">
          <div >
            <h2 className="text-black font-semibold text-4xl mb-2 p-2">
              {t("payOnlyForWhatYouUseTitle")}
            </h2>
            <p className="text-black text-2xl p-2">
              {t("payOnlyForWhatYouUseDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] border border-gray-300 rounded-3xl flex bg-[#6ADDFF] justify-end shadow-md md:ml-5">
        <p className="text-black font-bold text-6xl text-leftx p-16 self-center">
          {t("payOnlySecondCard")}
        </p>
        <ArrowUpRight className="absolute text-black translate-x- h-20 w-20" />
      </div>
    </div>
  );
};

export default PayForUse;
