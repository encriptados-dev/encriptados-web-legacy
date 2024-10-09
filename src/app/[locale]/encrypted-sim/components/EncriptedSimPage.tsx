import { useTranslations } from "next-intl";
import BannerConnect from "./BannerConnect";
import EncryptedSimBanner from "./EncryptedSimBanner";
import FeaturesList from "./FeaturesList";
import OurObjetive from "./OurObjetive";
import BannerSecure from "./BannerSecure";
import PayForUse from "./PayForUse";
import WhyCallSim from "./WhyCallSim/WhyCallSim";
import SimProductsPage from "./SimProducts";
import CustomShapeDivider from "./CustomShapeDivider";
import BannerCoverage from "@/shared/BannerCoverage";

const EncryptedSim = () => {
  const t = useTranslations("EncryptedSimPage");

  return (
    <>
      <div className="bg-[#f4f8fa]">
        <div className="bg-black h-[300px]">
          <CustomShapeDivider />
        </div>

        <div className="flex justify-center items-center max-w-[1100px] m-auto p-4 translate-y-[-250px] mb-[-250px] ">
          <BannerConnect />
        </div>

        <div className="max-w-[1100px] mx-auto p-4 ">
          <SimProductsPage />
        </div>     
     
        <div className="justify-center flex bg-cyan-gradient flex-col items-center mt-6">
          <div>
            <EncryptedSimBanner />
          </div>
        </div>

        <div>
          <div className="max-w-[1100px] justify-center m-auto mt-16 items-center p-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#333333] mt-16 mb-16">
              {t("improveYourSecurity.titleImproveYourSecurity")}
            </h2>
            <FeaturesList />
          </div>
        </div>

        <div className="bg-[#f4f8fa] py-[8vh]">
          <div className="max-w-[1100px] m-auto justify-center items-center p-4 ">
            <OurObjetive />
          </div>
        </div>
      </div>

      <div className="bg-[#E7F4F8] py-[8vh]">
        <div className="flex justify-center pt-[8vh] ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#333333] max-w-[1100px]">
            {t("comunicationTitle")}
          </h2>
        </div>
        <div className="flex justify-center items-center py-[8vh] bg-[#E7F4F8] m-auto max-w-[1100px] p-4">
          <BannerSecure />
        </div>
      </div>

      <div className="items-center p-4 w-full py-[8vh] max-w-[1100px] m-auto">
        <div className="w-full m-auto">
          <PayForUse />
        </div>
      </div>

      <div className="max-w-[1100px] m-auto p-4">
        <div>
          <h2 className=" text-3xl sm:text-4xl font-bold text-center text-[#333333] mt-16 mb-16">
            {t("whyCallWithEncryptedSIM.title")}
          </h2>
        </div>
        <div className=" flex justify-center">
          <div>
            <WhyCallSim />
          </div>
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

export default EncryptedSim;
