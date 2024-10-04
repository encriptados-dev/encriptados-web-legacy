import Button from "@/shared/components/Button";
import Banner from "./Banner";

import CenterWrapper from "@/shared/components/CenterWrapper";
import { useTranslations } from "next-intl";

import HowDoesFastDelivery from "../HowDoesFastDelivery.tsx/HowDoesFastDelivery";
import PhoneBanner from "./PhoneBanner";

import FindOurPoints from "./FindOurPoints";
import FindOurProducts from "./FindOutProducts/FindOurProducts";
import QRBanner from "./QRBanner";

const FastDeliveryPage = () => {
  const t = useTranslations("DeliveryPage");
  return (
    <>
      <div className="bg-[#EAF2F6]">
        <Banner />

        <div className="px-2 2xl:px-96 xl:px-10 lg:px-0">
          <FindOurPoints />
        </div>
        <CenterWrapper>
          <Button size="medium" rounded="full" intent="primary">
            {t("chatTelegram")}
          </Button>
        </CenterWrapper>
        <div className="px-2 2xl:px-96 xl:px-10 lg:px-0">
          <HowDoesFastDelivery />
        </div>

        <div className="  2xl:px-96 xl:px-10 lg:px-0 z-1 relative mt-9 mb-9">
          <CenterWrapper>
            <Button size="medium" rounded="full" intent="primary">
              {t("chatTelegram")}
            </Button>
          </CenterWrapper>
        </div>
        <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
          <PhoneBanner />
        </div>
        <div className="px-2 2xl:px-[370px] xl:px-10 lg:px-0">
          <FindOurProducts />
        </div>
        <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
          <QRBanner />
        </div>
      </div>
    </>
  );
};

export default FastDeliveryPage;
