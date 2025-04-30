"use client";
import Button from "@/shared/components/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import MobileProgram from "../../../../../public/images/new/mobile2.png";
import MobileProgramMob from "../../../../../public/images/new/mobile2-mob.png";
import ListOfCards from "./ListOfCards";
import CheckCircle from "../svg/CheckCircle";

const Programs = () => {
  const t = useTranslations("DistributorsPage");
  const [columns, setColumns] = useState(1);
  return (
    <div className="flex mt-16 lg:mb-0 justify-center">
      <div className="bg-black w-full lg:rounded-[44px] flex flex-col xl:flex-row-reverse items-center overflow-hidden relative pt-14 lg:py-28 lg:px-20">
        <div className="flex flex-col gap-y-3 text-center md:justify-normal lg:justify-normal">
          <div className="w-full flex justify-center items-center">
            <div>
              {/* Contenido principal */}
              <div className="flex justify-center items-center">
                <div className="w-full">
                  <div className="bg-gradient "></div>
                  <div className="bg-gradient-img"></div>
                  <div className="flex items-center justify-center px-6">
                    <h1 className="text-white text-2xl lg:text-[32px] text-center lg:text-left mb-6 sm:mb-7 font-bold">
                      {t("title")}
                    </h1>
                  </div>

                  {/* Lista de Tarjetas */}
                  <div className="px-6">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                      <ListOfCards
                        columns={columns} // Utiliza el estado para las columnas
                        titleColor="white"
                        descriptionColor="#969696"
                        bgColorCard="#0E0E0E"
                        bgIconCard="#0E0E0E"
                        items={[
                          {
                            icon: <CheckCircle />,
                            title: t("benefitsCards.card1.title"),
                            description: t("benefitsCards.card1.description"),
                          },
                          {
                            icon: <CheckCircle />,
                            title: t("benefitsCards.card2.title"),
                            description: t("benefitsCards.card2.description"),
                          },
                          {
                            icon: <CheckCircle />,
                            title: t("benefitsCards.card3.title"),
                            description: t("benefitsCards.card3.description"),
                          },
                          {
                            icon: <CheckCircle />,
                            title: t("benefitsCards.card4.title"),
                            description: t("benefitsCards.card4.description"),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          quality={100}
          title="Image"
          src={MobileProgram}
          alt="Image"
          className="md:-ml-10 hidden lg:block"
        />

        <Image
          quality={100}
          title="Image"
          src={MobileProgramMob}
          alt="Image"
          className="md:-ml-10 block lg:hidden"
        />
      </div>
    </div>
  );
};

export default Programs;
