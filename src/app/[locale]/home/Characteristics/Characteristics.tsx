import { useTranslations } from "next-intl";
import React from "react";

const Characteristics = () => {
  const t = useTranslations("characteristicsData");
  const stepIds = [1, 2, 3, 4] as const;

  const steps = stepIds.map((id) => ({
    id,
    title: t(`steps.${id}.title` as const),
    description: t(`steps.${id}.description` as const),
    image: "/images/new/mobile1.png",
  }));
  return (
    <>
      <h2 className="text-black text-2xl font-bold whitespace-nowrap my-4 pb-4 text-center lg:text-left">
        {t("title")}
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Imagen */}
            <div className="bg-white rounded-[14px] w-full h-[289px] p-4">
              <img src={step.image} alt={step.title} className="mx-auto" />
            </div>

            {/* Texto */}
            <div className="mt-2">
              <h3 className="text-lg text-left font-semibold mb-2 mt-5 text-[#101010]">
                {step.title}
              </h3>
              <p className="text-[#101010] text-sm font-light text-justify">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characteristics;
