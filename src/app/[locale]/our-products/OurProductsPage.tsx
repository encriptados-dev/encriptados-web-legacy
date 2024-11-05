import React from "react";
import FilterProductsBar from "./components/FilterProductsBar/FilterProductsBar";
import CardOurProducts from "./components/CardOurProducts";
import BannerActivate from "./components/BannerActivate";
import BannerCards from "./components/BannerCards";
import AnonymousBanner from "../bne-sim/components/BannerAnonymous";
import BannerCoverage from "@/shared/BannerCoverage";
import BannerSecureMdm from "./components/BannerSecureMdm";
import DownloadAppBanner from "./components/DownloadAppBanner";
import FormOurProducts from "./components/FormOurProducts";
import { useTranslations } from "next-intl";

const OurProductsPage = () => {
  const t = useTranslations("OurProductsPage");
  return (
    <>
      <div className="p-8">
        <h1 className="bg-gradient-to-r text-3xl justify-center font-bold  flex items-center from-[#000000] to-[#35CDFB] bg-clip-text text-transparent mb-4 text-center">
          Nuestros productos
        </h1>
        <FilterProductsBar />
      </div>

      <div className="my-20">
        <CardOurProducts />
      </div>
      <div className="w-full m-0 p-0">
        <BannerActivate />
      </div>
      <div className="py-28 bg-white">
        <BannerCards />
      </div>
      <div className="py-20">
      <AnonymousBanner />
      </div>
      <div className="mt-16">
        <BannerCoverage />
      </div>
      <div className="">
        <BannerSecureMdm />
      </div>

      <div className="">
        <DownloadAppBanner />
      </div>

      <div>
        <FormOurProducts  />
      </div>    

    </>
  );
};

export default OurProductsPage;
