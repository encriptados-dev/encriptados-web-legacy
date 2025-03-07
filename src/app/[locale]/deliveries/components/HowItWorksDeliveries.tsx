import React from "react";
import { FaMapMarkerAlt, FaTruck, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Selecciona tu ubicación",
    description: "Encuentra distribuidores cercanos con nuestro mapa interactivo.",
    icon: <FaMapMarkerAlt className="text-blue-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Elige un distribuidor",
    description: "Selecciona la mejor opción para recibir tu pedido de forma rápida.",
    icon: <FaTruck className="text-blue-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Recibe tu pedido",
    description: "Nuestro servicio garantiza entregas seguras y eficientes.",
    icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
  },
];

const HowItWorksDeliveries = () => {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">¿Cómo Funciona la Entrega?</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <div key={step.id} className="w-64 p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksDeliveries;
