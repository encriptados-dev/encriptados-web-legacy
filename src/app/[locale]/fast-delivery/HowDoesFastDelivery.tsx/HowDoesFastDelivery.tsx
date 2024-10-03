import React from "react";
import HowDoesFastDeliveryCard from "./HowDoesFastDeliveryCard";
import { useTranslations } from "next-intl";
import PhoneContact from "../../../../../public/images/fastdeliverypage/phone.png";
import SelectedProduct from "../../../../../public/images/fastdeliverypage/selectproduct.png";
import Telegram from "../../../../../public/images/fastdeliverypage/contacttelegram.png";

const HowDoesFastDelivery = () => {
  const t = useTranslations("DeliveryPage.howDoesFastDeliveryOptions");
  const t2 = useTranslations("DeliveryPage");

  const cards = [
    {
      title: t("deliveyPoint.title"),
      description: t("deliveyPoint.description"),
      image: SelectedProduct,
      imagePosition: "bottom",
    },
    {
      title: t("contactUsOnTelegram.title"),
      description: t("contactUsOnTelegram.description"),
      image: Telegram,
      imagePosition: "top",
    },
    {
      title: t("pickUpYourPhone.title"),
      description: t("pickUpYourPhone.description"),
      image: PhoneContact,
      imagePosition: "bottom",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center bg-cyan-black rounded-2xl h-[360px] w-11/12 mt-9 relative sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-7/12">
          <h1 className="text-4xl text-white font-bold mt-10 text-center">
            {t2("howDoesFastDeliveryTitle")}
          </h1>
          <div className="flex flex-col xl:flex-row  justify-center items-center absolute top-32 w-full px-4 space-y-4 md:space-y-0 md:space-x-4">
            {cards.map((card, index) => (
              <div className="flex-1" key={index}>
                <HowDoesFastDeliveryCard
                  imagePosition={card.imagePosition as any}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDoesFastDelivery;
