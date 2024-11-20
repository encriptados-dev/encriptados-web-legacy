import React from "react";
import Image from "next/image";

const Product2 = "/images/our-products/silent-2.png";

const features = [
  {
    title: "Mensajes con autodestrucción",
    description:
      "Los mensajes se eliminan de los dispositivos después de un tiempo de recepción después de un «tiempo de grabación». Te puedes elegir este tiempo. De un minuto a 90 días.",
    image: Product2,
  },
  {
    title: "Notas de voz encriptadas",
    description:
      "Notas de voz con la capacidad de grabar y procesar una voz alternativa, segura al envío de voz.",
    image: Product2,
  },
  {
    title: "Mensajes seguros",
    description:
      "El cifrado asegura que solo el dispositivo receptor pueda interpretar las comunicaciones desde el momento de envío. El remitente puede verificar si el mensaje fue recibido y leído.",
    image: Product2,
  },
  {
    title: "Archivos y documentos",
    description:
      "Uso compartido de archivos cifrados. Mensajes de texto cifrados. Envío de archivos y mensajes a grupos de usuarios sin problemas.",
    image: Product2,
  },
];

const Features = () => {
  return (
    <div className="bg-[#F3F8FA] py-16 px-4 md:px-6 lg:px-8 rounded-2xl">
      <div className="w-9/12 mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Características principales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#101010] rounded-lg shadow-sm overflow-hidden mb-2">
                {/* Añadido un margen inferior */}
                <div className="relative aspect-square w-full h-0 pb-[100%]">
                  {/* Aspect ratio para imágenes cuadradas */}
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill" // Cambiar a 'fill' para que se ajuste al contenedor
                    objectFit="cover" // Mantener proporciones de imagen
                    className="w-full h-full p-4" // Asegura que ocupe todo el espacio del contenedor
                  />
                </div>
              </div>
              <div className="p-4">
                {/* Texto separado del contenedor de la imagen */}
                <h3 className="font-semibold text-black mb-2 text-lg md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-black md:text-base">
                  {feature.description}
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
