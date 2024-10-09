import React, { ReactNode } from "react";

interface Card {
  title: string;
  description: string;
  icon: ReactNode;
  centered?: boolean; // Prop opcional para centrar verticalmente
  bgIconCard?: string; // Prop opcional para el color de fondo del icono
}

const Card: React.FC<Card> = ({
  title,
  description,
  icon,
  centered = false, // Valor predeterminado es false
  bgIconCard, // Nueva prop bgIconCard
}) => {
  return (
    <div
      className={`border rounded-2xl p-5 bg-white flex ${
        centered
          ? "flex-col items-center justify-center"
          : "flex-col items-start"
      }`}
    >
      <div
        className={`px-3 inline-block p-2 rounded-lg`}
        style={{
          background: bgIconCard
            ? bgIconCard // Si se pasa bgIconCard, usar el color proporcionado
            : "linear-gradient(to bottom, rgba(8,186,240,1), rgba(28,210,165,1))", // Gradiente predeterminado
        }}
      >
        {icon}
      </div>
      <h2 className={`text-lg font-bold mt-2 ${centered ? "text-center" : ""}`}>
        {title}
      </h2>
      <p
        className={`text-gray-600 text-sm mt-1 ${
          centered ? "text-center" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
