import React from "react";
import BannerConect from "./BannerConnect";
import { useTranslations } from "next-intl";
import CoverageMore from "./CoverageMore";

const EncryptedSimPage = () => {
  const t = useTranslations("EncryptedSimPage");
  return (
    <>
      <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 mt-11 w-full flex justify-center ">
        <BannerConect />
      </div>

      <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 mt-11 w-full justify-center">
        <CoverageMore />
      </div>
      <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 mt-11 w-full justify-center">
        <h1>Testing</h1>
      </div>
    </>
  );
};

export default EncryptedSimPage;
