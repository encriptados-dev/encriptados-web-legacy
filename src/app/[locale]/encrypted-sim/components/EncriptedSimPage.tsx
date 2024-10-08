import { useTranslations } from "next-intl";

import BannerConnect from "./BannerConnect";
import EncryptedSimBanner from "./EncryptedSimBanner";
import FeaturesList from "./FeaturesList";
import OurObjetive from "./OurObjetive";
import BannerSecure from "./BannerSecure";
import PayForUse from "./PayForUse";
import WhyCallSim from "./WhyCallSim/WhyCallSim";
import BannerCoverage from "./BannerCoverage";

const EncriptedSim = () => {
  const t = useTranslations("EncryptedSimPage");

  return (
    <>
      <div className="flex justify-center items-center mb-16 mt-16">
        <BannerConnect />
      </div>

      <div className="justify-center flex bg-cyan-gradient flex-col items-center">
        <div className="mt-8">
          <EncryptedSimBanner />
        </div>

        <div className="max-w-[1000px]  justify-center mt-16 items-center">
          <h1 className="sm:text-xl md:text-base lg:text-lg xl:text-4xl font-bold text-center text-[#333333] mt-16 mb-16">
            {t("improveYourSecurity.titleImproveYourSecurity")}
          </h1>
          <FeaturesList />
        </div>

        <div className="max-w-[1000px]  justify-center mt-16 items-center ">
          <OurObjetive />
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-xl w-8/12 md:text-base lg:text-lg xl:text-4xl font-bold text-center text-[#333333] mt-16 mb-16">
          {t("comunicationTitle")}
        </h1>
      </div>
      <div className="flex justify-center items-center mt-16 mb-16">
        <BannerSecure />
      </div>
      <div className="w-full flex justify-center">
        <div className="items-center xl:w- lg:w-9/12 md:w-10/12 sm:w-11/12 w-full">
          <div className="w-full">
            <PayForUse />
          </div>
        </div>
      </div>

      <div>
        <h1 className="sm:text-xl md:text-base lg:text-lg xl:text-4xl font-bold text-center text-[#333333] mt-16 mb-16">
          {t("whyCallWithEncryptedSIM.title")}
        </h1>
      </div>
      <div className=" flex justify-center">
        <div className="w-9/12 ">
          <WhyCallSim />
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="w-9/12 "></div>
      </div>

      <div className="mt-16">
        <BannerCoverage />
      </div>
    </>
  );
};

export default EncriptedSim;
