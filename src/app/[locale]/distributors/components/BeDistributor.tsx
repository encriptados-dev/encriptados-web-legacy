import { useTranslations } from "next-intl";
import React from "react";
import ArrowDistributors from "../icons/ArrowDistributors";
import Image from "next/image";

const BeDistributor = () => {
  const t = useTranslations("DistributorsPage");

  const ManDistributor = "/images/distributors/man-distributors.png";

  const GirlDistributor = "/images/distributors/girl-distributors.png";
  return (
    <div className="w-full  bg-gradient-to-r from-[#00372B] via-black to-[#022530] flex justify-center items-center py-10 md:py-16 px-4">
      <div className="w-6/12 flex gap-x-5">
        <div className=" w-6/12 bg-[#0E0E0E] rounded-2xl p-8 ">
          <ArrowDistributors />
          <h1 className="text-white text-4xl font-bold  mt-2">
            {t("toBeADistributor.title")}
          </h1>
          <p className="text-[#9F9F9F] mt-2">
            {t("toBeADistributor.description")}
          </p>
        </div>
        <div className=" w-6/12 bg-[#0E0E0E] rounded-2xl p-5">
          <div className="flex">
            <Image
              className="translate-x-3"
              alt="image"
              src={ManDistributor}
              width={200}
              height={200}
            />
            <Image alt="image" src={GirlDistributor} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeDistributor;
