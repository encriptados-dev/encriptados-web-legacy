import ListOfCards from "@/shared/components/ListOfCards/ListOfCards";
import React from "react";

import ConectionSvg from "../svgs/ConectionSvg";
import HighPriceSvg from "../svgs/HighPriceSvg";
import ConnectInstanlySvg from "../svgs/ConectInstanlySvg";
import WorldSvg from "../svgs/WorldSvg";
import TotalAnonimateSvg from "../svgs/TotalAnonimateSvg";
import UnlimitedDataSvg from "../svgs/UnlimitedDataSvg";

export const BenefitsForYou = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-base text-center pt-14 font-bold md:text-3xl xl:text-4xl mb-10">
        Todos estos beneficios para ti
      </h1>

      <div className="w-7/12">
        <ListOfCards
          bgIconCard="#E6F4F9"
          centered
          columns={3}
          items={[
            {
              title: "Conexiones 5G LTE",
              description:
                "Conéctate a redes móviles de alta velocidad como 5G y LTE, asegurando una conexión rápida y eficiente.",
              icon: <ConectionSvg width={50} height={50} />,
            },
            {
              title: "Evita altos costos de roaming",
              description:
                "Evita el alto gasto de servicios de itinerancia y lleva el control de tus datos",
              icon: <HighPriceSvg height={50} width={50} />,
            },
            {
              title: "Conéctate al instante",
              description:
                "Elige tu región, selecciona el plan que más se ajuste a tus necesidades y conéctate al instante",
              icon: <ConnectInstanlySvg />,
            },
            {
              title: "Alcance Global",
              description:
                "Comunícate sin complicaciones y de forma anónima en más de 200 países con facilidad de conexión y economía",
              icon: <WorldSvg width={50} height={50} />,
            },
            {
              title: "Total anonimato",
              description:
                "Comunícate con total anonimato desde 200 países en todo el mundo",
              icon: <TotalAnonimateSvg width={50} height={50} />,
            },
            {
              title: "Datos ilimitados",
              description:
                "Encuentra planes imilitados para que las gigas no sean un problema. Mantente conectado",
              icon: <UnlimitedDataSvg height={50} width={50} />,
            },
          ]}
        />
      </div>
    </div>
  );
};
