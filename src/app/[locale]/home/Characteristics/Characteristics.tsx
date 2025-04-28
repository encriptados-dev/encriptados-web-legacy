import React from "react";

const steps = [
  {
    id: 1,
    title: "Chat",
    description:
      "Puedes mantener seguras las comunicaciones profesionales e incorporar aplicaciones estándar para hablar con tu familia.",
    image: "/images/new/mobile1.png",
  },
  {
    id: 2,
    title: "Chat",
    description:
      "Control absoluto de nuevas tecnologías. La tecnología a tu servicio y no al revés, para obtener el mayor control en protección y privacidad.",
    image: "/images/new/mobile1.png",
  },
  {
    id: 3,
    title: "Protección",
    description:
      "Habla por teléfono con total tranquilidad, guarda y custodia la información confidencial y las bases de datos con total confianza.",
    image: "/images/new/mobile1.png",
  },
  {
    id: 4,
    title: "ChatMail",
    description:
      "Es una solución patentada que bloquea cualquier intrusión y cualquier intercambio de información no autorizado.",
    image: "/images/new/mobile1.png",
  },
];

const Characteristics = () => {
  return (
    <>
      <h2 className="text-black text-2xl font-bold whitespace-nowrap my-4 pb-4 text-center lg:text-left">
        Características principales
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Imagen */}
            <div className="bg-white rounded-[14px] w-full h-[289px] p-4">
              <img src={step.image} alt={step.title} className="mx-auto" />
            </div>

            {/* Texto */}
            <div className="mt-2">
              <h3 className="text-lg text-left font-semibold mb-2 mt-5 text-[#101010]">
                {step.title}
              </h3>
              <p className="text-[#101010] text-sm font-light text-justify">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characteristics;
