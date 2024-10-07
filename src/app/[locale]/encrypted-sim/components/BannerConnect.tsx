import React from "react";
import Image from "next/image";
import MenAndWomenImage from "../../../../../public/images/encryptedsimpage/menandwomen.png";

const BannerConnect = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  bg-white justify-between px-10 py-6 shadow-lg rounded-3xl">
      <div className="w-full lg:w-6/12 items-center flex flex-col justify-center">
        <h1 className="text-[#333333] font-bold text-3xl lg:text-4xl text-center lg:text-left">
          <span className="text-[#10B4E7] font-bold">
            Conéctate en todo el mundo
          </span>{" "}
          con total seguridad en tus comunicaciones
        </h1>
        <p className="text-[#333333] mt-4 text-base text-center lg:text-left">
          Adquiere tu SIM/eSIM con datos móviles y disfruta de total anonimato
          en llamadas, filtros, cambios IMSI y más
        </p>
      </div>
      <div className="w-full lg:w-auto h-[250px] lg:h-[350px] min-w-[250px] lg:min-w-[350px] mt-6 lg:mt-0 relative rounded-3xl overflow-hidden">
        <Image
          quality={100}
          title="Image"
          src={MenAndWomenImage}
          alt="Image"
          loading="eager"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BannerConnect;
