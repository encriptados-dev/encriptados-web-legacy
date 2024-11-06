import Button from "@/shared/components/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BeDistributorEncrypted = () => {
  const t = useTranslations("DistributorsPage");

  const Build = "/images/distributors/build.png";
  const ManHow = "/images/distributors/man-how.png";

  return (
    <div className="w-full bg-gradient-to-r from-[#00372B] via-black to-[#022530] flex justify-center items-center py-10 md:py-16">
      <div className="h-auto w-full flex flex-col md:flex-row bg-black">
        <div className="relative w-full md:w-6/12 flex justify-end">
          <Image
            alt="image"
            width={500}
            height={500}
            src={ManHow}
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-6/12 flex flex-col justify-center items-center gap-y-4 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Build})` }}
          />

          <div className="absolute inset-0 bg-black opacity-65" />

          <div className="relative z-10 flex flex-col justify-center items-center gap-y-4 p-6 md:p-12 lg:p-24">
            <h1 className="font-bold text-white text-3xl md:text-4xl ">
              {t("beEncryptedDistributor.title")}
            </h1>
            <p className="text-white">
              {t("beEncryptedDistributor.description")}
            </p>
            <div className="flex w-full ">
              <Button rounded="full" intent="primary">
                {t("banner.sendRequest")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeDistributorEncrypted;
