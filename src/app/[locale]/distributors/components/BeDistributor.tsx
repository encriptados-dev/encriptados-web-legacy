import { useTranslations } from "next-intl";
import React from "react";
import ArrowDistributors from "../icons/ArrowDistributors";
import Image from "next/image";

const BeDistributor = () => {
  const t = useTranslations("DistributorsPage");

  const ManDistributor = "/images/distributors/man-distributors.png";
  const GirlDistributor = "/images/distributors/girl-distributors.png";

  return (
    <div className="w-full bg-gradient-to-r from-[#00372B] via-black to-[#022530] flex justify-center items-center py-10 md:py-16 px-4">
      <div className="max-w-screen-lg w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-6/12 bg-gradient-to-r from-[#35CDFB] via-[#35CDFB] to-[#00FFB2] p-0.5 rounded-2xl">
          <div className="bg-[#0E0E0E] rounded-xl p-14">
            <ArrowDistributors />
            <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
              {t("toBeADistributor.title")}
            </h1>
            <p className="text-[#9F9F9F] mt-10 text-sm md:text-base">
              {t("toBeADistributor.description")}
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12 rounded-2xl p-5 relative flex items-center justify-center">
          <div className="flex relative">
            <Image
              className="z-10 absolute w-1/2 md:w-auto"
              alt="Man Distributor"
              src={ManDistributor}
              width={200}
              height={200}
            />
            <Image
              className="z-20 mt-24 ml-24 w-1/2 md:w-auto"
              alt="Girl Distributor"
              src={GirlDistributor}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeDistributor;
