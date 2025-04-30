import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ChatMailImg from "../../../../../public/images/new/chatmail-about.png";
import CheckBlackArrow from "../svg/CheckBlackArrow";
import CartWhite from "../svg/CartWhite";
import HeadPhoneGray from "../svg/HeadPhoneGray";

const ChatMail = () => {
  //   const FloatSimCard = "/images/encrypted-sim/Encrypted_float_image.png";

  const t = useTranslations("chatMailContent");
  return (
    <div className="container max-w-6xl mx-auto my-4 lg:my-0 xl:my-10 xl:mb-14 px-8">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 items-center">
        {/* Imagen */}
        <div className="mt-2 lg:mt-6 block lg:hidden">
          <Image
            alt="Chatmail"
            // width={400}
            // height={400}
            src={ChatMailImg}
            className="max-w-full h-auto"
          />
        </div>
        {/* Texto */}
        <div className="w-full lg:w-5/12">
          <h1 className="text-[28px] sm:text-3xl lg:text-[44px] font-bold text-[#131313]">
            {t("title")}
          </h1>
          <p className="font-normal text-sm text-black lg:py-4 mb-4 lg:mb-0">
            {t("subtitle")}
          </p>
          <ul>
            <li className="flex gap-2 items-center font-normal text-base text-black">
              <CheckBlackArrow />
              {t("features.0")}
            </li>
            <li className="flex gap-2 items-center font-normal text-base text-black">
              <CheckBlackArrow />
              {t("features.1")}
            </li>
            <li className="flex gap-2 items-center font-normal text-base text-black">
              <CheckBlackArrow />
              {t("features.2")}
            </li>
          </ul>

          <div className="my-6 relative max-w-sm flex w-full flex-col">
            <div className="flex flex-row gap-4">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="html-custom"
                >
                  <input
                    name="framework-custom"
                    type="radio"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-transparent bg-[#2563EB] checked:border-[#2563EB] transition-all"
                    id="html-custom"
                    checked
                  />
                  <span className="absolute bg-white w-[10px] h-[10px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-3 text-black cursor-pointer text-base font-medium"
                  htmlFor="html-custom"
                >
                  {t("licenseOptions.0.label")}
                </label>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="react-custom"
                >
                  <input
                    name="framework-custom"
                    type="radio"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#9CA3AF] bg-white checked:border-slate-300 transition-all"
                    id="react-custom"
                  />
                  <span className="absolute bg-[#D2D5DA] w-[10px] h-[10px] rounded-full opacity-100 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-3 text-black cursor-pointer text-base font-medium"
                  htmlFor="react-custom"
                >
                  {/* Licencia 6 Meses */}
                  {t("licenseOptions.1.label")}
                </label>
              </div>
            </div>
          </div>
          <div className="border-b border-[#D9D9D9]"></div>

          <div className="pt-4">
            <h4 className="font-normal text-xs text-black">{t("pricing.label")}</h4>
            <h2 className="font-bold text-2xl text-black">{t("pricing.amount")}</h2>
            <div className="mt-4 flex flex-row gap-4">
              <button className="w-60 h-14 bg-black rounded-full text-base font-medium text-white flex justify-center items-center gap-2">
                {t("buttons.buyNow")}<CartWhite />
              </button>

              <button className="w-52 h-14 bg-[#EDF4F6] rounded-full text-base font-medium text-[#00516B] flex justify-center items-center gap-2">
              {t("buttons.support")} 
                <HeadPhoneGray />
              </button>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="mt-6 hidden lg:block">
          <Image
            alt="Chatmail"
            // width={400}
            // height={400}
            src={ChatMailImg}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMail;
