"use client";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import StepperBuy from "@/shared/components/StepperBuy/StepperBuy";
import { useTranslations } from "next-intl";
import React from "react";

const WhereUseYourSim = () => {
  const t = useTranslations("MayaData");
  return (
    <>
      <div className="flex justify-center flex-col items-center ">
        <h1 className="text-base text-center pt-14 font-bold md:text-3xl xl:text-4xl">
          {t("whereUseSim")}
        </h1>
        <p className="text-base text-center mt-4   md:text-3xl w-6/12 xl:text-2xl">
          {t("connectInternet")}
        </p>
      </div>
      <BasicFormProvider
        defaultValue={{
          selectedcardvalue: "esim_recharge",
          selectedregion: "region",
        }}
        submit={(data) => {
          console.log(data);
        }}
      >
        <StepperBuy optionType="irasim" />
      </BasicFormProvider>
    </>
  );
};

export default WhereUseYourSim;
