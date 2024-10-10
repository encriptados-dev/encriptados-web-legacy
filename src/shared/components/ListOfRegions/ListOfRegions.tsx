import React from "react";
import CardOfRegion from "./CardOfRegion";
import AfricaSvg from "./svgs/AfricaSvg";
import AsiaSvg from "./svgs/AsiaSvg";
import CaribeanIslandSvg from "./svgs/CaribeanIslandSvg";
import EuropeSvg from "./svgs/EuropeSvg";
import GlobalSvg from "./svgs/GlobalSvg";
import LatinAmericSvg from "./svgs/LatinAmericSvg";
import MidOrientAmericSvg from "./svgs/MidOrientAmericSvg";
import NorthAmericSvg from "./svgs/NorthAmericSvg";

const ListOfRegions = () => {
  const regions = [
    { name: "Global", icon: <GlobalSvg height={35} width={35} /> },
    { name: "Europa", icon: <EuropeSvg height={35} width={35} /> },
    { name: "Asia", icon: <AsiaSvg height={35} width={35} /> },
    {
      name: "América del Norte",
      icon: <NorthAmericSvg height={35} width={35} />,
    },
    {
      name: "Oriente Medio y el norte de África",
      icon: <MidOrientAmericSvg height={35} width={35} />,
    },
    { name: "Latinoamérica", icon: <LatinAmericSvg height={35} width={35} /> },
    { name: "África", icon: <AfricaSvg height={35} width={35} /> },
    {
      name: "Islas del Caribe",
      icon: <CaribeanIslandSvg height={35} width={35} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6  w-full">
      {/* Mapea las regiones junto con los íconos */}
      {regions.map((region, index) => (
        <CardOfRegion key={index} region={region.name} icon={region.icon} />
      ))}
    </div>
  );
};

export default ListOfRegions;
