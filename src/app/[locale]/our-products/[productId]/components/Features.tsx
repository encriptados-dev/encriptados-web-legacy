import React from "react";
import Image from "next/image";
import { useProductById } from "../context/ProductByIdContext";

const Features = () => {
  const { currentProduct } = useProductById();

  const features = currentProduct?.features;
  return (
    <div className="bg-[#F3F8FA] py-16 px-4 md:px-6 lg:px-8 rounded-2xl">
      <div className="w-9/12 mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Características principales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#101010] rounded-lg shadow-sm overflow-hidden mb-2 p-4">
                {/* Contenedor de la imagen con padding */}
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={feature.image ? feature.image : ""}
                    alt={feature.title}
                    width={400}
                    height={400}
                    quality={100}
                    className="object-contain" // Para asegurarse que la imagen se ajusta bien
                  />
                </div>
              </div>
              <div className="p-4">
                {/* Texto separado del contenedor de la imagen */}
                <h3 className="font-semibold text-black mb-2 text-lg md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-black md:text-base">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
