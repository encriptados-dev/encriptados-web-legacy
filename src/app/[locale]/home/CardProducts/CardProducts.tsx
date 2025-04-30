"use client";
import SimMinutosDatos from "../../../../../public/images/our-products/sim-minutos-datos.png";
import EsimMinutosDatos from "../../../../../public/images/our-products/esim-minutos-datos.png";
import CardSimEsim from "./CardSimEsim";
import { useTranslations } from "next-intl";

const CardProducts: React.FC = () => {
  const t = useTranslations("simCardDetails")
  return (
    <div className="mt-5 mb-12 flex flex-col md:flex-row gap-x-4 gap-0 justify-center gap-y-4">
      <CardSimEsim
        title={t("title")}
        description={t("description")}
        imageSrc={SimMinutosDatos.src}
        altText="Sim Card"
        background="bg-custom-gradient-our-products-black" // Fondo personalizado
        titleColor="text-white"
        descriptionColor="text-white"
        showMoreInfo={true}
        buyText={t("buyText")}
        moreInfoText={t("moreInfoText")}
        buyUrl="/comprar"
        moreInfoUrl="/mas-informacion"
        onBuyClick={() => console.log("Comprar")}
        onMoreInfoClick={() => console.log("Más información")}
      />

      <CardSimEsim
        title={t("title2")}
        description={t("description2")}
        imageSrc={EsimMinutosDatos.src}
        altText="eSim"
        background="bg-custom-gradient-our-sim-blue" // Fondo personalizado
        titleColor="text-black"
        descriptionColor="text-black"
        showMoreInfo={false}
        buyText={t("seeMoreText")}
        moreInfoText={t("moreInfoText")}
        buyUrl="/comprar"
        moreInfoUrl="/mas-informacion"
        onBuyClick={() => console.log("Comprar")}
        onMoreInfoClick={() => console.log()}
      />
    </div>
  );
};

export default CardProducts;
