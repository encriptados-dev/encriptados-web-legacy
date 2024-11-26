import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

const BannerOurProducts = () => {
  const BannerBackground = "/images/home/banner-home.jpg";
  const t = useTranslations("OurProductsPage.banner");

  return (
    <div className="relative h-[500px] md:h-[500px] xl:h-[530px] 2xl:h-[650px] w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={BannerBackground}
        className="bg-[#060606]"
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-white space-y-6 max-w-2xl">
          <h1 className="text-xl sm:text-4xl md:text-5xl  leading-tight">
            <span>Conéctate en todo el</span> <br></br> mundo con{" "}
            <span className="text-[#7CD0F9] font-extrabold">
              total seguridad<br></br>
            </span>{" "}
            <span className="font-extrabold">en tus comunicaciones</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"></h2>

          <p className="text-base sm:text-lg md:text-xl">
            Protégete de los ciber-delincuentes y mantén
            <span className="block">tu información personal segura</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#7CD0F9] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#6bb8e0] transition-colors">
              Comprar eSIM
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white/10 transition-colors">
              Apps Encriptados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOurProducts;
