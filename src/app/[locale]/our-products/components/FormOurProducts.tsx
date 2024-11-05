"use client";
import Image from "next/image";
import { useState } from "react";
import BannerOur from "/public/images/our-products/banner-our.png";
import { useFormContext } from "react-hook-form";
const FormOurProducts: React.FC = () => {
  const { setValue, register, watch, reset } = useFormContext();

  return (
    <div className="relative min-h-screen w-full bg-[#000] text-white overflow-hidden py-8">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight max-w-[400px] m-auto">
            Recibe noticias de productos en tu email
          </h1>
          <p className="text-lg text-gray-400">
            Registra tu email para recibir nuestro newsletter
          </p>

          <div className="max-w-[360px] mx-auto">
            <input
              {...register("mail")}
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full h-12 pl-6 pr-32 rounded-full bg-white border-0 text-black text-sm"
              required
            />
            <button
              type="submit"
              className="absolute right-0 h-12 rounded-full bg-[#35CDFB] hover:bg-[#2eb0d8]/90 text-[#085D77] px-6 font-semibold"
            >
              Suscribirme
            </button>
            <button onClick={() => reset()}>Resetear formulario</button>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] w-full">
            <Image
              src={BannerOur}
              alt="Interface preview"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-black" />
      <div className="absolute bottom-10 left-40 w-[700px] h-[500px] bg-[#01FFC2]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-40 w-[700px] h-[500px] bg-[#10B4E7]/20 rounded-full blur-3xl" />
    </div>
  );
};

export default FormOurProducts;
