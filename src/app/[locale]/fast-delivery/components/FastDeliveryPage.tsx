"use client";
import Button from "@/shared/components/Button";
import Banner from "./Banner";

import CenterWrapper from "@/shared/components/CenterWrapper";
import { useTranslations } from "next-intl";

import HowDoesFastDelivery from "../HowDoesFastDelivery.tsx/HowDoesFastDelivery";
import PhoneBanner from "./PhoneBanner";

import FindOurPoints from "./FindOurPoints";
import FindOurProducts from "./FindOutProducts/FindOurProducts";
import QRBanner from "./QRBanner";

import Accordion from "@/shared/components/Accordion";
import BannerBackground from "@/shared/components/BannerBackground";
import PilaresBackground from "../../../../../public/images/fastdeliverypage/pilares.jpg";
import PilaresBackgroundMobile from "../../../../../public/images/fastdeliverypage/pilaresmobile.jpg";
import ScrollRevealWrapper from "@/shared/components/ScrollRevealWrapper";

const FastDeliveryPage = () => {
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
      <div className="bg-[#EAF2F6]">
        <ScrollRevealWrapper>
          <Banner />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="px-2 2xl:px-96 xl:px-10 lg:px-0">
            <FindOurPoints />
          </div>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <CenterWrapper>
            <Button size="medium" rounded="full" intent="primary">
              {t("chatTelegram")}
            </Button>
          </CenterWrapper>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <div className="px-2 2xl:px-96 xl:px-10 lg:px-0">
            <HowDoesFastDelivery />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="  2xl:px-96 xl:px-10 lg:px-0 z-1 relative mt-9 mb-9">
            <CenterWrapper>
              <Button size="medium" rounded="full" intent="primary">
                {t("chatTelegram")}
              </Button>
            </CenterWrapper>
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
            <PhoneBanner />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="px-2 2xl:px-[370px] xl:px-10 lg:px-0">
            <FindOurProducts />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
            <QRBanner title={t("downloadApp")} />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <h1 className="sm:text-xl text-center md:text-base lg:text-lg xl:text-4xl mb-5  font-bold text-[#333333]">
            {t("titleFAQS")}
          </h1>
          <div className="px-2 2xl:px-96 xl:px-10 lg:px-0 ">
            <Accordion items={items} />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <div className="mt-7 ">
            <BannerBackground
              bgMobile={PilaresBackgroundMobile}
              imageUrl={PilaresBackground}
            />
          </div>
        </ScrollRevealWrapper>
      </div>
    </>
  );
};

export default FastDeliveryPage;
