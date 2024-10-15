import React from "react";
import Image from "next/image";
import XSvg from "../svg/XSvg";
import StarSvg from "../svg/StarSvg";
import SquareOneSvg from "../svg/SquareOneSvg";
import SquareTwoSvg from "../svg/SquareTwoSvg";

const InfoWithImages = () => {
  const ManOne = "/images/login/manone.png";
  const ManTwo = "/images/login/mantwo.png";

  return (
    <div className="w-full max-w-[500px] flex-col px-4 md:px-0">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-0">
        Genera una cuenta aleatoria{" "}
        <span className="text-[#35CDFB]">con un código único de acceso</span>{" "}
      </h1>

      <h1 className="text-white mt-4 text-lg md:text-2xl font-light">
        Gestiona todo sin involucrar tus datos personales.
      </h1>

      <div className="flex gap-x-4 mt-7 relative">
        {/* Contenedor para la primera imagen y su icono */}
        <div className="relative flex flex-col">
          <div className="min-w-[150px] h-[150px] md:min-w-[200px] md:h-[200px] relative rounded-3xl overflow-hidden z-10">
            <Image
              quality={100}
              title="Image"
              src={ManOne}
              alt="Image"
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="z-0 -translate-y-3 -translate-x-3 md:-translate-y-5 md:-translate-x-5">
            <XSvg />
          </div>
        </div>

        {/* Contenedor para la segunda imagen y sus iconos */}
        <div className="absolute translate-x-28 -translate-y-9 md:translate-x-44 md:-translate-y-11">
          <StarSvg />
        </div>

        <div className="min-w-[150px] h-[150px] md:min-w-[200px] md:h-[200px] relative rounded-3xl overflow-hidden mt-14 md:mt-20 z-1">
          <Image
            quality={100}
            title="Image"
            src={ManTwo}
            alt="Image"
            loading="eager"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="-translate-x-6 md:-translate-x-9">
          <SquareOneSvg />
        </div>
      </div>

      <div className="translate-x-24 -translate-y-10 md:translate-x-32 md:-translate-y-14">
        <SquareTwoSvg />
      </div>
    </div>
  );
};

export default InfoWithImages;
