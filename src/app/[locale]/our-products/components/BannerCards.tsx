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

  // Función para desplazar con el clic y el scroll
  const handleMouseDrag = (event: React.MouseEvent) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += event.movementX * -1;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1100px] mx-auto">
      {/* Texto de encabezado */}
      <div className="lg:w-1/3 space-y-4">
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
        className="flex flex-col lg:flex-row gap-4 lg:w-2/3 overflow-x-auto cursor-pointer no-scrollbar"
        ref={carouselRef}
        onMouseMove={handleMouseDrag}
        onWheel={(e) => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft += e.deltaY;
          }
        }}
      >
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={CellTowerSvg}
          title={t("OurSimCard.title")}
          description={t("OurSimCard.description")}
          classCard="flex-shrink-0 w-60 h-90 rounded-2xl p-6"
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={AdsClickSvg}
          title={t("OurSimCard.title2")}
          description={t("OurSimCard.description2")}
          classCard="flex-shrink-0 w-60 h-90 rounded-2xl p-6"
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={SimCardSvg}
          title={t("OurSimCard.title4")}
          description={t("OurSimCard.description4")}
          classCard="flex-shrink-0 w-60 h-90 rounded-2xl p-6"
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={Rotate_rightSvg}
          title={t("OurSimCard.title3")}
          description={t("OurSimCard.description3")}
          classCard="flex-shrink-0 w-60 h-90 rounded-2xl p-6"
        />
      </div>
    </div>
  );
};

export default BannerCards;
