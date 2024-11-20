import React from "react";
import CardProduct from "./CardProduct";
import CardProductBanner from "./CardProductBanner";
import Features from "./Features";
import Advantages from "./Advantages";
import BannerCoverage from "@/shared/BannerCoverage";

import Accordion from "@/shared/components/Accordion";
import { useTranslations } from "next-intl";

const ProductByIdPage = () => {
  const t = useTranslations("DeliveryPage");
  const items = [
    {
      title: t("faqs.immediateDelivery.title"),
      content: t("faqs.immediateDelivery.content"),
    },
    {
      title: t("faqs.whereDelivery.title"),
      content: t("faqs.whereDelivery.content"),
    },
    {
      title: t("faqs.costDelivery.title"),
      content: t("faqs.costDelivery.content"),
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center w-10/12 mx-auto gap-x-12 mt-24 mb-24">
        <div className="w-full md:w-5/12 mb-4 md:mb-0">
          <CardProduct />
        </div>
        <div className="w-full md:w-5/12">
          <CardProductBanner />
        </div>
      </div>

      <div className="mt-24">
        <Features />
      </div>

      <div className="">
        <Advantages />
      </div>

      <div className="">
        <BannerCoverage />
      </div>

      <div className="px-2 2xl:px-96 xl:px-10 lg:px-0  mt-24 mb-24">
        <h1 className="sm:text-xl text-center md:text-base lg:text-lg xl:text-4xl mb-5  font-bold text-[#333333]">
          Preguntas frecuentes
        </h1>
        <Accordion items={items} />
      </div>
    </>
  );
};

export default ProductByIdPage;
