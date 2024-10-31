import React from "react";
import FilterProductsBar from "./components/FilterProductsBar/FilterProductsBar";
import { useTranslations } from "next-intl";

const OurProductsPage = () => {
  const t = useTranslations("OurProductsPage");
  return (
    <>
      <h1 className="bg-gradient-to-r text-3xl justify-center font-bold  flex items-center from-[#000000] to-[#35CDFB] bg-clip-text text-transparent mb-4 text-center">
        {t("filterProducts.title")}
      </h1>

      <FilterProductsBar />
    </>
  );
};

export default OurProductsPage;
