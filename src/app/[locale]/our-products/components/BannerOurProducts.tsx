import Image from "next/image";
import React from "react";

const BannerOurProducts = () => {
  const TwoCellphones = "/images/our-products/two-cellphones.png";
  return (
    <div className="bg-our-products-gradient flex flex-col md:flex-row justify-around items-center overflow-hidden p-6">
      <div className="w-full md:w-4/12 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl">
          Administra múltiples SIMs con nuestra{" "}
          <span className="font-bold">App Encriptados</span>
        </h1>
      </div>

      <section className="relative flex justify-center w-full md:w-auto">
        <div className="absolute bg-cyan-gradient-light rounded-3xl w-[300px] h-[200px] md:w-[465px] md:h-[300px] mt-12 md:mt-24 md:ml-[-30px]"></div>
        <Image
          width={400}
          height={400}
          className="translate-y-6 md:translate-y-11 z-10"
          src={TwoCellphones}
          alt="Two cellphones"
        />
      </section>
    </div>
  );
};

export default BannerOurProducts;
