"use client";

import OurSimCard from "../../bne-sim/components/svgs/OurSimCard";
import AdsClickSvg from "/public/images/bne-sim/svg/ads_click.svg";
import CellTowerSvg from "/public/images/bne-sim/svg/cell_tower.svg";
import Rotate_rightSvg from "/public/images/bne-sim/svg/rotate_right.svg";
import SimCardSvg from "/public/images/bne-sim/svg/sim_card.svg";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const BannerCards: React.FC = () => {
  const t = useTranslations("BneSimPage");
  const carouselRef = useRef<HTMLDivElement>(null);
  let isDragging = false;

  const handleMouseDrag = (event: React.MouseEvent) => {
    if (isDragging && carouselRef.current) {
      carouselRef.current.scrollLeft += event.movementX * -1;
    }
  };

  const handleTouchDrag = (event: React.TouchEvent) => {
    if (carouselRef.current) {
      const touch = event.touches[0];
      carouselRef.current.scrollLeft += touch.clientX * -0.5; // Ajusta la sensibilidad si es necesario
    }
  };

  return (
    <div className="md:w-11/12 flex lg:w-full xl:w-[1272px]  w-full  mx-auto mt-4 mb-4 font-bold ">
      {/* Texto de encabezado */}
      <div className="w-5/12 pr-7 space-y-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-black">
          Tu SIM o E-SIM tienen estos superpoderes
        </h2>
        <p className="text-xl font-light text-black">
          Conectate con todo el mundo en todo el mundo, cuando lo necesites y
          oculta tu información
        </p>
      </div>

      {/* Contenedor de tarjetas en disposición horizontal */}
      <div
        className="flex flex-row gap-4 lg:w-2/3 w-5/6 overflow-x-auto cursor-pointer no-scrollbar touch-pan-x"
        ref={carouselRef}
        onMouseDown={() => (isDragging = true)}
        onMouseUp={() => (isDragging = false)}
        onMouseMove={handleMouseDrag}
        onTouchMove={handleTouchDrag}
      >
        {/* Tarjetas */}
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={CellTowerSvg}
          title={t("OurSimCard.title")}
          description={t("OurSimCard.description")}
          classCard="flex-shrink-0 w-60 sm:w-60 h-90 rounded-2xl p-6"
        />
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={AdsClickSvg}
          title={t("OurSimCard.title2")}
          description={t("OurSimCard.description2")}
          classCard="flex-shrink-0 w-60 sm:w-60 h-90 rounded-2xl p-6"
        />
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={SimCardSvg}
          title={t("OurSimCard.title4")}
          description={t("OurSimCard.description4")}
          classCard="flex-shrink-0 w-60 sm:w-60 h-90 rounded-2xl p-6"
        />
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={Rotate_rightSvg}
          title={t("OurSimCard.title3")}
          description={t("OurSimCard.description3")}
          classCard="flex-shrink-0 w-60 sm:w-60 h-90 rounded-2xl p-6"
        />
      </div>
    </div>
  );
};

export default BannerCards;
